# PRÁCTICA 17 - Position

1. Crea un contenedor cuadrado de 350px por 350px con el fondo rojo.
2. Crea un hijo cuadrado de 40px von fondo verde. 
3. Identificar la propiedad 'position: static' en ambos elementos en la pestaña 'computed' de chrome.
4. Añadir propiedades 'top: 20px; left: 20px; right: 20px; bottom: 20px;'.
5. Ovservar el resultado.
6. Añadir 'position: relative' al hijo y observar el resultado.
7. RETO: Posicionar el recuadro verde en el centro del recuadro rojo.

------------------------------------------------------------------------------------------------------

8. Crea un contenedor cuadrado de 350px por 350px con el fondo azul.
9. Crea un hijo cuadrado de 40px con fondo verde y 'position: absolute'. 
11. RETO: Posicionar el recuadro verde en el centro del recuadro rojo.

------------------------------------------------------------------------------------------------------

12. Crea otro hijo cuadrado de 40px con fondo rosa y 'position: absolute' al mismo nivel que el primero. 
13. RETO: Posiciona un hijo encima del otro con z-index.
14. Altérnalos de plano
------------------------------------------------------------------------------------------------------

14. Crea un footer que se pegue en el fondo de la pantalla con 'position: fixed'.
15. RETO: Soluciona el problema de z-index del footer. 

------------------------------------------------------------------------------------------------------

16. Crea un title con <h1>
17. Crea un párrafo con <p>
18. Crea un elemento sticky con un texto que diga "sticky", background de un color a tu gusto que se pegue al top del viewport

-----------------------------------------------------------------------------------------------------

### NOTAS

- CSS crea todos los contextos de ejecución posibles entre todos los items que haya que generen contextos. El primero de ellos es la etiqueta HTML. Si creamos elementos anidados con propiedades z-index, es necesario definir esta propiedad en los padres para que los hijos no creen superposiciones no deseadas con aquellos elementos cuya propiedad sea 'z-index:auto' como por ejemplo en elementos con 'position:fixed'. 

- En 'position:absolute' el elemento se deforma al aplicar top, right, bottom, left. Se puede dimensionar aplicando todas estas propiedades. Además los elementos 'inline' pasan a ser 'block' al aplicar 'position:absolute'

### REFERENCIAS

- Css position - https://developer.mozilla.org/es/docs/Web/CSS/position
- Contexto de apilamiento - https://developer.mozilla.org/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
- Layout y bloque contenedor - https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block