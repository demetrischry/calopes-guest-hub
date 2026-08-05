function createUsefulPage() {

    const essentialsHTML = usefulData.essentials
        .map(function (place) {
            return createPlaceCard(place);
        })
        .join("");

    const medicalHTML = usefulData.medical
        .map(function (place) {
            return createPlaceCard(place);
        })
        .join("");

    const emergencyHTML = usefulData.emergency
        .map(function (contact) {

            return `

                <article class="emergency-contact-card">

                    <div class="emergency-contact-icon">

                        <i data-lucide="${contact.icon}"></i>

                    </div>

                    <div class="emergency-contact-content">

                        <span class="emergency-contact-number">
                            ${contact.number}
                        </span>

                        <h3>
                            ${contact.title}
                        </h3>

                        <p>
                            ${contact.subtitle}
                        </p>

                    </div>

                    <a
                        href="${contact.callLink}"
                        class="emergency-call-button"
                        aria-label="Call ${contact.number}"
                    >

                        <i data-lucide="phone"></i>

                        <span>Call Now</span>

                    </a>

                </article>

            `;

        })
        .join("");

    return `

        <section class="welcome-card restaurants-page useful-page">

            ${createPageHeader({

                icon: "info",

                title: "Useful Information",

                description:
                    "Helpful places and important contacts you may need during your stay."

            })}


            ${createUsefulCategory({

                icon: "shopping-basket",

                title: "Food & Daily Essentials",

                description:
                    "Nearby shops, supermarkets and a bakery for groceries, fresh produce and everyday needs.",

                cards: essentialsHTML

            })}


            ${createUsefulCategory({

                icon: "heart-pulse",

                title: "Pharmacies & Medical",

                description:
                    "The closest pharmacy and essential medical care information for your stay.",

                cards: medicalHTML

            })}


            <section class="restaurant-category emergency-section">

                <div class="category-heading">

                    <div class="category-icon">

                        <i data-lucide="siren"></i>

                    </div>

                    <div>

                        <h3>
                            Emergency Contacts
                        </h3>

                        <p>
                            Use these numbers only when urgent assistance
                            from the police, ambulance or fire service is required.
                        </p>

                    </div>

                </div>

                <div class="emergency-contact-list">

                    ${emergencyHTML}

                </div>

            </section>


            <section class="useful-help-section">

                <div class="useful-help-icon">

                    <i data-lucide="heart-handshake"></i>

                </div>

                <div class="useful-help-content">

                    <h3>
                        Need anything else?
                    </h3>

                    <p>
                        Contact Calopes Suites if you need additional
                        information or assistance during your stay.
                    </p>

                </div>

                <button
                    type="button"
                    class="useful-contact-button"
                    id="useful-contact-button"
                >

                    <i data-lucide="phone"></i>

                    Contact Us

                </button>

            </section>

        </section>

    `;

}


function createUsefulCategory({

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