/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Preload App
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

workbox.precaching.precacheAndRoute(self.__precacheManifest);

// App Shell
workbox.routing.registerNavigationRoute('/index.html')

workbox.routing.registerRoute(/^https?:\/\/www.image.tmdb.org\/t\/p\/.*/,
  workbox.strategies.staleWhileRevalidate(), 'GET')

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, 
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  }),
  'GET')

workbox.routing.registerRoute(/^https?.*/,
  workbox.strategies.networkFirst(), 'GET')
