
// Captura el elemnto

const emotionbtn = document.querySelectorAll('.emotion_item button');
console.log(emotionbtn);


// recorrer la lista com un bucle y asignar un color automatico

emotionbtn.forEach((boton,index) =>{
    const colorMutation = Math.floor(100 -(index*(280/emotionbtn.length)));
    const color = "hsl("+colorMutation+",100%, 50%)";
    boton.style.color= color;

    boton.addEventListener('click', cargarMensaje);

});

function cargarMensaje(){
    console.log('holi');
    
}
