class Lobby extends Phaser.Scene {
    constructor() {
        super({ key: "Lobby" });

    }
    init(data) {
        this.data = data;
        this.soundManager = data.soundManager
        console.log(this.soundManager)
    }

    preload() {
        this.load.html('User1', './src/inputName.html');
        this.load.html('Chat', './API/index.html');

    }


    create() {
        //this.scene.launch("Chat");


        let lobby = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'Victoria');
        lobby.displayHeight = this.game.canvas.height
        lobby.displayWidth = this.game.canvas.width;

        let logged = [false, false]
        let p1Name;
        let p2Name;
        var Usuario = { id: 0, user: "", status: "", int: 0, concetado: false };
        var Usuario2 = { id: 0, user: "", status: "", int: 0, concetado: false };

        let player1 = this.add.sprite(150, 450 - 50, 'P1');
        player1.setScale(0.8)
        var textP1 = this.add.text(player1.x - 100, player1.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });
        this.desconectado = this.add.image(player1.x - 120, player1.y - 190, "Desconectado");
        this.desconectado.scale = 0.1
        window.asd = this.desconectado;

        var inputTextP1 = this.add.dom(player1.x, player1.y + 200).createFromCache('User1');


        inputTextP1.addListener('keyup');


        inputTextP1.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');

                    //  Hide the login element
                    this.setVisible(false);
                    p1Name = inputText.value;
                    //  Populate the text with whatever they typed in
                    textP1.setText('Jugador 1 ' + inputText.value);
                    logged[0] = true;

                    Usuario.user = inputText.value;
                    Usuario.status = "connecting";
                    Usuario.id=1;
                    Usuario.concetado=true;
                    that.conectarUsuario(Usuario, function () {
                        console.log("intentado conectarse"); that.actualizarLista(() => {
                            console.log("fasd2");
                            if (Usuario.status === "connected") {
                                console.log("Cambiando sprite a conectado")
                                that.desconectado.setTexture("Conectado")
                            }

                        })
                    });
                    inputText.value = ''
                } else {
                    console.log("Para conectarse elija un nombre de usuario válido")
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: textP1,
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
        var textP2 = this.add.text(player2.x - 100, player2.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });
        this.desconectadoP2 = this.add.image(player2.x - 120, player2.y - 190, "Desconectado");
        this.desconectadoP2.scale = 0.1


        var inputTextP2 = this.add.dom(player2.x, player2.y + 200).createFromCache('User1');


        inputTextP2.addListener('keyup');


        inputTextP2.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');
                    p2Name = inputText.value
                    //  Hide the login element
                    this.setVisible(false);

                    //  Populate the text with whatever they typed in
                    textP2.setText('Jugador 2 ' + inputText.value);
                    logged[1] = true;

                    Usuario2.user = inputText.value;
                    Usuario2.status = "connecting";
                    that.conectarUsuario(Usuario2, function () {
                        console.log("intentado conectarse");
                        that.actualizarLista(() => {
                            if (Usuario2.status === "connected") {
                                console.log("Cambiando sprite a conectado")
                                that.desconectado.setTexture("Conectado")
                            }


                        })
                    });
                    inputText.value = ''
                } else {
                    //  Flash the prompt
                    console.log("Para conectarse elija un nombre de usuario válido")
                    this.scene.tweens.add({
                        targets: textP2,
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
            let textoP1 = inputTextP1.getChildByName('nameField').value
            let textoP2 = inputTextP2.getChildByName('nameField').value
            if (textoP1 !== '') {

                inputTextP1.removeListener('keyup');
                inputTextP1.setVisible(false);
                p1Name = textoP1;
                textP1.setText('Jugador 1 ' + textoP1);
                logged[0] = true;
                textoP1 = ''
            }


            if (textoP2 !== '') {
                //  Turn off the click events
                inputTextP2.removeListener('keyup');
                p2Name = textoP2
                //  Hide the login element
                inputTextP2.setVisible(false);

                //  Populate the text with whatever they typed in
                textP2.setText('Jugador 2 ' + textoP2);
                logged[1] = true;
                textoP2 = ''
            }


            if (logged[0] === true && logged[1] === true) {
                this.borrarIntervalos();
                this.scene.stop("Lobby");
                this.scene.start("Scene_play", { escena: null, soundManager: this.soundManager, names: { p1: p1Name, p2: p2Name } });
            }
        })

        this.cjT = this.add.text(pbCM.x - 145, pbCM.y + 30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjT.setText("Jugar");

        //Chat//






        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////

        var that = this;

        console.log("CHAT")

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
            that.clientLeaving(Usuario);
        })




        //Simulamos una funcion Update//



        function actualizarSistema() {
            console.log("ACTUALIZACION USUARIOS")
            that.loadPlayers((players) => {
                if (players.length != 0) {
                    for (let i = 0; i < players.length; i++) {
                        if (players[i].status === "connected" && i < players.length - 1) {
                            console.log("Desconectando usuarios");
                            that.desconectarUsuario(players[i]);
                        }
                        if (i === players.length - 1) {
                            that.desconectarUsuario(players[i], () => {
                                if (windowFocus) {
                                    Usuario.status = "reconnecting";
                                    console.log("Usuario desconectado ahora vamos a conectarlo")
                                    that.conectarUsuario(Usuario, () => {
                                        that.actualizarLista()
                                        console.log("ACTUALIZACION USUARIOS FINALIZADA")
                                        if (Usuario.status == "connected") {
                                            that.desconectado.setTexture("Conectado");
                                        } else {
                                            that.desconectado.setTexture("Desconectado");
                                        }
                                        setTimeout(() => { actualizarSistema() }, 12000)
                                    });
                                } else {
                                    setTimeout(() => { actualizarSistema() }, 12000)
                                }
                            });
                        }
                    }
                } else {
                    actualizarLista()
                    console.log("ACTUALIZACION USUARIOS FINALIZADA")
                    setTimeout(() => { actualizarSistema() }, 12000)
                }


            })
        }
        //setTimeout(() => { actualizarSistema(); }, 12000)


        function meActualizo() {
            if (Usuario.user !== '' && windowFocus) {
                //console.log("Actualizandome yo mismo aka", Usuario);
                Usuario.status = "connected";
                that.putPlayer(Usuario, () => {
                    that.actualizarLista()
                    setTimeout(() => { meActualizo() }, 1000)
                });
            } else {
                setTimeout(() => {
                    meActualizo();
                }, 500)
            }
        }


        function refrescarChat() {
            that.getChat((mensajes) => {
                that.escribirMensajes(mensajes, () => {
                    setTimeout(() => {
                        console.log("Echandole hielos al chat otra ve")
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
        }, 8000);


        setTimeout(() => {
            meActualizo();

        }, 500);





        $(this.chat.getChildByID('Actualizar')).click(function () {
            $(this.chat.getChildByID('Actualizar')).attr('disabled', 'disabled');
            that.actualizarLista(() => {
                console.log("Restaurando")
                $(this.chat.getChildByID('Actualizar')).removeAttr('disabled');
            })

        })

        $("#summit").click(function () {
            let mensaje = $('#mensaje')
            let inputMensaje = mensaje.val();
            if (inputMensaje !== '') {
                console.log("Valor: " + inputMensaje);
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
            Usuario.status = "reconnecting"
            console.log("Reconectando");
            that.conectarUsuario(Usuario, function () { that.actualizarLista(() => { }) });


        });


    }


    //FUNCIONES DE TODA ESTA COSA
    //Metodos Get//

    loadPlayers(callback) {

        $.ajax({
            url: 'http://localhost:8080/player/',

        }).done(function (player) {
            console.log(player)
            if (typeof callback !== 'undefined') {
                callback(player)
            }
        })
    }


    getChat(callback) {
        $.ajax({
            url: 'http://localhost:8080/mensaje/fileRead',

        }).done(function (mensajes) {
            console.log("Chat conseguido", callback)
            if (typeof callback !== 'undefined') {
                callback(mensajes)
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




    crearNuevoUsuario(usuario, callback) {
        $.ajax({
            method: "POST",
            url: 'http://localhost:8080/player/',
            data: JSON.stringify(usuario),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (player) {
            usuario.id = player.id;
            if (typeof callback !== 'undefined') {
                callback(player)
            }
        })

    }


    //Metodos PUT//


    putPlayer(player, callback) {



        $.ajax({
            method: "PUT",
            url: 'http://localhost:8080/player/' + player.id,
            data: JSON.stringify(player),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (player) {
            if (typeof callback !== 'undefined') {
                callback(player)
            }
        })
    }



    clientLeaving(ident) {
        $.ajax({
            method: "PUT",
            url: 'http://localhost:8080/player/' + ident,
            data: JSON.stringify({ "status": "disconnected" }),
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        }).done(function (player) {
            //console.log("Player modified: " + JSON.stringify(player));

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
                let existeU = false;
                this.loadPlayers((players) => {
                    existeU = this.existe(player, players);
                    Conectar(existeU);

                })
            } else {

                callback(player);
            }

        }


        function Conectar(existe) {

            if (existe) {

                player.status = "connected"
                console.log("Intentando conectar al usuario: ", player);
                that.putPlayer(player, callback);

            } else {
                player.status = "connected"
                console.log("Creando al nuevo usuario :", player)
                that.crearNuevoUsuario(player, callback)
            }
        }

    }

    desconectarUsuario(player, callback) {
        var that = this;

        if (player.status !== 'disconected' && player.user !== '') {

            let existeU = false;
            this.loadPlayers((players) => {
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
                console.log("Intentando Desconectar al usuario: " + player.user);
                console.log(player)
                player.status = "disconected"
                that.putPlayer(player, callback)
            } else {
                callback();
                console.log("No se puede desconectar porque no existe")
            }
        }


    }


    //Show item in page
    showPlayer(Usuarios) {

        let test = this.chat.getChildByID('info');
        $(test).empty();
        //console.log("Actualizando lista de usuarios")
        for (let i = 0; i < Usuarios.length; i++) {
            $('#info').append("<div> User: " + Usuarios[i].user + " Status: " + Usuarios[i].status + " </div>");
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
        this.loadPlayers((players) => {

            console.log("funcionas o sio")
            if (typeof callback !== 'undefined') {
                console.log("funcionas o no")
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

export default Lobby;