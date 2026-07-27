function createWifiPage() {

    return `

        <section class="welcome-card">

            <button id="back-button">← Back</button>

            <h2>${wifiData.title}</h2>

            <p><strong>Network:</strong> ${wifiData.network}</p>

            <p><strong>Password:</strong> ${wifiData.password}</p>

            <button id="copy-password-button">
                Copy Password
            </button>

            <p id="copy-message"></p>

            <p>${wifiData.description}</p>

        </section>

    `;

}