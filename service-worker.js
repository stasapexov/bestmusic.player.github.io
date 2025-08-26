// service-worker.js

// Âåðñèÿ êýøà. Îáíîâèòå å¸ ïðè èçìåíåíèè êàêèõ-ëèáî ðåñóðñîâ.
const CACHE_NAME = 'harmony-player-v1';
// Ñòàòè÷åñêèå ðåñóðñû äëÿ êýøèðîâàíèÿ
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Óñòàíîâêà Service Worker è êýøèðîâàíèå ñòàòè÷åñêèõ ðåñóðñîâ
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Óñòàíîâêà');
    // Ìåòîä waitUntil ãàðàíòèðóåò, ÷òî Service Worker íå óñòàíîâèòñÿ, ïîêà íå çàâåðøèòñÿ êýøèðîâàíèå
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Êýøèðîâàíèå ñòàòè÷åñêèõ ðåñóðñîâ');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting()) // Ïðèíóäèòåëüíàÿ àêòèâàöèÿ íîâîãî SW
    );
});
// service-worker.js

// Àêòèâàöèÿ Service Worker
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Àêòèâàöèÿ');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Óäàëåíèå ñòàðîãî êýøà:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Ïðèíÿòèå êîíòðîëÿ íàä âñåìè îòêðûòûìè âêëàäêàìè
    );
});
// service-worker.js

// Îáðàáîòêà çàïðîñîâ íà ïîëó÷åíèå ðåñóðñîâ
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Ñòðàòåãèÿ Cache First äëÿ ìóçûêàëüíûõ ôàéëîâ
    if (url.pathname.startsWith('/music/')) {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    // Åñëè ôàéë åñòü â êýøå, âåðíóòü åãî.
                    if (cachedResponse) {
                        console.log(`[Service Worker] Âîçâðàò èç êýøà: ${url.pathname}`);
                        return cachedResponse;
                    }
                    // Åñëè íåò â êýøå, ñäåëàòü çàïðîñ ê ñåòè, çàêýøèðîâàòü è âåðíóòü îòâåò.
                    return fetch(event.request).then((networkResponse) => {
                        // Êëîíèðóåì îòâåò, ïîòîìó ÷òî îí ìîæåò áûòü èñïîëüçîâàí òîëüêî îäèí ðàç
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                console.log(`[Service Worker] Êýøèðîâàíèå ìóçûêè: ${url.pathname}`);
                                cache.put(event.request, responseToCache);
                            });
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Ìîæíî âåðíóòü çàãëóøêó èëè Fallback-êîíòåíò, åñëè è ñåòü, è êýø íå äîñòóïíû
                    // Íàïðèìåð, âåðíóòü placeholder äëÿ îáëîæêè òðåêà
                    return new Response('Îôôëàéí-ðåæèì: Ìóçûêà âðåìåííî íåäîñòóïíà');
                })
        );
        return;
    }

    // Äëÿ âñåõ îñòàëüíûõ çàïðîñîâ (ñòàòèêè) èñïîëüçóåì ñòðàòåãèþ Stale-While-Revalidate
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Êëîíèðóåì îòâåò äëÿ êýøèðîâàíèÿ
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                return networkResponse;
            });
            // Âåðíóòü êýøèðîâàííûé îòâåò íåìåäëåííî, çàòåì îáíîâèòü êýø èç ñåòè
            return cachedResponse || fetchPromise;
        })
    );

});
