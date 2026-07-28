function createPlaceCard(place) {

    return `

        <article class="restaurant-card">

            <div class="restaurant-image-wrapper">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    class="restaurant-image"
                    onerror="
                        this.onerror = null;
                        this.src = 'images/restaurants/restaurant-placeholder.jpg';
                    "
                >

                ${place.topPick ? `

                    <span class="top-pick-badge">

                        <i data-lucide="award"></i>

                        Calopes Pick

                    </span>

                ` : ""}

                ${place.rating ? `

                    <span class="restaurant-rating">

                        <i data-lucide="star"></i>

                        ${place.rating}

                    </span>

                ` : ""}

                ${place.distance ? `

                    <span class="restaurant-distance">

                        <i data-lucide="car"></i>

                        ${place.distance}

                    </span>

                ` : ""}

            </div>

            <div class="restaurant-content">

                ${place.badge ? `

                    <span class="place-badge">
                        ${place.badge}
                    </span>

                ` : ""}

                <h3 class="restaurant-name">
                    ${place.name}
                </h3>

                <div class="restaurant-details">

                    ${place.location ? `

                        <span>

                            <i data-lucide="map-pin"></i>

                            ${place.location}

                        </span>

                    ` : ""}

                    ${place.cuisine ? `

                        <span>

                            <i data-lucide="utensils"></i>

                            ${place.cuisine}

                        </span>

                    ` : ""}

                </div>

                ${place.description ? `

                    <p class="restaurant-description">
                        ${place.description}
                    </p>

                ` : ""}

                ${place.recommendation ? `

                    <div class="recommendation-box">

                        <div class="recommendation-title">

                            <i data-lucide="sparkles"></i>

                            <span>Why We Love It</span>

                        </div>

                        <p>
                            ${place.recommendation}
                        </p>

                    </div>

                ` : ""}

                <div class="restaurant-buttons">

                    ${place.mapsLink ? `

                        <a
                            href="${place.mapsLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="restaurant-button restaurant-button-primary"
                        >

                            <i data-lucide="navigation"></i>

                            Directions

                        </a>

                    ` : ""}

                    ${place.phone ? `

                        <a
                            href="tel:${place.phone}"
                            class="restaurant-button restaurant-button-secondary"
                        >

                            <i data-lucide="phone"></i>

                            Call

                        </a>

                    ` : ""}

                    ${place.website ? `

                        <a
                            href="${place.website}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="restaurant-button restaurant-button-secondary"
                        >

                            <i data-lucide="globe"></i>

                            Website

                        </a>

                    ` : ""}

                </div>

            </div>

        </article>

    `;

}