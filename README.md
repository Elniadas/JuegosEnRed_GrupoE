# JuegosEnRed_GrupoE

- Adrián Valiente González: a.valiente.2018@alumnos.urjc.es    | Adrian-Valiente
- Aitor García Prádanos:    a.garciap.2018@alumnos.urjc.es     | aitoorgrc
- Daniel Sánchez Cánovas:   d.sanchezc.2018@alumnos.urjc.es    | Elniadas
- Javier Morales Lasheras:  j.morales.2018@alumnos.urjc.es     | javixmorales

# GDD - JUEGOS EN RED

> ## Concepto del juego

> - El estudio, TheNidesJ, está formado por un grupo de 4 personas, Adrián Valiente González, Javier Morales Lasheras, Daniel Sánchez Cánovas y Aitor García Prádanos.

> -	El título del juego será algo original y fuera de todo lo común. Se estableció el siguiente nombre de juego: GüinDeReis (WinTheRace). El nombre ya describe un poco el juego ya que traducido al español sería “Gana la carrera”. 
 
> -   El género del videojuego va a ser un tanto variado. El juego en si trata de una carrera entre dos jugadores, en la cual tienen que ir realizando pruebas. Estas pruebas podrán ser de todo tipo, donde destacan sobre todo los géneros tanto de puzles como de plataformas.
  
> -  La plataforma en la que se quiere centrar para la salida del videojuego es en PC. Se considera que es una muy buena plataforma para lanzar el juego y puede dar una gran repercusión.
 
> - En cuanto a la versión del juego, se lanzará una versión beta que podrá ser probada por determinados jugadores en local para comprobar si el juego pudiera llegar a tener éxito. De ser así se lanzará la versión 1.0 de manera online en PC.
 
> - Sinopsis de Jugabilidad y Contenido (descripción breve del juego, jugabilidad mecánicas y contenido): GüinDeReis es un juego competitivo en el que los jugadores se embarcan en una carrera por resolver diversas pruebas donde la rapidez y la destreza con la que se realiza cada una de ellas, son factores clave. El juego combina distintos géneros y como se mencionó anteriormente, el tiempo es el factor que determina la victoria de un jugador u otro.
 
> - Con relación al aspecto visual, se tratará de un aspecto 2D Flat en el cual veremos el juego desde una perspectiva lateral y a los jugadores corriendo de un lado al otro de la pantalla.

> - El juego ha sido realizado a partir de las ideas que se han ido tomando de otros juegos. Estos han sido, tanto FireBoy and WaterGirl, del cual se ha sacado la idea general del juego. En cuanto a las pruebas y niveles, que serán expuestas posteriormente, Wii Party ha sido una gran inspiración, ya que tiene un modo de juego muy parecido al que se plantea.
 
> - Tecnología (hardware y software que se requiere para producir el juego. Lenguaje de programación, editor de sonidos etc) La tecnología necesaria para el videojuego en cuestión, mayormente va a estar relacionada con JavaScript y HTML

> ## 2. Mecánicas de juego

> - En este apartado se explicará más detalladamente la jugabilidad, progreso de una partida y las acciones que puede llevar a cabo cada jugador en cada momento dentro del mundo del juego. Junto a esto, se describirán los controles del juego, el tipo de cámara empleada en cada evento y cómo se guardan las puntuaciones de los jugadores.

> ### 2.1 Jugabilidad

> - Como se ha mencionado anteriormente, GüinDeReis es un juego donde la rapidez con la que se realiza cada una de las pruebas del circuito del mundo del juego, es crucial para establecer una buena marca de tiempo. Se establece una clasificación general de las pruebas según qué destreza se necesita en cada una de ellas:

> - Cada partida estará compuesta de 4 pruebas para cada jugador, más una quinta donde no habrá que realizar nada pero servirá para finalizar las partidas. Las pruebas se dividen en:
> - Pruebas de rapidez
> - Pruebas de destreza visual / memoria fotográfica
> - Plataformas en el mundo del juego (no pertenece a la categoría de pruebas)

> - Pruebas principales: Deben ser obligatoriamente realizadas por los jugadores para poder terminar el circuito y fijar una marca de tiempo. Los jugadores no podrán acabar su partida hasta haber realizado todas las pruebas.

> - Pruebas secundarias / opcionales: Al terminar una prueba principal y antes de fijar la marca de tiempo, cada jugador optará a realizar una variante de esta (generalmente más difícil o engorrosa). 

> - Si se termina con éxito, los jugadores obtendrán power ups de alto nivel (se hablan de ellos más adelante) con los cuales podrán perjudicar al contrario. 
El power up se activa al terminar la prueba secundaria, afectando a su rival al instante y en tiempo real, aunque esté realizando su prueba. 
Realizar las pruebas secundarias tiene sus ventajas pero también sus inconvenientes, ocupando más tiempo de los jugadores antes de fijar la marca de tiempo en cada escenario, por lo que conviene valorar el beneficio / riesgo de realizarla o no.

