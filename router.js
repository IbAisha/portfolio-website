async function loadPage(page) {
    const response = await fetch(page);
    const html = await response.text();
    document.body.textContent = html; // Remplace TOUT le contenu
}