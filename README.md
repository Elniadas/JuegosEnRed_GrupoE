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
> - Si los jugadores desean hacer una comprobación de los controles de las diferentes pruebas, podrán acceder al tutorial donde encontrarán todas las pruebas para probarlas las veces que deseen mediante el botón de Como Jugar.
> - Si desean ajustar el volumen o acceder a la configuración del juego y controles, podrán acceder a ello mediante el botón de Configuración.
> - Cada vez que se finaliza una partida, se guarda la puntuación de tiempo de todos los jugadores junto a sus nombres, por tanto, si desean acceder a ver el historial de  puntuaciones deberán acceder al botón de Historial de Partidas.

> - Si se accionó el botón de Jugar, el sistema preguntará a ambos jugadores un nickname, para poder posteriormente guardar las puntuaciones.

> - Al final de la partida, el sistema lleva a cabo un recuento del tiempo total de acabado de cada jugador en cada una de las pruebas y determinará un ganador, guardando la puntuación en el Historial de Partidas.

> - Si se vuelve a iniciar otra partida, las pruebas puede que se encuentre en un distinto orden.


![Diagrama](/Images/Diagrama1.jpeg)
![Diagrama](/Images/Diagrama2.jpeg)

> ### 2.3 Cámara

> - Las acciones principales se desarrollan con eventos generalmente en primer plano, es decir, la cámara se sitúa directamente enfocando a la prueba que se tenga que realizar.

> - En cuanto al movimiento del jugador y el mundo del juego, este se desarrolla horizontalmente o con un desplazamiento horizontal (propio de juegos como Mario Bros o Sonic entre otros), también denominado Scroll lateral.

> ### 2.4 Sonido

> - Al inciarse el juego, podremos escuchar una música de fondo como de acción para activar a los jugadores y que sientan un poco esa experiencia de una carrera de verdad. Al darle a jugar se podrán escuchar las campanas típicas como cuando empieza un combate de lucha libre. Posteriormente cada prueba tendrá su sonido propio. En la máquina de correr escucharemos los pasos de una persona corriendo en una cinta de correr. En la prueba del contador, se escuchará un reloj de fondo. En la prueba de electricidad, cada vez que movemos una pieza de sitio escucharemos un chispazo para generar esa sensación de estar arreglándolo uno mismo. En todos los niveles, cada vez que aparezca el portal se y lo utilicemos, se escuchará como si de un teletransporte se tratase. Por último se ha querido añadir un sonido de congelación para cuando el power up de congelar este activo y de esta manera hacéserlo saber a los jugadores.

> ### 2.5 Controles

> - Las teclas principales de movimiento del jugador son: “D” (Movimiento hacia derecha), “A” (Movimiento hacia izquierda), “W” (Salto), “E” (Interactuar con una prueba para realizarla). Para un segundo jugador, las teclas de movimiento serán: “Flecha derecha” (Movimiento hacia derecha), “Flecha izquierda” (Movimiento hacia izquierda), “Flecha arriba” (Salto), “Espacio” (Interactuar con una prueba para realizarla)

> - Dentro de las pruebas con las que se interactúe, los controles serán los mismos que los anteriores, los de movimiento servirán en este caso para desplazarnos por la prueba y el botón de interacción para realizar las distintas acciones.

> ### 2.6 Puntuación

> - Como se ha mencionado anteriormente, al final de cada partida se guarda el tiempo total que ambos jugadores han tardado en completar el recorrido de pruebas y el sistema decide quién es el ganador.

> - El tiempo empezará a correr al inicio de cada escenario, y se detendrá una vez los jugadores hayan interactuado con la puerta que lleva al siguiente nivel / siguiente prueba. 
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

> - El objetivo de esta prueba es presionar 20 veces 2 teclas simultáneamente reflejando que se está corriendo en una cinta eléctrica. 

> - El jugador tiene 2 opciones (se indicarán con una señal al lado de la cinta eléctrica):

