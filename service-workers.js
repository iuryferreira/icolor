var cacheName = 'cache_do_icolor';
var filesToCache = [];

self.addEventListener('install', function(e) {
  console.log('ServiceWorkers foi instalado!');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('ServiceWorkers está adicionando os arquivos ao cache!');
      return cache.addAll(filesToCache);
    })
  );
});



self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        console.log('ServiceWorkers está removendo antigos cache', key);
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});


var filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-workers.js',
  '/iconeadada.png',
  '/favicon.ico',
  '/js/icolor.js',
  '/js/jquery.js',
  '/js/jqueryColor.js',
  '/js/materialize.js',
  '/css/materialize.css'

];


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});