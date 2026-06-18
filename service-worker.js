const VERSION = 'v3';
const SHELL_CACHE = `shell-${VERSION}`;
const MUSIC_CACHE = `music-${VERSION}`;
const COVERS_CACHE = `covers-${VERSION}`;

const toURL = (url) => new URL(url, self.registration.scope).toString();

const ASSETS = [
    './',
    'index.html',
    'style.css',
    'script.js',
    'manifest.json'
].map(toURL);

async function cacheShell() {
    const cache = await caches.open(SHELL_CACHE);
    await Promise.allSettled(
        ASSETS.map(async (url) => {
            const response = await fetch(url, { cache: 'reload' });
            if (response.ok) {
                await cache.put(url, response.clone());
            }
        })
    );
}

async function downloadTrack(url) {
    const absoluteUrl = toURL(url);
    const cache = await caches.open(MUSIC_CACHE);
    const response = await fetch(absoluteUrl, { cache: 'reload' });

    if (!response.ok) {
        throw new Error(`Track download failed: ${response.status}`);
    }

    await cache.put(absoluteUrl, response.clone());
    return absoluteUrl;
}

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(cacheShell());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames
                .filter(name => ![SHELL_CACHE, MUSIC_CACHE, COVERS_CACHE].includes(name))
                .map(name => caches.delete(name))
        );

        await self.clients.claim();
    })());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (request.headers.has('range')) {
        event.respondWith(handleRangeRequest(request));
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                return await fetch(request);
            } catch {
                return await caches.match(toURL('index.html')) || new Response('Offline', { status: 503 });
            }
        })());
        return;
    }

    if (url.pathname.includes('/music/')) {
        event.respondWith((async () => {
            const cached = await caches.match(request);
            if (cached) return cached;

            try {
                return await fetch(request);
            } catch {
                return new Response('Audio file not available offline', { status: 503 });
            }
        })());
        return;
    }

    const isExternalImage = request.destination === 'image' && url.origin !== self.location.origin;
    if (isExternalImage) {
        event.respondWith((async () => {
            const cache = await caches.open(COVERS_CACHE);
            const cached = await cache.match(request);
            if (cached) return cached;

            try {
                const response = await fetch(request);
                if (response.ok) {
                    cache.put(request, response.clone());
                }
                return response;
            } catch {
                return new Response('', { status: 404 });
            }
        })());
        return;
    }

    event.respondWith((async () => {
        try {
            const response = await fetch(request);

            if (response.ok && url.origin === self.location.origin && request.method === 'GET') {
                const cache = await caches.open(SHELL_CACHE);
                cache.put(request, response.clone());
            }

            return response;
        } catch {
            const cached = await caches.match(request);
            return cached || new Response('Offline', { status: 503 });
        }
    })());
});

async function handleRangeRequest(request) {
    const cached = await caches.match(request.url);
    if (!cached) {
        return fetch(request);
    }

    const rangeHeader = request.headers.get('range');
    const match = /bytes=(\d+)-(\d+)?/.exec(rangeHeader);

    if (!match) {
        return cached;
    }

    const start = Number(match[1]);
    const end = match[2] ? Number(match[2]) : null;
    const arrayBuffer = await cached.arrayBuffer();
    const bytes = end !== null ? arrayBuffer.slice(start, end + 1) : arrayBuffer.slice(start);

    return new Response(bytes, {
        status: 206,
        statusText: 'Partial Content',
        headers: {
            'Content-Type': cached.headers.get('Content-Type') || 'audio/mpeg',
            'Content-Range': `bytes ${start}-${end !== null ? end : arrayBuffer.byteLength - 1}/${arrayBuffer.byteLength}`,
            'Content-Length': bytes.byteLength
        }
    });
}

self.addEventListener('message', (event) => {
    const data = event.data || {};

    if (data.type === 'SKIP_WAITING') {
        self.skipWaiting();
        return;
    }

    if (data.type === 'DOWNLOAD_TRACK' && data.url) {
        event.waitUntil((async () => {
            try {
                const url = await downloadTrack(data.url);
                event.source?.postMessage({ type: 'TRACK_DOWNLOADED', url });
            } catch (error) {
                event.source?.postMessage({ type: 'TRACK_DOWNLOAD_FAILED', url: data.url, message: error.message });
            }
        })());
        return;
    }

    if (data.type === 'GET_CACHE_STATUS' && event.ports[0]) {
        event.waitUntil((async () => {
            const musicCache = await caches.open(MUSIC_CACHE);
            const cachedMusic = await musicCache.keys();
            event.ports[0].postMessage({
                cachedTracks: cachedMusic.length
            });
        })());
    }
});
