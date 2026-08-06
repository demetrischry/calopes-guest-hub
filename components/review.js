function createReviewsPage() {

    return `

        <section class="welcome-card reviews-page">

            <button id="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>


            <header class="review-page-header">

                <span class="page-eyebrow">
                    Calopes Suites
                </span>

                <div class="review-header-icon">

                    <i data-lucide="sparkles"></i>

                </div>

                <h2>
                    ${reviewsData.title}
                </h2>

                <p class="review-page-subtitle">
                    ${reviewsData.subtitle}
                </p>

                <p class="review-page-message">
                    ${reviewsData.message}
                </p>

            </header>


            <div class="review-platform-list">


                <!-- GOOGLE REVIEW -->

                <article class="review-platform-card google-review-card">

                    <div class="review-platform-top">

                        <div class="review-platform-logo google-logo">
                            G
                        </div>

                        <div class="review-platform-heading">

                            <span class="review-platform-label">
                                Share your feedback
                            </span>

                            <h3>
                                ${reviewsData.google.title}
                            </h3>

                        </div>

                    </div>

                    <div class="google-stars">

                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>
                        <i data-lucide="star"></i>

                    </div>

                    <p>
                        ${reviewsData.google.description}
                    </p>


                    ${
                        reviewsData.google.link
                            ? `

                                <a
                                    
                                        href="${reviewsData.google.link}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="review-platform-button google-review-button"
                                        onclick="event.stopPropagation();"
                                    >
                                        <i data-lucide="star"></i>

                                        ${reviewsData.google.buttonText}
                                    </a>

                               

                            `
                            : `

                                <div class="review-link-placeholder">

                                    <i data-lucide="link"></i>

                                    Google review link will be added soon.

                                </div>

                            `
                    }

                </article>


                <!-- BOOKING REVIEW -->

                <article class="review-platform-card booking-review-card">

                    <div class="review-platform-top">

                        <div class="review-platform-logo booking-logo">
                            B.
                        </div>

                        <div class="review-platform-heading">

                            <span class="review-platform-label">
                                Booked through Booking.com?
                            </span>

                            <h3>
                                ${reviewsData.booking.title}
                            </h3>

                        </div>

                    </div>

                    <p>
                        ${reviewsData.booking.description}
                    </p>


                    ${
                        reviewsData.booking.link
                            ? `

                                <a
                                    href="${reviewsData.booking.link}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="review-platform-button booking-review-button"
                                >

                                    <i data-lucide="external-link"></i>

                                    ${reviewsData.booking.buttonText}

                                </a>

                            `
                            : `

                                <div class="review-link-placeholder">

                                    <i data-lucide="link"></i>

                                    Booking.com link will be added soon.

                                </div>

                            `
                    }

                </article>

            </div>


            <div class="review-closing-card">

                <i data-lucide="heart"></i>

                <p>
                    ${reviewsData.closingMessage}
                </p>

            </div>

        </section>

    `;

}