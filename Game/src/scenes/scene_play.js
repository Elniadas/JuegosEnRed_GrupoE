import Escenario from '../gameObjects/Escenario.js';
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
        this.escenasActivas = [false, false];

        this.escenarios = [];
    }
    load() {

    }
    preload() {
        // let aux = [0, 1];
        // let tamanio = 3;
        // let posiciones = [];
        // for (let i = 0; i < tamanio; i++) {
        //     let numero = Math.round(Math.random() * (tamanio - 1));
        //     posiciones[i] = aux[numero];
        //     aux.splice(numero, 1);
        // }

    }
    create() {
        /*        
           let tamanio=escenas.length;
             let i=0;
            for(tamanio;tamanio>0;tamanio--){
                if(tamanio==1){
                    escenasP1[i]=escenas[0];
                    escenasP2[i]=escenas[0];
                    
            }else{
                let numero=Math.round(Math.random()*(tamanio-1));
                console.log("El numerito : "+numero);
                escenasP1[i]=escenas[numero];
                escenasP2[i]=escenas[numero];
                escenas.splice(numero,1);
                i++;
            }
            console.log("Iterando y tal")
    
            }
             console.log(escenasP1,escenasP2);
            //*/





        //Pensar esto un pcoo mejor
        this.escenarios[0] = new Escenario("Cinta", 0, true);
        this.escenarios[1] = new Escenario("Contador", 1, false);
        this.escenarios[2] = new Escenario("Nieve", 3, false);
        this.escenarios[3] = new Escenario("Electricidad", 2, true);

        this.physics.world.setBounds(0, 0, 4520, this.game.canvas.height);


        //Factor de suma 1180 * this.escenarios[i].pos

        //Esquema : this.add.image( PosicionX + Factor de suma, PosicionX, "Nombre")




        //Escenario 1 Gimnasio


        //Parte jugador 1

        let gimU = this.add.image(0 + 1180 * this.escenarios[0].pos, 0, "Gimnasio").setOrigin(0, 0);

        gimU.displayHeight = this.game.canvas.height / 2;
        gimU.displayWidth = this.game.canvas.width;
        gimU.setDepth(-9999)

        this.blurGU = this.add.image(0 + 1180 * this.escenarios[0].pos, 0, "GimnasioBlur").setOrigin(0, 0);
        this.blurGU.displayHeight = this.game.canvas.height / 2 - 10;
        this.blurGU.displayWidth = this.game.canvas.width;
        this.blurGU.alpha = 0;


        let cintaU = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "logo")
        cintaU.displayHeight = this.game.canvas.height * 0.3;
        cintaU.displayWidth = this.game.canvas.width * 0.13;
        cintaU.setImmovable(true)
        cintaU.alpha = 0;

        let groupCintaU = this.add.group()
        groupCintaU.add(cintaU);



        var particles = this.add.particles('flares')
        particles.depth = -10

        /*
        var xd = particles.createEmitter({
            x: cintaU.x,
            y: cintaU.y + 100,
            lifespan: 2500,
            speedX: { min: -100, max: +100 },
            speedY: { min: -100, max: -150, steps: 1 },
            scale: { start: 0.1, end: 0.8 },
            blendMode: 'ADD'
        });
        //*/

        let pCintaU= particles.createEmitter({
            x: { min: cintaU.x-50, max: cintaU.x+50 },
            y: cintaU.y+100,
            lifespan: 3000,
            speedY: { min: -60, max: -100 },
            scale: { start: 0.3, end: 0 },
            quantity: 1,
            frame:'yellow',
            frequency: 300,
            blendMode: 'ADD'
        });


        //Parte jugador 2

        let gimD = this.add.image(0 + 1180 * this.escenarios[0].pos, this.game.canvas.height / 2, "Gimnasio").setOrigin(0, 0);

        gimD.displayHeight = this.game.canvas.height / 2;
        gimD.displayWidth = this.game.canvas.width;
        gimD.setDepth(-9999)

        this.blurGD = this.add.image(0 + 1180 * this.escenarios[0].pos, this.game.canvas.height / 2 + 10, "GimnasioBlur").setOrigin(0, 0);
        this.blurGD.displayHeight = this.game.canvas.height / 2;
        this.blurGD.displayWidth = this.game.canvas.width;
        this.blurGD.alpha = 0;


        let cintaD = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        cintaD.displayHeight = this.game.canvas.height * 0.3;
        cintaD.displayWidth = this.game.canvas.width * 0.13;
        cintaD.alpha = 0;

        let pCintaD= particles.createEmitter({
            x: { min: cintaD.x-50, max: cintaD.x+50 },
            y: cintaD.y+100,
            lifespan: 3000,
            speedY: { min: -60, max: -100 },
            scale: { start: 0.3, end: 0 },
            quantity: 1,
            frame:'white',
            frequency: 300,
            blendMode: 'ADD'
        });



        //Escenario 2 Contador

        //Parte jugador 1

        let escU2 = this.add.image(0 + 1180 * this.escenarios[1].pos, 0, "Contador").setOrigin(0, 0);

        escU2.displayHeight = this.game.canvas.height / 2;
        escU2.displayWidth = this.game.canvas.width;

        let pruebaContador = this.physics.add.image(this.game.canvas.width * 0.85 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2 * 0.68, "logo").setOrigin(0, 0);
        pruebaContador.displayHeight = this.game.canvas.height * 0.1;
        pruebaContador.displayWidth = this.game.canvas.width * 0.08;
        pruebaContador.setImmovable(true)
        pruebaContador.alpha = 0;

        this.escBU2 = this.add.image(0 + 1180 * this.escenarios[1].pos, 0, "ContadorBlur").setOrigin(0, 0)

        this.escBU2.displayHeight = this.game.canvas.height / 2;
        this.escBU2.displayWidth = this.game.canvas.width;
        this.escBU2.alpha = 0;



        //Parte jugador 2

        let escD2 = this.add.image(0 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2, "Contador").setOrigin(0, 0);

        escD2.displayHeight = this.game.canvas.height / 2;
        escD2.displayWidth = this.game.canvas.width;

        let pruebaContador2 = this.physics.add.image(this.game.canvas.width * 0.85 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2 * 0.68 + this.game.canvas.height / 2, "logo").setOrigin(0, 0);
        pruebaContador2.displayHeight = this.game.canvas.height * 0.1;
        pruebaContador2.displayWidth = this.game.canvas.width * 0.08;
        pruebaContador2.setImmovable(true)
        pruebaContador2.alpha = 0;

        this.escBU22 = this.add.image(0 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2, "ContadorBlur").setOrigin(0, 0)

        this.escBU22.displayHeight = this.game.canvas.height / 2;
        this.escBU22.displayWidth = this.game.canvas.width;
        this.escBU22.alpha = 0;


        //Escenario 3 Nieve

        //Parte jugador 1

        let escU3 = this.add.image(0 + 1180 * this.escenarios[2].pos, 0, "Nieve").setOrigin(0, 0);

        escU3.displayHeight = this.game.canvas.height / 2;
        escU3.displayWidth = this.game.canvas.width;



        let pruebaNieveU = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[2].pos, this.game.canvas.height * 0.34, "logo")
        pruebaNieveU.displayHeight = this.game.canvas.height * 0.3;
        pruebaNieveU.displayWidth = this.game.canvas.width * 0.13;
        pruebaNieveU.setImmovable(true)
        pruebaNieveU.alpha = 0;


        //Parte jugador 2

        let escD3 = this.add.image(0 + 1180 * this.escenarios[2].pos, this.game.canvas.height / 2, "Nieve").setOrigin(0, 0);

        escD3.displayHeight = this.game.canvas.height / 2;
        escD3.displayWidth = this.game.canvas.width;

        let pruebaNieveD = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        pruebaNieveD.displayHeight = this.game.canvas.height * 0.3;
        pruebaNieveD.displayWidth = this.game.canvas.width * 0.13;
        pruebaNieveD.alpha = 0;




        //Escenario 4 Electricidad

        //Parte jugador 1

        let escU4 = this.add.image(0 + 1180 * this.escenarios[3].pos, 0, "Electricidad").setOrigin(0, 0);

        escU4.displayHeight = this.game.canvas.height / 2;
        escU4.displayWidth = this.game.canvas.width;


        let pruebaElectricidadU = this.physics.add.image(this.game.canvas.width * 0.85 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2 * 0.68, "logo").setOrigin(0, 0);
        pruebaElectricidadU.displayHeight = this.game.canvas.height * 0.1;
        pruebaElectricidadU.displayWidth = this.game.canvas.width * 0.08;
        pruebaElectricidadU.setImmovable(true)
        //pruebaElectricidadU.alpha = 0;

        this.blurElectricidadU = this.add.image(0 + 1180 * this.escenarios[3].pos, 0, "ElectricidadBlur").setOrigin(0, 0);
        this.blurElectricidadU.displayHeight = this.game.canvas.height / 2 - 10;
        this.blurElectricidadU.displayWidth = this.game.canvas.width;
        this.blurElectricidadU.alpha = 0;

        //Parte jugador 2

        let escD4 = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2, "Electricidad").setOrigin(0, 0);

        escD4.displayHeight = this.game.canvas.height / 2;
        escD4.displayWidth = this.game.canvas.width;

        let pruebaElectricidadD = this.physics.add.image(this.game.canvas.width * 0.85 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2 * 0.68 + this.game.canvas.height / 2, "logo").setOrigin(0, 0);
        pruebaElectricidadD.displayHeight = this.game.canvas.height * 0.1;
        pruebaElectricidadD.displayWidth = this.game.canvas.width * 0.08;
        pruebaElectricidadD.setImmovable(true)
        //pruebaElectricidadD.alpha = 0;

        this.blurElectricidadD = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2 + 10, "ElectricidadBlur").setOrigin(0, 0);
        this.blurElectricidadD.displayHeight = this.game.canvas.height / 2;
        this.blurElectricidadD.displayWidth = this.game.canvas.width;
        this.blurElectricidadD.alpha = 0;



        //Limites//


        //Suelo jugador 1

        let muro = this.add.image(0, this.game.canvas.height / 2, "muro").setOrigin(0, 0);
        muro.displayHeight = 1;
        muro.displayWidth = 4320;
        muro.alpha = 0;

        //Suelo jugador 2

        let muro2 = this.add.image(0, this.game.canvas.height - 1, "muro").setOrigin(0, 0);
        muro2.displayHeight = 1;
        muro2.displayWidth = 4320;
        muro2.alpha = 0;

        //Paredes

        let pared1 = this.add.image(1080, 0, "muro").setOrigin(0, 0);
        pared1.displayHeight = this.game.canvas.height;
        pared1.displayWidth = 100;
        pared1.alpha = 0;
        let pared2 = this.add.image(2260, 0, "muro").setOrigin(0, 0);
        pared2.displayHeight = this.game.canvas.height;
        pared2.displayWidth = 100;
        pared2.alpha = 0;
        let pared3 = this.add.image(3440, 0, "muro").setOrigin(0, 0);
        pared3.displayHeight = this.game.canvas.height;
        pared3.displayWidth = 100;
        pared3.alpha = 0;




        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.add(muro);
        this.plataformas.add(muro2);




        this.paredes = this.physics.add.staticGroup();
        this.paredes.add(pared1)
        this.paredes.add(pared2)
        this.paredes.add(pared3)


        //Player 1//

        this.playerU = this.physics.add.sprite(0, this.game.canvas.height / 2 - 50, 'P1');
        this.playerU.play('IdleDerechaP1');
        this.playerU.setScale(0.15).refreshBody();
        this.playerU.body.collideWorldBounds = true;
        this.playerU.id = 0;
        this.playerU.setDepth(1000);

        //Player 2//

        this.playerD = this.physics.add.sprite(0, this.game.canvas.height - 50, 'P2');
        this.playerD.play('IdleDerechaP2');
        this.playerD.setScale(0.15).refreshBody();
        this.playerD.body.collideWorldBounds = true;
        this.playerD.id = 1;


        //controles//

        //Player 2



        this.keyboardP2 = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN,SPACE');

        this.input.keyboard.on('keyup-' + 'LEFT', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'RIGHT', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'UP', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'DOWN', this.unlockP2.bind(this));
        this.input.keyboard.on('keyup-' + 'SPACE', this.unlockP2.bind(this));

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
        this.cam1.setBounds(0, 0, this.game.canvas.width, this.game.canvas.height / 2)
        //Para que persiga al pj
        this.cam1.startFollow(this.playerU, true);
        this.cam1.setZoom(1)


        this.cam2 = this.cameras.add(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 2');


        this.cam2.setBounds(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2)

        this.cam2.startFollow(this.playerD, true);

        this.cam2.setZoom(2.5)




        //Fisicas

        this.playerUS = false;

        this.physics.add.collider(this.playerU, this.plataformas);
        this.physics.add.collider(this.playerD, this.plataformas);
        this.physics.add.collider(this.playerU, this.paredes);
        this.physics.add.collider(this.playerD, this.paredes);


        this.CP1 = this.physics.add.overlap(this.playerU, groupCintaU, () => { this.Prueba(this.playerU) }, null, this);
        this.CP2 = this.physics.add.overlap(this.playerD, cintaD, () => { this.Prueba(this.playerD) }, null, this);
        this.CoP1 = this.physics.add.overlap(this.playerU, pruebaContador, () => { this.Prueba(this.playerU) }, null, this);
        this.CoP2 = this.physics.add.overlap(this.playerD, pruebaContador2, () => { this.Prueba(this.playerD) }, null, this);
        this.EP1 = this.physics.add.overlap(this.playerU, pruebaElectricidadU, () => { this.Prueba(this.playerU) }, null, this);
        this.EP2 = this.physics.add.overlap(this.playerD, pruebaElectricidadD, () => { this.Prueba(this.playerD) }, null, this);


        //Cronometro

        this.play = false;
        this.cro = 0;


        //this.TiempoP1=this.add.bitmapText(this.cam1.midPoint.x+350, this.cam1.midPoint.y-90, 'Digitalism', "00:00:00", 20)
        this.TiempoP1 = this.add.bitmapText(670, 110, 'Digitalism', "00 : 00 : 00", 20)
        this.TiempoP1.setScrollFactor(0, 0)

        this.TiempoP2 = this.add.bitmapText(670, 110, 'Digitalism', "00 : 00 : 00", 20)
        this.TiempoP2.setScrollFactor(0, 0)
        this.cam1.ignore(this.TiempoP2);
        this.cam2.ignore(this.TiempoP1);

        //Ajustes

        this.time.addEvent({
            delay: 100,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });



    }
    update() {
        //console.log("Camara: "+this.cam2.midPoint.x)

        // Control personaje 2

        if (!this.escenasActivas[1]) {

            if (this.keyboardP2.LEFT.isDown === true) {
                this.playerD.body.setVelocityX(-300);
                if (this.playerD.body.touching.down) {
                    this.playerD.anims.play("CorrerIzquierdaP2", true);
                } else {
                    this.playerD.anims.play("SaltoIzquierdaP2", true);
                }

            }
            if (this.keyboardP2.RIGHT.isDown === true) {
                console.log("Derechaa")
                this.playerD.body.setVelocityX(300);
                if (this.playerD.body.touching.down) {
                    this.playerD.anims.play("CorrerDerechaP2", true);
                } else {
                    this.playerD.anims.play("SaltoDerechaP2", true);
                }
            }
            if (this.keyboardP2.UP.isDown === true && this.playerD.body.touching.down) {
                this.playerD.setVelocityY(-800);
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
                this.playerU.setVelocityY(-700);

            }

            if (this.keyboardP1.A.isDown === true) {
                this.playerU.body.setVelocityX(-300);
                if (this.playerU.body.touching.down) {
                    this.playerU.anims.play("CorrerIzquierdaP1", true);
                } else {
                    this.playerU.anims.play("SaltoIzquierdaP1", true);
                }

            }
            if (this.keyboardP1.D.isDown === true) {
                this.playerU.body.setVelocityX(300);
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


    Prueba(player) {

        let pos = (player.x + 1180) / 1180
        pos = Math.trunc(pos) - 1
        player.body.setVelocityX(0);
        player.body.setVelocityY(0);
        player.anims.stop();


        if (player.id == 0) {
            player.anims.play("IdleDerechaP1", true);
            this.PruebaP1(pos);
        } else {
            player.anims.play("IdleDerechaP2", true);
            this.PruebaP2(pos)
        }
    }

    PruebaP1(code) {
        if (this.keyboardP1.E.isDown === true && !this.escenasActivas[0]) {

            let p = 0;
            let e = 0;

            for (let i = 0; i < this.escenarios.length; i++) {
                if (code === this.escenarios[i].pos) {
                    p = this.escenarios[i].nombre
                    e = i;
                }

            }

            if (this.escenarios[e].completadoP1U === false) {
                this.scene.launch(p + "P1", { escena: this });
                this.escenasActivas[0] = true;
            }
            if (this.escenarios[e].completadoP1U === true && this.escenarios[e].doble === true) {
                if (this.escenarios[e].completadoP1D === false) {
                    console.log("INICIANDO PARTE 2")
                    this.scene.launch(p + "P1V2", { escena: this });
                    this.escenasActivas[0] = true;
                }
            }


        }
    }
    PruebaP2(code) {
        if (this.keyboardP2.SPACE.isDown === true && !this.escenasActivas[1]) {
            let p = 0;
            let e = 0;
            for (let i = 0; i < this.escenarios.length; i++) {
                if (code === this.escenarios[i].pos) {
                    p = this.escenarios[i].nombre
                    e = i;
                }

            }


            if (this.escenarios[e].completadoP2U === false) {
                this.scene.launch(p + "P2", { escena: this });
                this.escenasActivas[1] = true;

            }
            if (this.escenarios[e].completadoP2U === true && this.escenarios[e].doble === true) {
                if (this.escenarios[e].completadoP2D === false) {
                    console.log("INICIANDO PARTE 2")
                    this.scene.launch(p + "P2V2", { escena: this });
                    this.escenasActivas[1] = true;
                }
            }


        }

    }



    teletransporte(player, factor, camara) {

        if (this.keyboardP1.E.isDown === true) {

            player.body.setVelocityX(0);
            player.body.setVelocityY(0);
            player.anims.stop();
            player.x = (1180 * (factor + 1) + 100);


            player.y = this.game.canvas.height / 2 - 50;
            camara.setBounds(0 + 1180 * (factor + 1), 0, this.game.canvas.width, this.game.canvas.height / 2)
        }

    }
    teletransporteD(player, factor, camara) {
        if (this.keyboardP2.SPACE.isDown === true) {
            player.body.setVelocityX(0);
            player.body.setVelocityY(0);
            player.anims.stop();
            player.x = (1180 * (factor + 1) + 100);


            player.y = this.game.canvas.height - 50;
            camara.setBounds(0 + 1180 * (factor + 1), this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2)
        }

    }


    //Funciones Cronometro

    empezar() {
        if (this.play == false) {
            let emp = new Date();                      //Fecha en la que empezamos
            let elcrono = setInterval(() => { this.tiempo(emp) }, 10);   //Funcion temporizador cada 10 ms llama a la funcion tiempo
            this.play = true;                         //Reloj puesta en marcha
        }
    }

    tiempo(emp) {
        let actual = new Date();                                   //Tiempo actual
        this.cro = actual - emp;                                   //Tiempo transcurrido
        let cr = new Date();                                       //Por si se para para continuar                        
        cr.setTime(this.cro);                        //Coje el tiempo actual
        //Transformar
        let cs1 = cr.getMilliseconds();
        cs1 = cs1 / 10;
        cs1 = Math.round(cs1);
        let sg1 = cr.getSeconds();
        let mn1 = cr.getMinutes();
        let ho1 = cr.getHours() - 1;
        if (cs1 < 10) {
            cs1 = "0" + cs1;
        }
        if (sg1 < 10) {
            sg1 = "0" + sg1;
        }
        if (mn1 < 10) {
            mn1 = "0" + mn1;
        }
        let mn2 = mn1;
        let sg2 = sg1;
        let cs2 = cs1;
        // this.textoCronometro.setText([
        //     'Tiempo: ' + ho + " : " + mn + " : " + sg + " : " + cs
        // ]);

        /*
        console.log(this.TiempoP2.x);
        this.TiempoP2.x=this.cam2.midPoint.x+350-216
        this.TiempoP2.y=this.cam2.midPoint.y-90+22,
        //*/

        this.TiempoP1.setText([
            mn1 + " : " + sg1 + " : " + cs1
        ]);

        this.TiempoP2.setText([
            mn2 + " : " + sg2 + " : " + cs2
        ]);

    }

    crearPortalGimnasioP1() {
        this.portal = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = this.game.canvas.height * 0.1;
        this.portal.displayWidth = this.game.canvas.width * 0.08;
        this.portal.alpha = 1;
        //let pos = (player.x + 1180) / 1180
        //pos = Math.trunc(pos) - 1

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[0].pos, this.cam1) }, null, this);

    }

    crearPortalPulsadorP1() {
        this.portal = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = this.game.canvas.height * 0.1;
        this.portal.displayWidth = this.game.canvas.width * 0.08;
        this.portal.alpha = 1;

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[1].pos, this.cam1) }, null, this);

    }

    crearPortalElectricidadP1() {
        this.portal = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = this.game.canvas.height * 0.1;
        this.portal.displayWidth = this.game.canvas.width * 0.08;
        this.portal.alpha = 1;

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[3].pos, this.cam1) }, null, this);

    }





    crearPortalGimnasioP2() {

        this.portalD = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = this.game.canvas.height * 0.1;
        this.portalD.displayWidth = this.game.canvas.width * 0.08;
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[0].pos, this.cam2) }, null, this); console.log(this.portal)
    }


    crearPortalPulsadorP2() {

        this.portalD = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = this.game.canvas.height * 0.1;
        this.portalD.displayWidth = this.game.canvas.width * 0.08;
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[1].pos, this.cam2) }, null, this); console.log(this.portal)
    }


    crearPortalElectricidadP2() {

        this.portalD = this.physics.add.image(this.game.canvas.width * 0.94 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = this.game.canvas.height * 0.1;
        this.portalD.displayWidth = this.game.canvas.width * 0.08;
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[3].pos, this.cam2) }, null, this); console.log(this.portal)
    }






    unlockP1() {
        console.log("unlock")

        this.keyLockP1 = false;
    }

    unlockP2() {
        console.log("unlock")

        this.keyLockP2 = false;
    }








    delayDone() {
        this.playerU.body.setSize(this.playerU.width * 0.25, this.playerU.height, true)
        this.playerD.body.setSize(this.playerD.width * 0.25, this.playerD.height, true)
        this.playerU.setGravityY(3000);
        this.playerD.setGravityY(3000);
        this.empezar();
    }
}

/*
  var particles = this.add.particles('snowFlake')
  particles.depth = -10

  var xd = particles.createEmitter({
      x: this.game.canvas.width / 2,
      y: -150,
      lifespan: 8000,
      speedX: { min: -this.game.canvas.width / 2, max: this.game.canvas.width / 2 },
      speedY: { min: +100, max: +150, steps: 1 },
      scale: { start: 0.1, end: 0 },
      blendMode: 'ADD'
  });

  window.xd = xd;
  //*/








export default Scene_play;