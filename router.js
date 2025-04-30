const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.getAttribute('href'));

    gestionLocation(); // responsable de la redirection
};

    const routes = {
        "" : "/pages/home.html",
        "#/projets" : "pages/projets.html",
        "#/actu" : "pages/actu.html",
        "#/404" : "pages.404.html"
    };

    const gestionLocation = async() => {
        const hash = window.location.hash || "" ;
        const route = routes[hash] || routes[404] || routes[""];
        

        try {
            const html = await fetch(route).then((data) => data.text());
            document.getElementById("app").innerHTML = html ;

            } catch (error) {
                console.error("Erreur", error);

                if ( hash !== "") {
                    window.location.hash = "";
            }
        }
        
    };                          


    window.onpopstate = gestionLocation();
    window.route = route;
    gestionLocation();
