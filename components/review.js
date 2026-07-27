function createReviewPage() {

    return `

        <section class="welcome-card restaurants-page">

            <button id="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>

            <header class="page-intro">

                <span class="page-eyebrow">
                    Calopes Suites Guest Experience
                </span>

                <h2>${reviewData.title}</h2>

                <p>${reviewData.message}</p>

            </header>

            <div class="review-premium-card">

                <div class="review-stars" aria-label="Five stars">

                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>
                    <i data-lucide="star"></i>

                </div>

                <h3>Enjoyed your stay?</h3>

                <p>

                    We would be grateful if you shared your experience.
                    Your review helps us improve and helps future guests
                    choose Calopes Suites with confidence.

                </p>

                ${reviewData.reviewLink ? `

                    <a
                        href="${reviewData.reviewLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="review-main-button"
                    >

                        <i data-lucide="external-link"></i>

                        Leave a Google Review

                    </a>

                ` : `

                    <div class="review-link-pending">

                        <i data-lucide="info"></i>

                        <span>
                            The review link will be available soon.
                        </span>

                    </div>

                `}

            </div>

            <div class="review-thank-you">

                <i data-lucide="heart"></i>

                <p>

                    Thank you for staying with us.
                    We hope to welcome you again soon.

                </p>

            </div>

        </section>

    `;

}