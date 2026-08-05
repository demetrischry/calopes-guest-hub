function createPageHeader({
    icon,
    title,
    description
}) {

    return `

        <button id="back-button">

            <i data-lucide="arrow-left"></i>

            Back

        </button>


        <header class="premium-page-header">

            <div class="premium-page-title-row">

                <div class="premium-page-icon">

                    <i data-lucide="${icon}"></i>

                </div>

                <h2>
                    ${title}
                </h2>

            </div>

            <p>
                ${description}
            </p>

        </header>

    `;

}