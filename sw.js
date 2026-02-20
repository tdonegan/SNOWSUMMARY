const CACHE_NAME = 'whydaho-snow-v1';
const SHELL_URLS = [
  './',
  './index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap',
];

// Install: cache app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first for data, cache-first for app shell
self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // Always go to network for weather data and CORS proxies
  if (url.includes('wxstns.net') ||
      url.includes('allorigins') ||
      url.includes('corsproxy') ||
      url.includes('codetabs') ||
      url.includes('thingproxy')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Cache-first for everything else (app shell, libraries, fonts)
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
