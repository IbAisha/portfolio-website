async function loadPage(page) {
   const response = await fetch (`${page}.html`);
   const html = await response.text();
   document.getElementById('app').innerHTML = html;
   }

// Charge la page intiale 
loadPage('index');
