// capturar elementos

const numeros = document.querySelectorAll('.numero_de_bingo');

const boton_de_cambiar = document.getElementById('boton_de_cambiar');


// Crear evento
boton_de_cambiar.addEventListener('click', () => {
        
  //numeros
      for (var i = 0; i < numeros.length; i++) {
        const square = numeros[i];
        const NumeroRandon = GenerarNumeros();
        square.innerText = NumeroRandon;

  // the fuking comand of color!!!!!!!!!
       square.style.backgroundColor = GenerarColor();
      }});

// Definir la afuncion

  // generar numeros
    function GenerarNumeros() {
      return Math.floor(Math.random() * 50 + 1);
    }

    // generar color
    function GenerarColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

  // recargar
    boton_de_cambiar.click();