import Escenario from '../gameObjects/Escenario.js';
class Turorial extends Phaser.Scene {
    constructor() {
        super({ key: "Turorial" });
        this.escenasActivas = [false, false];
        this.escenarios = [];
    }

    create() {

        console.log("tutorial init")
        this.physics.world.setBounds(0, 0, 3000, this.game.canvas.height);


        this.escenarios[0] = new Escenario("Cinta", 0, true);
        this.escenarios[1] = new Escenario("Contador", 1, false);
        this.escenarios[2] = new Escenario("Nieve", 4, false);
        this.escenarios[3] = new Escenario("Electricidad", 2, true);
        this.escenarios[4] = new Escenario("Laboratorio", 3, false);



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





            let gimU = this.add.image(0  , 0, "Gimnasio").setOrigin(0, 0);
            gimU.displayHeight = this.game.canvas.height / 2;
            gimU.displayWidth = this.game.canvas.width;
            gimU.setDepth(-9999)


            let gimD = this.add.image(0  , this.game.canvas.height / 2, "Gimnasio").setOrigin(0, 0);
            gimD.displayHeight = this.game.canvas.height / 2;
            gimD.displayWidth = this.game.canvas.width;
            gimD.setDepth(-9999)


           
        //controles//

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


         //Camaras

        //Tamanio camara
        this.cam1 = this.cameras.main.setSize(this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 1');

        //Bordes camara para que no muestre la parte exterior del mapa
        //Lo que quieres que se muestre basicamente
        this.cam1.setBounds(0, 0, 3000, this.game.canvas.height / 2)
        //Para que persiga al pj
        this.cam1.startFollow(this.playerU, true);
        this.cam1.setZoom(1.8)


        this.cam2 = this.cameras.add(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 2');


        this.cam2.setBounds(0, this.game.canvas.height / 2, 3000, this.game.canvas.height / 2)

        this.cam2.startFollow(this.playerD, true);

        this.cam2.setZoom(1.8)


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


        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.add(muro);
        this.plataformas.add(muro2);


        //Fisicas


        this.physics.add.collider(this.playerU, this.plataformas);
        this.physics.add.collider(this.playerD, this.plataformas);


        //Ajustes
        this.time.addEvent({
            delay: 100,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });


    }



    update() {

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
export default Turorial;