> - Realizar la prueba principal: será más sencilla y rápida de realizar, ya que consiste en presionar lo más rápido posible 2 teclas cercanas a su alcance (por ejemplo A y D / izquierda derecha). Si se supera de este modo no se obtendrá un power up para pifiar al contrincante. 

> - Realizar la prueba secundaria: Será realizar la misma prueba sólo que el jugador deberá de realizar un número mayor de pulsaciones. Si se supera de este modo se obtendrá el power up Zeus que hará que a lo largo del próximo circuito del jugador contrario, spawnearán intermitentemente rayos que se deberán esquivar; el jugador que toque los rayos tendrá su velocidad de movimiento reducida, por lo que irá más lento por un tiempo determinado. 

![contador](/Game/assets/PruebaCorrerFase2.png)
![contador](/Game/assets/CintaFase2.png)

> ### 4.2. Prueba de electricidad 

> - El objetivo de esta prueba será llevar la corriente de un punto a otro del recorrido girando las partes de los cables mal colocadas. Los jugadores podrán desplazarse a lo largo del circuito con las teclas de movimiento (A,D y las flechas de izquierda y derecha) e interactuar con los cables mal orientados con las teclas W,S y las flechas de arriba y abajo.

> - Una vez terminado el primer circuito se le ofrece al jugador la opción de realizar un segundo circuito (la prueba secundaria).

> - Si decide realizarla, se le presentará al usuario un circuito generalmente más complejo y con un objetivo extra; A lo largo del nuevo circuito se colocarán unas bombillas, y los jugadores tienen que llevar la corriente al otro extremo del circuito y además dejar las bombillas encendidas.

> - Una vez superada la prueba opcional, el jugador obtendrá el power up Blindsighted, que cegará completamente la visión del jugador rival por unos instantes.

![contador](/Game/assets/PruebaElectricidadFase2.png)
![contador](/Game/assets/ElectricidadFase2.png)

> ### 4.3. Prueba del contador

> - El jugador se acercará al pulsador que está en el medio de la sala con un público a modo de espectadores. 

> - Aparecerá una pantalla con un contador que empezará en 00:00. Empezará una cuenta progresiva como si fuese un cronómetro y cuando llegue al 04:00 la pantalla se cierra. 

> - El objetivo es que el jugador lleve la cuenta del cronómetro en su cabeza y que intente acercarse al número 7.00 pulsando las teclas E y 0. Las respuestas válidas son las que se encuentran entre el 6.5 y el 7.5. 

> - Si el jugador lo clava y hace 7.00 obtendrá el power up Time++ a modo de recompensa, que sumará tiempo al contador del jugador contrario. 

![contador](/Game/assets/PruebaContadorFase2.png)
![contador](/Game/assets/ContadorFase2.png)

> ### 4.4. Prueba de los símbolos

> - Los jugadores se encontrarán en un laboratorio.

> - Al entrar en él podrán visualizar una especie de símbolos que deberán memorizar. Al pasar al otro lado del nivel, encontrarán un ordenador donde al interactuar con él aparecerán estos símbolos descolocados. Tendrán que colocarlos en el orden en el que aparecían para completarla.

> - Si se te olvida el orden, siempre puedes salir de la prueba y volver a hacerlo. 


![contador](/Game/assets/PruebaSimbolosFase2.png)
![contador](/Game/assets/OrdenadorFase2.png)

> ### 4.4. Prueba de la nieve

> - Ésta será la prueba final donde los jugadores tendrán que llegar a una bandera final. 

> - Al coger esta bandera se fijará el tiempo de los jugadores para al final ver quién es el ganador.


![contador](/Game/assets/PruebaNieveFase2.png)
![contador](/Game/assets/Bandera/Bandera.png)




Referencias

Estructura de un GDD:
https://github.com/dsaltares/sion-tower/blob/master/doc/gdd/gdd.pdf
https://www.youtube.com/watch?v=z97ys0TDwDI


