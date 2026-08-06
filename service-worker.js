const CACHE_NAME = "calopes-guest-hub-v3";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",

    "./css/style.css",
    "./js/app.js",

    "./data/site.js",
    "./data/menu.js",
    "./data/restaurants.js",
    "./data/beaches.js",
    "./data/places.js",
    "./data/useful.js",
    "./data/contact.js",
    "./data/review.js",

    "./components/pageHeader.js",
    "./components/placeCard.js",
    "./components/restaurants.js",
    "./components/beaches.js",
    "./components/places.js",
    "./components/useful.js",
    "./components/contact.js",
    "./components/review.js",

    "./images/hero.jpg",

    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png"
];

self.addEventListener("install", function (event) {

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(FILES_TO_CACHE);

            })
    );

    self.skipWaiting();

});

self.addEventListener("activate", function (event) {

    event.waitUntil(
        caches
            .keys()
            .then(function (cacheNames) {

                return Promise.all(
                    cacheNames.map(function (cacheName) {

                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }

                    })
                );

            })
            .then(function () {

                return self.clients.claim();

            })
    );

});

self.addEventListener("fetch", function (event) {

    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches
            .match(event.request)
            .then(function (cachedResponse) {

                return cachedResponse || fetch(event.request);

            })
    );

});