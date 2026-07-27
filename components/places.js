function createPlacesPage() {

    let villagesHTML = "";
    let cityHTML = "";
    let historyHTML = "";
    let natureHTML = "";

    placesData.forEach(function (place) {

        const card = createPlaceCard(place);

        if (place.category === "villages") {

            villagesHTML += card;

        } else if (place.category === "city") {

            cityHTML += card;

        } else if (place.category === "history") {

            historyHTML += card;

        } else if (place.category === "nature") {

            natureHTML += card;

        }

    });

    return `

        <section class="welcome-card restaurants-page">

            <button id="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>

            <header class="page-intro">

                <span class="page-eyebrow">
                    Calopes Suites Local Guide
                </span>

                <h2>Places to Visit</h2>

                <p>
                    Explore villages, history and beautiful landscapes
                    around Paphos.
                </p>

            </header>

            ${villagesHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="house"></i>

                        </div>

                        <div>

                            <h3>Villages</h3>

                            <p>Traditional villages worth visiting.</p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${villagesHTML}

                    </div>

                </section>

            ` : ""}

            ${cityHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="building-2"></i>

                        </div>

                        <div>

                            <h3>City</h3>

                            <p>Explore the heart of Paphos.</p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${cityHTML}

                    </div>

                </section>

            ` : ""}

            ${historyHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="landmark"></i>

                        </div>

                        <div>

                            <h3>History</h3>

                            <p>Historical sites and monuments.</p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${historyHTML}

                    </div>

                </section>

            ` : ""}

            ${natureHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="mountain"></i>

                        </div>

                        <div>

                            <h3>Nature</h3>

                            <p>Natural landmarks and amazing views.</p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${natureHTML}

                    </div>

                </section>

            ` : ""}

        </section>

    `;

}