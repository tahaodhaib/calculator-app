const cacheName = "calculator-app-v1";
const filesToCache = [
  "/calculator-app/",
  "/calculator-app/index.html",
  "/calculator-app/manifest.json",
  "/calculator-app/icon-192.png",
  "/calculator-app/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => { 
    return cache.addAll(filesToCache); 
  }));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((response) => { 
    return response || fetch(event.request); 
  }));
});
