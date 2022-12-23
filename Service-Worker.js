//JavaScript

//DS Books Version 0.6.8

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("Static").then((cache) => {
      return cache.addAll([
        //Cache the Index Page
        "/",
        "/index.html",
        "/CSS/styles.css",
        "/CSS/Book-Description.css",
        "/Images/Icons/Icon.svg",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css",
        "/Images/Icons/Icon-192.png",
        "/manifest.json",
        "/JavaScript/Templates.js",
        "/JavaScript/Sidenav.js",
        "/JavaScript/SW-Register.js",
        "/JavaScript/Index-Books.js",

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
        "/Images/Splash-Screen/iPhone-6-7-8.png",

        //Category JS - All Categories
        "/JavaScript/Category/Adventure.js",
        "/JavaScript/Category/Fiction.js",
        "/JavaScript/Category/Romance.js",
        "/JavaScript/Category/Thriller.js",
        "/JavaScript/Category/In-Spanish.js",
        "/JavaScript/Category/Kids.js",
        "/JavaScript/Category/Tech.js",

        //Categories' Covers
        "/Images/Category-IMG/Adventure.webp",
        "/Images/Category-IMG/Fiction.webp",
        "/Images/Category-IMG/Romance.webp",
        "/Images/Category-IMG/Thriller.webp",
        "/Images/Category-IMG/In Spanish.webp",
        "/Images/Category-IMG/Kids.webp",
        "/Images/Category-IMG/Tech.webp",

        //Cache All The Book Covers

        //Adventure
        "/Book-Cover/Adventure/Treasure-Island-Book-Cover.webp",
        "/Book-Cover/Adventure/20000-Leagues-Under-The-Sea-Book-Cover.webp",
        "/Book-Cover/Adventure/The-War-of-the-Worlds-Book-Cover.webp",
        "/Book-Cover/Adventure/Around-the-World-in-Eighty-Days-Book-Cover.webp",
        "/Book-Cover/Adventure/The-Alchemist-Book-Cover.webp",
        "/Book-Cover/Adventure/The-Martian-Book-Cover.webp",

        //Fiction
        "/Book-Cover/Fiction/1984-Book-Cover.webp",
        "/Book-Cover/Fiction/The-Invisible-Man-Book-Cover.webp",
        "/Book-Cover/Fiction/The-Book-Thief-Book-Cover.webp",
        "/Book-Cover/Fiction/Fahrenheit-451-Book-Cover.webp",
        "/Book-Cover/Fiction/The-Martian-Book-Cover.webp",
        "/Book-Cover/Fiction/Pride-and-Prejudice-Book-Cover.webp",

        //Romance
        "/Book-Cover/Romance/The-Phantom-of-the-Opera-Book-Cover.webp",
        "/Book-Cover/Romance/Book-Lovers-Book-Cover.webp",
        "/Book-Cover/Romance/Pride-and-Prejudice-Book-Cover.webp",
        "/Book-Cover/Romance/Jane-Eyre-Book-Cover.webp",
        "/Book-Cover/Romance/Emma-Book-Cover.webp",
        "/Book-Cover/Romance/The-Fault-in-our-Stars-Book-Cover.webp",

        //Thriller
        "/Book-Cover/Thriller/11.22.63-Book-Cover.webp",
        "/Book-Cover/Thriller/Crime-and-Punishment-Book-Cover.webp",
        "/Book-Cover/Thriller/Dark-Matter-Book-Cover.webp",
        "/Book-Cover/Thriller/Misery-Book-Cover.webp",
        "/Book-Cover/Thriller/Strangers-on-a-Train-Book-Cover.webp",
        "/Book-Cover/Thriller/Helter-Skelter-Book-Cover.webp",

        //In Spanish
        "/Book-Cover/In Spanish/Rebelion-en-la-Granja-Book-Cover.webp",
        "/Book-Cover/In Spanish/Peter-Pan-Book-Cover.webp",
        "/Book-Cover/In Spanish/El-Gato-Negro-Book-Cover.webp",
        "/Book-Cover/In Spanish/1984-Book-Cover.webp",
        "/Book-Cover/In Spanish/La-Metamorfosis-Book-Cover.webp",
        "/Book-Cover/In Spanish/Orgullo-y-Prejuicio-Book-Cover.webp",

        //Kids
        "/Book-Cover/Kids/Peter-Pan-Book-Cover.webp",
        "/Book-Cover/Kids/Treasure-Island-Book-Cover.webp",
        "/Book-Cover/Kids/Alice-in-Wonderland-Book-Cover.webp",
        "/Book-Cover/Kids/Little-Women-Book-Cover.webp",
        "/Book-Cover/Kids/The-Gift-of-the-Magi-Book-Cover.webp",
        "/Book-Cover/Kids/The-Wonderful-Wizard-of-Oz-Book-Cover.webp",

        //Tech
        "/Book-Cover/Tech/The-Four-Book-Cover.webp",
        "/Book-Cover/Tech/Blockchain-for-Dummies-Book-Cover.webp",
        "/Book-Cover/Tech/Steve-Jobs-Book-Cover.webp",
        "/Book-Cover/Tech/Life-after-Google-Book-Cover.webp",
        "/Book-Cover/Tech/The-Soul-of-a-New-Machine-Book-Cover.webp",
        "/Book-Cover/Tech/Hello-World-Book-Cover.webp",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
