function createRestaurantsPage() {

    let kallepeiaHTML = "";
    let cypriotTavernsHTML = "";
    let premiumDiningHTML = "";

    restaurantsData.forEach(function (restaurant) {

        const card = createPlaceCard(restaurant);

        switch (restaurant.category) {

            case "kallepeia":
                kallepeiaHTML += card;
                break;

            case "cypriot-taverns":
                cypriotTavernsHTML += card;
                break;

            case "premium":
                premiumDiningHTML += card;
                break;

        }

    });

    return `

        <section class="welcome-card restaurants-page">

            ${createPageHeader({

                icon: "utensils",

                title: "Restaurants",

                description:
                    "Handpicked dining experiences, personally selected for our guests."

            })}

            ${createRestaurantCategory({

                icon: "map-pinned",

                title: "Discover Kallepeia",

                description:
                    "Experience local flavours in the heart of Kallepeia, just moments from Calopes Suites.",

                cards: kallepeiaHTML

            })}

            ${createRestaurantCategory({

                icon: "chef-hat",

                title: "Authentic Cypriot Taverns",

                description:
                    "Discover traditional Cypriot cuisine across Paphos and the surrounding villages.",

                cards: cypriotTavernsHTML

            })}

            ${createRestaurantCategory({

                icon: "sparkles",

                title: "Premium Dining",

                description:
                    "Elegant restaurants offering refined cuisine and memorable dining experiences.",

                cards: premiumDiningHTML

            })}

        </section>

    `;

}



function createRestaurantCategory({

    icon,
    title,
    description,
    cards

}) {

    if (!cards.trim()) return "";

    return `

        <section class="restaurant-category">

            <div class="category-heading">

                <div class="category-icon">

                    <i data-lucide="${icon}"></i>

                </div>

                <div>

                    <h3>${title}</h3>

                    <p>${description}</p>

                </div>

            </div>

            <div class="restaurant-grid">

                ${cards}

            </div>

        </section>

    `;

}