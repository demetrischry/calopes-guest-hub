function createRestaurantsPage() {

    let topPicksHTML = "";
    let kallepeiaHTML = "";
    let nearbyHTML = "";
    let paphosHTML = "";
    let specialHTML = "";

    restaurantsData.forEach(function (restaurant) {

        const card = createPlaceCard(restaurant);

        /*
            Τα Top Picks εμφανίζονται μόνο
            στην πρώτη κατηγορία.
        */

        if (restaurant.topPick === true) {

            topPicksHTML += card;

        } else if (restaurant.category === "kallepeia") {

            kallepeiaHTML += card;

        } else if (restaurant.category === "nearby") {

            nearbyHTML += card;

        } else if (restaurant.category === "paphos") {

            paphosHTML += card;

        } else if (restaurant.category === "special") {

            specialHTML += card;

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

                <h2>Eat Like a Local</h2>

                <p>
                    Discover our favourite places to enjoy authentic
                    Cypriot flavours, welcoming village taverns and
                    memorable dining experiences around Kallepeia
                    and Paphos.
                </p>

            </header>


            ${topPicksHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="heart"></i>

                        </div>

                        <div>

                            <h3>Calopes Top Picks</h3>

                            <p>
                                The restaurants we most enjoy recommending
                                to our guests.
                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${topPicksHTML}

                    </div>

                </section>

            ` : ""}


            ${kallepeiaHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="map-pin"></i>

                        </div>

                        <div>

                            <h3>In Kallepeia</h3>

                            <p>
                                Local food and relaxed dining just minutes
                                from Calopes Suites.
                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${kallepeiaHTML}

                    </div>

                </section>

            ` : ""}


            ${nearbyHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="car"></i>

                        </div>

                        <div>

                            <h3>Nearby Villages</h3>

                            <p>
                                Traditional restaurants in the villages
                                surrounding Kallepeia.
                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${nearbyHTML}

                    </div>

                </section>

            ` : ""}


            ${paphosHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="building-2"></i>

                        </div>

                        <div>

                            <h3>Paphos</h3>

                            <p>
                                Selected restaurants for a day or evening
                                in Paphos.
                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${paphosHTML}

                    </div>

                </section>

            ` : ""}


            ${specialHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="sparkles"></i>

                        </div>

                        <div>

                            <h3>Special Dining</h3>

                            <p>
                                Beautiful settings and memorable choices
                                for a special meal.
                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${specialHTML}

                    </div>

                </section>

            ` : ""}

        </section>

    `;

}