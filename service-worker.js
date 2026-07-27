const CACHE_NAME = "calopes-guest-hub-v1";

const FILES_TO_CACHE = [

    "./",
    "./index.html",
    "./manifest.json",

    "./css/style.css",

    "./js/app.js",

    "./data/site.js",
    "./data/menu.js",
    "./data/wifi.js",
    "./data/restaurants.js",
    "./data/beaches.js",
    "./data/places.js",
    "./data/contact.js",
    "./data/review.js",

    "./components/placeCard.js",
    "./components/wifi.js",
    "./components/restaurants.js",
    "./components/beaches.js",
    "./components/places.js",
    "./components/contact.js",
    "./components/review.js"

];

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

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

    );

});

self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches
            .match(event.request)
            .then(function (cachedResponse) {

                return cachedResponse || fetch(event.request);

            })

    );

});