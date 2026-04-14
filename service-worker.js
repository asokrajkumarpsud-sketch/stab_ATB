const CACHE_NAME = "stabilite-atb-v3";

const urlsToCache = [
"/",
"/index.html",
"/data.js",
"/manifest.json",
"/icon-192.png",
"/icon-512.png"
];

self.addEventListener("install", event => {
self.skipWaiting();
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("activate", event => {
event.waitUntil(
caches.keys().then(keys => {
return Promise.all(
keys
.filter(k => k !== CACHE_NAME)
.map(k => caches.delete(k))
);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});