> - Power Ups de nivel bajo: estos se encuentran sueltos por el mapa, alrededor del circuito de pruebas (escondidos o en lo alto de plataformas). Los efectos de estos power ups afectarán en el jugador que los recoja y no en el contrincante. 

> - +Movement speed: el jugador se mueve con mayor rapidez
> - -Time: el jugador podrá restar pocos segundos a su marcador

> - Power ups de alto nivel: obtenidos al realizar las pruebas secundarias. Causan un gran impacto en el circuito de pruebas del jugador contrario. Se activan al instante, al terminar con éxito una prueba secundaria. Algunos de estos pueden ser:

> - Blindsighted: Durante un breve periodo de tiempo, el jugador contrario verá reducido su campo de visión. (Prueba de electricidad)
> - Laser Storm: A lo largo del circuito del jugador contrario, spawnearán intermitentemente rayos que se deberán esquivar; el jugador que toque los rayos tendrá su velocidad de movimiento reducida (Prueba de gimnasio)
> - Time++: Suma tiempo al contador del jugador contrario. (Prueba de contador)

> ### 2.2 Flujo del Juego

> - En el siguiente apartado se describirán de forma general el transcurso de una partida desde el arranque del juego y posteriormente, en el apartado de Niveles, se detalla cada una de las pruebas más específicamente.

> - Los jugadores comenzarán en el Menú Principal y tendrán varias opciones:
> - Si desean comenzar una partida deben acceder al botón de "Jugar".
> - Si los jugadores desean hacer una comprobación de los controles de las diferentes pruebas, podrán acceder al tutorial donde encontrarán todas las pruebas para probarlas las veces que deseen mediante el botón de "Como Jugar".
> - Si desea ajustar el volumen, los jugadores podrán acceder a ello mediante el botón de Configuración.


> - Si se accionó el botón de Jugar, el sistema preguntará a ambos jugadores un nickname, para poder posteriormente guardar las puntuaciones.

> - Al final de la partida, el sistema lleva a cabo un recuento del tiempo total de acabado de cada jugador en cada una de las pruebas y determinará un ganador.



![Diagrama](/Images/Diagrama1.jpeg)
![Diagrama](/Images/Diagrama2.jpeg)

> ### 2.3 Cámara

> - Las acciones principales se desarrollan con eventos generalmente en primer plano, es decir, la cámara se sitúa directamente enfocando a la prueba que se tenga que realizar.

> - En cuanto al movimiento del jugador y el mundo del juego, este se desarrolla horizontalmente o con un desplazamiento horizontal (propio de juegos como Mario Bros o Sonic entre otros), también denominado Scroll lateral.

> ### 2.4 Sonido

> - El Menú principal y el resto del juego tendrá una misma banda sonora y el gameplay da comienzo con el sonido de unas campanas de boxeo. Los distintos escenarios de las distintas pruebas traen consigo sonidos ambientales para una mayor inmersión (pasos en una cinta de correr, cuenta atrás de un reloj, sonidos de chispazos en un escenario de electricidad, efectos de teletransporte al sobrepasar un portal...).

> ### 2.5 Controles

> - Las teclas principales de movimiento del jugador son: “D” (Movimiento hacia derecha), “A” (Movimiento hacia izquierda), “W” (Salto), “E” (Interactuar con una prueba para realizarla). Para un segundo jugador, las teclas de movimiento serán: “Flecha derecha” (Movimiento hacia derecha), “Flecha izquierda” (Movimiento hacia izquierda), “Flecha arriba” (Salto), “Espacio” (Interactuar con una prueba para realizarla)

> - Dentro de las pruebas con las que se interactúe, los controles serán los mismos que los anteriores, exceptuando el botón de acción; los de movimiento servirán para que los jugadores se desplacen por las pruebas, y los de acción varían dependiendo de la prueba.

> ### 2.6 Puntuación

> - Como se ha mencionado anteriormente, al final de cada partida se guarda el tiempo total que ambos jugadores han tardado en completar el recorrido de pruebas y el sistema decide quién es el ganador.

> - El tiempo empezará a correr al inicio de cada escenario, y se detendrá una vez los jugadores hayan llegado al final del último escenario.
> ## 3. Interfaces
> - Pantalla principal: con los botones Jugar, Como Jugar y Sonido como se ha mencionado en el apartado del Flujo del Juego.
![Diagrama](/Game/assets/MenuPrincipalFase2.png)
> - Pantalla de jugadores: pantalla en la que se muestra a ambos jugadores. Podrán ver su avatar y cambiar su nickname. 
![Diagrama](/Game/assets/NicknameFase2.png)
> - Pantalla de juego: la parte superior es el mapa del jugador 1 y la de abajo la del 2. Ambas tienen el tiempo que llevan consumido.
![Diagrama](/Game/assets/InicioFase2.png)
> - Pantalla de pausa: aparece cuando se decide pausar el juego y contiene los botones: 
> - Continuar: para salir y continuar con la partida
> - Cómo jugar: donde aparecen una pantalla con las instrucciones con los controles y objetivo del juego.
![Diagrama](/Game/assets/TutorialFase2.png)
![Diagrama](/Game/assets/TutorialFase2.2.png)
> - Ajustes: para configurar sonidos…
![Diagrama](/Game/assets/SonidoFase2.png)
> - Salir: para salir y volver a la pantalla principal.
![Diagrama](/Game/assets/PauseFase2.png)

