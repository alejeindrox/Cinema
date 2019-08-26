importScripts("/Cinema/precache-manifest.c7bbc3bf13606a35489b980eb12f07dd.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Preload App
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

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

