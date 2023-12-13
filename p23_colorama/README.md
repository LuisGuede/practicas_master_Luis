# PRÁCTICA 23 - Flex colorama

https://codepen.io/enxaneta/full/adLPwv/

Dado el fichero HTML realizar los siguientes **CASOS DE USO** y observar el resultado. Nótese que tenemos exáctamente 5 flex-items.




1. añadir 'display: flex' al contenedor con sus propiedades por defecto y a los hijos también
    
    ### CONTENEDOR
    - display: flex;
    - flex-direction: row; 
    - justify-content: flex-start; 
    - align-items: normal (stretch); 
    - flex-wrap: nowrap; 
    - align-content: initial; 
    - gap: 0;  

    ### FLEX-CHILDS
    - flex-basis: auto;
    - flex-grow:0;
    - flex-shrink: 1;
    - align-self: initial;


2. Cambiar propiedad justify-content a los siguientes valores
    - justify-content: flex-start;
    - justify-content: center;
    - justify-content: flex-end;
    - justify-content: space-between;
    - justify-content: space-around;
    - justify-content: space-evenly;

3. Cambiar propiedad align-items a los siguientes valores
    - align-items: flex-start;
    - align-items: center;
    - align-items: flex-end;

    **align-items no funciona porque no hay altura**


4. Definimos altura 100vh para el contenedor flex y comprobamos otra vez align-items y sus combinaciones con justify content;
    - align-items: flex-start;
    - align-items: center;
    - align-items: flex-end; 
    - align-items: baseline;
    - align-items: stretch;     

----------------------------------------------------------------------------------------------------------------------------------


5. Cambiamos dirección del eje principal a COLUMN -> 'flex-direction: column'. 

6. Cambiamos propiedad justify-content a todos los valores posibles.

7. Cambiamos propiedad align-items a todos los valores posibles.

----------------------------------------------------------------------------------------------------------------------------------


8. Cambiamos dirección del eje principal a COLUMN -> 'flex-direction: row-reverse' y probamos todos los valores de justify-content y align-items.

9. Cambiamos dirección del eje principal a COLUMN -> 'flex-direction: column-reverse' y probamos todos los valores de justify-content y align-items. 

10. Descansamos 1 minuto y le mandamos nuestro amor al que inventó flex.


------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------


## ESTUDIO DE FLEX BASIS // FLEX GROW // FLEX SHRINK

11. Definimos flex-basis menor al ancho dividido entre el número de elementos y flex-grow = 0 en todos los hijos flex-item.
    - 'flex-basis: 15%;', 'flex-grow: 0;' 
    - > no llega al final del contenedor

12. flex-basis menor al ancho dividido entre el número de elementos y flex-grow  en todos los hijos mayor que cero.
    - 'flex-basis: 15%;', 'flex-grow: 1;' 
    - > llega al final del contenedor - toddos los elementos crecen por igual hasta rellenarlo

13. flex-basis menor al ancho dividido entre el número de elementos y flex-grow: 0 en todos los hijos EXCEPTO UNO que tiene flex-grow=1.
    - 'flex-basis: 15%;', 'flex-grow: 1; (en un item)' 
    - > llega al final del contenedor - se expande el que tiene flex-grow: 1

14. flex-basis menor al ancho dividido entre el número de elementos y flex-grow en todos los hijos igual a cero EXCEPTO DOS.
    - 'flex-basis: 15%;', 'flex-grow: 2 / 'flex-grow: 1; (en un item)' 
    - > El que tiene valor de flex-grow: 2 se expande en mayor proporción
   
--

15. flex-basis mayor al ancho dividido entre el número de elementos y flex-shrink en todos los hijos igual a cero
    - 'flex-basis: 30%;', 'flex-shrink: 0;' 
    - > se expande el contenedor y se desborda del body - aparece scroll

16. flex-basis mayor al ancho dividido entre el número de elementos y flex-shrink en todos los hijos igual y mayor que cero
    - 'flex-basis: 30%;', 'flex-shrink: 1;' 
    - > Los items se comprimen y desaparece el scroll


17. flex-basis mayor al ancho dividido entre el número de elementos y flex-shrink en todos los hijos igual a 1 MENOS UN ITEM cuyo valor es 2
    - 'flex-basis: 30%;', 'flex-shrink: 1; 'flex-shrink: 2;(en un item)' 
    - > See comprime más el que tiene mayor flex-shrink (ver formula).
--

18. Descansamos 1 minuto y le mandamos nuestro amor al que inventó flex-grow y shrink. Este lo necesita mucho.

------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## ESTUDIO DE MARGIN Y PADDING

19. Añadimos margin al contenedor y aumentamos el valor progresivamente.
    1. Los items NO REDUCEN SU ALTURA,  TODOS los márgenes se aplican  (top, right, bottom, left) y el elemento se desplaza hacia en vertical abajo. TANTO EN ROW,  EN COLUMN, EN COLUMN-REVERSE y ROW-REVERSE
    2. cuando el margin colisiona con el contenido, los items siguen reduciéndose de ancho y el contenido se desborda POR EL ANCHO.

