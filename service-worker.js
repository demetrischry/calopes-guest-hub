// =================================
// CALOPES GUEST HUB SERVICE WORKER
// =================================

const CACHE_NAME = "calopes-guest-hub-v4";

const APP_SHELL = [

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


// =================================
// INSTALL
// =================================

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(function (cache) {

                return cache.addAll(APP_SHELL);

            })

    );

    self.skipWaiting();

});


// =================================
// ACTIVATE
// =================================

self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches
            .keys()
            .then(function (cacheNames) {

                return Promise.all(

                    cacheNames.map(function (cacheName) {

                        if (
                            cacheName.startsWith("calopes-guest-hub-") &&
                            cacheName !== CACHE_NAME
                        ) {

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


// =================================
// FETCH — NETWORK FIRST
// =================================

self.addEventListener("fetch", function (event) {

    const request = event.request;

    // Μόνο GET requests
    if (request.method !== "GET") {
        return;
    }

    const requestURL = new URL(request.url);

    // Δεν πειράζουμε εξωτερικά resources
    // όπως Lucide / Font Awesome / Google Fonts
    if (requestURL.origin !== self.location.origin) {
        return;
    }

    event.respondWith(

        fetch(request, {
            cache: "no-store"
        })

            .then(function (networkResponse) {

                // Κρατάμε τη νέα έκδοση στην cache
                const responseClone =
                    networkResponse.clone();

                caches
                    .open(CACHE_NAME)
                    .then(function (cache) {

                        cache.put(
                            request,
                            responseClone
                        );

                    });

                return networkResponse;

            })

            .catch(function () {

                // Αν δεν υπάρχει internet,
                // χρησιμοποιούμε την τελευταία cached έκδοση
                return caches.match(request);

            })

    );

});