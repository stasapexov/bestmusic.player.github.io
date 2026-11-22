const SHELL_CACHE = 'smoker-shell-v9';
const COVER_CACHE = 'covers-v3';
const MUSIC_CACHES = ['music-v3', 'music-v2'];
const scope = new URL(self.registration.scope);
const asset = path => new URL(path, scope).href;
const musicPath = new URL('music/', scope).pathname;
const shell = [
    './', 'index.html', 'index2.html', 'style.css', 'theme.js', 'catalog.js', 'audius.js', 'script.js', 'video.js',
    'legacy.html', 'legacy-clips.html', 'legacy.css', 'legacy.js',
    'manifest.json', 'icon-192x192.png', 'icon-512x512.png', 'picture/cover-night.webp'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(SHELL_CACHE);
        await cache.addAll(shell.map(path => new Request(asset(path), { cache: 'reload' })));
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        await Promise.all(names.filter(name => name !== SHELL_CACHE && /^(?:smoker-)?shell-v\d+$/.test(name))
            .map(name => caches.delete(name)));
        await self.clients.claim();
    })());
});

function offline(message = 'Offline') {
    return new Response(message, { status: 503 });
}

async function serveShell(request) {
    const cache = await caches.open(SHELL_CACHE);
    try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone()).catch(() => {});
        return response;
    } catch {
        return await cache.match(request, { ignoreSearch: true }) || offline();
    }
}

async function serveExternalAsset(request) {
    const cache = await caches.open(COVER_CACHE);
    const saved = await cache.match(request);
    if (saved) return saved;
    try {
        const response = await fetch(request);
        if (response.ok || response.type === 'opaque') await cache.put(request, response.clone()).catch(() => {});
        return response;
    } catch {
        return offline();
    }
}

async function findCachedAudio(url) {
    const filename = decodeURIComponent(new URL(url).pathname.slice(musicPath.length));
    const aliases = new Set([url]);
    for (const name of [filename, filename.normalize('NFC'), filename.normalize('NFD')]) {
        aliases.add(asset('music/' + encodeURIComponent(name)));
        aliases.add(asset('music/' + name.replace(/[%?#]/g, encodeURIComponent)));
    }
    for (const name of MUSIC_CACHES) {
        for (const alias of aliases) {
            const saved = await caches.match(alias, { cacheName: name });
            if (saved) return saved;
        }
    }
    return null;
}

async function serveAudio(request) {
    const saved = await findCachedAudio(request.url).catch(() => null);
    if (!saved) {
        try {
            return await fetch(request);
        } catch {
            return offline('Audio file not available offline');
        }
    }

    const header = request.headers.get('range');
    if (!header) return saved;
    const range = /^bytes=(\d*)-(\d*)$/i.exec(header);
    if (!range || (!range[1] && !range[2])) return saved;

    const file = await saved.blob();
    const size = file.size;
    const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
    const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
    if (start > end) {
        return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
    }

    const type = saved.headers.get('Content-Type') || 'audio/mpeg';
    return new Response(file.slice(start, end + 1, type), {
        status: 206,
        headers: {
            'Content-Type': type,
            'Accept-Ranges': 'bytes',
            'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
            'Content-Length': String(end + 1 - start)
        }
    });
}

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (url.origin === scope.origin) {
        if (url.pathname.startsWith(musicPath)) event.respondWith(serveAudio(request));
        else if (url.pathname.startsWith(scope.pathname)) event.respondWith(serveShell(request));
    } else if (request.destination === 'image' ||
        (url.hostname === 'cdnjs.cloudflare.com' && url.pathname.startsWith('/ajax/libs/font-awesome/'))) {
        event.respondWith(serveExternalAsset(request));
    }
});