20. Añadimos padding al contenedor y aumentamos el valor progresivamente.
    1. Los items REDUCEN SU TAMAÑO,  TODOS los paddings se aplican  (top, right, bottom, left) y el elemento se desplaza hacia en vertical abajo. TANTO EN ROW,  EN COLUMN, EN COLUMN-REVERSE y ROW-REVERSE


21. Añadimos padding a los items
    - El padding se añade y cuando contacta con el contenido el ITEM SE EXPANDE EN DIRECCIÓN AL MAIN AXIS (tanto en row como en column)
    - EN ROW-REVERSE Y COLUMN-REVERSE (flex direction), los items crecen negativamente y DESAPARECEN POR LA IZQUIERDA Y LA PARTE SUPERIOR DEL VIEWPORT RESPECTIVAMENTE
    - Observamos que el contenido nunca se desborda con ancho definido mediante flex-basis.

22. Añadimos margin a los items
    1. El margin se añade REDUCIENDO EL TAMAÑO DEL ITEM y  cuando éste contacta con el contenido el margin sigue creciendo y EL CONTENDOR SE EXPANDE EN DIRECCIÓN AL MAIN AXIS (tanto en row como en column)
    2. EN ROW-REVERSE Y COLUMN-REVERSE (flex direction), los items crecen negativamente y DESAPARECEN POR LA IZQUIERDA Y LA PARTE SUPERIOR DEL VIEWPORT RESPECTIVAMENTE
    3. margin:auto centra los items en el centro (equivale a justify-content:space-around y align-items: center en el contenedor)


------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## ESTUDIO DE WIDTH Y HEIGHT

23. Sustituimos FLEX BASIS por WIDTH
    - suma de width de los items MAYOR que el tamaño del viewport -> No se desborda ni aumenta el contenedor
    - suma de width de los items MENOR que el tamaño del viewport -> No llega al fina del contenedor
    - Paddings cuando colisionan con el contenido SI hacen que se desborde y que se descuadre.
    - si ambas magnitudes coinciden, prevalece flex-basis

24. Sustituimos FLEX BASIS por HEIGHT (en flex-direction: column)
    - suma de height de los items MAYOR que el tamaño del viewport -> No se desborda ni aumenta el contenedor
    - suma de height de los items MENOR que el tamaño del viewport -> No llega al fina del contenedor
    - Paddings cuando colisionan con el contenido SI hacen que se desborde el contenido de cada item y que se descuadre.

25.  max-width, min-width, max-height, min-height
    - En ROW y ROW-REVERSE max-width sobreescribe flex-basis y flex-grow; min-width sobreescribe flex-basis y flex-shrink
    - En  COLUMN y COLUMN-REVERSE max-height sobreescribe flex-basis y flex-grow; min-height sobreescribe flex-basis y flex-shrink


------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## ESTUDIO DE FLEX WRAP // ALIGN ITEMS // ALIGN CONTENT

26. Definimos en los hijos -> 'flex-basis: 38%;' y flex-shrink: 0; flex-grow: 0; -> observamos que se desborda.

27. Definimos en el contenedor -> 'flex-wrap: wrap'; -> observamos que se apilan hacia abajo los hijos desbordados.

28. Definimos todos los valores posibles de align-items y observamos que AFECTAN INDIVIDUALMENTE A CADA FILA DE ITEMS.

29. Definimos todos los valores posibles de align-content y observamos que AFECTAN A TODO EL GRUPO DE ITEMS.
    - align-content: flex-start;
    - align-content: center;
    - align-content: flex-end;
    - align-content: space-between;
    - align-content: space-around;
    - align-content: space-evenly;
    - align-content: stretch;

30.  Definimos flex-wrap: 'wrap-reverse' y observamos que SE INIVERTE EL EJE CROSS AXIS 



------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## ESTUDIO DE FLEX ORDER // ALIGN SELF

31. Definimos order: 3 de manera individual a un item y observamos que cambia su posición respecto a sus hermano y lo ponde al final del contenedor

32. Definimos valores distintos de order a cada item y los permutamos.

33. Definimos al mismo item align-self: flex-start y observamos que se define align-items para él solo.

34. Descansamos 1 minuto y nos damos palmaditas en la espalda por haber aguantado esta práctica hasta el final.

------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## SHORTHANDS

35. flex-flow: [flex-direction] [flex-wrap]

36. flex [flex-grow] [flex-shrink] [flex-basis]


------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

## ANIDACIÓN

37. Flex se puede anidar definiendo la propiedad 'display: flex' en cualquier flex-item adquiriendo éste funcionalidad flex plena. 


## APLICACIONES

38. sistemas de columnas

39. Centrado / espaciado de elementos

40. Transición a responsive en columna con flex-direction