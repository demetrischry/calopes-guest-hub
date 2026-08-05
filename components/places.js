function createPlacesPage() {

    let kallepeiaHTML = "";
    let historicHTML = "";
    let natureHTML = "";

    placesData.forEach(function (place) {

        const card = createPlaceCard(place);

        switch (place.category) {

            case "kallepeia":
                kallepeiaHTML += card;
                break;

            case "historic":
                historicHTML += card;
                break;

            case "nature":
                natureHTML += card;
                break;

        }

    });

    return `

        <section class="welcome-card restaurants-page">

            ${createPageHeader({

                icon: "map-pin",

                title: "Places to Visit",

                description:
                    "Discover meaningful places, historic landmarks and beautiful natural sights across Kallepeia and the Paphos region."

            })}

            ${createPlacesCategory({

                icon: "home",

                title: "Discover Kallepeia",

                description:
                    "Explore the village, its local landmarks and the peaceful character surrounding Calopes Suites.",

                cards: kallepeiaHTML

            })}

            ${createPlacesCategory({

                icon: "landmark",

                title: "Historic & Cultural",

                description:
                    "Visit important monasteries, archaeological landmarks and historic areas that reveal the rich heritage of Paphos.",

                cards: historicHTML

            })}

            ${createPlacesCategory({

                icon: "mountain",

                title: "Nature & Views",

                description:
                    "Discover distinctive landscapes, coastal scenery and natural attractions across the Paphos region.",

                cards: natureHTML

            })}

        </section>

    `;

}


function createPlacesCategory({

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