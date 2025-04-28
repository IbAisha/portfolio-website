const body = document.querySelector(".body");

window.addEventListener('mousemove', function(event) {

    if(this.window.innerWidth > 1000 && !body.classList.contains('is-night')) {
        // Récupérer les coordonnées de la souris
    const x = event.clientX;
    const y = event.clientY;

    // Calculer les pourcentages pour le dégradé
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;

    // Appliquer le dégradé en fonction de la position de la souris
    document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #fff8e1,#ffeac5f3)`;
    } else {
    document.body.style.background = `#ffeac5f3`
    }
    
});

function nightMode() {
    
const nightModeIcon = document.getElementById('night-mode-icon');

nightModeIcon.addEventListener('click', () => {
    body.classList.toggle("is-night");
    localStorage.setItem('nightMode', body.classList.contains('is-night'));

    if(localStorage.getItem('nightMode') === 'true') {
        body.classList.add('is-night');
    }
});

}
nightMode();



function openMenu() {
    const iconMenu = document.getElementById("menu-burger");
    iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle("active-menu")
})

console.log("open")
}

openMenu();

function actu() {
    
    const actuDiv = document.getElementById("actuDOM");
    
    const 
}

