const VERSION = 'test-1';

self.addEventListener('install', (e) => {
  console.log('[SW] install', VERSION);
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[SW] activate', VERSION, 'scope:', self.registration.scope);
  self.clients.claim();
});

// Ничего не перехватываем, только логируем свои запросы
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin && !e.request.headers.has('range')) {
    // Лёгкий лог, чтобы видеть, что SW живой
    // Не вызываем respondWith — поведение сети не меняем
    console.log('[SW] sees:', url.pathname);
  }
});
