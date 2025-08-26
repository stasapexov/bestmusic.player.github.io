// service-worker.js

// Версия кэша. Обновите её при изменении каких-либо ресурсов.
const CACHE_NAME = 'harmony-player-v1';
// Статические ресурсы для кэширования
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js', // Если ваш JS в отдельном файле
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Установка Service Worker и кэширование статических ресурсов
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Установка');
    // Метод waitUntil гарантирует, что Service Worker не установится, пока не завершится кэширование
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Кэширование статических ресурсов');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting()) // Принудительная активация нового SW
    );
});
// service-worker.js

// Активация Service Worker
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Активация');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Удаление старого кэша:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Принятие контроля над всеми открытыми вкладками
    );
});
// service-worker.js

// Обработка запросов на получение ресурсов
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Стратегия Cache First для музыкальных файлов
    if (url.pathname.startsWith('/music/')) {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    // Если файл есть в кэше, вернуть его.
                    if (cachedResponse) {
                        console.log(`[Service Worker] Возврат из кэша: ${url.pathname}`);
                        return cachedResponse;
                    }
                    // Если нет в кэше, сделать запрос к сети, закэшировать и вернуть ответ.
                    return fetch(event.request).then((networkResponse) => {
                        // Клонируем ответ, потому что он может быть использован только один раз
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                console.log(`[Service Worker] Кэширование музыки: ${url.pathname}`);
                                cache.put(event.request, responseToCache);
                            });
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Можно вернуть заглушку или Fallback-контент, если и сеть, и кэш не доступны
                    // Например, вернуть placeholder для обложки трека
                    return new Response('Оффлайн-режим: Музыка временно недоступна');
                })
        );
        return;
    }

    // Для всех остальных запросов (статики) используем стратегию Stale-While-Revalidate
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Клонируем ответ для кэширования
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            });
            // Вернуть кэшированный ответ немедленно, затем обновить кэш из сети
            return cachedResponse || fetchPromise;
        })
    );
});