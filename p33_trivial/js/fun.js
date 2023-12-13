
// 1. Capturar radio buttons y Capturar botón enviar respuesta y agregar evento click
const radioButtons = document.querySelectorAll('input[name="respuestas"]');

const enviarRespuestaButton = document.querySelector('button');
enviarRespuestaButton.addEventListener('click', checkAnswer);

// 2. capturo botones para enviar respuestas (IF and else)
function checkAnswer() {

  const selectedAnswer = getSelectedAnswer();
  const resultado = document.querySelector('.resultado');

  if (selectedAnswer) {
    const respuestaCorrecta = "respuestas__one";

    if (selectedAnswer === respuestaCorrecta) {
      resultado.innerHTML = "¡DinoNerd.... Respuesta correcta!!!!!";
    } else {
      resultado.innerHTML = "Respuesta incorrecta :( Inténtalo de nuevo!!!!!";
    }
  }
}

// 3.Capturar slot para resultado
function getSelectedAnswer() {
  let selectedRadio;

  // Iterar los radio buttons para encontrar el selecionado
  radioButtons.forEach((radio) => {
      if (radio.checked) {
          selectedRadio = radio.id;
      }
  });

  // devolver el ID del radio button seleccionado
  return selectedRadio;
}