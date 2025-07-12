const CACHE_NAME = "pizza-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./img/pizza.png",
  "./img/pizza-icon-192.png",
  "./img/pizza-icon-512.png"
];

// Instalando e armazenando no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Limpando caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Resposta a requisições
self.addEventListener("fetch", (event) => {
  // Apenas GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se existir no cache, retorna
      if (cachedResponse) return cachedResponse;

      // Senão, busca na rede e salva no cache
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) =>
            cache.put(event.request, responseToCache)
          );

          return response;
        })
        .catch(() => {
          // fallback opcional: você pode retornar uma página offline aqui
          // return caches.match('./offline.html');
        });
    })
  );
});
