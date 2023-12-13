
// capturar elementos

const btnCirculo = document.querySelector('.circulo_dive');

const homebutton_01_01 = document.querySelector('.primera_dive_01');
const homebutton_01_02 = document.querySelector('.primera_dive_02');
const homebutton_01_03 = document.querySelector('.primera_dive_03');
const homebutton_01_04 = document.querySelector('.primera_dive_04');

const homebutton_02_01 = document.querySelector('.segundo_dive_01');
const homebutton_02_02 = document.querySelector('.segundo_dive_02');
const homebutton_02_03 = document.querySelector('.segundo_dive_03');
const homebutton_02_04 = document.querySelector('.segundo_dive_04');


// Crear evento

btnCirculo.addEventListener('click', mifuncion);



// Definir l afuncion

function mifuncion(){
    
    homebutton_01_01.style.opacity = '0';
    homebutton_01_02.style.opacity = '0';
    homebutton_01_03.style.opacity = '0';
    homebutton_01_04.style.opacity = '0';

    homebutton_02_01.style.opacity = '0';
    homebutton_02_02.style.opacity = '0';
    homebutton_02_03.style.opacity = '0';
    homebutton_02_04.style.opacity = '0';

}


// capturar elementos

const btnCirculo_back = document.querySelector('.circulo_dive_back');

// Crear evento

btnCirculo_back.addEventListener('click', mifuncion_back);


// Definir l afuncion

function mifuncion_back(){
    
    homebutton_01_01.style.opacity = '1';
    homebutton_01_02.style.opacity = '1';
    homebutton_01_03.style.opacity = '1';
    homebutton_01_04.style.opacity = '1';

    homebutton_02_01.style.opacity = '1';
    homebutton_02_02.style.opacity = '1';
    homebutton_02_03.style.opacity = '1';
    homebutton_02_04.style.opacity = '1';

}

