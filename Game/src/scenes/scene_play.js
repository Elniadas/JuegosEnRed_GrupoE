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
        this.escenarios[2] = new Escenario("Nieve", 4, false);
        this.escenarios[3] = new Escenario("Electricidad", 2, true);
        this.escenarios[4] = new Escenario("Laboratorio", 3, false);

        this.physics.world.setBounds(0, 0, 5800, this.game.canvas.height);
        var that = this;

        //Factor de suma 1180 * this.escenarios[i].pos

        //Esquema : this.add.image( PosicionX + Factor de suma, PosicionX, "Nombre")

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


        //se ha modificado la posición de la colisión de la cinta para moverla junto a un sprite
        //let cintaU = this.physics.add.image(900+ 1180 * this.escenarios[0].pos, 311, "cintaSprite") //esta no es la oficial, es para pasar más rápido al siguiente nivel
        let cintaU = this.physics.add.image(1030 + 1180 * this.escenarios[0].pos, 89, "cintaSprite")
        //cintaU.displayHeight = 97;
        //cintaU.displayWidth = 80;
        cintaU.setScale(0.30);
        cintaU.setImmovable(true);


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

        // let pCintaU= particles.createEmitter({
        //     x: { min: cintaU.x-50, max: cintaU.x+50 },
        //     y: cintaU.y+100,
        //     lifespan: 3000,
        //     speedY: { min: -60, max: -100 },
        //     scale: { start: 0.3, end: 0 },
        //     quantity: 1,
        //     frame:'yellow',
        //     frequency: 300,
        //     blendMode: 'ADD'
        // });


        //Parte jugador 2

        let gimD = this.add.image(0 + 1180 * this.escenarios[0].pos, this.game.canvas.height / 2, "Gimnasio").setOrigin(0, 0);

        gimD.displayHeight = this.game.canvas.height / 2;
        gimD.displayWidth = this.game.canvas.width;
        gimD.setDepth(-9999)

        this.blurGD = this.add.image(0 + 1180 * this.escenarios[0].pos, this.game.canvas.height / 2 + 10, "GimnasioBlur").setOrigin(0, 0);
        this.blurGD.displayHeight = this.game.canvas.height / 2;
        this.blurGD.displayWidth = this.game.canvas.width;
        this.blurGD.alpha = 0;

        //se ha modificado la posición de la colisión de la cinta para junto a un sprite
        let cintaD = this.physics.add.image(1030 + 1180 * this.escenarios[0].pos, 449, "cintaSprite") //no oficial
        //let cintaD = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        cintaD.setScale(0.30);

        //Plataformas jugador 1
        this.crearPlataformasGimnasioP1();

        //Plataformas jugador 2
        this.crearPlataformasGimnasioP2();

        //Power Up jugador 1
        this.crearSpeedUpP1();

        //this.crearMenosTP1();

        //this.crearBlindP1();

        //this.crearFrostP1();
        //this.crearRayosP1();

        //Power Up jugador 2
        this.crearSpeedUpP2();
        //this.crearMenosTP2();
        //this.crearBlindP2();
        //this.crearRayosP2();

        // let pCintaD= particles.createEmitter({
        //     x: { min: cintaD.x-50, max: cintaD.x+50 },
        //     y: cintaD.y+100,
        //     lifespan: 3000,
        //     speedY: { min: -60, max: -100 },
        //     scale: { start: 0.3, end: 0 },
        //     quantity: 1,
        //     frame:'white',
        //     frequency: 300,
        //     blendMode: 'ADD'
        // });


        // let pCintaD= particles.createEmitter({
        //     x: { min: cintaD.x-50, max: cintaD.x+50 },
        //     y: cintaD.y+100,
        //     lifespan: 3000,
        //     speedY: { min: -60, max: -100 },
        //     scale: { start: 0.3, end: 0 },
        //     quantity: 1,
        //     frame:'white',
        //     frequency: 300,
        //     blendMode: 'ADD'
        // });



        //Escenario 2 Contador

        //Parte jugador 1

        let escU2 = this.add.image(0 + 1180 * this.escenarios[1].pos, 0, "Contador").setOrigin(0, 0);

        escU2.displayHeight = this.game.canvas.height / 2;
        escU2.displayWidth = this.game.canvas.width;

        let pruebaContador = this.physics.add.image(830 + 1180 * this.escenarios[1].pos, 242, "spriteCont").setOrigin(0, 0);
        pruebaContador.displayHeight = this.game.canvas.height * 0.1;
        pruebaContador.displayWidth = this.game.canvas.width * 0.08;
        pruebaContador.setImmovable(true)


        this.escBU2 = this.add.image(0 + 1180 * this.escenarios[1].pos, 0, "ContadorBlur").setOrigin(0, 0)

        this.escBU2.displayHeight = this.game.canvas.height / 2;
        this.escBU2.displayWidth = this.game.canvas.width;
        this.escBU2.alpha = 0;


        //Parte jugador 2

        let escD2 = this.add.image(0 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2, "Contador").setOrigin(0, 0);

        escD2.displayHeight = this.game.canvas.height / 2;
        escD2.displayWidth = this.game.canvas.width;

        let pruebaContador2 = this.physics.add.image(830 + 1180 * this.escenarios[1].pos, 602, "spriteCont").setOrigin(0, 0);
        pruebaContador2.displayHeight = this.game.canvas.height * 0.1;
        pruebaContador2.displayWidth = this.game.canvas.width * 0.08;
        pruebaContador2.setImmovable(true)


        this.escBU22 = this.add.image(0 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2, "ContadorBlur").setOrigin(0, 0)

        this.escBU22.displayHeight = this.game.canvas.height / 2;
        this.escBU22.displayWidth = this.game.canvas.width;
        this.escBU22.alpha = 0;


        //Plataformas jugador 1
        this.crearPlataformasContador1();

        //Plataformas jugador 2
        this.crearPlataformasContador2();

        //Escenario 3 Nieve

        //Parte jugador 1

        let escU3 = this.add.image(0 + 1180 * this.escenarios[2].pos, 0, "Nieve").setOrigin(0, 0);

        escU3.displayHeight = this.game.canvas.height / 2;
        escU3.displayWidth = this.game.canvas.width;

        this.crearPlataformasNieve1();

        //Parte jugador 2

        let escD3 = this.add.image(0 + 1180 * this.escenarios[2].pos, this.game.canvas.height / 2, "Nieve").setOrigin(0, 0);

        escD3.displayHeight = this.game.canvas.height / 2;
        escD3.displayWidth = this.game.canvas.width;

        this.crearPlataformasNieve2();





        //Escenario 4 Electricidad

        //Parte jugador 1

        let escU4 = this.add.image(0 + 1180 * this.escenarios[3].pos, 0, "Electricidad").setOrigin(0, 0);

        escU4.displayHeight = this.game.canvas.height / 2;
        escU4.displayWidth = this.game.canvas.width;


        let pruebaElectricidadU = this.physics.add.image(770 + 1180 * this.escenarios[3].pos, 90, "logo").setOrigin(0, 0);
        pruebaElectricidadU.displayHeight = 140;
        pruebaElectricidadU.displayWidth = 140;
        pruebaElectricidadU.setImmovable(true)
        pruebaElectricidadU.alpha = 0;

        //AÑADIR LAS PARTÍCULAS A LA PRUEBA DE ELECTRICIDAD

        this.blurElectricidadU = this.add.image(0 + 1180 * this.escenarios[3].pos, 0, "ElectricidadBlur").setOrigin(0, 0);
        this.blurElectricidadU.displayHeight = this.game.canvas.height / 2 - 10;
        this.blurElectricidadU.displayWidth = this.game.canvas.width;
        this.blurElectricidadU.alpha = 0;

        //Plataformas jugador 1
        this.crearPlataformasElectricidad1(that);

        //Plataformas jugador 2
        this.crearPlataformasElectricidad2(that);


        //Parte jugador 2

        let escD4 = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2, "Electricidad").setOrigin(0, 0);

        escD4.displayHeight = this.game.canvas.height / 2;
        escD4.displayWidth = this.game.canvas.width;
        escD4.setDepth(-2000);

        let pruebaElectricidadD = this.physics.add.image(770 + 1180 * this.escenarios[3].pos, 450, "logo").setOrigin(0, 0);
        pruebaElectricidadD.displayHeight = 140;
        pruebaElectricidadD.displayWidth = 140;
        pruebaElectricidadD.setImmovable(true)
        pruebaElectricidadD.alpha = 0;

        this.blurElectricidadD = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2 + 10, "ElectricidadBlur").setOrigin(0, 0);
        this.blurElectricidadD.displayHeight = this.game.canvas.height / 2;
        this.blurElectricidadD.displayWidth = this.game.canvas.width;
        this.blurElectricidadD.alpha = 0;



        this.blurElectricidadD = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2 + 10, "ElectricidadBlur").setOrigin(0, 0);
        this.blurElectricidadD.displayHeight = this.game.canvas.height / 2;
        this.blurElectricidadD.displayWidth = this.game.canvas.width;
        this.blurElectricidadD.alpha = 0;


        //Escenario yiieePUm Laboratorio

        //Jugador 1

        let escU5 = this.add.image(0 + 1180 * this.escenarios[4].pos, 0, "Laboratorio").setOrigin(0, 0);

        escU5.displayHeight = this.game.canvas.height / 2;
        escU5.displayWidth = this.game.canvas.width;


        let pruebaLaboratorioU = this.physics.add.image(800 + 1180 * this.escenarios[4].pos, 185, "Ordenador").setOrigin(0, 0);
        pruebaLaboratorioU.displayHeight = this.game.canvas.height * 0.1;
        pruebaLaboratorioU.displayWidth = this.game.canvas.width * 0.08;
        pruebaLaboratorioU.setImmovable(true)


        this.blurLaboratorioU = this.add.image(0 + 1180 * this.escenarios[4].pos, 0, "LaboratorioBlur").setOrigin(0, 0);
        this.blurLaboratorioU.displayHeight = this.game.canvas.height / 2 - 10;
        this.blurLaboratorioU.displayWidth = this.game.canvas.width;
        this.blurLaboratorioU.alpha = 0;

        this.crearPlataformasLaboratorio1();


        //Jugador 2

        let escD5 = this.add.image(0 + 1180 * this.escenarios[4].pos, this.game.canvas.height / 2, "Laboratorio").setOrigin(0, 0);

        escD5.displayHeight = this.game.canvas.height / 2;
        escD5.displayWidth = this.game.canvas.width;

        let pruebaLaboratorioD = this.physics.add.image(this.game.canvas.width * 0.85 + 1180 * this.escenarios[4].pos, this.game.canvas.height / 2 * 0.68 + this.game.canvas.height / 2, "Ordenador").setOrigin(0, 0);
        pruebaLaboratorioD.displayHeight = this.game.canvas.height * 0.1;
        pruebaLaboratorioD.displayWidth = this.game.canvas.width * 0.08;
        pruebaLaboratorioD.setImmovable(true)
        //pruebaElectricidadD.alpha = 0;

        this.blurLaboratorioD = this.add.image(0 + 1180 * this.escenarios[4].pos, this.game.canvas.height / 2 + 10, "LaboratorioBlur").setOrigin(0, 0);
        this.blurLaboratorioD.displayHeight = this.game.canvas.height / 2;
        this.blurLaboratorioD.displayWidth = this.game.canvas.width;
        this.blurLaboratorioD.alpha = 0;

        this.crearPlataformasLaboratorio2();



        //Limites//


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
        let pared4 = this.add.image(4620, 0, "muro").setOrigin(0, 0);
        pared4.displayHeight = this.game.canvas.height;
        pared4.displayWidth = 100;
        pared4.alpha = 0;




        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.add(muro);
        this.plataformas.add(muro2);




        this.paredes = this.physics.add.staticGroup();
        this.paredes.add(pared1)
        this.paredes.add(pared2)
        this.paredes.add(pared3)
        this.paredes.add(pared4)




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
        this.cam1.setBounds(0, 0, this.game.canvas.width, this.game.canvas.height / 2)
        //Para que persiga al pj
        this.cam1.startFollow(this.playerU, true);
        this.cam1.setZoom(1)


        this.cam2 = this.cameras.add(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2).setName('Camara 2');


        this.cam2.setBounds(0, this.game.canvas.height / 2, this.game.canvas.width, this.game.canvas.height / 2)

        this.cam2.startFollow(this.playerD, true);

        this.cam2.setZoom(1)




        //Fisicas


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
        this.LP1 = this.physics.add.overlap(this.playerU, pruebaLaboratorioU, () => { this.Prueba(this.playerU) }, null, this);
        this.LP2 = this.physics.add.overlap(this.playerD, pruebaLaboratorioD, () => { this.Prueba(this.playerD) }, null, this);


        //Cronometro

        this.play = false;
        this.cro = 0;


        //this.TiempoP1=this.add.bitmapText(this.cam1.midPoint.x+350, this.cam1.midPoint.y-90, 'Digitalism', "00:00:00", 20)
        this.TiempoP1 = this.add.bitmapText(750, 90, 'Digitalism', "00 : 00 : 00", 22)
        this.TiempoP1.setScrollFactor(0, 0)

        this.TiempoP2 = this.add.bitmapText(750, 90, 'Digitalism', "00 : 00 : 00", 22)
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


        /*  
        if (this.keyboardP2.ESC.isDown === true) {
            this.playerD.setVelocityY(-750);
        }
    */



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
            player.x = (1180 * (factor + 1) + 25);


            player.y = this.game.canvas.height / 2 - 50;
            camara.setBounds(0 + 1180 * (factor + 1), 0, this.game.canvas.width, this.game.canvas.height / 2)

            //Sonido
            this.sound.play('TeletransporteFinal');
        }

    }
    teletransporteD(player, factor, camara) {
        if (this.keyboardP2.SPACE.isDown === true) {
            player.body.setVelocityX(0);
            player.body.setVelocityY(0);
            player.anims.stop();
            player.x = (1180 * (factor + 1) + 25);


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
        cr.setTime(this.cro);                                        //Coje el tiempo actual
        let time = cr.getTime() + this.playerU.time;
        let time2 = cr.getTime() + this.playerD.time
        //Transformar
        let cs1 = time % 1000;
        cs1 = cs1 / 10;
        cs1 = Math.round(cs1);
        let sg1 = time / 1000
        //sg1 = sg1 % 100;
        sg1 = Math.trunc(sg1)
        let mn1 = time / 60000;
        mn1 = Math.trunc(mn1)


        if (cs1 < 10) {
            cs1 = "0" + cs1;
        }
        if (sg1 < 10) {
            sg1 = "0" + sg1;
        }
        if (sg1 > 59) {
            sg1 = sg1 % 60;
            //sg1 = "0" + sg1;
        }
        if (mn1 < 10) {
            mn1 = "0" + mn1;
        }



        let cs2 = time2 % 1000;
        cs2 = cs2 / 10;
        cs2 = Math.round(cs2);
        let sg2 = time2 / 1000
        sg2 = Math.trunc(sg2)
        let mn2 = time2 / 60000;
        mn2 = Math.trunc(mn2)

        if (cs2 < 10) {
            cs2 = "0" + cs2;
        }
        if (sg2 < 10) {
            sg2 = "0" + sg2;
        }
        if (sg2 > 59) {
            sg2 = sg2 % 60;
            //sg2 = "0" + sg2;
        }
        if (mn2 < 10) {
            mn2 = "0" + mn2;
        }
        
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

        this.TiempoP2.setText([
            mn2 + " : " + sg2 + " : " + cs2
        ]);

    }

    //POWER UPS

    crearSpeedUpP1() {
        let run = this.physics.add.image(50 + 1180 * this.escenarios[0].pos, 100, "run").setOrigin(0, 0);
        run.setScale(0.1)
        this.physics.add.overlap(this.playerU, run, () => {
            this.playerU.velocidad = 500
            run.destroy();
            setTimeout(() => { this.playerU.velocidad = 300; console.log("Se te acabo el chollo") }, 15000)
        }, null, this);
    }

     

    crearMenosTP1() {
        let reloj = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100, "menosT").setOrigin(0, 0);
        reloj.setScale(0.1)
        this.physics.add.overlap(this.playerU, reloj, () => {
            this.playerU.time += -3000;
            reloj.destroy();
        }, null, this);
    }

    crearMasTP1() {
        this.playerD.time += 13000;
    }

    crearFrostP1() {
        //let reloj = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100, "menosT").setOrigin(0, 0);
        //reloj.setScale(0.1)
        //this.physics.add.overlap(this.playerU, reloj, () => {
        this.playerD.setVelocityX(0);
        this.escenasActivas[1] = true;
        if (this.game.scene.isActive("CintaP2")) {
            this.game.scene.stop("CintaP2");
            this.blurGD.alpha = 0;
        }
        if (this.game.scene.isActive("CintaP2V2")) {
            this.game.scene.stop("CintaP2V2");
            this.blurGD.alpha = 0;
        }
        if (this.game.scene.isActive("ContadorP2")) {
            this.game.scene.stop("ContadorP2");
            this.escBU22.alpha = 0;
        }
        if (this.game.scene.isActive("ElectricidadP2")) {
            this.game.scene.stop("ElectricidadP2");
            this.blurElectricidadD.alpha = 0;
        }
        if (this.game.scene.isActive("ElectricidadP2V2")) {
            this.game.scene.stop("ElectricidadP2V2");
            this.blurElectricidadD.alpha = 0;
        }
        if (this.game.scene.isActive("LaboratorioP2")) {
            this.game.scene.stop("LaboratorioP2");
            this.blurLaboratorioD.alpha = 0;
        }
        setTimeout(() => { this.escenasActivas[1] = false; }, 6000)
        //reloj.destroy();
        //}, null, this);
    }




    crearBlindP1() {
        //let blind = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100, "menosT").setOrigin(0, 0);
        //blind.setScale(0.1)
        //this.physics.add.overlap(this.playerU, blind, () => {
        let ceguera = this.add.image(this.game.canvas.width / 2, 197, "Foco")
        ceguera.scale = 0.6;
        ceguera.setScrollFactor(0, 0)
        ceguera.setDepth(1000000)
        this.cam1.ignore(ceguera);
        //blind.destroy();
        setTimeout(() => { ceguera.destroy(); console.log("Se te acabo la ceguera") }, 15000)

        //}, null, this);
    }

    crearRayosP1() {
        //let rayos = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100, "menosT").setOrigin(0, 0);
        //rayos.setScale(0.1)
        let pos = (this.playerD.x + 1180) / 1180
        pos = Math.trunc(pos) - 1
        //this.physics.add.overlap(this.playerU, rayos, () => {
        this.RayosD(0, pos);
        // rayos.destroy();

        //}, null, this);
    }

    RayosD(i, postion) {


        if (i < 6) {
            //Primero



            let r1 = this.physics.add.image(this.game.canvas.width / 5 + 1180 * postion, this.game.canvas.height * 0.75, "laser")
            r1.alpha = 0.95
            r1.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerD, r1, () => {
                this.playerD.velocidad = 200;
                console.log("se rompe");
                r1.destroy();
            }, null, this)


            let r2 = this.physics.add.image(this.game.canvas.width / 5 * 2 + 1180 * postion, this.game.canvas.height * 0.75, "laser")
            r2.alpha = 0.95
            r2.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerD, r2, () => {
                this.playerD.velocidad = 200;
                console.log("se rompe");
                r2.destroy();
            }, null, this)

            let r3 = this.physics.add.image(this.game.canvas.width / 5 * 3 + 1180 * postion, this.game.canvas.height * 0.75, "laser")
            r3.alpha = 0.95
            r3.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerD, r3, () => {
                this.playerD.velocidad = 200;
                console.log("se rompe");
                r3.destroy();
            }, null, this)


            let r4 = this.physics.add.image(this.game.canvas.width / 5 * 4 + 1180 * postion, this.game.canvas.height * 0.75, "laser")
            r4.alpha = 0.95
            r4.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerD, r4, () => {
                this.playerD.velocidad = 200;
                console.log("se rompe");
                r4.destroy();
            }, null, this)



            setTimeout(() => {
                if (r1 !== undefined) {
                    console.log("se rompe");
                    r1.destroy();
                }
                if (r2 !== undefined) {
                    console.log("se rompe");
                    r2.destroy();
                }
                if (r3 !== undefined) {
                    console.log("se rompe");
                    r3.destroy();
                }
                if (r4 !== undefined) {
                    console.log("se rompe");
                    r4.destroy();
                }
                this.playerD.velocidad = 300

            }, 3000);




            setTimeout(() => {
                i++;
                let postion = (this.playerD.x + 1180) / 1180
                postion = Math.trunc(postion) - 1
                this.RayosD(i, postion);

            }, 3500);

        }
    }


    crearSpeedUpP2() {
        let run = this.physics.add.image(50 + 1180 * this.escenarios[0].pos, 100 + this.game.canvas.height / 2, "run").setOrigin(0, 0);
        run.setScale(0.1)
        this.physics.add.overlap(this.playerD, run, () => {
            this.playerD.velocidad = 500
            run.destroy();
            setTimeout(() => { this.playerD.velocidad = 300; console.log("Se te acabo el chollo") }, 15000)
        }, null, this);
    }


    crearMenosTP2() {
        let reloj = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100 + this.game.canvas.height / 2, "menosT").setOrigin(0, 0);
        reloj.setScale(0.1)
        this.physics.add.overlap(this.playerD, reloj, () => {
            this.playerD.time += -3000;
            reloj.destroy();
        }, null, this);
    }
    crearMasTP2() {
        this.playerU.time += 13000;
    }


    crearBlindP2() {
        //let blind = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100 + this.game.canvas.height / 2, "menosT").setOrigin(0, 0);
        //blind.setScale(0.1)
        //this.physics.add.overlap(this.playerD, blind, () => {
        let ceguera = this.add.image(this.game.canvas.width / 2, 197, "Foco")
        ceguera.scale = 0.6;
        ceguera.setScrollFactor(0, 0)
        ceguera.setDepth(1000000)
        this.cam2.ignore(ceguera);
        //blind.destroy();
        setTimeout(() => { ceguera.destroy(); console.log("Se te acabo la ceguera") }, 15000)

        //}, null, this);
    }

    crearFrostP2() {
        // let reloj = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100 + this.game.canvas.height / 2, "menosT").setOrigin(0, 0);
        //reloj.setScale(0.1)
        //this.physics.add.overlap(this.playerD, reloj, () => {
        this.playerU.setVelocityX(0);
        this.escenasActivas[0] = true;
        if (this.game.scene.isActive("CintaP1")) {
            this.game.scene.stop("CintaP1");
            this.blurGU.alpha = 0;
        }
        if (this.game.scene.isActive("CintaP2V1")) {
            this.game.scene.stop("CintaP2V1");
            this.blurGU.alpha = 0;
        }
        if (this.game.scene.isActive("ContadorP1")) {
            this.game.scene.stop("ContadorP1");
            this.escBU2.alpha = 0;
        }
        if (this.game.scene.isActive("ElectricidadP1")) {
            this.game.scene.stop("ElectricidadP1");
            this.blurElectricidadU.alpha = 0;
        }
        if (this.game.scene.isActive("ElectricidadP1V2")) {
            this.game.scene.stop("ElectricidadP1V2");
            this.blurElectricidadU.alpha = 0;
        }
        if (this.game.scene.isActive("LaboratorioP1")) {
            this.game.scene.stop("LaboratorioP1");
            this.blurLaboratorioU.alpha = 0;
        }
        setTimeout(() => { this.escenasActivas[0] = false; }, 6000)
        // reloj.destroy();
        //}, null, this);
    }


    crearRayosP2() {
        //let rayos = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 100+this.game.canvas.height/2, "menosT").setOrigin(0, 0);
        //rayos.setScale(0.1)
        let pos = (this.playerU.x + 1180) / 1180
        pos = Math.trunc(pos) - 1
        //this.physics.add.overlap(this.playerD, rayos, () => {
        this.RayosU(0, pos);
        //  rayos.destroy();

        //}, null, this);
    }





    RayosU(i, postion) {


        if (i < 6) {
            //Primero



            let r1 = this.physics.add.image(this.game.canvas.width / 5 + 1180 * postion, this.game.canvas.height * 0.25, "laser")
            r1.alpha = 0.95
            r1.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerU, r1, () => {
                this.playerU.velocidad = 200;
                console.log("se rompe");
                r1.destroy();
            }, null, this)


            let r2 = this.physics.add.image(this.game.canvas.width / 5 * 2 + 1180 * postion, this.game.canvas.height * 0.25, "laser")
            r2.alpha = 0.95
            r2.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerU, r2, () => {
                this.playerU.velocidad = 200;
                console.log("se rompe");
                r2.destroy();
            }, null, this)

            let r3 = this.physics.add.image(this.game.canvas.width / 5 * 3 + 1180 * postion, this.game.canvas.height * 0.25, "laser")
            r3.alpha = 0.95
            r3.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerU, r3, () => {
                this.playerU.velocidad = 200;
                console.log("se rompe");
                r3.destroy();
            }, null, this)


            let r4 = this.physics.add.image(this.game.canvas.width / 5 * 4 + 1180 * postion, this.game.canvas.height * 0.25, "laser")
            r4.alpha = 0.95
            r4.displayHeight = this.game.canvas.height / 2;

            this.physics.add.overlap(this.playerU, r4, () => {
                this.playerU.velocidad = 200;
                console.log("se rompe");
                r4.destroy();
            }, null, this)



            setTimeout(() => {
                if (r1 !== undefined) {
                    console.log("se rompe");
                    r1.destroy();
                }
                if (r2 !== undefined) {
                    console.log("se rompe");
                    r2.destroy();
                }
                if (r3 !== undefined) {
                    console.log("se rompe");
                    r3.destroy();
                }
                if (r4 !== undefined) {
                    console.log("se rompe");
                    r4.destroy();
                }
                this.playerU.velocidad = 300

            }, 3000);




            setTimeout(() => {
                i++;
                let postion = (this.playerU.x + 1180) / 1180
                postion = Math.trunc(postion) - 1
                this.RayosU(i, postion);

            }, 3500);

        }
    }


