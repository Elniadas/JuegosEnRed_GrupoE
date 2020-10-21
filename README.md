# JuegosEnRed_GrupoE

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

> - Pruebas de rapidez
> - Pruebas de destreza visual / memoria fotográfica
> - Plataformas en el mundo del juego (no pertenece a la categoría de pruebas)

> - Pruebas principales: Deben ser obligatoriamente realizadas por los jugadores para poder terminar el circuito y fijar una marca de tiempo. Los jugadores no podrán acabar su partida hasta haber realizado todas las pruebas.

> - Pruebas secundarias / opcionales: Al terminar una prueba principal y antes de fijar la marca de tiempo, cada jugador optará a realizar una variante de esta (generalmente más difícil o engorrosa). 
> - Si se termina con éxito, los jugadores obtendrán power ups de alto nivel (se hablan de ellos más adelante) con los cuales podrán perjudicar al contrario. 
Los jugadores pueden decidir cuándo hacer uso de su power up, afectando a su rival al instante y en tiempo real, aunque esté realizando su prueba. 
Realizar las pruebas secundarias tiene sus ventajas pero también sus inconvenientes, ocupando más tiempo de los jugadores antes de fijar la marca de tiempo en cada escenario, por lo que conviene valorar el beneficio / riesgo de realizarla o no.

> - Power Ups de nivel bajo: estos se encuentran sueltos por el mapa, alrededor del circuito de pruebas (escondidos o en lo alto de plataformas). Los efectos de estos power ups afectarán en el jugador que los recoja y no en el contrincante. 

> - +Movement speed: el jugador se mueve con mayor rapidez
> - -Time: el jugador podrá restar pocos segundos a su marcador

> - Power ups de alto nivel: obtenidos al realizar las pruebas secundarias. Causan un gran impacto en el circuito de pruebas del jugador contrario. Los jugadores pueden decidir el momento en que quieran activarlo. Algunos de estos pueden ser:

> - Blindsighted: Durante un breve periodo de tiempo, el jugador contrario no podrá ver nada en su lado de la pantalla.
> - Confusión: El jugador que lo active podrá intercambiar posiciones con el jugador contrario, pudiendo realizar tan solo las pruebas que le faltaban.
> - Zeus: A lo largo del circuito del jugador contrario al que lo active, spawnearán intermitentemente rayos que se deberán esquivar; el jugador que toque los rayos tendrá su velocidad de movimiento reducida
> - Time++: Suma tiempo al contador del jugador contrario.
> - King of the Frost Giants: congela completamente al jugador contrario y todo lo que esté haciendo, pero su tiempo sigue sumando. 

> ### 2.2 Flujo del Juego

> - En el siguiente apartado se describirán de forma general el transcurso de una partida desde el arranque del juego y posteriormente, en el apartado de Niveles, se detalla cada una de las pruebas más específicamente.

> - Los jugadores comenzarán en el Menú Principal y tendrán varias opciones:
> - Si desean comenzar una partida deben acceder al botón de Jugar.
> - Si desean ajustar el volumen o acceder a la configuración del juego y controles, podrán acceder a ello mediante el botón de Configuración.
> - Cada vez que se finaliza una partida, se guarda la puntuación de tiempo de todos los jugadores junto a sus nombres, por tanto, si desean acceder a ver el historial de  puntuaciones deberán acceder al botón de Historial de Partidas.

> - Si se accionó el botón de Jugar, el sistema preguntará a ambos jugadores un nickname, para poder posteriormente guardar las puntuaciones.
> - Ha llegado el momento de comenzar la partida, pero antes, ambos jugadores previsualizarán una pequeña guía o tutorial del juego mostrando los objetivos, controles y las reglas. Este tutorial se podrá saltar. Después del tutorial da comienzo la partida, donde cada jugador realizará sus pruebas de la manera más rápida posible. Tras ello, valorarán si entorpecer el transcurso de la partida del jugador contrario a cambio de más tiempo, resulta beneficioso.

> - Al final de la partida, el sistema lleva a cabo un recuento del tiempo total de acabado de cada jugador en cada una de las pruebas y determinará un ganador, guardando la puntuación en el Historial de Partidas.

> - Si se vuelve a iniciar otra partida, las pruebas puede que se encuentre en un distinto orden.


![Diagrama](/Images/Diagrama1.jpeg)
![Diagrama](/Images/Diagrama2.jpeg)

> ### 2.3 Cámara

> - Las acciones principales se desarrollan con eventos generalmente en primer plano, es decir, la cámara se sitúa directamente enfocando a la prueba que se tenga que realizar.

> - En cuanto al movimiento del jugador y el mundo del juego, este se desarrolla horizontalmente o con un desplazamiento horizontal (propio de juegos como Mario Bros o Sonic entre otros), también denominado Scroll lateral.

> ### 2.4 Controles

> - Las teclas principales de movimiento del jugador son: “D” (Movimiento hacia derecha), “A” (Movimiento hacia izquierda), “W” (Salto), “E” (Interactuar con una prueba para realizarla). Para un segundo jugador, las teclas de movimiento serán: “Flecha derecha” (Movimiento hacia derecha), “Flecha izquierda” (Movimiento hacia izquierda), “Flecha arriba” (Salto), “M” (Interactuar con una prueba para realizarla)

