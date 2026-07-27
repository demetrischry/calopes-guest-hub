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

                ${place.rating ? `

                    <span class="restaurant-rating">
                        <i data-lucide="star"></i>
                        ${place.rating}
                    </span>

                ` : ""}

                ${place.distance ? `

                    <span class="restaurant-distance">
                        <i data-lucide="clock-3"></i>
                        ${place.distance}
                    </span>

                ` : ""}

            </div>

            <div class="restaurant-content">

                <h3 class="restaurant-name">
                    ${place.name}
                </h3>

                ${place.location ? `

                    <div class="restaurant-location">

                        <i data-lucide="map-pin"></i>

                        <span>${place.location}</span>

                    </div>

                ` : ""}

                ${place.cuisine ? `

                    <p class="restaurant-cuisine">
                        ${place.cuisine}
                    </p>

                ` : ""}

                ${place.description ? `

                    <p class="restaurant-description">
                        ${place.description}
                    </p>

                ` : ""}

   

            ${place.recommendation ? `

            <div class="recommendation-box">

                <div class="recommendation-title">

                    <i data-lucide="sparkles"></i>

                    <span>Recommended by Calopes Suites</span>

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
                            Navigate
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