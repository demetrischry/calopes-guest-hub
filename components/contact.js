function createContactPage() {

    return `

        <section class="welcome-card restaurants-page">

            <button id="back-button">

                <i data-lucide="arrow-left"></i>

                Back

            </button>

            <header class="page-intro">

                <span class="page-eyebrow">
                    Calopes Suites Guest Support
                </span>

                <h2>${contactData.title}</h2>

                <p>${contactData.message}</p>

            </header>

            <div class="contact-info-box">

                <div class="contact-info-icon">

                    <i data-lucide="heart-handshake"></i>

                </div>

                <div>

                    <h3>Need assistance?</h3>

                    <p> 

                        Feel free to contact us using any of the
                        options below.

                    </p>

                </div>

            </div>
            
            

            <div class="contact-premium-card">

                <div class="contact-premium-icon">

                    <i data-lucide="headphones"></i>

                </div>

                <div>

                    <h3>How can we help?</h3>

                    <p>
                        Choose the most convenient way to contact us.
                    </p>

                </div>

            </div>

            <div class="contact-actions">

                ${contactData.phone ? `

                    <a
                        class="contact-button"
                        href="tel:${contactData.phone}"
                    >
                        <i data-lucide="phone"></i>

                        <span>
                            <strong>Call</strong>
                            <small>${contactData.phone}</small>
                        </span>
                    </a>

                ` : ""}

                ${contactData.whatsapp ? `

                    <a
                        class="contact-button"
                        href="https://wa.me/${contactData.whatsapp.replace(/\D/g, "")}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i data-lucide="message-circle"></i>

                        <span>
                            <strong>WhatsApp</strong>
                            <small>Send us a message</small>
                        </span>
                    </a>

                ` : ""}

                ${contactData.email ? `

                    <a
                        class="contact-button"
                        href="mailto:${contactData.email}"
                    >
                        <i data-lucide="mail"></i>

                        <span>
                            <strong>Email</strong>
                            <small>${contactData.email}</small>
                        </span>
                    </a>

                ` : ""}

        

                ${contactData.mapsLink ? `

                    <a
                        class="contact-button"
                        href="${contactData.mapsLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i data-lucide="navigation"></i>

                        <span>
                            <strong>Navigate</strong>
                            <small>Open in Google Maps</small>
                        </span>
                    </a>

                ` : ""}

            </div>
            
            <div class="contact-closing-message">

            <i data-lucide="sparkles"></i>

            <p>
                Thank you for choosing Calopes Suites.
                We wish you a wonderful stay in Cyprus.
            </p>

        </div>
           

        </section>

    `;

   

}