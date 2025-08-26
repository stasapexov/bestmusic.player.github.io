// service-worker.js

// Версия кэша. Обновите её при изменении каких-либо ресурсов.
const CACHE_NAME = 'harmony-player-v1';

// Статические ресурсы для кэширования
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    // Убрали иконки, так как их нет
];

// Установка Service Worker и кэширование статических ресурсов
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Установка');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Кэширование статических ресурсов');
                return cache.addAll(STATIC_ASSETS).catch(error => {
                    console.log('[Service Worker] Ошибка кэширования:', error);
                });
            })
            .then(() => self.skipWaiting())
    );
});

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
        }).then(() => self.clients.claim())
    );
});

// Обработка запросов на получение ресурсов
self.addEventListener('fetch', (event) => {
    // Пропускаем не-GET запросы
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);

    // Стратегия Cache First для музыкальных файлов
    if (url.pathname.startsWith('/music/')) {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    // Если файл есть в кэше, вернуть его
                    if (cachedResponse) {
                        console.log('[Service Worker] Возврат из кэша:', url.pathname);
                        return cachedResponse;
                    }
                    
                    // Если нет в кэше, сделать запрос к сети
                    return fetch(event.request)
                        .then((networkResponse) => {
                            // Проверяем валидность ответа
                            if (!networkResponse || networkResponse.status !== 200) {
                                return networkResponse;
                            }
                            
                            // Клонируем ответ для кэширования
                            const responseToCache = networkResponse.clone();
                            
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    console.log('[Service Worker] Кэширование музыки:', url.pathname);
                                    cache.put(event.request, responseToCache);
                                })
                                .catch(error => {
                                    console.log('[Service Worker] Ошибка кэширования музыки:', error);
                                });
                                
                            return networkResponse;
                        })
                        .catch(() => {
                            // Fallback для оффлайн-режима
                            return new Response('Оффлайн-режим: Музыка временно недоступна', {
                                status: 408,
                                headers: { 'Content-Type': 'text/plain' }
                            });
                        });
                })
        );
        return;
    }

    // Для всех остальных запросов используем стратегию Stale-While-Revalidate
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Пытаемся получить свежие данные из сети
                const fetchPromise = fetch(event.request)
                    .then((networkResponse) => {
                        // Проверяем валидность ответа
                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }
                        
                        // Клонируем ответ для кэширования
                        const responseClone = networkResponse.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseClone);
                            })
                            .catch(error => {
                                console.log('[Service Worker] Ошибка обновления кэша:', error);
                            });
                            
                        return networkResponse;
                    })
                    .catch(() => {
                        // Если сеть недоступна, игнорируем ошибку
                        return null;
                    });

                // Возвращаем кэшированный ответ или результат запроса
                return cachedResponse || fetchPromise;
            })
    );
});
