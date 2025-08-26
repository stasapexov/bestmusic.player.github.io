// service-worker.js
const VERSION = 'v3';
const SHELL_CACHE = `shell-${VERSION}`;

const toURL = (u) => new URL(u, self.registration.scope).toString();

// Прекашим только реально существующие локальные файлы из репозитория.
// Никаких CDN и mp3 здесь.
const ASSETS = [
  './',
  'index.html',
  'style.css',
].map(toURL);

// Мягкий (soft) precache — никогда не валит установку
async function softPrecache(urls) {
  const cache = await caches.open(SHELL_CACHE);
  let ok = 0, fail = 0;

  for (const url of urls) {
    try {
      // Делаем fetch вручную, чтобы контролировать ошибки
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok && res.type !== 'opaque') {
        throw new Error(`HTTP ${res.status}`);
      }
      await cache.put(url, res.clone());
      ok++;
      console.log('[SW] cached:', url);
    } catch (e) {
      fail++;
      console.warn('[SW] skip caching:', url, e.message || e);
      // намеренно не бросаем дальше — идем дальше
    }
  }
  console.log(`[SW] precache finished: ${ok} ok, ${fail} failed`);
}

self.addEventListener('install', (event) => {
  self.skipWaiting(); // сразу активируем новую версию
  event.waitUntil(softPrecache(ASSETS)); // никогда не реджектим
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE)
          .map(k => caches.delete(k).catch(err => console.warn('[SW] delete cache fail:', k, err)))
      );
    } finally {
      await self.clients.claim();
      console.log('[SW] active, scope:', self.registration.scope);
    }
  })());
});

// Небольшой офлайн HTML на крайний случай
const offlineHTML = `<!doctype html><meta charset="utf-8">
<title>Offline</title>
<style>html,body{height:100%;margin:0;display:grid;place-items:center;font:16px/1.4 system-ui;background:#0b0b0b;color:#ddd}</style>
<div>Вы офлайн. Откройте позже или попробуйте обновить страницу.</div>`;

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 1) Не вмешиваемся в аудио и range-запросы (перемотка важна)
  if (req.headers.has('range')) return;
  if (/\.(mp3|wav|ogg|m4a)(\?|$)/i.test(new URL(req.url).pathname)) return;

  // 2) Только GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 3) Переходы по страницам: сеть сначала, при офлайне — index.html или простая заглушка
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(req);
      } catch {
        const cachedIndex = await caches.match(toURL('index.html'));
        return cachedIndex || new Response(offlineHTML, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }
    })());
    return;
  }

  // 4) Для статических ассетов своего домена — Stale-While-Revalidate
  const isSameOrigin = url.origin === location.origin;
  const isStatic = /\.(css|js|png|jpg|jpeg|svg|ico|webp|gif|html)(\?|$)/i.test(url.pathname);

  if (isSameOrigin && isStatic) {
    event.respondWith((async () => {
      const cache = await caches.open(SHELL_CACHE);
      const cached = await cache.match(req);
      const fetchAndUpdate = fetch(req)
        .then(res => {
          if (res && (res.ok || res.type === 'opaque')) {
            cache.put(req, res.clone()).catch(() => {});
          }
          return res;
        })
        .catch(() => undefined);

      // быстрый ответ из кэша, параллельно обновляем
      return cached || (await fetchAndUpdate) || new Response('Offline', { status: 503 });
    })());
    return;
  }

  // 5) Всё остальное (CDN, шрифты и т.п.) — не перехватываем особо.
  // Браузер сам разберётся; при офлайне просто не загрузится, но SW не помешает.
});

// Опционально: возможность с страницы попросить обновиться мгновенно
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
