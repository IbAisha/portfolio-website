function loadPage(page) {
    const content = document.getElementById('content');
    
    switch (page) {
        case 'home':
            content.innerHTML = '<h1>Bienvenue sur la page d\'accueil</h1>';
            break;
        case 'about':
            content.innerHTML = '<h1>À propos de nous</h1>';
            break;
        default:
            content.innerHTML = '<h1>Page non trouvée</h1>';
    }
}


window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(2); // Enlève '#/'
    loadPage(hash || 'home');
});

// Charger la page initiale
loadPage(window.location.hash.substring(2) || 'home');

