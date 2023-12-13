
// capturar lo necesario para la accion
const poster = document.querySelector('.wally__poster');
const wally = document.querySelector('.wally');

// crear funcion que  va atuar cundo haga click (aqui no)
function mensajeError() {
    console.log("Ahi no esta wally :(")
}

// Crear evento
poster.addEventListener('click', mensajeError);

// crear funcion que  va atuar cundo haga click (aqui esta)
function mensajeAcierto(e) {
    console.log("Ahi esta wally :)")
    e.stopPropagation();
    const cordenadas = [e.pageX, e.pageY];

    const mensajeFinal = cordenadas[2] + "tus cordenadas son: " + cordenadas[0] + ","+ cordenadas[1];

    console.log(mensajeFinal);
}

// Crear evento

wally.addEventListener('click', mensajeAcierto);


// capturar lo necesario para la accion (cambio de filtor)

let isFiltered = false;

const image = document.querySelector('.myImage');

document.getElementById('level0').addEventListener('click', function () {
    if (!isFiltered) {
        image.classList.add('saturateZero');
        isFiltered = true;
    }
});

document.getElementById('level1').addEventListener('click', function () {
    if (isFiltered) {
        image.classList.remove('saturateZero');
        isFiltered = false;
    }
});