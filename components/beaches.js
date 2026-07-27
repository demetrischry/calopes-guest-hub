function createBeachesPage() {

    let popularHTML = "";
    let paphosHTML = "";

    beachesData.forEach(function (beach) {

        const card = createPlaceCard(beach);

        if (beach.category === "popular") {

            popularHTML += card;

        } else if (beach.category === "paphos") {

            paphosHTML += card;

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

                <h2>Beaches</h2>

                <p>

                    Discover some of the most beautiful beaches
                    around Paphos, all within a short drive from
                    Calopes Suites.

                </p>

            </header>

            <section class="restaurant-category">

                <div class="category-heading">

                    <div class="category-icon">

                        <i data-lucide="umbrella"></i>

                    </div>

                    <div>

                        <h3>Most Popular</h3>

                        <p>

                            Our favourite beaches for swimming and relaxing.

                        </p>

                    </div>

                </div>

                <div class="restaurant-grid">

                    ${popularHTML}

                </div>

            </section>

            <section class="restaurant-category">

                <div class="category-heading">

                    <div class="category-icon">

                        <i data-lucide="waves"></i>

                    </div>

                    <div>

                        <h3>Kato Paphos</h3>

                        <p>

                            Beaches close to the harbour and promenade.

                        </p>

                    </div>

                </div>

                <div class="restaurant-grid">

                    ${paphosHTML}

                </div>

            </section>

        </section>

    `;

}