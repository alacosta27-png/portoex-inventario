/**
 * PORTOEX INVENTÁRIO — Service Worker (PWA)
 * Permite instalação no celular/tablet e uso offline
 */

const CACHE_NAME = 'portoex-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/css/app.css',
  '/js/firebase-config.js',
  '/js/db.js',
  '/js/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Instalação — cacheia os assets estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('[SW] Alguns assets não puderam ser cacheados:', err);
      });
    })
  );
  self.skipWaiting();
});

// Ativação — limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch — estratégia: Network First, fallback para cache
self.addEventListener('fetch', event => {
  // Ignora requisições externas (Firebase, CDNs)
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Atualiza cache com resposta fresca
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Offline: serve do cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Fallback para index.html em rotas desconhecidas
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