> ## 4. Pruebas

> - GüinDeReis está formado por 4 pruebas que deberán completarse lo más rápido posible con ayuda de power ups que se obtienen a lo largo del mapa, o bien realizando las pruebas secundarias como ha mencionado anteriormente. 

> ### 4.1. Prueba de correr

> - El jugador se acercará a la cinta eléctrica que está colocada al final del nivel encima de una plataforma.

> - El objetivo inicial de la prueba es presionar 20 veces 2 teclas alternativamente reflejando que se está corriendo en una cinta eléctrica. 

> - El jugador tiene 2 opciones (se indica según el color de las partículas de cada prueba):

> - Realizar la prueba principal (partículas verdes): es más rápida de realizar, ya que se debe llevar a cabo un número menor de pulsaciones de teclas (20). 

> - Realizar la prueba secundaria (partículas rojas): Se deberá realizar la misma prueba, pero con un mayor número de pulsaciones. Si se supera satisfactoriamente, se le aplicará al jugador contrario el power up "Laser storm"; el jugador que toque los rayos tendrá su velocidad de movimiento reducida durante un tiempo determinado

![contador](/Game/assets/PruebaCorrerFase2.png)
![contador](/Game/assets/CintaFase2.png)

> ### 4.2. Prueba de electricidad 

> - El objetivo de esta prueba será llevar la corriente de un punto a otro del recorrido girando las partes de los cables mal colocados. Los jugadores podrán desplazarse a lo largo del circuito con las teclas de movimiento (A,D y las flechas de izquierda y derecha) e interactuar con los cables mal orientados con las teclas W,S y las flechas de arriba y abajo (giro en ambos sentidos).

> - Una vez terminado el primer circuito se le ofrece al jugador la opción de realizar un segundo circuito (la prueba secundaria, con partícular rojas).

> - Si decide realizarla, se le presentará al usuario un circuito generalmente más complejo y con un objetivo extra; A lo largo del nuevo circuito se colocarán unas bombillas, y los jugadores tienen que llevar la corriente al otro extremo del circuito y además dejar las bombillas encendidas.

> - Una vez superada la prueba opcional, el jugador obtendrá el power up Blindsighted, que cegará parcialmente la visión del jugador rival por unos instantes.

![contador](/Game/assets/PruebaElectricidadFase2.png)
![contador](/Game/assets/ElectricidadFase2.png)

> ### 4.3. Prueba del contador

> - El jugador se acercará al pulsador del final del escenario tras haber realizado el recorrido de plataformas. 

> - Aparecerá una pantalla con un contador que empezará en 00:00 y empezará a sumar tiempo un cronómetro; al llegar al segundo 04:00 la pantalla se cierra. 

> - El objetivo es que el jugador lleve la cuenta del cronómetro en su cabeza y que intente acercarse al número 7.00 pulsando las teclas S y "flecha de abajo". Las respuestas válidas para superar la prueba son las que se encuentran entre el 6.5 y el 7.5. 

> - Si el jugador consigue parar el contador en el segundo 7.00 obtendrá el power up Time++ a modo de recompensa, que sumará tiempo al contador del jugador contrario. 

![contador](/Game/assets/PruebaContadorFase2.png)
![contador](/Game/assets/ContadorFase2.png)

> ### 4.4. Prueba de los símbolos

> - Los jugadores comienzan el nivel en un laboratorio; en él, hay una pizarra con símbolos cambiados de orientación. Al final del escenario, encontrarán un ordenador en el que aparecerán estos símbolos descolocados y en la orientación correcta. Los jugadores deberán colocar los símbolos en el orden correcto para completar la prueba (para este escenario, no hay prueba secundaria).

>- El desplazamiento dentro del ordenador se realiza con las teclas "A" y "D" (jugador 1), y "Flecha Izquierda" y "Flecha Derecha" (jugador 2). Para elegir cada símbolo se hará uso de las teclas "W" y "S" (jugador 1), y "Flecha Arriba" y "Flecha Abajo" (jugador 2).

> - Si los jugadores (1 y 2) olvidan el orden de los símbolos, podrán salir de la prueba respectivamente con las teclas "Q" y "M". 


![contador](/Game/assets/PruebaSimbolosFase2.png)
![contador](/Game/assets/OrdenadorFase2.png)

> ### 4.4. Escenario de Nieve (final)

> - Éste será el último escenario donde los jugadores tendrán que llegar a una bandera final. 

> - Al coger esta bandera se fijará el tiempo de cada jugador individualmente para comprobar el ganador.


![contador](/Game/assets/PruebaNieveFase2.png)
![contador](/Game/assets/Bandera/Bandera.png)




Referencias

Estructura de un GDD:
https://github.com/dsaltares/sion-tower/blob/master/doc/gdd/gdd.pdf
https://www.youtube.com/watch?v=z97ys0TDwDI