//PORTALES


    crearPortalGimnasioP1() {
        let spritePortal = this.add.sprite(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155; //spritePortal.height x 0.5
        this.portal.displayWidth = 84; //spritePortal.width x 0.5
        this.portal.alpha = 0;

        //let pos = (player.x + 1180) / 1180
        //pos = Math.trunc(pos) - 1


        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[0].pos, this.cam1) }, null, this);

    }

    crearPortalPulsadorP1() {
        let spritePortal = this.add.sprite(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155; //spritePortal.height x 0.5
        this.portal.displayWidth = 84; //spritePortal.width x 0.5
        this.portal.alpha = 0;

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[1].pos, this.cam1) }, null, this);

    }


    crearPortalElectricidadP1() {
        let spritePortal = this.add.sprite(1038 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155;
        this.portal.displayWidth = 84;
        this.portal.alpha = 0;

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[3].pos, this.cam1) }, null, this);

    }

    crearPortalLaboratorioP1() {
        let spritePortal = this.add.sprite(1038 + 1180 * this.escenarios[4].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[4].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155; //spritePortal.height x 0.5
        this.portal.displayWidth = 84; //spritePortal.width x 0.5
        this.portal.alpha = 0;

        //let pos = (player.x + 1180) / 1180
        //pos = Math.trunc(pos) - 1


        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[4].pos, this.cam1) }, null, this);

    }




    crearPortalGimnasioP2() {
        let spritePortal2 = this.add.sprite(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal2.play("portalAnim");
        spritePortal2.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155; //spritePortal.height x 0.5
        this.portalD.displayWidth = 84; //spritePortal.width x 0.5
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[0].pos, this.cam2) }, null, this); console.log(this.portal)
    }


    crearPortalPulsadorP2() {
        let spritePortal2 = this.add.sprite(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal2.play("portalAnim");
        spritePortal2.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155; //spritePortal.height x 0.5
        this.portalD.displayWidth = 84; //spritePortal.width x 0.5
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[1].pos, this.cam2) }, null, this); console.log(this.portal);
    }


    crearPortalElectricidadP2() {
        let spritePortal = this.add.sprite(1038 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[3].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155;
        this.portalD.displayWidth = 84;
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[3].pos, this.cam2) }, null, this); console.log(this.portal)
    }

    
    crearPortalLaboratorioP2() {
        let spritePortal2 = this.add.sprite(1038 + 1180 * this.escenarios[4].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal2.play("portalAnim");
        spritePortal2.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[4].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155; //spritePortal.height x 0.5
        this.portalD.displayWidth = 84; //spritePortal.width x 0.5
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[4].pos, this.cam2) }, null, this); console.log(this.portal)
    }

