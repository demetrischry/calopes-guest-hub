// =================================
// MAIN ELEMENTS
// =================================

const menu = document.getElementById("menu");
const pageContainer = document.getElementById("page-container");


// =================================
// CREATE MAIN MENU
// =================================

menu.innerHTML = menuItems
    .map(function (item) {

        const pageName = item.page || item.id;

        return `

            <article
                class="menu-card"
                data-page="${pageName}"
                role="button"
                tabindex="0"
            >

                <div class="menu-icon">

                    <i data-lucide="${item.icon}"></i>

                </div>

                <div class="menu-text">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

                <div class="menu-arrow">
                    →
                </div>

            </article>

        `;

    })
    .join("");

lucide.createIcons();


// =================================
// PAGE TRANSITION
// =================================

function animatePage() {

    pageContainer.classList.remove("page-transition");

    void pageContainer.offsetWidth;

    pageContainer.classList.add("page-transition");

}


// =================================
// OPEN PAGE
// =================================

function showPage(page, updateHistory = true) {

    let pageHTML = "";

    if (page === "restaurants") {

        pageHTML = createRestaurantsPage();

    } else if (page === "beaches") {

        pageHTML = createBeachesPage();

    } else if (page === "places") {

        pageHTML = createPlacesPage();

    } else if (page === "useful") {

        pageHTML = createUsefulPage();

    } else if (page === "contact") {

        pageHTML = createContactPage();

    } else if (page === "review") {

        pageHTML = createReviewsPage();

    } else {

        console.error("Unknown page:", page);

        return;

    }

    menu.classList.add("hidden");

    pageContainer.innerHTML = pageHTML;

    animatePage();

    lucide.createIcons();

    pageContainer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if (updateHistory) {

        history.pushState(
            { page: page },
            "",
            `#${page}`
        );

    }

    const backButton =
        document.getElementById("back-button");

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                history.back();

            }
        );

    }


    // =================================
    // CONTACT BUTTON INSIDE USEFUL PAGE
    // =================================

    const usefulContactButton =
        document.getElementById("useful-contact-button");

    if (usefulContactButton) {

        usefulContactButton.addEventListener(
            "click",
            function () {

                showPage("contact");

            }
        );

    }

}


// =================================
// RETURN TO HOME
// =================================

function goHome(updateHistory = true) {

    pageContainer.innerHTML = "";

    pageContainer.classList.remove("page-transition");

    menu.classList.remove("hidden");

    menu.classList.remove("menu-transition");

    void menu.offsetWidth;

    menu.classList.add("menu-transition");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    lucide.createIcons();

    if (updateHistory) {

        history.pushState(
            { page: "home" },
            "",
            window.location.pathname
        );

    }

}


// =================================
// MENU CLICK
// =================================

menu.addEventListener(
    "click",
    function (event) {

        const card =
            event.target.closest(".menu-card");

        if (!card) {
            return;
        }

        const page = card.dataset.page;

        showPage(page);

    }
);


// =================================
// KEYBOARD ACCESSIBILITY
// =================================

menu.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        const card =
            event.target.closest(".menu-card");

        if (!card) {
            return;
        }

        event.preventDefault();

        const page = card.dataset.page;

        showPage(page);

    }
);


// =================================
// BROWSER / MOBILE BACK BUTTON
// =================================

window.addEventListener(
    "popstate",
    function (event) {

        const page = event.state?.page;

        if (
            page &&
            page !== "home"
        ) {

            showPage(page, false);

        } else {

            goHome(false);

        }

    }
);


// =================================
// INITIAL HISTORY STATE
// =================================

history.replaceState(
    { page: "home" },
    "",
    window.location.pathname
);


// =================================
// DEVELOPMENT MODE
// REMOVE OLD SERVICE WORKERS/CACHES
// =================================

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        async function () {

            try {

                const registrations =
                    await navigator
                        .serviceWorker
                        .getRegistrations();

                for (const registration of registrations) {

                    await registration.unregister();

                }

                const cacheNames =
                    await caches.keys();

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

        }
    );

}