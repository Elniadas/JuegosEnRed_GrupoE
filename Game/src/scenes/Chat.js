class Chat extends Phaser.Scene {
    constructor() {
        super({ key: "Chat" });

    }
    init() {

    }

    preload() {
        this.load.html('Chat', './API/index.html');
    }


    create() {

        var that = this;

        console.log("CHAT")

        this.chat = this.add.dom(500, 300).createFromCache('Chat');


        //LO QUE SERIA EL MAIN EN EL OTRO SCRIPT//

        ///////////////////////////////////
        ////////////////////////////////
        ////////////////////////////
        //////////////////

        let windowFocus = true;

        //Cuando se carga la página mostramos a los usuarios conectados//


        that.actualizarLista()

        //Usuario que se conecta al servidor//

        var Usuario = { id: 0, user: "", status: "" };

        //Desconectamos al usuario cuando cierra la ventana//

        window.addEventListener('unload', (event) => {
            that.clientLeaving(Usuario);
        })


        /* 
         * Controlador del botón
        */



        let username_ = $(this.chat.getChildByID('username-input'))
        $(this.chat.getChildByID('add-button')).click(function () {
            let inputUsername = username_.val();
            if (username_.val() !== '') {
                console.log("Valor: " + inputUsername);
                Usuario.user = inputUsername;
                Usuario.status = "connecting";
                username_.val('');
                that.conectarUsuario(Usuario, function () { that.actualizarLista() });
            } else {
                console.log("Para conectarse elija un nombre de usuario válido")
            }
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



        $(this.chat.getChildByID('yo')).click(function () {
            $(this.chat.getChildByID('yo')).attr('disabled', 'disabled');
            console.log("Yo soy : ", Usuario)
            $(this.chat.getChildByID('yo')).removeAttr('disabled');
        })

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
            that.conectarUsuario(Usuario, function () { that.actualizarLista() });


        });


    }



    update() {

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
            data: JSON.stringify(mensaje),
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
            if (typeof callback !== 'undefined') {
                callback(players);
            }
            this.showPlayer(players);
        })
    }




    writeMenssage(mensaje, player) {
        var date = new Date;
        let Mensaje;
        if (date.getMinutes() < 10) {
            Mensaje = (player.user + " (" + date.getHours() + " : 0" + date.getMinutes() + ") - " + mensaje);
        } else {
            Mensaje = (player.user + " (" + date.getHours() + " : " + date.getMinutes() + ") - " + mensaje);
        }

        this.sendMenssage((sad) => {
            this.getChat(escribirMensajes);
        }, Mensaje)

    }



    escribirMensajes(mensajes, callback) {
        let test = this.chat.getChildByID('chat');
        $(test).empty();
        for (let index = 0; index < mensajes.length; index++) {
            $("#chat").append("<p>" + mensajes[index] + "</p>");
        }
        if (typeof callback !== 'undefined') {
            callback()
        }


    }






}
export default Chat;