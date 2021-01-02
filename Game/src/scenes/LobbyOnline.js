class LobbyOnline extends Phaser.Scene {
    constructor() {
        super({ key: "LobbyOnline" });

    }
    init(data) {
        this.data = data;
        this.soundManager = data.soundManager
        this.partidaDatos = data.partida;
        console.log(this.partidaDatos);

    }

    preload() {
        this.load.html('User1', './src/inputName.html');
        this.load.html('Chat', './API/index.html');

    }


    create() {
        //this.scene.launch("Chat");
        this.timer = false;

        let lobby = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'Victoria');
        lobby.displayHeight = this.game.canvas.height
        lobby.displayWidth = this.game.canvas.width;

        this.logged = [false, false]
        this.p1Name = '';
        this.p2Name = '';

        var Usuario = { id: 0, user: "", status: "reconnecting", side: 0 };
        this.yo = Usuario;


        let player1 = this.add.sprite(150, 450 - 50, 'P1');
        player1.setScale(0.8)
        this.textP1 = this.add.text(player1.x - 100, player1.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });
        this.iconoEstado = this.add.image(player1.x - 120, player1.y - 190, "Desconectado");
        this.iconoEstado.scale = 0.1


        this.inputTextP1 = this.add.dom(player1.x, player1.y + 200).createFromCache('User1');


        this.inputTextP1.addListener('keyup');


        this.inputTextP1.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');

                    //  Hide the login element
                    this.setVisible(false);
                    this.p1Name = inputText.value;
                    //  Populate the text with whatever they typed in
                    that.textP1.setText('Jugador 1 ' + inputText.value);

                    that.logged[0] = true;

                    Usuario.user = inputText.value;
                    Usuario.status = "connecting";
                    Usuario.side = 1;
                    that.conectarUsuario(Usuario, function () {
                        that.actualizarLista(() => {

                            if (Usuario.status === "connected") {
                                //console.log("Cambiando sprite a conectado")
                                //that.desconectado.setTexture("Conectado")
                            }

                        })
                    });
                    inputText.value = ''
                } else {
                    console.log("Para conectarse elija un nombre de usuario válido")
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: this.textP1,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }

        });



        let player2 = this.add.sprite(920, 450 - 50, 'P2')
        player2.flipX = true;
        player2.setScale(0.8)
        this.textP2 = this.add.text(player2.x - 100, player2.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });
        this.iconoEstadoP2 = this.add.image(player2.x - 120, player2.y - 190, "Desconectado");
        this.iconoEstadoP2.scale = 0.1


        this.inputTextP2 = this.add.dom(player2.x, player2.y + 200).createFromCache('User1');


        this.inputTextP2.addListener('keyup');


        this.inputTextP2.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');
                    this.p2Name = inputText.value
                    //  Hide the login element
                    this.setVisible(false);

                    //  Populate the text with whatever they typed in
                    that.textP2.setText('Jugador 2 ' + inputText.value);
                    that.logged[1] = true;

                    Usuario.user = inputText.value;
                    Usuario.status = "connecting";
                    Usuario.side = 2;
                    that.conectarUsuario(Usuario, function () {

                        that.actualizarLista(() => {
                            if (Usuario.status === "connected") {
                                //console.log("Cambiando sprite a conectado")
                                // that.desconectado.setTexture("Conectado")
                            }


                        })
                    });
                    inputText.value = ''
                } else {
                    //  Flash the prompt
                    console.log("Para conectarse elija un nombre de usuario válido")
                    this.scene.tweens.add({
                        targets: this.textP2,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }

        });







        let pbCM = this.add.sprite(200, 10, "buttonPlay");
        pbCM.setFrame(0);
        pbCM.setScale(0.75);
        pbCM.setOrigin(0.48, -0.1);
        pbCM.setInteractive();

        pbCM.on("pointerover", () => {
            pbCM.setFrame(1);
        })

        pbCM.on("pointerout", () => {
            pbCM.setFrame(0);
        })

        pbCM.on("pointerdown", () => {
            pbCM.setFrame(2);
        })

        pbCM.on("pointerup", () => {
            pbCM.setFrame(0);
            let textoP1 = this.inputTextP1.getChildByName('nameField').value
            let textoP2 = this.inputTextP2.getChildByName('nameField').value
            if (textoP1 !== '') {

                this.inputTextP1.removeListener('keyup');
                this.inputTextP1.setVisible(false);
                this.p1Name = textoP1;
                this.textP1.setText('Jugador 1 ' + textoP1);
                this.logged[0] = true;
                textoP1 = ''
            }


            if (textoP2 !== '') {
                //  Turn off the click events
                this.inputTextP2.removeListener('keyup');
                this.p2Name = textoP2
                //  Hide the login element
                this.inputTextP2.setVisible(false);

                //  Populate the text with whatever they typed in
                this.textP2.setText('Jugador 2 ' + textoP2);
                this.logged[1] = true;
                textoP2 = ''
            }


            if (this.logged[0] === true && this.logged[1] === true) {
                this.borrarIntervalos();
                this.scene.stop("Lobby");
                this.scene.start("Scene_play", { escena: null, soundManager: this.soundManager, names: { p1: this.p1Name, p2: this.p2Name } });
            }
        })

        this.cjT = this.add.text(pbCM.x - 145, pbCM.y + 30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjT.setText("Jugar");

        //Chat//






        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////

        var that = this;

        this.chat = this.add.dom(550, 440).createFromCache('Chat');
        window.chat = this.chat;

        //LO QUE SERIA EL MAIN EN EL OTRO SCRIPT//

        ///////////////////////////////////
        ////////////////////////////////
        ////////////////////////////
        //////////////////

        let windowFocus = true;

        //Cuando se carga la página mostramos a los usuarios conectados//


        that.actualizarLista()

        //Usuario que se conecta al servidor//



        //Desconectamos al usuario cuando cierra la ventana//

        window.addEventListener('unload', (event) => {
            //that.clientLeaving(Usuario);
        })




        //Simulamos una funcion Update//


        function actualizarSistema() {

            console.log("ACTUALIZACION USUARIOS")
            that.getLobbyPlayers((players) => {
                if (players.length != 0) {
                    console.log("Mostrando los estados actualizados :", players);
                    console.log("YO: ", Usuario);
                    for (let i = 0; i < players.length; i++) {

                        if (i === 0) {
                            if (players[i].status === "missing") {
                                console.log("Desconectando usuarios");
                                that.desconectarUsuario(players[i]);
                            }
                            else if (players[i].status === "connected") {
                                console.log("Ausentando usuarios");
                                that.ausentarUsuario(players[i]);
                            } else {
                                console.log("No existe");
                            }

                        }
                        if (i === 1) {
                            if (players[i].status === "connected") {
                                console.log("NO ES DONDE KEREMOSSASD")

                                that.ausentarUsuario(players[i], () => {
                                    if (windowFocus) {
                                        Usuario.status = "reconnecting";
                                        console.log("Usuario desconectado ahora vamos a conectarlo")
                                        that.conectarUsuario(Usuario, () => {
                                            console.log("SUPUESTAMENTE desconcetaduu")
                                            console.log(Usuario)
                                            that.actualizarLista()
                                            //console.log("ACTUALIZACION USUARIOS FINALIZADA")
                                            console.log("TIME OUT DE DESCONECTAR USUARIO EXISTE")

                                            setTimeout(() => {

                                                actualizarSistema()
                                            }, 12000)
                                            return
                                        });
                                    } else {
                                        console.log("TIME OUT DE DESCONECTAR USUARIO EXISTE ELSE")
                                        console.log(Usuario)
                                        that.actualizarLista()

                                        setTimeout(() => {

                                            actualizarSistema()
                                        }, 12000)
                                        return;


                                    }
                                });

                            } else if (players[i].status === "missing") {
                                console.log("NO ES DONDE KEREMOSSASD")
                                that.desconectarUsuario(players[i], () => {
                                    if (windowFocus) {
                                        Usuario.status = "reconnecting";
                                        console.log("Usuario desconectado ahora vamos a conectarlo")
                                        that.conectarUsuario(Usuario, () => {

                                            that.actualizarLista()
                                            //console.log("ACTUALIZACION USUARIOS FINALIZADA")

                                            console.log("TIME OUT DE AUSENTAR USUARIO EXISTE")
                                            console.log(Usuario)

                                            setTimeout(() => {


                                                actualizarSistema()
                                            }, 12000)

                                            return
                                        });
                                    } else {
                                        console.log("TIME OUT DE AUSENTAR USUARIO EXISTE ELSE")
                                        console.log(Usuario)
                                        that.actualizarLista();

                                        setTimeout(() => {

                                            actualizarSistema()
                                        }, 12000)
                                        return

                                    }
                                });
                            } else {
                                console.log("No existe");
                                //
                                if (windowFocus) {
                                    Usuario.status = "reconnecting";
                                    console.log("Usuario desconectado ahora vamos a conectarlo")
                                    that.conectarUsuario(Usuario, () => {

                                        that.actualizarLista()
                                        //console.log("ACTUALIZACION USUARIOS FINALIZADA")

                                        console.log("TIME OUT DE AUSENTAR USUARIO EXISTE")
                                        console.log(Usuario)

                                        setTimeout(() => {


                                            actualizarSistema()
                                        }, 12000)

                                        return
                                    });
                                } else {
                                    console.log("TIME OUT DE AUSENTAR USUARIO EXISTE ELSE")
                                    console.log(Usuario)
                                    that.actualizarLista();

                                    setTimeout(() => {

                                        actualizarSistema()
                                    }, 12000)
                                    return
                                }
                                //
                            }
                        }
                    }


                } else {
                    actualizarLista()
                    //console.log("ACTUALIZACION USUARIOS FINALIZADA")
                    console.log("TIMEOUT RANDOM KE NO DEBERIA SALIR NUNCA");
                    setTimeout(() => { actualizarSistema() }, 12000)
                }


            })
        }










        function meActualizo() {
            if (Usuario.user !== '' && windowFocus) {

                Usuario.status = "connected";
                that.putPlayer(Usuario, () => {
                    that.actualizarLista(() => { setTimeout(() => { meActualizo() }, 1000) })

                });
            } else {
                that.actualizarLista(() => { setTimeout(() => { meActualizo() }, 1000) })
            }
        }


        function refrescarChat() {
            that.getChat((mensajes) => {
                that.escribirMensajes(mensajes, () => {
                    setTimeout(() => {
                        //console.log("Echandole hielos al chat otra ve")
                        refrescarChat()
                    }, 500)
                })

            })
        }



        setTimeout(() => {
            console.log("Echandole hielos al chat")

            refrescarChat()
        }, 500)


        setTimeout(() => {
            actualizarSistema();
        }, 5000);


        setTimeout(() => {
            meActualizo();

        }, 500);





        $(this.chat.getChildByID('Actualizar')).click(function () {

            that.actualizarLista(() => { console.log("Actualizado") })

        })

        $("#summit").click(function () {
            let mensaje = $('#mensaje')
            let inputMensaje = mensaje.val();
            if (inputMensaje !== '') {
                //console.log("Valor: " + inputMensaje);
                mensaje.val("");
                if (Usuario.user !== '')
                    that.writeMenssage(inputMensaje, Usuario);
            }
        })







        /*
         *Desconectar en un Timer que se activa cuando dejamos de hacer focus a nuestra ventana actual,
         *Si se pasan 4 segundos sin haber vuelto a la ventana consideramos que se ha ido afk por lo que lo desconectamos 
        */

        // let desconectar;

        $(window).blur(function () {
            windowFocus = false;

        });
        $(window).focus(function () {
            windowFocus = true;

            if (that.yo.user !== '' && that.yo.user !== null) {
                that.conectarUsuario(Usuario, function () { that.actualizarLista(() => { }) });
                Usuario.status = "reconnecting"
                console.log("Reconectando");
            }

        });



    }


    //FUNCIONES DE TODA ESTA COSA
    //Metodos Get//

    getChat(callback) {
        $.ajax({
            url: 'http://localhost:8080/mensaje/fileRead',

        }).done(function (mensajes) {
            //console.log("Chat conseguido", callback)
            if (typeof callback !== 'undefined') {
                callback(mensajes)
            }
        })
    }

    getLobbyPlayers(callback) {
        var that = this
        let idPartida = this.partidaDatos.id
        $.ajax({
            url: 'http://localhost:8080/partida/' + idPartida,

        }).done(function (partida) {
            //console.log("Partida de getLobby", partida)
            if (typeof callback !== 'undefined') {
                if (partida !== null) {
                    if (that.yo.side === 1 && partida.p1.side === 1) {
                        that.yo = partida.p1;
                    } else if (that.yo.side === 2 && partida.p1.side === 2) {
                        that.yo = partida.p2;
                    }
                }

                var players = [partida.p1, partida.p2];
                //console.log("Jugadores obtenidos", players)
                callback(players)
            }
        })

    }




    //Metodos POST//

    playerConnected(callback) {
        $.ajax({
            method: "POST",
            url: 'http://localhost:8080/player/',
            data: JSON.stringify({ "user": "Unknown_User", "status": "connected" }),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (player) {
            callback(player);
        })
    }


    sendMenssage(callback, mensaje) {

        $.ajax({
            method: "POST",
            url: 'http://localhost:8080/mensaje/fileWrite',
            data: mensaje,
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function () {
            console.log("Mensaje escrito ");
            if (typeof callback !== 'undefined') {
                callback(mensaje)
            }
        })
    }

    //Metodos PUT//


    putPlayer(player, callback) {

        let partidaID = this.partidaDatos.id;
        $.ajax({
            method: "PUT",
            url: 'http://localhost:8080/partida/player/' + partidaID,
            data: JSON.stringify(player),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (partida) {
            if (typeof callback !== 'undefined') {

                callback(partida)
            }
        })
    }
    updateLobby(player, callback) {

        let partidaID = this.partidaDatos.id;
        let partida = this.partidaDatos;
        $.ajax({
            method: "PUT",
            url: 'http://localhost:8080/partida/' + partidaID,
            data: JSON.stringify(partida),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (partida) {
            if (typeof callback !== 'undefined') {

                callback(partida)
            }
        })
    }

    //Funciones de apoyo

    conectarUsuario(player, callback) {
        var that = this
        if (player.user === '') {

            console.log("Para conectarse elija un nombre de usuario válido")
            if (typeof callback !== 'undefined') {
                callback(player)
            }

        } else {
            if (player.status !== "connected") {
                Conectar();

            } else {

                callback(player);
            }

        }


        function Conectar(existe) {

            if (existe) {

                player.status = "connected"
                that.putPlayer(player, callback)
            } else {

                player.status = "connected"
                //console.log("Creando al nuevo usuario :", player)
                that.putPlayer(player, callback)
            }

            //that.putPlayer(player, callback)

        }

    }

    desconectarUsuario(player, callback) {


        var that = this;
        if (player.status !== 'disconected' && (player.user !== '' && player.user !== null)) {
            let existeU = false;
            this.getLobbyPlayers((players) => {
                existeU = this.existe(player, players);
                Desconectar(existeU);

            })
        } else {
            console.log("Algo malo ha ocurrido en desconectar")
            if (typeof callback !== 'undefined') {

                callback(player)
            }
        }

        function Desconectar(existe) {
            if (existe) {

                //console.log(player)

                player.status = "disconected"
                that.putPlayer(player, callback)

            } else {

                if (typeof callback !== 'undefined') {
                    callback(player)
                }
                console.log("No se puede desconectar porque no existe")
            }
        }


    }

    ausentarUsuario(player, callback) {
        var that = this;

        if (player.status !== 'missing' && player.user !== '') {

            let existeU = false;
            this.getLobbyPlayers((players) => {
                existeU = this.existe(player, players);
                Ausentar(existeU);

            })
        } else {
            console.log("Algo malo ha ocurrido en ausentar")
            if (typeof callback !== 'undefined') {
                callback(player)
            }
        }

        function Ausentar(existe) {
            if (existe) {

                //console.log(player)
                player.status = "missing"
                that.putPlayer(player, callback)
            } else {
                callback();
                console.log("No se puede Ausentar porque no existe")
            }
        }


    }



    //Show item in page
    showPlayer(Usuarios) {
        var that = this;
        let test = this.chat.getChildByID('info');
        console.log("Mostrando los estados actualizados :", Usuarios);
        console.log("YO: ", this.yo);
        $(test).empty();

        //$('#info').append("<div> User: " + Usuarios[i].user + " Status: " + Usuarios[i].status + " </div>");

        if (Usuarios[0] !== null) {
            if (Usuarios[0].side === 1) {
                if (Usuarios[0].status === "connected") {

                    that.iconoEstado.setTexture("Conectado");
                    that.iconoEstado.update();
                    let texto = 'Jugador 1 ' + Usuarios[0].user;
                    this.p1Name = Usuarios[0].user
                    this.textP1.setText(texto)
                    this.logged[0] = true;
                    this.inputTextP1.setVisible(false);
                }
                if (Usuarios[0].status === "missing") {

                    that.iconoEstado.setTexture("Missing");
                    let texto = 'Jugador 1 ' + Usuarios[0].user;
                    this.p1Name = Usuarios[0].user
                    this.textP1.setText(texto)
                    this.logged[0] = true;
                    this.inputTextP1.setVisible(false);
                }
                if (Usuarios[0].status === "disconected") {
                    console.log("Desconectado pa la calle")


                    if (Usuarios[0].user === this.yo.user) {
                        this.borrarIntervalos();
                        this.desconectarUsuario(this.yo, () => {


                            this.yo.user = "";
                            this.yo.status = "";
                            this.yo.id = 0;
                            this.yo.side = 0;
                            this.scene.start("MAINMENU", { escena: null, soundManager: this.soundManager })

                        })

                    } else {

                        that.iconoEstado.setTexture("Desconectado");
                        let texto = 'Introduzca su nombre';
                        this.p1Name = "Desconectado XD"
                        this.textP1.setText(texto)
                        this.logged[0] = false;
                        this.inputTextP1.setVisible(true);
                    }


                }


            }
            if (Usuarios[0].user === "" || Usuarios[0].user === null) {

                that.iconoEstado.setTexture("Desconectado");
                let texto = 'Introduzca su nombre';
                this.p1Name = ""
                this.textP1.setText(texto)
                this.logged[0] = false;
                this.inputTextP1.setVisible(true);
            }
            if (Usuarios[1].side === 2) {
                if (Usuarios[1].status === "connected") {
                    that.iconoEstadoP2.setTexture("Conectado");
                    let texto = 'Jugador 2 ' + Usuarios[1].user
                    this.p2Name = Usuarios[1].user;
                    this.textP2.setText(texto);
                    this.logged[1] = true;
                    this.inputTextP2.setVisible(false);
                }
                if (Usuarios[1].status === "missing") {
                    that.iconoEstadoP2.setTexture("Missing");
                    let texto = 'Jugador 2 ' + Usuarios[1].user
                    this.p2Name = Usuarios[1].user;
                    this.textP2.setText(texto);
                    this.logged[1] = true;
                    this.inputTextP2.setVisible(false);
                }
                if (Usuarios[1].status === "disconected") {
                    console.log("Desconectado pa la calle asdasdada")
                    if (Usuarios[1].user === this.yo.user) {
                        this.borrarIntervalos();
                        this.desconectarUsuario(this.yo, () => {


                            this.yo.user = "";
                            this.yo.status = "";
                            this.yo.id = 0;
                            this.yo.side = 0;
                            this.scene.start("MAINMENU", { escena: null, soundManager: this.soundManager })

                        })



                    } else {
                        that.iconoEstadoP2.setTexture("Desconectado");
                        let texto = 'Introduzca su nombre';
                        this.p1Name = "Desconectado XD"
                        this.inputTextP2.setVisible(true);
                        this.logged[1] = false;
                        this.textP2.setText(texto)
                    }


                }


            }
            if (Usuarios[1].user === "" || Usuarios[1].user === null) {

                that.iconoEstadoP2.setTexture("Desconectado");
                let texto = 'Introduzca su nombre';
                this.p2Name = ""
                this.textP2.setText(texto)
                this.logged[1] = false;
                this.inputTextP2.setVisible(true);
            }
        }


        if (this.yo.status === "connected" || this.yo.status === "missing") {
            if (this.yo.side === 1) {

                this.inputTextP2.setVisible(false);
            }
            if (this.yo.side === 2)
                this.inputTextP1.setVisible(false);
        }




    }


    existe(player, players) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].user === player.user) {

                player.id = players[i].id

                return true;
            }
        }
        return false;
    }




    actualizarLista(callback) {
        this.getLobbyPlayers((players) => {

            if (typeof callback !== 'undefined') {

                callback(players);
            }
            this.showPlayer(players);
        })
    }




    writeMenssage(mensaje, player) {
        var date = new Date;
        let Mensaje;
        var that = this

        if (date.getMinutes() < 10) {
            Mensaje = (player.user + " (" + date.getHours() + " : 0" + date.getMinutes() + ") - " + mensaje);
        } else {
            Mensaje = (player.user + " (" + date.getHours() + " : " + date.getMinutes() + ") - " + mensaje);
        }

        this.sendMenssage((sad) => {
            that.getChat(that.escribirMensajes);
        }, Mensaje)

    }



    escribirMensajes(mensajes, callback) {

        $("#chat").empty();
        for (let index = 0; index < mensajes.length; index++) {
            $("#chat").append("<p>" + mensajes[index] + "</p>");
        }
        if (typeof callback !== 'undefined') {
            callback()
        }


    }

    borrarIntervalos() {

        var interval_id = window.setInterval("", 9999); // Get a reference to the last
        // interval +1

        for (var i = 1; i < interval_id; i++)
            window.clearInterval(i);
        //for clearing all intervals
    }







}

export default LobbyOnline;