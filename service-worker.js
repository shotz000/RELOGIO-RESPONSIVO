self.addEventListener("install", event => {
    event.waituntil(
        caches.open("Relógio-Responsivo-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "coffe192.png",
                "coffe512.png",
                "IMG/MANHA.jpg",
                "IMG/TARDE.jpg",
                "IMG/NOITE.jpg",
                "IMG/MADRUGA.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response |  fetch(event.request))
    );
});