# PRÁCTICA 3 - Botón HTML

1. Crear una página HTML (index.html)
2. Incluir un botón dentro del body con la etiqueta `<button></button>`
3. Añadir estilos de borde (border, color de fondo, color y tamaño de letra) al botón.
4. Crear una funcion en JS que se lance cuando se haga click (atributo `onclick="[funcion()]"`) en el botón y cuando esto suceda, que muestre un mensaje en la pantalla que diga "HELLO, HELLO!!".


### NOTAS

- Para incluir estilos en CSS se puede:
    - Utilizar el atributo `style=""` dentro de las etiquetas HTML.
        ```
        <p style="color: red"> párrafo rojo</p>
        ```
    - Utilizar la etiqueta `<style></style>` dentro dentro de la etiqueta `<body></body>`.
        ```
        <style>
            p { color: red; }
        </style>
        ```
    - Utilizar la etiqueta `<style></style>` dentro de la etiqueta `<head></head>`.

    - Invocar en la etiqueta `<body></body>` añadiendo un fichero externo.
        ```
        <link rel="stylesheet" href="style.css">
        ```
    - Invocar en la etiqueta `<head></head>` añadiendo un fichero externo.
        ```
        <link rel="stylesheet" href="style.css">
        ```
    <br><br>


- Para incluir Javascript en un fichero HTML se puede: 
    - Utilizar la etiqueta `<script></script>` dentro de la etiqueta `<body></body>`.
        ```
        <script>

            //Mostrar mensaje
            function muestraMensaje(){
                document.querySelector("#mensaje").innerHTML="HELLO HELLO!";
            }

            //Alternar mensaje
            function alternaMensaje(){
                document.querySelector(".mensajeAlterno").classList.toggle('active');
            }

        </script>
        ```
    - Utilizar la etiqueta `<script></script>` dentro de la etiqueta `<head></head>`.

    - Invocar en la etiqueta `<body></body>` añadiendo un fichero externo.
        ```
        <script src="js/fun.js"></script>
        ```
    - Invocar en la etiqueta `<head></head>` añadiendo un fichero externo.
        ```
        <script src="js/fun.js"></script>
        ```
    - Utilizar la etiqueta `<script></script>` dentro de la etiqueta `<head></head>`.


### REFERENCIAS
- MDN Elemento button - https://developer.mozilla.org/es/docs/Web/HTML/Element/button
- MDN CSS Básico - https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics
- MDN JS Básico - https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics