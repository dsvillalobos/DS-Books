//JavaScript

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("Static").then(cache => {
            return cache.addAll([
                //Cache the Index Page
                "/",
                "/index.html",
                "/CSS/styles.css",
                "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
                "/Images/Icons/Icon.svg",
                "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css",
                "/Images/Icons/Icon-192.png",
                "/manifest.json",
                "/Images/Category-IMG/Adventure.webp",
                "/Images/Category-IMG/Fiction.webp",
                "/Images/Category-IMG/Romance.webp",
                "/Images/Category-IMG/Thriller.webp",
                "/JavaScript/Templates.js",
                "/JavaScript/Sidenav.js",
                "/JavaScript/SW-Register.js",

                //iOS Splash Screens
                "/Images/Splash-Screen/iPad-Pro-12.9.png",
                "/Images/Splash-Screen/iPad-Pro-11.png",
                "/Images/Splash-Screen/iPad-Air-10.5.png",
                "/Images/Splash-Screen/iPad-10.2.png",
                "/Images/Splash-Screen/iPad-Pro-9.7.png",
                "/Images/Splash-Screen/iPhone-13-Pro-Max.png",
                "/Images/Splash-Screen/iPhone-13-Pro.png",
                "/Images/Splash-Screen/iPhone-13-Mini.png",
                "/Images/Splash-Screen/iPhone-11-Pro-Max.png",
                "/Images/Splash-Screen/iPhone-11.png",
                "/Images/Splash-Screen/iPhone-6-7-8-Plus.png",
                "/Images/Splash-Screen/iPhone-6-7-8.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
