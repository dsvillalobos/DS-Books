//JavaScript

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("Static").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/CSS/styles.css",
                "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
                "/Images/Icons/Icon.svg",
                "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css",
                "/Images/Icons/Icon-192.png",
                "/manifest.json",
                "/Images/Category-IMG/Adventure.png",
                "/Images/Category-IMG/Fiction.png",
                "/Images/Category-IMG/Romance.png",
                "/Images/Category-IMG/Thriller.png",
                "/JavaScript/Templates.js",
                "/JavaScript/Sidenav.js",
                "/JavaScript/SW-Register.js",
                "/About.html",
                "/CSS/About.css",
                "/Offline.html",
                "/CSS/Offline.css",
                "/JavaScript/Offline.js"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        }).catch(() => caches.match("/Offline.html"))
    );
});
