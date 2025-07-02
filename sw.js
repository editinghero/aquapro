
const CACHE_NAME = 'aquapro-v1';
const urlsToCache = [
  '/aquapro/',
  '/aquapro/static/js/bundle.js',
  '/aquapro/static/css/main.css',
  '/aquapro/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