> - Dentro de las pruebas con las que se interactúe, los controles serán los mismos que los anteriores, los de movimiento servirán en este caso para desplazarnos por la prueba y el botón de interacción para realizar las distintas acciones.

> ### 2.5 Puntuación

> - Como se ha mencionado anteriormente, al final de cada partida se guarda el tiempo total que ambos jugadores han tardado en completar el recorrido de pruebas y el sistema decide quién es el ganador.

> - El tiempo empezará a correr al inicio de cada escenario, y se detendrá una vez los jugadores hayan interactuado con la puerta que lleva al siguiente nivel / siguiente prueba. 
> ## 3. Interfaces
> - Pantalla principal: con los botones Jugar, Historial de Partidas y Configuración como se ha mencionado en el apartado del Flujo del Juego.
![Diagrama](/Images/Pantalla_principal.png)
> - Pantalla de jugadores: pantalla en la que se muestra a ambos jugadores. Podrán ver su avatar, cambiar su nickname y se mostrarán los controles que deberán usar cada uno de ellos. 
![Diagrama](/Images/Players.png)
> - Pantalla de juego: la parte superior es el mapa del jugador 1 y la de abajo la del 2. Ambas tienen el tiempo que llevan consumido. Arriba a la derecha hay un botón para poder pausar el juego. 
![Diagrama](/Images/Juego.png)
> - Pantalla de pausa: aparece cuando se decide pausar el juego y contiene los botones: 
> - Continuar: para salir y continuar con la partida
> - Cómo jugar: donde aparecen una pantalla con las instrucciones con los controles y objetivo del juego.
> - Ajustes: para configurar sonidos…
> - Salir: para salir y volver a la pantalla principal.

![Diagrama](/Images/Pausa.png)

> ## 4. Pruebas

> - GüinDeReis está formado por 4 pruebas que deberán completarse lo más rápido posible con ayuda de power ups que se obtienen a lo largo del mapa, o bien realizando las pruebas secundarias como ha mencionado anteriormente. 

> ### 4.1. Prueba de las flechas

> - Para comenzar con este nivel, el jugador comenzará en un mapa con forma de copo de nieve gigante que contiene plataformas, como se puede ver en la imagen. Para comenzar la prueba tendrá que saltar y encontrar una esfera plateada. Una vez se pose en la plataforma donde se encuentre la esfera la prueba de las flechas comenzará. 


> - La prueba se compone de una placa de hielo con forma circular girando constantemente y con el número de flechas restantes que hay que clavar.
El objetivo de esta prueba es incrustar el número de flechas que se solicita ( mientras la placa esté dando vueltas) en los huecos disponibles sin que ninguna flecha se choque con ningún otro pulsando el botón de accion correspondiente a cada jugador. 
> - Si una flecha se choca con una que ya está clavada, la prueba se reiniciará eliminando todas las flechas ya clavadas y teniendo que volver a empezar. 

> - Una vez conseguir clavar todas las fechas, se le ofrece al jugador la opción de realizar la prueba secundaria: que consta de clavar en esta ocasión 15 flechas en una placa giratoria que ya tiene objetos clavados (por lo que no se podrán clavar en ese mismo sitio). 

> - Una vez superada la prueba opcional, el jugador obtendrá el power up King of the Frost Giants, que congela completamente al jugador contrario y todo lo que esté haciendo, pero su tiempo sigue sumando. 

![pruebapinchos](/Images/pruebapinchos.jpg)
![Flecchas](/Images/Flechas.png)

> ### 4.2. Prueba de electricidad 

> - El objetivo de esta prueba será llevar la corriente de un punto a otro del recorrido girando las partes de los cables mal colocadas. Los jugadores podrán desplazarse a lo largo del circuito con las teclas de movimiento (W,A,S,D y las flechas) e interactuar con los cables mal orientados con las teclas E y 0.

> - Una vez terminado el primer circuito se le ofrece al jugador la opción de realizar un segundo circuito (la prueba secundaria).
> - Si decide realizarla, se le presentará al usuario un     circuito generalmente más complejo y con un objetivo extra; A lo largo del nuevo circuito se colocarán unas bombillas, y los jugadores tienen que llevar la corriente al otro extremo del circuito y además dejar las bombillas encendidas.

> - Una vez superada la prueba opcional, el jugador obtendrá el power up Blindsighted, que cegará completamente la visión del jugador rival por unos instantes.

![Electrica](/Images/Eléctrica.jpg)
![Electrica](/Images/Electricidad_2.png)

> ### 4.3. Prueba del contador
> - El jugador se acercará al pulsador que está en el medio de la sala con un público a modo de espectadores. 

> - Aparecerá una pantalla con el número 7.00 y en más pequeño los números 0.00. Los números 0.00 empiezan a contarse hacia arriba como si fuese un cronómetro y cuando llegue al 4.5 la pantalla se cierra. 

> - El objetivo es que el jugador lleve la cuenta del cronómetro en su cabeza y que intente acercarse al número 7.00 (qué es el que aparece en grande) pulsando las teclas E y 0. Las respuestas válidas son las que se encuentran entre el 6.5 y el 7.5. 

> - Si el jugador lo clava y hace 7.00 obtendrá el power up Time++ a modo de recompensa, que sumará tiempo al contador del jugador contrario. 


![contador](/Images/contador.jpg)

![contador](/Images/Cronometro.png)


