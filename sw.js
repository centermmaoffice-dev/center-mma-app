const CACHE_NAME = "center-mma-next-training-fix-2026-09-03-v1";
const SHELL = [
  "/",
  "/index.html",
  "/i18n.js",
  "/offline.html",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/center-mma-logo.png",
  "/mma-cage-bg.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, {cache:"no-store"})
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("/index.html", copy));
          return response;
        })
        .catch(async () =>
          (await caches.match("/index.html")) ||
          (await caches.match("/offline.html"))
        )
    );
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached ||
        fetch(event.request).then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
      )
    );
  }
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const id = event.notification.data?.notificationId || "";
  const target = id ? `/?notification=${encodeURIComponent(id)}` : "/";

  event.waitUntil(
    clients.matchAll({type:"window", includeUncontrolled:true}).then(list => {
      for (const client of list) {
        if ("focus" in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});