//plataformas

    

    crearPlataformasGimnasioP1() {
        let p1_1_1 = this.physics.add.image(100 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.42, "gymplatform").setImmovable(true);
        p1_1_1.displayHeight = 20;
        p1_1_1.displayWidth = 80;

        let p1_1_2 = this.physics.add.image(220 + 1180 * this.escenarios[0].pos, 260, "gymplatform").setImmovable(true);
        p1_1_2.displayHeight = 20;
        p1_1_2.displayWidth = 80;

        let p1_1_3 = this.physics.add.image(320 + 1180 * this.escenarios[0].pos, 150, "gymplatform").setImmovable(true);
        this.tweens.timeline({
            targets: p1_1_3.body.velocity,
            loop: -1,
            tweens: [
                { y: 80, duration: 750, ease: 'Stepped' },
                { y: -80, duration: 750, ease: 'Stepped' }
            ]
        })

        let p1_1_4 = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 120, "gymplatform").setImmovable(true);
        p1_1_4.displayHeight = 20;
        p1_1_4.displayWidth = 80;

        let p1_1_5 = this.physics.add.image(85 + 1180 * this.escenarios[0].pos, 150, "gymplatform").setImmovable(true);
        p1_1_5.displayHeight = 20;
        p1_1_5.displayWidth = 80;

        let p1_1_6 = this.physics.add.image(430 + 1180 * this.escenarios[0].pos, 185, "gymplatform").setImmovable(true);
        p1_1_6.displayHeight = 20;
        p1_1_6.displayWidth = 80;

        let p1_1_7 = this.physics.add.image(535 + 1180 * this.escenarios[0].pos, 230, "gymplatform").setImmovable(true);
        p1_1_7.displayHeight = 20;
        p1_1_7.displayWidth = 80;

        let p1_1_8 = this.physics.add.image(650 + 1180 * this.escenarios[0].pos, 230, "gymplatform").setImmovable(true);
        p1_1_8.displayHeight = 20;
        p1_1_8.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_1_8.body.velocity,
            loop: -1,
            tweens: [
                { y: -60, duration: 850, ease: 'Stepped' },
                { y: 60, duration: 850, ease: 'Stepped' }
            ]
        })

        let p1_1_9 = this.physics.add.image(750 + 1180 * this.escenarios[0].pos, 135, "gymplatform").setImmovable(true);
        p1_1_9.displayHeight = 20;
        p1_1_9.displayWidth = 80;

        let p1_1_10 = this.physics.add.image(950 + 1180 * this.escenarios[0].pos, 190, "gymplatform").setImmovable(true);
        p1_1_10.displayHeight = 20;
        p1_1_10.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_1_10.body.velocity,
            loop: -1,
            tweens: [
                { x: -60, duration: 1700, ease: 'Stepped' },
                { x: 60, duration: 1700, ease: 'Stepped' }
            ]
        })

        let p1_1_11 = this.physics.add.image(1020 + 1180 * this.escenarios[0].pos, 135, "gymplatform").setImmovable(true);
        p1_1_11.displayHeight = 20;
        p1_1_11.displayWidth = 80;


        let grupoP1_gym = this.add.group();
        grupoP1_gym.add(p1_1_1);
        grupoP1_gym.add(p1_1_2);
        grupoP1_gym.add(p1_1_3);
        grupoP1_gym.add(p1_1_4);
        grupoP1_gym.add(p1_1_5);
        grupoP1_gym.add(p1_1_6);
        grupoP1_gym.add(p1_1_7);
        grupoP1_gym.add(p1_1_8);
        grupoP1_gym.add(p1_1_9);
        grupoP1_gym.add(p1_1_10);
        grupoP1_gym.add(p1_1_11);

        this.physics.add.collider(this.playerU, grupoP1_gym);

    }

    crearPlataformasGimnasioP2() {
        let p2_1_1 = this.physics.add.image(100 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.42 + 360, "gymplatform").setImmovable(true);
        p2_1_1.displayHeight = 20;
        p2_1_1.displayWidth = 80;

        let p2_1_2 = this.physics.add.image(220 + 1180 * this.escenarios[0].pos, 620, "gymplatform").setImmovable(true);
        p2_1_2.displayHeight = 20;
        p2_1_2.displayWidth = 80;

        let p2_1_3 = this.physics.add.image(320 + 1180 * this.escenarios[0].pos, 510, "gymplatform").setImmovable(true);
        this.tweens.timeline({
            targets: p2_1_3.body.velocity,
            loop: -1,
            tweens: [
                { y: 80, duration: 750, ease: 'Stepped' },
                { y: -80, duration: 750, ease: 'Stepped' }
            ]
        })

        let p2_1_4 = this.physics.add.image(200 + 1180 * this.escenarios[0].pos, 480, "gymplatform").setImmovable(true);
        p2_1_4.displayHeight = 20;
        p2_1_4.displayWidth = 80;

        let p2_1_5 = this.physics.add.image(85 + 1180 * this.escenarios[0].pos, 510, "gymplatform").setImmovable(true);
        p2_1_5.displayHeight = 20;
        p2_1_5.displayWidth = 80;

        let p2_1_6 = this.physics.add.image(430 + 1180 * this.escenarios[0].pos, 545, "gymplatform").setImmovable(true);
        p2_1_6.displayHeight = 20;
        p2_1_6.displayWidth = 80;

        let p2_1_7 = this.physics.add.image(535 + 1180 * this.escenarios[0].pos, 590, "gymplatform").setImmovable(true);
        p2_1_7.displayHeight = 20;
        p2_1_7.displayWidth = 80;

        let p2_1_8 = this.physics.add.image(650 + 1180 * this.escenarios[0].pos, 590, "gymplatform").setImmovable(true);
        p2_1_8.displayHeight = 20;
        p2_1_8.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_1_8.body.velocity,
            loop: -1,
            tweens: [
                { y: -60, duration: 850, ease: 'Stepped' },
                { y: 60, duration: 850, ease: 'Stepped' }
            ]
        })

        let p2_1_9 = this.physics.add.image(750 + 1180 * this.escenarios[0].pos, 495, "gymplatform").setImmovable(true);
        p2_1_9.displayHeight = 20;
        p2_1_9.displayWidth = 80;

        let p2_1_10 = this.physics.add.image(950 + 1180 * this.escenarios[0].pos, 550, "gymplatform").setImmovable(true);
        p2_1_10.displayHeight = 20;
        p2_1_10.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_1_10.body.velocity,
            loop: -1,
            tweens: [
                { x: -60, duration: 1700, ease: 'Stepped' },
                { x: 60, duration: 1700, ease: 'Stepped' }
            ]
        })

        let p2_1_11 = this.physics.add.image(1020 + 1180 * this.escenarios[0].pos, 495, "gymplatform").setImmovable(true);
        p2_1_11.displayHeight = 20;
        p2_1_11.displayWidth = 80;


        let grupoP2_gym = this.add.group();
        grupoP2_gym.add(p2_1_1);
        grupoP2_gym.add(p2_1_2);
        grupoP2_gym.add(p2_1_3);
        grupoP2_gym.add(p2_1_4);
        grupoP2_gym.add(p2_1_5);
        grupoP2_gym.add(p2_1_6);
        grupoP2_gym.add(p2_1_7);
        grupoP2_gym.add(p2_1_8);
        grupoP2_gym.add(p2_1_9);
        grupoP2_gym.add(p2_1_10);
        grupoP2_gym.add(p2_1_11);

        this.physics.add.collider(this.playerD, grupoP2_gym);

    }

    crearPlataformasContador1() {
        let p1_2_1 = this.physics.add.image(100 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.42, "contplatform").setImmovable(true);
        p1_2_1.displayHeight = 20;
        p1_2_1.displayWidth = 80;
        
        this.tweens.timeline({
            targets: p1_2_1.body.velocity,
            loop: -1,
            tweens: [
                { x: 60, duration: 2000, ease: 'Stepped' },
                { x: -60, duration: 2000, ease: 'Stepped' }

            ]
        });

        let p1_2_2 = this.physics.add.image(275 + 1180 * this.escenarios[1].pos, 220, "contplatform").setImmovable(true);
        p1_2_2.displayHeight = 20;
        p1_2_2.displayWidth = 80;
        
        this.tweens.timeline({
            targets: p1_2_2.body.velocity,
            loop: -1,
            tweens: [
                { x: -80, duration: 1300, ease: 'Stepped' },
                { x: 80, duration: 1300, ease: 'Stepped' }

            ]
        });

        let p1_2_3 = this.physics.add.image(75 + 1180 * this.escenarios[1].pos, 150, "contplatform").setImmovable(true);
        p1_2_3.displayHeight = 20;
        p1_2_3.displayWidth = 80;

        let p1_2_4 = this.physics.add.image(200 + 1180 * this.escenarios[1].pos, 100, "contplatform").setImmovable(true);
        p1_2_4.displayHeight = 20;
        p1_2_4.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_2_4.body.velocity,
            loop: -1,
            tweens: [
                { x: 70, duration: 1500, ease: 'Stepped' },
                { x: -70, duration: 1500, ease: 'Stepped' }

            ]
        });

        let p1_2_5 = this.physics.add.image(390 + 1180 * this.escenarios[1].pos, 100, "contplatform").setImmovable(true);
        p1_2_5.displayHeight = 20;
        p1_2_5.displayWidth = 80;

        let p1_2_6 = this.physics.add.image(490 + 1180 * this.escenarios[1].pos, 100, "contplatform").setImmovable(true);
        p1_2_6.displayHeight = 20;
        p1_2_6.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_2_6.body.velocity,
            loop: -1,
            tweens: [
                { y: 40, duration: 2500, ease: 'Stepped' },
                { y: -40, duration: 2500, ease: 'Stepped' }

            ]
        });

        let p1_2_7 = this.physics.add.image(610 + 1180 * this.escenarios[1].pos, 200, "contplatform").setImmovable(true);
        p1_2_7.displayHeight = 20;
        p1_2_7.displayWidth = 80;

        //muro para que no se entre en contador directamente
        let notCheating = this.physics.add.image(790 + 1180 * this.escenarios[1].pos, 235, "telon").setImmovable(true);
        notCheating.displayHeight = 250;
        notCheating.displayWidth = 20;
        
        let p1_2_8 = this.physics.add.image(720 + 1180 * this.escenarios[1].pos, 150, "contplatform").setImmovable(true);
        p1_2_8.displayHeight = 20;
        p1_2_8.displayWidth = 80;



        let grupoP1_cont = this.add.group();
        grupoP1_cont.add(p1_2_1);
        grupoP1_cont.add(p1_2_2);
        grupoP1_cont.add(p1_2_3);
        //plataforma 3 desaparece
        var intermitence = setInterval(() => {
            p1_2_3.alpha = p1_2_3.alpha == 1 ? 0 : 1;
            p1_2_3.alpha == 1 ? grupoP1_cont.add(p1_2_3) : grupoP1_cont.remove(p1_2_3);
        }, 2500);
        grupoP1_cont.add(p1_2_4);
        grupoP1_cont.add(p1_2_5);
        grupoP1_cont.add(p1_2_6);
        grupoP1_cont.add(p1_2_7);
        var intermitence = setInterval(() => {
            p1_2_7.alpha = p1_2_7.alpha == 1 ? 0 : 1;
            p1_2_7.alpha == 1 ? grupoP1_cont.add(p1_2_7) : grupoP1_cont.remove(p1_2_7);
        }, 2000);
        //grupoP1_cont.add(notCheating); //descomentar, solo está comentado para hacer pruebas rápidamente
        grupoP1_cont.add(p1_2_8);

        this.physics.add.collider(this.playerU, grupoP1_cont);

    }
    crearPlataformasContador2() {
        let p2_2_1 = this.physics.add.image(100 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.42 + 360, "contplatform").setImmovable(true);
        p2_2_1.displayHeight = 20;
        p2_2_1.displayWidth = 80;
        

        this.tweens.timeline({
            targets: p2_2_1.body.velocity,
            loop: -1,
            tweens: [
                { x: 60, duration: 2000, ease: 'Stepped' },
                { x: -60, duration: 2000, ease: 'Stepped' }

            ]
        });

        let p2_2_2 = this.physics.add.image(275 + 1180 * this.escenarios[1].pos, 580, "contplatform").setImmovable(true);
        p2_2_2.displayHeight = 20;
        p2_2_2.displayWidth = 80;
        

        this.tweens.timeline({
            targets: p2_2_2.body.velocity,
            loop: -1,
            tweens: [
                { x: -80, duration: 1200, ease: 'Stepped' },
                { x: 80, duration: 1200, ease: 'Stepped' }

            ]
        });

        let p2_2_3 = this.physics.add.image(75 + 1180 * this.escenarios[1].pos, 510, "contplatform").setImmovable(true);
        p2_2_3.displayHeight = 20;
        p2_2_3.displayWidth = 80;

        let p2_2_4 = this.physics.add.image(200 + 1180 * this.escenarios[1].pos, 460, "contplatform").setImmovable(true);
        p2_2_4.displayHeight = 20;
        p2_2_4.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_2_4.body.velocity,
            loop: -1,
            tweens: [
                { x: 70, duration: 1500, ease: 'Stepped' },
                { x: -70, duration: 1500, ease: 'Stepped' }

            ]
        });

        let p2_2_5 = this.physics.add.image(390 + 1180 * this.escenarios[1].pos, 460, "contplatform").setImmovable(true);
        p2_2_5.displayHeight = 20;
        p2_2_5.displayWidth = 80;

        let p2_2_6 = this.physics.add.image(490 + 1180 * this.escenarios[1].pos, 460, "contplatform").setImmovable(true);
        p2_2_6.displayHeight = 20;
        p2_2_6.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_2_6.body.velocity,
            loop: -1,
            tweens: [
                { y: 40, duration: 2500, ease: 'Stepped' },
                { y: -40, duration: 2500, ease: 'Stepped' }

            ]
        });

        let p2_2_7 = this.physics.add.image(610 + 1180 * this.escenarios[1].pos, 560, "contplatform").setImmovable(true);
        p2_2_7.displayHeight = 20;
        p2_2_7.displayWidth = 80;

        //muro para que no se entre en contador directamente
        let notCheating2 = this.physics.add.image(790 + 1180 * this.escenarios[1].pos, 595, "telon").setImmovable(true);
        notCheating2.displayHeight = 250;
        notCheating2.displayWidth = 20;
        

        let p2_2_8 = this.physics.add.image(720 + 1180 * this.escenarios[1].pos, 510, "contplatform").setImmovable(true);
        p2_2_8.displayHeight = 20;
        p2_2_8.displayWidth = 80;



        let grupoP2_cont = this.add.group();
        grupoP2_cont.add(p2_2_1);
        grupoP2_cont.add(p2_2_2);
        grupoP2_cont.add(p2_2_3);
        //plataforma 3 desaparece
        var intermitence = setInterval(() => {
            p2_2_3.alpha = p2_2_3.alpha == 1 ? 0 : 1;
            p2_2_3.alpha == 1 ? grupoP2_cont.add(p2_2_3) : grupoP2_cont.remove(p2_2_3);
        }, 2500);
        grupoP2_cont.add(p2_2_4);
        grupoP2_cont.add(p2_2_5);
        grupoP2_cont.add(p2_2_6);
        grupoP2_cont.add(p2_2_7);
        var intermitence = setInterval(() => {
            p2_2_7.alpha = p2_2_7.alpha == 1 ? 0 : 1;
            p2_2_7.alpha == 1 ? grupoP2_cont.add(p2_2_7) : grupoP2_cont.remove(p2_2_7);
        }, 2000);
        grupoP2_cont.add(notCheating2);
        grupoP2_cont.add(p2_2_8);


        this.physics.add.collider(this.playerD, grupoP2_cont);


    }

    crearPlataformasElectricidad1(that) {
        var that_ = that;

        let p1_3_1 = this.physics.add.image(108 + 1180 * this.escenarios[3].pos, 300, "elecplatform").setImmovable(true);
        p1_3_1.displayHeight = 20;
        p1_3_1.displayWidth = 80;

        let p1_3_2 = this.physics.add.image(290 + 1180 * this.escenarios[3].pos, 180, "elecplatform").setImmovable(true);
        p1_3_2.displayHeight = 20;
        p1_3_2.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_3_2.body.velocity,
            loop: -1,
            tweens: [
                { x: -30, y: 30, duration: 2200, ease: 'Stepped' },
                { x: 30, y: -30, duration: 2200, ease: 'Stepped' }

            ]
        });

        let p1_3_3 = this.physics.add.image(190 + 1180 * this.escenarios[3].pos, 180, "elecplatform").setImmovable(true);
        p1_3_3.displayHeight = 20;
        p1_3_3.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_3_3.body.velocity,
            loop: -1,
            tweens: [
                { x: -30, y: -30, duration: 2200, ease: 'Stepped' },
                { x: 30, y: 30, duration: 2200, ease: 'Stepped' }

            ]
        });

        let p1_3_4 = this.physics.add.image(40 + 1180 * this.escenarios[3].pos, 115, "elecplatform").setImmovable(true);
        p1_3_4.displayHeight = 20;
        p1_3_4.displayWidth = 80;

        //let p1_3_5=this.physics.add.image( 500 ,115, "gymplatform").setImmovable(true);   

        let p1_3_5 = this.physics.add.image(500 + 1180 * this.escenarios[3].pos, 200, "elecplatform").setImmovable(true).setVelocity(0, 100);
        p1_3_5.displayHeight = 20;
        p1_3_5.displayWidth = 80;

        this.tweens.timeline({

            targets: p1_3_5.body.velocity,
            loop: -1,
            duration: 1000,

            tweens: [
                { x: { value: -100, ease: 'Sine.easeOut' }, y: { value: 0, ease: 'Sine.easeIn' } },
                { x: { value: 0, ease: 'Sine.easeIn' }, y: { value: -100, ease: 'Sine.easeOut' } },
                { x: { value: 100, ease: 'Sine.easeOut' }, y: { value: 0, ease: 'Sine.easeIn' } },
                { x: { value: 0, ease: 'Sine.easeIn' }, y: { value: 100, ease: 'Sine.easeOut' } },

            ],
            onLoop: function () {
                p1_3_5.body.reset(500 + 1180 * that_.escenarios[3].pos, 200);
            }
        });

        let p1_3_6 = this.physics.add.image(600 + 1180 * this.escenarios[3].pos, 150, "elecplatform").setImmovable(true);
        p1_3_6.displayHeight = 20;
        p1_3_6.displayWidth = 80;

        let notCheating = this.physics.add.image(700 + 1180 * this.escenarios[3].pos, 235, "elecplatform").setImmovable(true);
        notCheating.displayHeight = 250;
        notCheating.displayWidth = 20;
        notCheating.alpha = 0;

        let p1_3_7 = this.physics.add.image(840 + 1180 * this.escenarios[3].pos, 250, "elecplatform").setImmovable(true);
        p1_3_7.displayHeight = 20;
        p1_3_7.displayWidth = 220;


        let grupoP1_elec = this.add.group();
        grupoP1_elec.add(p1_3_1);
        var intermitence = setInterval(() => {
            p1_3_1.alpha = p1_3_1.alpha == 1 ? 0 : 1;
            p1_3_1.alpha == 1 ? grupoP1_elec.add(p1_3_1) : grupoP1_elec.remove(p1_3_1);
        }, 1000);
        grupoP1_elec.add(p1_3_2);
        grupoP1_elec.add(p1_3_3);
        grupoP1_elec.add(p1_3_4);
        grupoP1_elec.add(p1_3_5);
        grupoP1_elec.add(p1_3_6);
        var intermitence = setInterval(() => {
            p1_3_6.alpha = p1_3_6.alpha == 1 ? 0 : 1;
            p1_3_6.alpha == 1 ? grupoP1_elec.add(p1_3_6) : grupoP1_elec.remove(p1_3_6);
        }, 1500);
        grupoP1_elec.add(notCheating);
        grupoP1_elec.add(p1_3_7);


        //Colisión plataformas electricidad
        this.physics.add.collider(this.playerU, grupoP1_elec);
    }

    crearPlataformasElectricidad2(that) {
        var that_ = that;

        let p2_3_1 = this.physics.add.image(108 + 1180 * this.escenarios[3].pos, 660, "elecplatform").setImmovable(true);
        p2_3_1.displayHeight = 20;
        p2_3_1.displayWidth = 80;



        let p2_3_2 = this.physics.add.image(290 + 1180 * this.escenarios[3].pos, 540, "elecplatform").setImmovable(true);
        p2_3_2.displayHeight = 20;
        p2_3_2.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_3_2.body.velocity,
            loop: -1,
            tweens: [
                { x: -30, y: 30, duration: 2200, ease: 'Stepped' },
                { x: 30, y: -30, duration: 2200, ease: 'Stepped' }

            ]
        });

        let p2_3_3 = this.physics.add.image(190 + 1180 * this.escenarios[3].pos, 540, "elecplatform").setImmovable(true);
        p2_3_3.displayHeight = 20;
        p2_3_3.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_3_3.body.velocity,
            loop: -1,
            tweens: [
                { x: -30, y: -30, duration: 2200, ease: 'Stepped' },
                { x: 30, y: 30, duration: 2200, ease: 'Stepped' }

            ]
        });

        let p2_3_4 = this.physics.add.image(40 + 1180 * this.escenarios[3].pos, 475, "elecplatform").setImmovable(true);
        p2_3_4.displayHeight = 20;
        p2_3_4.displayWidth = 80;

        //let p1_3_5=this.physics.add.image( 500 ,115, "gymplatform").setImmovable(true);   

        let p2_3_5 = this.physics.add.image(500 + 1180 * this.escenarios[3].pos, 560, "elecplatform").setImmovable(true).setVelocity(0, 100);
        p2_3_5.displayHeight = 20;
        p2_3_5.displayWidth = 80;

        this.tweens.timeline({

            targets: p2_3_5.body.velocity,
            loop: -1,
            duration: 1000,

            tweens: [
                { x: { value: -100, ease: 'Sine.easeOut' }, y: { value: 0, ease: 'Sine.easeIn' } },
                { x: { value: 0, ease: 'Sine.easeIn' }, y: { value: -100, ease: 'Sine.easeOut' } },
                { x: { value: 100, ease: 'Sine.easeOut' }, y: { value: 0, ease: 'Sine.easeIn' } },
                { x: { value: 0, ease: 'Sine.easeIn' }, y: { value: 100, ease: 'Sine.easeOut' } },

            ],
            onLoop: function () {
                //p1_3_5.body.reset(500,115);
                p2_3_5.body.reset(500 + 1180 * that_.escenarios[3].pos, 560);
            }
        });

        let p2_3_6 = this.physics.add.image(600 + 1180 * this.escenarios[3].pos, 510, "elecplatform").setImmovable(true);
        p2_3_6.displayHeight = 20;
        p2_3_6.displayWidth = 80;

        let notCheating2 = this.physics.add.image(700 + 1180 * this.escenarios[3].pos, 595, "elecplatform").setImmovable(true);
        notCheating2.displayHeight = 250;
        notCheating2.displayWidth = 20;
        notCheating2.alpha = 0;

        let p2_3_7 = this.physics.add.image(840 + 1180 * this.escenarios[3].pos, 610, "elecplatform").setImmovable(true);
        p2_3_7.displayHeight = 20;
        p2_3_7.displayWidth = 220;


        let grupoP2_elec = this.add.group();
        grupoP2_elec.add(p2_3_1);
        var intermitence = setInterval(() => {
            p2_3_1.alpha = p2_3_1.alpha == 1 ? 0 : 1;
            p2_3_1.alpha == 1 ? grupoP2_elec.add(p2_3_1) : grupoP2_elec.remove(p2_3_1);
        }, 1000);
        grupoP2_elec.add(p2_3_2);
        grupoP2_elec.add(p2_3_3);
        grupoP2_elec.add(p2_3_4);
        grupoP2_elec.add(p2_3_5);
        grupoP2_elec.add(p2_3_6);
        var intermitence = setInterval(() => {
            p2_3_6.alpha = p2_3_6.alpha == 1 ? 0 : 1;
            p2_3_6.alpha == 1 ? grupoP2_elec.add(p2_3_6) : grupoP2_elec.remove(p2_3_6);
        }, 1500);
        grupoP2_elec.add(notCheating2);
        grupoP2_elec.add(p2_3_7);


        //Colisión plataformas electricidad
        this.physics.add.collider(this.playerD, grupoP2_elec);
    }

    crearPlataformasLaboratorio1(){
        let p1_4_1 = this.physics.add.image(120 + 1180 * this.escenarios[4].pos, 295, "labplatform").setImmovable(true);
        p1_4_1.displayHeight = 20;
        p1_4_1.displayWidth = 80;

        this.tweens.timeline({
            targets: p1_4_1.body.velocity,
            loop: -1,
            tweens: [
                { y: -40, duration: 3500, ease: 'Stepped' },
                { y: 40, duration: 3500, ease: 'Stepped' }

            ]
        });

        let p1_4_2 = this.physics.add.image(745+ 1180 * this.escenarios[4].pos, 315, "labplatform").setImmovable(true);
        p1_4_2.displayHeight = 20;
        p1_4_2.displayWidth = 80;

        let p1_4_3 = this.physics.add.image(845+ 1180 * this.escenarios[4].pos, 275, "labplatform").setImmovable(true);
        p1_4_3.displayHeight = 20;
        p1_4_3.displayWidth = 90;

        let grupoP1_Lab = this.add.group();
        grupoP1_Lab.add(p1_4_1);
        grupoP1_Lab.add(p1_4_2);
        grupoP1_Lab.add(p1_4_3);
       
        
        this.physics.add.collider(this.playerU, grupoP1_Lab);
    }

    crearPlataformasLaboratorio2(){
        let p2_4_1 = this.physics.add.image(120 + 1180 * this.escenarios[4].pos, 655, "labplatform").setImmovable(true);
        p2_4_1.displayHeight = 20;
        p2_4_1.displayWidth = 80;

        this.tweens.timeline({
            targets: p2_4_1.body.velocity,
            loop: -1,
            tweens: [
                { y: -40, duration: 3500, ease: 'Stepped' },
                { y: 40, duration: 3500, ease: 'Stepped' }

            ]
        });

        let p2_4_2 = this.physics.add.image(745+ 1180 * this.escenarios[4].pos, 675, "labplatform").setImmovable(true);
        p2_4_2.displayHeight = 20;
        p2_4_2.displayWidth = 80;

        let p2_4_3 = this.physics.add.image(845+ 1180 * this.escenarios[4].pos, 635, "labplatform").setImmovable(true);
        p2_4_3.displayHeight = 20;
        p2_4_3.displayWidth = 90;

        let grupoP2_Lab = this.add.group();
        grupoP2_Lab.add(p2_4_1);
        grupoP2_Lab.add(p2_4_2);
        grupoP2_Lab.add(p2_4_3);
       
        
        this.physics.add.collider(this.playerD, grupoP2_Lab);
    }

    crearPlataformasNieve1(){
        let p1_5_1=this.physics.add.image(100 + 1180 * this.escenarios[2].pos, 295, "snowplat").setImmovable(true);
        p1_5_1.displayHeight=20;
        p1_5_1.displayWidth=80;
        p1_5_1.body.friction.x=0.3; 
        

        this.tweens.timeline({
            targets: p1_5_1.body.velocity,
            loop: -1,
            tweens: [
                {x: 60, duration: 1000, ease: 'Stepped'},
                {x:-60, duration: 1000, ease:'Stepped'}
                            
            ]
          });

        let p1_5_2=this.physics.add.image(300 + 1180 * this.escenarios[2].pos, 225, "snowplat").setImmovable(true);
        p1_5_2.displayHeight=20;
        p1_5_2.displayWidth=80;
        

        let p1_5_3=this.physics.add.image(495 + 1180 * this.escenarios[2].pos, 225, "snowplat").setImmovable(true);
        p1_5_3.displayHeight=20;
        p1_5_3.displayWidth=80;
        p1_5_3.body.friction.x=0.3; 

        this.tweens.timeline({
            targets: p1_5_3.body.velocity,
            loop: -1,
            tweens: [
                {x: -70, duration: 1500, ease: 'Stepped'},
                {x:70, duration: 1500, ease:'Stepped'}
                            
            ]
          });

        let p1_5_4=this.physics.add.image(595 + 1180 * this.escenarios[2].pos, 185, "snowplat").setImmovable(true);
        p1_5_4.displayHeight=20;
        p1_5_4.displayWidth=40;

        let p1_5_5=this.physics.add.image(975 + 1180 * this.escenarios[2].pos, 210, "snowplat").setImmovable(true);
        p1_5_5.displayHeight=20;
        p1_5_5.displayWidth=80;
        p1_5_5.body.friction.x=0.2; 

        this.tweens.timeline({
            targets: p1_5_5.body.velocity,
            loop: -1,
            tweens: [
                {x: -95, duration: 2500, ease: 'Stepped'},
                {x:95, duration: 2500, ease:'Stepped'}
                            
            ]
          });
        

          let grupoP1_snow=this.add.group();
          grupoP1_snow.add(p1_5_1);
          grupoP1_snow.add(p1_5_2);
          grupoP1_snow.add(p1_5_3);
          grupoP1_snow.add(p1_5_4);
          grupoP1_snow.add(p1_5_5);

          this.physics.add.collider(this.playerU, grupoP1_snow);
    }

    crearPlataformasNieve2(){
        let p2_5_1=this.physics.add.image(100 + 1180 * this.escenarios[2].pos, 655, "snowplat").setImmovable(true);
        p2_5_1.displayHeight=20;
        p2_5_1.displayWidth=80;
        p2_5_1.body.friction.x=0.3; 
        

        this.tweens.timeline({
            targets: p2_5_1.body.velocity,
            loop: -1,
            tweens: [
                {x: 60, duration: 1000, ease: 'Stepped'},
                {x:-60, duration: 1000, ease:'Stepped'}
                            
            ]
          });

        let p2_5_2=this.physics.add.image(300 + 1180 * this.escenarios[2].pos, 585, "snowplat").setImmovable(true);
        p2_5_2.displayHeight=20;
        p2_5_2.displayWidth=80;
        

        let p2_5_3=this.physics.add.image(495 + 1180 * this.escenarios[2].pos, 585, "snowplat").setImmovable(true);
        p2_5_3.displayHeight=20;
        p2_5_3.displayWidth=80;
        p2_5_3.body.friction.x=0.3; 

        this.tweens.timeline({
            targets: p2_5_3.body.velocity,
            loop: -1,
            tweens: [
                {x: -70, duration: 1500, ease: 'Stepped'},
                {x:70, duration: 1500, ease:'Stepped'}
                            
            ]
          });

        let p2_5_4=this.physics.add.image(595 + 1180 * this.escenarios[2].pos, 545, "snowplat").setImmovable(true);
        p2_5_4.displayHeight=20;
        p2_5_4.displayWidth=40;

        let p2_5_5=this.physics.add.image(975 + 1180 * this.escenarios[2].pos, 470, "snowplat").setImmovable(true);
        p2_5_5.displayHeight=20;
        p2_5_5.displayWidth=80;
        p2_5_5.body.friction.x=0.2; 

        this.tweens.timeline({
            targets: p2_5_5.body.velocity,
            loop: -1,
            tweens: [
                {x: -95, duration: 2500, ease: 'Stepped'},
                {x:95, duration: 2500, ease:'Stepped'}
                            
            ]
          });
        

          let grupoP2_snow=this.add.group();
          grupoP2_snow.add(p2_5_1);
          grupoP2_snow.add(p2_5_2);
          grupoP2_snow.add(p2_5_3);
          grupoP2_snow.add(p2_5_4);
          grupoP2_snow.add(p2_5_5);

          this.physics.add.collider(this.playerD, grupoP2_snow);
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