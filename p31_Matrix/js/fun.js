const photoUrls = ["neo.jpg", "trinity.jpeg", "morpheo.webp"];
const selectorPhotos = document.querySelector('.matrix');
const fotoSlot = document.querySelector('.fotoSlot');

selectorPhotos.addEventListener('input', cargarFotos);

function cargarFotos(){
    const selectorIndex = selectorPhotos.value;
    const route = `url("img/${photoUrls[selectorIndex]}")`;

    fotoSlot.style.backgroundImage = route;
}