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
  './images/12.3_fig1.jpeg',
  './images/12.4_fig1.jpeg',
  './images/12.4_fig5.jpeg',
  './images/12.4_fig6.jpeg',
  './images/12.1_fig2.jpeg',
  './images/12.2_fig3.jpeg',
  './images/12.0_fig1.jpeg',
  './images/12.1_fig1.jpeg',
  './images/12.4_fig2.jpeg',
  './images/12.4_fig4.jpeg',
  './images/12.5_fig4.jpeg',
  './images/12.1_fig3.jpeg',
  './images/12.2_fig2.jpeg',
  './images/12.4_fig3.jpeg',
  './images/12.1_fig4.jpeg',
  './images/12.2_fig1.jpeg',
  './images/12.4_fig7.jpeg',
  './images/12.5_fig2.jpeg',
  './images/12.5_fig3.jpeg',
  './images/12.5_fig1.jpeg',
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
