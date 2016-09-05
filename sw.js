var CACHE_NAME = 'GDG Cache';
var urlsToCache = [
  '/',
  '/css/style.css',
  '/css/material.min.css',
  '/js/material.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});