//captura de elementos Menu
const btnOpenMenu = document.querySelector('.btn-menu-responsive');
const btnCloseMenu = document.querySelector('.btn-close');
const menuResponsive = document.querySelector('.menu-responsive');

// Capturo el contenedor de los botones de filtrado
const filterButtonsContainer = document.querySelector('.filtered-content');
const allFilterButtons = document.querySelectorAll('.filtered-content__filter');
const allFilterContents = document.querySelectorAll('.grid-peliculas__item');
const starRatingIcon = document.querySelectorAll('.grid-peliculas__star');


/**
 * Función que maneja apertura y cierre del menu responsive
 * @param {Object} btnOpenMenu 
 * @param {Object} btnCloseMenu 
 */
function btnResponsive(btnOpenMenu, btnCloseMenu, menu) {
    btnOpenMenu.addEventListener('click', function(){
        menu.classList.add('active');
    });
    
    btnCloseMenu.addEventListener('click', function(){
        menu.classList.remove('active');
    });
}



/**
 * Función que gestiona el filtrado de películas del grid por categorías
 * @param {*} filterBtnContainer 
 * @param {*} filterBtns 
 * @param {*} filterContents 
 */
function filterGrid(filterBtnContainer, filterBtns, filterContents){

    //añado evento al contenedor de todos los botones
    filterBtnContainer.addEventListener('click', function(e){

        //Detecto el boton de filtrado clicado
        const botonClicado = e.target;
        
        //capturar data-id del boton clicado
        const idFiltro = botonClicado.dataset.id;

        //Cláusula de seguridad para evitar errores cuando clico fuera de los botones
        if (idFiltro) {

            //recorro todos los botones de filtrado y les quito la clase active
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            //recorro todos los botones de filtrado y les quito la clase active
            filterContents.forEach(content => {
            
                content.classList.contains(idFiltro) ? content.classList.add('active'): content.classList.remove('active')
            });


            //añado clase active al boton clicado
            botonClicado.classList.add('active');

            }
    })
}



/**
 * Función que permite valorar con estrellas cada película
 * @param {Array} allStars 
 */
function starRating(allStars) {

    //Recorro todas las estrellas del grid y les añado un event listener
    allStars.forEach(star => {
        star.addEventListener('click', function(e){

            //Capturo todas las estrellas del item actual dentro de un array
            const allStarsInCurrentItem = star.parentNode.querySelectorAll('.grid-peliculas__star');

            // (cada click) pongo todas las estrellas en gris
            allStarsInCurrentItem.forEach(star => {
                star.setAttribute('src', 'icons/star_off.svg');

            });

            /*... y pongo en amarillo todas hasta el elemento clicado recorriéndolo con un bucle 
            y saliéndome del bucle cuando el elemento clicado coincide con el elmento del bucle que estoy tratando en ese momento*/
            for (const star of allStarsInCurrentItem) {
                 
                star.setAttribute('src', 'icons/star_on.svg');
                if (e.target == star) { break;} // me salgo del bucle
            }
        });
    });
}



/**
 * Initialization function
 */
function init() {
    btnResponsive(btnOpenMenu, btnCloseMenu, menuResponsive);
    filterGrid(filterButtonsContainer, allFilterButtons, allFilterContents);
    starRating(starRatingIcon)
}


init();
