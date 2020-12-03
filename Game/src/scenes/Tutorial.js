import Escenario from '../gameObjects/Escenario.js';
class Tutorial extends Phaser.Scene {
    constructor() {
        super({ key: "Tutorial" });
        this.escenasActivas = [false, false];
        this.escenarios = [];
    }

    create() {

        console.log("tutorial init")
        this.physics.world.setBounds(0, 0, 3000, this.game.canvas.height);
        this.end = { player1: false, player2: false };

        //Player 1//

        this.playerU = this.physics.add.sprite(0, this.game.canvas.height / 2 - 50, 'P1');
        this.playerU.play('IdleDerechaP1');
        this.playerU.setScale(0.15).refreshBody();
        this.playerU.body.collideWorldBounds = true;
        this.playerU.id = 0;
        this.playerU.velocidad = 300;
        this.playerU.time = 0;
        this.playerU.setDepth(1000);
   
        //Player 2//
   
        this.playerD = this.physics.add.sprite(0, this.game.canvas.height - 50, 'P2');
        this.playerD.play('IdleDerechaP2');
        this.playerD.setScale(0.15).refreshBody();
        this.playerD.body.collideWorldBounds = true;
        this.playerD.id = 1;
        this.playerD.time = 0;
        this.playerD.velocidad = 300;
        this.playerD.setDepth(1000);


            
        let gimU = this.add.image(0  , 0, "Tutorial").setOrigin(0, 0);
        gimU.displayHeight = this.game.canvas.height / 2;
        //gimU.displayWidth = this.game.canvas.width;
        gimU.setDepth(-9999)

        this.gimBU = this.add.image(0  , 0, "TutorialBlur").setOrigin(0, 0);
        this.gimBU.displayHeight = this.game.canvas.height / 2;
        //this.gimBU.displayWidth = this.game.canvas.width;
        this.gimBU.setDepth(20)
        this.gimBU.alpha = 0;


        let gimD = this.add.image(0  , this.game.canvas.height / 2, "Tutorial").setOrigin(0, 0);
        gimD.displayHeight = this.game.canvas.height / 2;
        //gimD.displayWidth = this.game.canvas.width;
        gimD.setDepth(-9999)

        this.gimBD = this.add.image(0  , this.game.canvas.height / 2, "TutorialBlur").setOrigin(0, 0);
        this.gimBD.displayHeight = this.game.canvas.height / 2;
        //this.gimBD.displayWidth = this.game.canvas.width;
        this.gimBD.setDepth(20)
        this.gimBD.alpha = 0;


           
        //Controles//

        //Player 2

        this.keyboardP2 = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN,SPACE,ESC');

        this.input.keyboard.on('keyup-' + 'LEFT', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'RIGHT', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'UP', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'DOWN', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'SPACE', this.unlockP2.bind(this));

        this.input.keyboard.on('keyup-' + 'ESC', this.unlockP2.bind(this));

        //Player 1

        this.keyboardP1 = this.input.stopPropagation().keyboard.addKeys('D,A,W,S,E');

        this.input.keyboard.on('keyup-' + 'D', this.unlockP1.bind(this));
        this.input.keyboard.on('keyup-' + 'A', this.unlockP1.bind(this));
        this.input.keyboard.on('keyup-' + 'W', this.unlockP1.bind(this));
        this.input.keyboard.on('keyup-' + 'S', this.unlockP1.bind(this));
        this.input.keyboard.on('keyup-' + 'E', this.unlockP1.bind(this));


        //Cargar sonido
        this.music = this.sound.add('Musica_fondo');

        var musicConfig = {
            mute: false,
            volume: 0.0086,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false, 
            delay: 0
        }

        this.music.play(musicConfig);


        //Camaras

        //Tamanio camara
        this.cam1 = this.cameras.main.setSize(this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 1');

        //Bordes camara para que no muestre la parte exterior del mapa
        //Lo que quieres que se muestre basicamente
        this.cam1.setBounds(0, 0, gimU.displayWidth, this.game.canvas.height / 2)
        //Para que persiga al pj
        this.cam1.startFollow(this.playerU, true);
        //this.cam1.setZoom(1)


        this.cam2 = this.cameras.add(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 2');


        this.cam2.setBounds(0, this.game.canvas.height / 2, gimD.displayWidth, this.game.canvas.height / 2)

        this.cam2.startFollow(this.playerD, true);

        //this.cam2.setZoom(1)


        //Suelo jugador 1
      
        let muro = this.add.image(0, this.game.canvas.height / 2, "muro").setOrigin(0, 0);
        muro.displayHeight = 1;
        muro.displayWidth = 5800;
        muro.alpha = 0;

        //Suelo jugador 2

        let muro2 = this.add.image(0, this.game.canvas.height - 1, "muro").setOrigin(0, 0);
        muro2.displayHeight = 1;
        muro2.displayWidth = 5800;
        muro2.alpha = 0;


        //Muros//

        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.add(muro);
        this.plataformas.add(muro2);


        //Fisicas//

        this.physics.add.collider(this.playerU, this.plataformas);
        this.physics.add.collider(this.playerD, this.plataformas);



        //Ajustes//

        this.time.addEvent({
            delay: 100,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });


        //Prueba 1

        //Cinta Jugador 1
        let cintaU = this.physics.add.image(200, 315, "cintaSprite")
        cintaU.setScale(0.30);
        cintaU.setImmovable(true);

        //Cinta jugador 2
        let cintaD = this.physics.add.image(200, 670, "cintaSprite") 
        cintaD.setScale(0.30);
        cintaD.setImmovable(true);

        //Prueba 2

        //Contador jugador 1
        let pulsador = this.physics.add.sprite(this.game.canvas.width/2.25 , this.game.canvas.height / 2.65, 'spriteCont');
        pulsador.displayHeight = pulsador.height * 0.4;
        pulsador.displayWidth = pulsador.width * 0.4;

        //Contador jugador 2
        let pulsador2 = this.physics.add.sprite(this.game.canvas.width/2.25, this.game.canvas.height / 2.65+this.game.canvas.height/2, 'spriteCont');
        pulsador2.displayHeight = pulsador2.height * 0.4;
        pulsador2.displayWidth = pulsador2.width * 0.4;

        //Prueba 3

        //Electricidad jugador 1
        let prueba = this.physics.add.sprite(this.game.canvas.width / 1.44, this.game.canvas.height / 2.42, 'Enchufe');
        prueba.displayHeight = prueba.height * 0.29;
        prueba.displayWidth = prueba.width * 0.29;
        

        //Jugador 2
        let prueba2 = this.physics.add.sprite(this.game.canvas.width / 1.44, this.game.canvas.height / 2.42+this.game.canvas.height/2, 'Enchufe');
        prueba2.displayHeight = prueba2.height * 0.29;
        prueba2.displayWidth = prueba2.width * 0.29;

        //Prueba 4

        //Simbolos jugador 1
        let ordenador = this.physics.add.sprite(this.game.canvas.width / 1.09, this.game.canvas.height / 2.4, 'Ordenador');
        ordenador.displayHeight = ordenador.height * 0.9;
        ordenador.displayWidth = ordenador.width * 0.9;

        //Simbolos jugador 2
        let ordenador2 = this.physics.add.sprite(this.game.canvas.width / 1.09, this.game.canvas.height / 2.4+this.game.canvas.height/2, 'Ordenador');
        ordenador2.displayHeight = ordenador2.height * 0.9;
        ordenador2.displayWidth = ordenador2.width * 0.9;

        //Prueba 5

        //Bandera jugador 1
        let banderaU =  this.physics.add.sprite(this.game.canvas.width / 0.85, this.game.canvas.height / 2.27, 'Bandera');
        banderaU.displayHeight = ordenador2.height * 0.9;
        banderaU.displayWidth = ordenador2.width * 0.9;

        //Bandera jugador 2
        let banderaD =  this.physics.add.sprite(this.game.canvas.width / 0.85, this.game.canvas.height / 2.27+this.game.canvas.height/2, 'Bandera');
        banderaD.displayHeight = ordenador2.height * 0.9;
        banderaD.displayWidth = ordenador2.width * 0.9;

         


        this.CP1 = this.physics.add.overlap(this.playerU, cintaU, () => { this.Prueba(this.playerU, "Cinta") }, null, this);
        this.CP2 = this.physics.add.overlap(this.playerD, cintaD, () => { this.Prueba(this.playerD, "Cinta") }, null, this);
        this.CoP1 = this.physics.add.overlap(this.playerU, pulsador, () => { this.Prueba(this.playerU, "Contador") }, null, this);
        this.CoP2 = this.physics.add.overlap(this.playerD, pulsador2, () => { this.Prueba(this.playerD, "Contador") }, null, this);
        this.EP1 = this.physics.add.overlap(this.playerU, prueba, () => { this.Prueba(this.playerU, "Electricidad") }, null, this);
        this.EP2 = this.physics.add.overlap(this.playerD, prueba2, () => { this.Prueba(this.playerD, "Electricidad") }, null, this);
        this.LP1 = this.physics.add.overlap(this.playerU, ordenador, () => { this.Prueba(this.playerU, "Laboratorio") }, null, this);
        this.LP2 = this.physics.add.overlap(this.playerD, ordenador2, () => { this.Prueba(this.playerD, "Laboratorio") }, null, this);
        this.BP1 = this.physics.add.overlap(this.playerU, banderaU, () => { this.endP1(banderaU) }, null, this);
        this.BP2 = this.physics.add.overlap(this.playerD, banderaD, () => { this.endP2(banderaD) }, null, this);
        

    }



    update() {

        //Personaje 2

        if (!this.escenasActivas[1]) {

            if (this.keyboardP2.LEFT.isDown === true) {
                this.playerD.body.setVelocityX(-this.playerD.velocidad);
                if (this.playerD.body.touching.down) {
                    this.playerD.anims.play("CorrerIzquierdaP2", true);
                } else {
                    this.playerD.anims.play("SaltoIzquierdaP2", true);
                }

            }
            if (this.keyboardP2.RIGHT.isDown === true) {
                console.log("Derechaa")
                this.playerD.body.setVelocityX(this.playerD.velocidad);
                if (this.playerD.body.touching.down) {
                    this.playerD.anims.play("CorrerDerechaP2", true);
                } else {
                    this.playerD.anims.play("SaltoDerechaP2", true);
                }
            }
            if (this.keyboardP2.UP.isDown === true && this.playerD.body.touching.down) {
                this.playerD.setVelocityY(-750);
            }


            if (this.keyboardP2.LEFT.isDown === false && this.keyboardP2.RIGHT.isDown === false && this.keyboardP2.UP.isDown === false) {
                if (this.playerD.body.velocity.x > 0) {
                    this.playerD.anims.stop();
                    this.playerD.anims.play("IdleDerechaP2", true);
                }
                if (this.playerD.body.velocity.x < 0) {
                    this.playerD.anims.stop();
                    this.playerD.anims.play("IdleIzquierdaP2", true);
                }


                this.playerD.body.setVelocityX(0);


            }


        }
        // Personaje 1
        if (!this.escenasActivas[0]) {

            if (this.keyboardP1.W.isDown === true && this.playerU.body.touching.down) {
                this.playerU.setVelocityY(-750); //cambiar para que salte menos y poder bajar plataformas

            }

            if (this.keyboardP1.A.isDown === true) {
                this.playerU.body.setVelocityX(-this.playerU.velocidad);
                if (this.playerU.body.touching.down) {
                    this.playerU.anims.play("CorrerIzquierdaP1", true);
                } else {
                    this.playerU.anims.play("SaltoIzquierdaP1", true);
                }

            }
            if (this.keyboardP1.D.isDown === true) {
                this.playerU.body.setVelocityX(this.playerU.velocidad);
                if (this.playerU.body.touching.down) {
                    this.playerU.anims.play("CorrerDerechaP1", true);
                } else {
                    this.playerU.anims.play("SaltoDerechaP1", true);
                }
            }

            if (this.keyboardP1.D.isDown === false && this.keyboardP1.A.isDown === false && this.keyboardP1.W.isDown === false) {
                if (this.playerU.body.velocity.x > 0) {
                    this.playerU.anims.stop();
                    this.playerU.anims.play("IdleDerechaP1", true);
                }
                if (this.playerU.body.velocity.x < 0) {
                    this.playerU.anims.stop();
                    this.playerU.anims.play("IdleIzquierdaP1", true);
                }
                this.playerU.body.setVelocityX(0);
            }

        }

    }

    Prueba(player,prueba) {

        let pos = (player.x + 1180) / 1180
        pos = Math.trunc(pos) - 1
        player.body.setVelocityX(0);
        player.body.setVelocityY(0);
        player.anims.stop();


        if (player.id == 0) {
            player.anims.play("IdleDerechaP1", true);
            this.PruebaP1(prueba);
        } else {
            player.anims.play("IdleDerechaP2", true);
            this.PruebaP2(prueba)
        }
    }

    PruebaP1(prueba) {
        if (this.keyboardP1.E.isDown === true && !this.escenasActivas[0]) {

                this.scene.launch(prueba + "TP1", { escena: this });
                this.escenasActivas[0] = true;

        }
    }
    PruebaP2(prueba) {
        if (this.keyboardP2.SPACE.isDown === true && !this.escenasActivas[1]) {  

                this.scene.launch(prueba + "TP2", { escena: this });
                this.escenasActivas[1] = true;
        }

    }

    endP1(bandera) {
        console.log("bandera p1")
        this.end.player1 = true;
        
        if (this.end.player1 === true && this.end.player2 === true) {
            //this.borrarIntervalos();
            this.scene.launch("Scene_play");
            this.scene.stop("Tutorial");
            console.log("Iniciando");
        }
        bandera.destroy();
        this.BP1.destroy();
    }

    endP2(bandera) {
        console.log("bandera p2")
        this.end.player2 = true;

        if (this.end.player1 === true && this.end.player2 === true) {
            //this.borrarIntervalos();
            this.scene.launch("Scene_play");
            this.scene.stop("Tutorial");
            console.log("Iniciando");
        }
        bandera.destroy();
        this.BP2.destroy();
    }


    unlockP1() {
        //console.log("unlock")

        this.keyLockP1 = false;
    }

    unlockP2() {
        //console.log("unlock")

        this.keyLockP2 = false;
    }


    delayDone() {
        this.playerU.body.setSize(this.playerU.width * 0.25, this.playerU.height, true)
        this.playerD.body.setSize(this.playerD.width * 0.25, this.playerD.height, true)
        this.playerU.setGravityY(3000);
        this.playerD.setGravityY(3000);
    }


}
export default Tutorial;