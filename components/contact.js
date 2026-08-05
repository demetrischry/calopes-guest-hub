function createContactPage() {

    return `

        <section class="welcome-card contact-page">

            <button id="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>


            <header class="page-intro">

                <span class="page-eyebrow">
                    Calopes Suites
                </span>

                <h2>Contact Us</h2>

                <p>
                    We're here whenever you need us during your stay.
                </p>

            </header>


            <!-- COMPACT INTRO CARD -->

            <div class="contact-intro-card">

                <div class="contact-intro-icon">

                    <i data-lucide="heart-handshake"></i>

                </div>

                <div>

                    <h3>Need assistance?</h3>

                    <p>
                        Choose the most convenient way to contact us.
                    </p>

                </div>

            </div>


            <!-- CONTACT ACTIONS -->

            <div class="contact-action-list">


                ${contactData.phone ? `

                    <a
                        href="tel:${contactData.phone}"
                        class="contact-action"
                    >

                        <span class="contact-action-icon">

                            <i data-lucide="phone"></i>

                        </span>

                        <span class="contact-action-text">

                            <strong>Call</strong>

                            <small>${contactData.phone}</small>

                        </span>

                        <i
                            data-lucide="chevron-right"
                            class="contact-action-arrow"
                        ></i>

                    </a>

                ` : ""}


                ${contactData.whatsapp ? `

                    <a
                        href="https://wa.me/${contactData.whatsapp.replace(/\D/g, "")}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-action"
                    >

                        <span class="contact-action-icon">

                            <i data-lucide="message-circle"></i>

                        </span>

                        <span class="contact-action-text">

                            <strong>WhatsApp</strong>

                            <small>Send us a message</small>

                        </span>

                        <i
                            data-lucide="chevron-right"
                            class="contact-action-arrow"
                        ></i>

                    </a>

                ` : ""}


                ${contactData.email ? `

                    <a
                        href="mailto:${contactData.email}"
                        class="contact-action"
                    >

                        <span class="contact-action-icon">

                            <i data-lucide="mail"></i>

                        </span>

                        <span class="contact-action-text">

                            <strong>Email</strong>

                            <small>${contactData.email}</small>

                        </span>

                        <i
                            data-lucide="chevron-right"
                            class="contact-action-arrow"
                        ></i>

                    </a>

                ` : ""}


                ${contactData.mapsLink ? `

                    <a
                        href="${contactData.mapsLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-action"
                    >

                        <span class="contact-action-icon">

                            <i data-lucide="map-pin"></i>

                        </span>

                        <span class="contact-action-text">

                            <strong>Directions</strong>

                            <small>Open in Google Maps</small>

                        </span>

                        <i
                            data-lucide="chevron-right"
                            class="contact-action-arrow"
                        ></i>

                    </a>

                ` : ""}

            </div>


            <!-- SOCIAL MEDIA -->

            ${
                contactData.instagram || contactData.facebook
                    ? `

                        <section class="social-section">

                            <div class="social-heading">

                                <span></span>

                                <h3>
                                    ${contactData.socialTitle || "Stay Connected"}
                                </h3>

                                <span></span>

                            </div>

                            <div class="social-buttons">


                                ${contactData.instagram ? `

                                    <a
                                        href="${contactData.instagram}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="social-button"
                                    >

                                        <span class="social-button-icon">

                                            <i class="fa-brands fa-instagram"></i>

                                        </span>

                                        <strong>Instagram</strong>

                                        <i
                                            data-lucide="chevron-right"
                                            class="social-button-arrow"
                                        ></i>

                                    </a>

                                ` : ""}


                            ${contactData.facebook ? `

                                <a
                                    href="${contactData.facebook}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="social-button"
                                >

                                    <span class="social-button-icon">

                                        <i class="fa-brands fa-facebook-f"></i>

                                    </span>

                                    <strong>Facebook</strong>

                                    <i
                                        data-lucide="chevron-right"
                                        class="social-button-arrow"
                                    ></i>

                                </a>

                            ` : ""}

                            </div>

                        </section>

                    `
                    : ""
            }


            ${contactData.message ? `

                <div class="contact-closing-message">

                    <i data-lucide="heart"></i>

                    <p>
                        ${contactData.message}
                    </p>

                </div>

            ` : ""}

        </section>

    `;

}