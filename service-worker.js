// service-worker.js
const VERSION = 'v5';
const SHELL_CACHE = `shell-${VERSION}`;
const MUSIC_CACHE = `music-${VERSION}`;
const COVERS_CACHE = `covers-${VERSION}`;

const toURL = (u) => new URL(u, self.registration.scope).toString();

// Основные файлы приложения
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
].map(toURL);

// Список всех музыкальных файлов для предзагрузки
const MUSIC_FILES = [
  'music/franchise.mp3',
  'music/over.mp3',
  'music/evil jordan.mp3',
  'music/photo.mp3',
  'music/alien.mp3',
  'music/Poke it out.mp3',
  'music/fuk sumn.mp3',
  'music/location.mp3',
  'music/fomdj.mp3',
  'music/fein.mp3',
  'music/ratherlife.mp3',
  'music/wath this.mp3',
  'music/crash.mp3',
  'music/no face.mp3',
  'music/mognolia.mp3',
  'music/fell in love.mp3',
  'music/sky.mp3',
  'music/dark thought.mp3',
  'music/butterfly effect.mp3',
  'music/HIGHEST IN THE ROOM.mp3',
  'music/SICKO MODE.mp3',
  'music/24song.mp3',
  'music/watch this.mp3',
  'music/hyaena.mp3',
  'music/long time.mp3',
  'music/crank master.mp3',
  'music/telescope.mp3',
  'music/ss.mp3',
  'music/Плохая Сука.mp3',
  'music/DREAM GARDEN.mp3',
  'music/CHILL.mp3',
  'music/COK.mp3',
  'music/UFO LUV.mp3',
  'music/Cadillac.mp3',
  'music/leck.mp3',
  'music/ice.mp3',
  'music/DINERO.mp3',
  'music/show.mp3',
  'music/ARISTOCRAT.mp3',
  'music/ameli.mp3',
  'music/cristal.mp3',
  'music/cristal_.mp3',
  'music/WATAFUK.mp3',
  'music/мы пидоры.mp3',
  'music/мент.mp3',
  'music/ауф.mp3',
  'music/блядская натура.mp3',
  'music/валим.mp3',
  'music/SOULCALIBUR LUV.mp3',
  'music/Toosie slide.mp3',
  'music/Sauce!.mp3',
  'music/Внутри.mp3',
  'music/мотылек.mp3',
  'music/ночь.mp3',
  'music/на память.mp3',
  'music/не надо.mp3',
  'music/до сих пор.mp3',
  'music/drugoy.mp3'
].map(toURL);

// Прогресс загрузки для UI
let downloadProgress = {
  total: 0,
  loaded: 0
};

// Функция для отправки прогресса на страницу
function sendProgress() {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: 'DOWNLOAD_PROGRESS',
        progress: downloadProgress
      });
    });
  });
}

// Мягкое кеширование с прогрессом
async function cacheWithProgress(cacheName, urls) {
  const cache = await caches.open(cacheName);
  downloadProgress.total = urls.length;
  downloadProgress.loaded = 0;
  
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: 'no-cache' });
      if (response.ok) {
        await cache.put(url, response.clone());
        console.log('[SW] Cached:', url);
      }
    } catch (e) {
      console.warn('[SW] Failed to cache:', url, e);
    }
    downloadProgress.loaded++;
    sendProgress();
  }
}

// Установка
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  self.skipWaiting();
  
  event.waitUntil((async () => {
    // Сначала кешируем основные файлы
    await cacheWithProgress(SHELL_CACHE, ASSETS);
    
    // Затем начинаем загрузку музыки в фоне
    // Не ждем завершения, чтобы не блокировать установку
    cacheWithProgress(MUSIC_CACHE, MUSIC_FILES).catch(console.error);
  })());
});

// Активация
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Удаляем старые кеши
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter(name => ![SHELL_CACHE, MUSIC_CACHE, COVERS_CACHE].includes(name))
        .map(name => caches.delete(name))
    );
    
    await self.clients.claim();
    console.log('[SW] Activated');
    
    // Уведомляем страницу, что SW готов
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'SW_ACTIVATED' });
      });
    });
  })());
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  
  // Для Range запросов (перемотка аудио) - особая обработка
  if (req.headers.has('range')) {
    event.respondWith(handleRangeRequest(req));
    return;
  }
  
  // Навигация
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(req);
      } catch {
        const cached = await caches.match(toURL('index.html'));
        return cached || new Response('Offline', { status: 503 });
      }
    })());
    return;
  }
  
  // Музыкальные файлы
  if (url.pathname.includes('/music/')) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      
      try {
        const response = await fetch(req);
        if (response.ok) {
          const cache = await caches.open(MUSIC_CACHE);
          cache.put(req, response.clone());
        }
        return response;
      } catch {
        return new Response('Audio file not available offline', { status: 503 });
      }
    })());
    return;
  }
  
  // Обложки альбомов (внешние URL)
  const isExternalImage = !url.origin.includes('stasapexov.github.io') && 
                          (url.pathname.endsWith('.jpg') || 
                           url.pathname.endsWith('.jpeg') || 
                           url.pathname.endsWith('.png'));
  
  if (isExternalImage) {
    event.respondWith((async () => {
      const cache = await caches.open(COVERS_CACHE);
      const cached = await cache.match(req);
      if (cached) return cached;
      
      try {
        const response = await fetch(req);
        if (response.ok) {
          cache.put(req, response.clone());
        }
        return response;
      } catch {
        // Возвращаем пустой ответ при ошибке
        return new Response('', { status: 404 });
      }
    })());
    return;
  }
  
  // Остальные запросы - кеш первый
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    
    try {
      return await fetch(req);
    } catch {
      return new Response('Offline', { status: 503 });
    }
  })());
});

// Обработка Range запросов для аудио
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
  
  const pos = Number(match[1]);
  const end = match[2] ? Number(match[2]) : null;
  
  const ab = await cached.arrayBuffer();
  const bytes = end !== null ? ab.slice(pos, end + 1) : ab.slice(pos);
  
  return new Response(bytes, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cached.headers.get('Content-Type'),
      'Content-Range': `bytes ${pos}-${end !== null ? end : ab.byteLength - 1}/${ab.byteLength}`,
      'Content-Length': bytes.byteLength,
    }
  });
}

// Команды от страницы
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'DOWNLOAD_ALL_MUSIC') {
    // Принудительная загрузка всей музыки
    cacheWithProgress(MUSIC_CACHE, MUSIC_FILES);
  }
  
  if (event.data.type === 'GET_CACHE_STATUS') {
    getCacheStatus().then(status => {
      event.ports[0].postMessage(status);
    });
  }
});

// Получение статуса кеша
async function getCacheStatus() {
  const musicCache = await caches.open(MUSIC_CACHE);
  const cachedMusic = await musicCache.keys();
  
  return {
    totalTracks: MUSIC_FILES.length,
    cachedTracks: cachedMusic.length,
    isComplete: cachedMusic.length === MUSIC_FILES.length
  };
}
