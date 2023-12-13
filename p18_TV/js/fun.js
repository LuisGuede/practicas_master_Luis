//Hacer que cundo el boton 1 sea pulsado cambie la foto//

const images = [
    "img/Aliens.jpg",
    "img/lord.webp",
    "img/StreetsofFire.jpg",
    "img/sweeney.jpg",
    "img/edward.webp",
    "img/Pathfinder.jpg",
    "img/predator.jpg"
]

//1. Capturar todos los elementos que van a praticipar em mi programa
// Capturo boton 1
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');


const btnOnOff = document.querySelector('.tv_btn_on');

// Capturo foto
const tvImg = document.querySelector('#tvImg');

//2. Aplicar el evento al elemento que yo quiero (o que me diga la tarea)
btn1.addEventListener('click',cambiarCanal)
btn2.addEventListener('click',cambiarCanal)
btn3.addEventListener('click',cambiarCanal)
btn4.addEventListener('click',cambiarCanal)
btn5.addEventListener('click',cambiarCanal)
btn6.addEventListener('click',cambiarCanal)
btn7.addEventListener('click',cambiarCanal)

btnOnOff.addEventListener('click', apagarTele)


//3. Definir la funcion que va ejecutar el evento
function cambiarCanal(){
   
    tvImg.src = images [this.dataset.number]
}

function apagarTele(){
    tvImg.classList.toggle('turn_off');
}


//4. Programar va a hcer la funcion sobre los elemntos que yo le diga





//Cundo quiro ver si algo funciona
// console.log();