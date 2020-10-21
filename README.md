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


![Diagrama](/Images/Diagrama1.jpeg | width=100)
![Diagrama](/Images/Diagrama2.jpeg | width=100)
