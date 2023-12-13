//1. Captura el elemnto

const btnflechas = document.querySelector('.btnflechas');
const fotovoldemort = document.querySelector('#voldemort');

//2. Crear eventos de usuario
btnflechas.addEventListener('click', cambiarfoto);

//3. Crear funcion que sucedera al ejecutar el evento
let imageConter = 1;
function cambiarfoto(){
    imageConter= imageConter+1;
    if(imageConter==4){
        imageConter=1;
    }
    fotovoldemort.src="../img/1.jpg"+imageConter+".jpeg";
}