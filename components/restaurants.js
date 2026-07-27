function createRestaurantsPage() {

    let kallepeiaHTML = "";
    let nearbyHTML = "";
    let paphosHTML = "";

    restaurantsData.forEach(function (restaurant) {

        const card = createPlaceCard(restaurant);

        if (restaurant.category === "kallepeia") {

            kallepeiaHTML += card;

        } else if (restaurant.category === "nearby") {

            nearbyHTML += card;

        } else if (restaurant.category === "paphos") {

            paphosHTML += card;

        }

    });

    return `

        <section class="welcome-card restaurants-page">

            <button id="back-button" class="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>

            <header class="page-intro">

                <span class="page-eyebrow">

                    Calopes Suites Local Guide

                </span>

                <h2>Restaurants</h2>

                <p>

                    Discover some of our favourite places to eat,
                    from traditional village taverns to restaurants
                    around Paphos.

                </p>

            </header>

            ${kallepeiaHTML ? `

                <section class="restaurant-category">

                    <div class="category-heading">

                        <div class="category-icon">

                            <i data-lucide="map-pin"></i>

                        </div>

                        <div>

                            <h3>In Kallepeia</h3>

                            <p>

                                Authentic local taverns close to Calopes Suites.

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

                                Traditional restaurants just a short drive away.

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

                            <i data-lucide="waves"></i>

                        </div>

                        <div>

                            <h3>Paphos</h3>

                            <p>

                                Seaside dining and popular restaurants in Paphos.

                            </p>

                        </div>

                    </div>

                    <div class="restaurant-grid">

                        ${paphosHTML}

                    </div>

                </section>

            ` : ""}

        </section>

    `;

}