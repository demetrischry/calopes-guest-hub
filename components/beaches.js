function createBeachesPage() {

    let relaxedHTML = "";
    let natureHTML = "";

    beachesData.forEach(function (beach) {

        const card = createPlaceCard(beach);

        if (beach.category === "relaxed") {

            relaxedHTML += card;

        } else if (beach.category === "nature") {

            natureHTML += card;

        }

    });

    return `

        <section class="welcome-card restaurants-page">

            ${createPageHeader({

                icon: "waves",

                title: "Beaches",

                description:
                    "Beautiful beaches and unforgettable coastal experiences, carefully selected for your stay."

            })}

            ${createBeachCategory({

                icon: "sun",

                title: "Relaxed Beach Days",

                description:
                    "Beautiful beaches with calm waters, ideal for swimming, relaxing and enjoying an easy day by the sea.",

                cards: relaxedHTML

            })}

            ${createBeachCategory({

                icon: "mountain",

                title: "Nature & Iconic Coast",

                description:
                    "Discover protected natural beaches, crystal-clear waters and some of Cyprus' most memorable coastal landmarks.",

                cards: natureHTML

            })}

        </section>

    `;

}


function createBeachCategory({

    icon,
    title,
    description,
    cards

}) {

    if (!cards.trim()) {
        return "";
    }

    return `

        <section class="restaurant-category">

            <div class="category-heading">

                <div class="category-icon">

                    <i data-lucide="${icon}"></i>

                </div>

                <div>

                    <h3>
                        ${title}
                    </h3>

                    <p>
                        ${description}
                    </p>

                </div>

            </div>

            <div class="restaurant-grid">

                ${cards}

            </div>

        </section>

    `;

}