// Fichier : navbar.js

// 1. On récupère le nom du fichier actuel (ex: "index.html" ou "concept2-fr.html")
let currentFile = window.location.pathname.split("/").pop() || "index.html";

// 2. On détecte si on est sur une page en français (si le nom contient "-fr")
let isFrench = currentFile.includes("-fr");

// 3. On calcule les liens de traduction
// Si on est sur "index-fr.html", enFile devient "index.html"
let enFile = currentFile.replace("-fr", ""); 
// Si on est sur "index.html", frFile devient "index-fr.html"
let frFile = enFile.replace(".html", "-fr.html"); 

// Si pour une raison quelconque l'URL n'a pas .html, on sécurise
if (!frFile.includes(".html")) {
    frFile = "index-fr.html";
    enFile = "index.html";
}

// 4. On crée le template dynamique avec des variables ${...}
const navTemplate = `
    <nav>
        <div class="nav-logo-container">
            <div class="dynamic-logo"></div>
        </div>
        <div class="nav-links">
            <a href="${isFrench ? 'index-fr.html' : 'index.html'}" class="nav-speranza">Club Speranza</a>
            <a href="${isFrench ? 'concept2-fr.html' : 'concept2.html'}" class="nav-concept2">Green Hand</a>
            <a href="${isFrench ? 'concept3-fr.html' : 'concept3.html'}" class="nav-concept3">Concept 3</a>
        </div>
        <div class="nav-spacer" style="display: flex; align-items: center; justify-content: flex-end;">
            <div class="lang-flags">
                <a href="${enFile}" style="text-decoration: none; color: inherit;">
                    <span class="flag ${!isFrench ? 'active' : ''}" title="English">ENG</span>
                </a>
                <a href="${frFile}" style="text-decoration: none; color: inherit;">
                    <span class="flag ${isFrench ? 'active' : ''}" title="Français">FR</span>
                </a>
            </div>
            <button class="theme-btn" id="theme-toggle">Dark Mode</button>
        </div>
    </nav>
`;

// 5. On insère tout ça au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Insère la navbar tout au début du body
    document.body.insertAdjacentHTML('afterbegin', navTemplate);
    
    // Script du Dark Mode
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
            themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
        });
    }
});