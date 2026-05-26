const CACHE_VERSION = 'biologie-h11-v1';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './config.json',
  './manifest.json',
  './data/vragen.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/vrouwelijke_geslachtsorganen_vooraanzicht.png',
  './images/hormonen_vrouw.png',
  './images/menstruatiecyclus.png',
  './images/eicel_ontwikkeling.png',
  './images/hormonen_diagram.png',
  './images/vrouwelijke_geslachtsorganen_zijaanzicht.png',
  './images/mannelijke_geslachtsorganen_vooraanzicht.png',
  './images/zaadcel_bouw.png',
  './images/geslachtscellen.png',
  './images/mannelijke_geslachtsorganen_zijaanzicht.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
