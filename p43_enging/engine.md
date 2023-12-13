# ENGINE

<!-- SCOPE: Registro qie indica ña accesibilidad d euna variable o funcion -->

<!-- Contexto de ejecuncion : Entrono de ejecucion, tipos globale o funcion -->

<!-- Pila de ejecucion: pila LIFO de -->

<!-- como funciona JS? -->

-Entidades logicas
    -Scope, execution content, call stack

- cada vez que carga el navegador un fichero se produce 3 faces
    - creacion
    - ejecucion
    - finalizacion

<!-- Face de creacion -->

1. Se crea el objeto window
    - dentro de el estan muchos objetos de la api dom (documents)

2. Se crea eel valor de ref. this
    - this = window;
    - este valor cambiara dependion de qeu se esta ejecutando

3. Recorre el codigo
    - guarda las variables con valor undefined;
    - guarda las funciones con su contenido de codigo;
    - variable y funciones se colocan al principio del scrip;

<!-- fase de ejecucion -->

1. se resuelven referencias a variables y funciones;
    - JS utiliza eñ scope para ello. Scope informa si se puede usar o no;
    - salta los errores de referecnia;

2. añade cada contecto de ejecucion a la pila LIFO

<!-- face de finalisacion -->

1. Se  eliminan las variables
2. Se eliminan las funciones locales
3. El contexto de ejecucion sale de la pagina LIFO
4. Se restaura el contexto de ejecucion anterior