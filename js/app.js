// Menu Container
const menu = document.getElementById("menu");
const pageContainer = document.getElementById("page-container");
const welcomeSection = document.getElementById("welcome-section");

// Create Menu
menuItems.forEach(item => {

    menu.innerHTML += `
    
        <article
            class="menu-card"
            data-page="${item.id}"
            role="button"
            tabindex="0"
        >
            <div class="menu-icon">
                <i data-lucide="${item.icon}"></i>
            </div>

            <div class="menu-text">

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </div>

            <div class="menu-arrow">
                →
            </div>

        </article>

    `;

});

lucide.createIcons();

function showPage(page) {

    if (page === "wifi") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createWifiPage();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);

        document
            .getElementById("copy-password-button")
            .addEventListener("click", copyWifiPassword);

    }

    if (page === "restaurants") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createRestaurantsPage();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);
        lucide.createIcons();
    }
    if (page === "beaches") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createBeachesPage();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);

    }
    if (page === "places") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createPlacesPage();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);

    }

    if (page === "contact") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createContactPage();
        lucide.createIcons();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);

    }
    if (page === "review") {

        welcomeSection.classList.add("hidden");
        menu.classList.add("hidden");

        pageContainer.innerHTML = createReviewPage();

        document
            .getElementById("back-button")
            .addEventListener("click", goHome);

    }

}
function copyWifiPassword() {

    navigator.clipboard.writeText(wifiData.password);

    document.getElementById("copy-message").textContent =
        "Password copied!";

}


function goHome() {

    pageContainer.innerHTML = "";

    welcomeSection.classList.remove("hidden");
    menu.classList.remove("hidden");

}
// Handle menu clicks
menu.addEventListener("click", function (event) {

    const card = event.target.closest(".menu-card");

    if (!card) return;

    const page = card.dataset.page;

    showPage(page);

});

menu.addEventListener("keydown", function (event) {

    if (event.key !== "Enter" && event.key !== " ") {
        return;
    }

    const card = event.target.closest(".menu-card");

    if (!card) return;

    event.preventDefault();

    const page = card.dataset.page;

    showPage(page);

});

/* =================================
   DEVELOPMENT MODE
   Remove old service workers/caches
================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", async function () {

        try {

            const registrations =
                await navigator.serviceWorker.getRegistrations();

            for (const registration of registrations) {
                await registration.unregister();
            }

            const cacheNames = await caches.keys();

            for (const cacheName of cacheNames) {
                await caches.delete(cacheName);
            }

            console.log(
                "Development mode: old service workers and caches removed."
            );

        } catch (error) {

            console.error(
                "Could not clear old service worker data:",
                error
            );

        }

    });

}

