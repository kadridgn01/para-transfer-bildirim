const CACHE_NAME = 'kiyi-bank-bildirim-v1';
// Önbelleğe alınacak tüm dosyaların listesi
const urlsToCache = [
  './',
  './bildirim-v2.html',
  './assets/arkaplan.jpg',
  './assets/kiyi-bank-logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache açıldı');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
