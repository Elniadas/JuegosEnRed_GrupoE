import Escenario from '../gameObjects/Escenario.js';
// import CharacterSprite from '../gameObjects/CharacterSprite.js'
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
        this.escenasActivas = [false, false];
        this.completado = [false, false];
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
        this.escenarios[0] = new Escenario("Cinta", 0);
        this.escenarios[1] = new Escenario("Contador", 1);
        this.escenarios[2] = new Escenario("Nieve", 3);
        this.escenarios[3] = new Escenario("Electricidad", 2);

        this.physics.world.setBounds(0, 0, 4520, this.game.canvas.height);
        var that=this;

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


        //se ha modificado la posición de la colisión de la cinta para moverla junto a un sprite
        //let cintaU = this.physics.add.image(900+ 1180 * this.escenarios[0].pos, 311, "cintaSprite") //esta no es la oficial, es para pasar más rápido al siguiente nivel
        let cintaU = this.physics.add.image(1030+ 1180 * this.escenarios[0].pos, 89, "cintaSprite")
        //cintaU.displayHeight = 97;
        //cintaU.displayWidth = 80;
        cintaU.setScale(0.30);
        cintaU.setImmovable(true);
        

        let groupCintaU = this.add.group()
        groupCintaU.add(cintaU);


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
        let cintaD = this.physics.add.image(1030+ 1180 * this.escenarios[0].pos, 449, "cintaSprite") //no oficial
        //let cintaD = this.physics.add.image(this.game.canvas.width * 0.68 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        cintaD.setScale(0.30);

        //Plataformas jugador 1
        let p1_1_1=this.physics.add.image(100+1180 * this.escenarios[0].pos,this.game.canvas.height*0.42, "gymplatform").setImmovable(true);
        p1_1_1.displayHeight=20;
        p1_1_1.displayWidth=80;

        let p1_1_2=this.physics.add.image(220 + 1180 * this.escenarios[0].pos,260, "gymplatform").setImmovable(true);
        p1_1_2.displayHeight=20;
        p1_1_2.displayWidth=80;

        let p1_1_3=this.physics.add.image(320+ 1180 * this.escenarios[0].pos,150, "gymplatform").setImmovable(true);
        this.tweens.timeline({
            targets: p1_1_3.body.velocity,
            loop: -1,
            tweens: [
                {y: 80, duration: 750, ease: 'Stepped'},
                {y:-80, duration: 750, ease:'Stepped'}
            ]
        })

        let p1_1_4=this.physics.add.image(200+ 1180 * this.escenarios[0].pos,120, "gymplatform").setImmovable(true);
        p1_1_4.displayHeight=20;
        p1_1_4.displayWidth=80;

        let p1_1_5=this.physics.add.image(85+ 1180 * this.escenarios[0].pos,150, "gymplatform").setImmovable(true);
        p1_1_5.displayHeight=20;
        p1_1_5.displayWidth=80;
        
        let p1_1_6=this.physics.add.image(430+ 1180 * this.escenarios[0].pos,185, "gymplatform").setImmovable(true);
        p1_1_6.displayHeight=20;
        p1_1_6.displayWidth=80;

        let p1_1_7=this.physics.add.image(535+ 1180 * this.escenarios[0].pos,230, "gymplatform").setImmovable(true);
        p1_1_7.displayHeight=20;
        p1_1_7.displayWidth=80;

        let p1_1_8=this.physics.add.image(650+ 1180 * this.escenarios[0].pos,230, "gymplatform").setImmovable(true);
        p1_1_8.displayHeight=20;
        p1_1_8.displayWidth=80;

        this.tweens.timeline({
            targets: p1_1_8.body.velocity,
            loop: -1,
            tweens: [
                {y: -60, duration: 850, ease: 'Stepped'},
                {y:60, duration: 850, ease:'Stepped'}
            ]
        })

        let p1_1_9=this.physics.add.image(750+ 1180 * this.escenarios[0].pos,135, "gymplatform").setImmovable(true);
        p1_1_9.displayHeight=20;
        p1_1_9.displayWidth=80;

        let p1_1_10=this.physics.add.image(950+ 1180 * this.escenarios[0].pos,190, "gymplatform").setImmovable(true);
        p1_1_10.displayHeight=20;
        p1_1_10.displayWidth=80;

        this.tweens.timeline({
            targets: p1_1_10.body.velocity,
            loop: -1,
            tweens: [
                {x: -60, duration: 1700, ease: 'Stepped'},
                {x:60, duration: 1700, ease:'Stepped'}
            ]
        })

        let p1_1_11=this.physics.add.image(1020+ 1180 * this.escenarios[0].pos,135, "gymplatform").setImmovable(true);
        p1_1_11.displayHeight=20;
        p1_1_11.displayWidth=80;


        let grupoP1_gym=this.add.group();
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

        //Plataformas jugador 2
        let p2_1_1=this.physics.add.image(100+ 1180 * this.escenarios[0].pos,this.game.canvas.height*0.42+360, "gymplatform").setImmovable(true);
        p2_1_1.displayHeight=20;
        p2_1_1.displayWidth=80;

        let p2_1_2=this.physics.add.image(220+ 1180 * this.escenarios[0].pos,620, "gymplatform").setImmovable(true);
        p2_1_2.displayHeight=20;
        p2_1_2.displayWidth=80;

        let p2_1_3=this.physics.add.image(320+ 1180 * this.escenarios[0].pos,510, "gymplatform").setImmovable(true);
        this.tweens.timeline({
            targets: p2_1_3.body.velocity,
            loop: -1,
            tweens: [
                {y: 80, duration: 750, ease: 'Stepped'},
                {y:-80, duration: 750, ease:'Stepped'}
            ]
        })

        let p2_1_4=this.physics.add.image(200+ 1180 * this.escenarios[0].pos,480, "gymplatform").setImmovable(true);
        p2_1_4.displayHeight=20;
        p2_1_4.displayWidth=80;

        let p2_1_5=this.physics.add.image(85+ 1180 * this.escenarios[0].pos,510, "gymplatform").setImmovable(true);
        p2_1_5.displayHeight=20;
        p2_1_5.displayWidth=80;
        
        let p2_1_6=this.physics.add.image(430+ 1180 * this.escenarios[0].pos,545, "gymplatform").setImmovable(true);
        p2_1_6.displayHeight=20;
        p2_1_6.displayWidth=80;

        let p2_1_7=this.physics.add.image(535+ 1180 * this.escenarios[0].pos,590, "gymplatform").setImmovable(true);
        p2_1_7.displayHeight=20;
        p2_1_7.displayWidth=80;

        let p2_1_8=this.physics.add.image(650+ 1180 * this.escenarios[0].pos,590, "gymplatform").setImmovable(true);
        p2_1_8.displayHeight=20;
        p2_1_8.displayWidth=80;

        this.tweens.timeline({
            targets: p2_1_8.body.velocity,
            loop: -1,
            tweens: [
                {y: -60, duration: 850, ease: 'Stepped'},
                {y:60, duration: 850, ease:'Stepped'}
            ]
        })

        let p2_1_9=this.physics.add.image(750+ 1180 * this.escenarios[0].pos,495, "gymplatform").setImmovable(true);
        p2_1_9.displayHeight=20;
        p2_1_9.displayWidth=80;

        let p2_1_10=this.physics.add.image(950+ 1180 * this.escenarios[0].pos,550, "gymplatform").setImmovable(true);
        p2_1_10.displayHeight=20;
        p2_1_10.displayWidth=80;

        this.tweens.timeline({
            targets: p2_1_10.body.velocity,
            loop: -1,
            tweens: [
                {x: -60, duration: 1700, ease: 'Stepped'},
                {x:60, duration: 1700, ease:'Stepped'}
            ]
        })

        let p2_1_11=this.physics.add.image(1020+ 1180 * this.escenarios[0].pos,495, "gymplatform").setImmovable(true);
        p2_1_11.displayHeight=20;
        p2_1_11.displayWidth=80;


        let grupoP2_gym=this.add.group();
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

        let pruebaContador2 = this.physics.add.image(830+ 1180 * this.escenarios[1].pos, 602, "spriteCont").setOrigin(0, 0);
        pruebaContador2.displayHeight = this.game.canvas.height * 0.1;
        pruebaContador2.displayWidth = this.game.canvas.width * 0.08;
        pruebaContador2.setImmovable(true)
        

        this.escBU22 = this.add.image(0 + 1180 * this.escenarios[1].pos, this.game.canvas.height / 2, "ContadorBlur").setOrigin(0, 0)

        this.escBU22.displayHeight = this.game.canvas.height / 2;
        this.escBU22.displayWidth = this.game.canvas.width;
        this.escBU22.alpha = 0;


        //Plataformas jugador 1
        let p1_2_1=this.physics.add.image( 100 + 1180 * this.escenarios[1].pos,this.game.canvas.height*0.42, "gymplatform").setImmovable(true);
        p1_2_1.displayHeight=20;
        p1_2_1.displayWidth=80;
        p1_2_1.alpha=0;

        this.tweens.timeline({
            targets: p1_2_1.body.velocity,
            loop: -1,
            tweens: [
                {x: 60, duration: 2000, ease: 'Stepped'},
                {x:-60, duration: 2000, ease:'Stepped'}
                            
            ]
          });

        let p1_2_2=this.physics.add.image( 275 + 1180 * this.escenarios[1].pos,220, "gymplatform").setImmovable(true);
        p1_2_2.displayHeight=20;
        p1_2_2.displayWidth=80;
        p1_2_2.alpha=0;

        this.tweens.timeline({
            targets: p1_2_2.body.velocity,
            loop: -1,
            tweens: [
                {x: -80, duration: 1300, ease: 'Stepped'},
                {x: 80, duration: 1300, ease:'Stepped'}
                            
            ]
          });

        let p1_2_3=this.physics.add.image( 75 + 1180 * this.escenarios[1].pos,150, "gymplatform").setImmovable(true);
        p1_2_3.displayHeight=20;
        p1_2_3.displayWidth=80;

        let p1_2_4=this.physics.add.image( 200 + 1180 * this.escenarios[1].pos,100, "gymplatform").setImmovable(true);
        p1_2_4.displayHeight=20;
        p1_2_4.displayWidth=80;

        this.tweens.timeline({
            targets: p1_2_4.body.velocity,
            loop: -1,
            tweens: [
                {x: 70, duration: 1500, ease: 'Stepped'},
                {x: -70, duration: 1500, ease:'Stepped'}
                            
            ]
          });

        let p1_2_5=this.physics.add.image( 390 + 1180 * this.escenarios[1].pos,100, "gymplatform").setImmovable(true);
        p1_2_5.displayHeight=20;
        p1_2_5.displayWidth=80;

        let p1_2_6=this.physics.add.image( 490 + 1180 * this.escenarios[1].pos,100, "gymplatform").setImmovable(true);
        p1_2_6.displayHeight=20;
        p1_2_6.displayWidth=80;

        this.tweens.timeline({
            targets: p1_2_6.body.velocity,
            loop: -1,
            tweens: [
                {y: 40, duration: 2500, ease: 'Stepped'},
                {y: -40, duration: 2500, ease:'Stepped'}
                            
            ]
          });

        let p1_2_7=this.physics.add.image( 610 + 1180 * this.escenarios[1].pos,200, "gymplatform").setImmovable(true);
        p1_2_7.displayHeight=20;
        p1_2_7.displayWidth=80;

        //muro para que no se entre en contador directamente
        let notCheating=this.physics.add.image( 800 + 1180 * this.escenarios[1].pos,235, "gymplatform").setImmovable(true);
        notCheating.displayHeight=250;
        notCheating.displayWidth=20;
        notCheating.alpha=0;
        
        let p1_2_8=this.physics.add.image( 720 + 1180 * this.escenarios[1].pos,150, "gymplatform").setImmovable(true);
        p1_2_8.displayHeight=20;
        p1_2_8.displayWidth=80;

        

        let grupoP1_cont=this.add.group();
        grupoP1_cont.add(p1_2_1);
        grupoP1_cont.add(p1_2_2);
        grupoP1_cont.add(p1_2_3);
        //plataforma 3 desaparece
        var intermitence=setInterval(()=>{
            p1_2_3.alpha=p1_2_3.alpha==1?0:1;
            p1_2_3.alpha==1?grupoP1_cont.add(p1_2_3):grupoP1_cont.remove(p1_2_3);           
          }, 2500);
        grupoP1_cont.add(p1_2_4);
        grupoP1_cont.add(p1_2_5);
        grupoP1_cont.add(p1_2_6);
        grupoP1_cont.add(p1_2_7);
        var intermitence=setInterval(()=>{
            p1_2_7.alpha=p1_2_7.alpha==1?0:1;
            p1_2_7.alpha==1?grupoP1_cont.add(p1_2_7):grupoP1_cont.remove(p1_2_7);           
          }, 2000);
        //grupoP1_cont.add(notCheating); //descomentar, solo está comentado para hacer pruebas rápidamente
        grupoP1_cont.add(p1_2_8);

        //Plataformas jugador 2
        let p2_2_1=this.physics.add.image( 100 + 1180 * this.escenarios[1].pos,this.game.canvas.height*0.42+360, "gymplatform").setImmovable(true);
        p2_2_1.displayHeight=20;
        p2_2_1.displayWidth=80;
        p2_2_1.alpha=0;

        this.tweens.timeline({
            targets: p2_2_1.body.velocity,
            loop: -1,
            tweens: [
                {x: 60, duration: 2000, ease: 'Stepped'},
                {x:-60, duration: 2000, ease:'Stepped'}
                            
            ]
          });

        let p2_2_2=this.physics.add.image( 275 + 1180 * this.escenarios[1].pos,580, "gymplatform").setImmovable(true);
        p2_2_2.displayHeight=20;
        p2_2_2.displayWidth=80;
        p2_2_2.alpha=0;

        this.tweens.timeline({
            targets: p2_2_2.body.velocity,
            loop: -1,
            tweens: [
                {x: -80, duration: 1200, ease: 'Stepped'},
                {x: 80, duration: 1200, ease:'Stepped'}
                            
            ]
          });

        let p2_2_3=this.physics.add.image( 75 + 1180 * this.escenarios[1].pos,510, "gymplatform").setImmovable(true);
        p2_2_3.displayHeight=20;
        p2_2_3.displayWidth=80;

        let p2_2_4=this.physics.add.image( 200 + 1180 * this.escenarios[1].pos,460, "gymplatform").setImmovable(true);
        p2_2_4.displayHeight=20;
        p2_2_4.displayWidth=80;

        this.tweens.timeline({
            targets: p2_2_4.body.velocity,
            loop: -1,
            tweens: [
                {x: 70, duration: 1500, ease: 'Stepped'},
                {x: -70, duration: 1500, ease:'Stepped'}
                            
            ]
          });

        let p2_2_5=this.physics.add.image( 390 + 1180 * this.escenarios[1].pos,460, "gymplatform").setImmovable(true);
        p2_2_5.displayHeight=20;
        p2_2_5.displayWidth=80;

        let p2_2_6=this.physics.add.image( 490 + 1180 * this.escenarios[1].pos,460, "gymplatform").setImmovable(true);
        p2_2_6.displayHeight=20;
        p2_2_6.displayWidth=80;

        this.tweens.timeline({
            targets: p2_2_6.body.velocity,
            loop: -1,
            tweens: [
                {y: 40, duration: 2500, ease: 'Stepped'},
                {y: -40, duration: 2500, ease:'Stepped'}
                            
            ]
          });

        let p2_2_7=this.physics.add.image( 610 + 1180 * this.escenarios[1].pos,560, "gymplatform").setImmovable(true);
        p2_2_7.displayHeight=20;
        p2_2_7.displayWidth=80;

        //muro para que no se entre en contador directamente
        let notCheating2=this.physics.add.image( 800 + 1180 * this.escenarios[1].pos,595, "gymplatform").setImmovable(true);
        notCheating2.displayHeight=250;
        notCheating2.displayWidth=20;
        notCheating2.alpha=0;
        
        let p2_2_8=this.physics.add.image( 720 + 1180 * this.escenarios[1].pos,510, "gymplatform").setImmovable(true);
        p2_2_8.displayHeight=20;
        p2_2_8.displayWidth=80;

        

        let grupoP2_cont=this.add.group();
        grupoP2_cont.add(p2_2_1);
        grupoP2_cont.add(p2_2_2);
        grupoP2_cont.add(p2_2_3);
        //plataforma 3 desaparece
        var intermitence=setInterval(()=>{
            p2_2_3.alpha=p2_2_3.alpha==1?0:1;
            p2_2_3.alpha==1?grupoP2_cont.add(p2_2_3):grupoP2_cont.remove(p2_2_3);           
          }, 2500);
        grupoP2_cont.add(p2_2_4);
        grupoP2_cont.add(p2_2_5);
        grupoP2_cont.add(p2_2_6);
        grupoP2_cont.add(p2_2_7);
        var intermitence=setInterval(()=>{
            p2_2_7.alpha=p2_2_7.alpha==1?0:1;
            p2_2_7.alpha==1?grupoP2_cont.add(p2_2_7):grupoP2_cont.remove(p2_2_7);           
          }, 2000);
        grupoP2_cont.add(notCheating2);
        grupoP2_cont.add(p2_2_8);


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

        //Plataformas jugador 
        let p1_3_1=this.physics.add.image( 108 + 1180 * this.escenarios[3].pos,300, "gymplatform").setImmovable(true);
        p1_3_1.displayHeight=20;
        p1_3_1.displayWidth=80;

        let p1_3_2=this.physics.add.image( 290 + 1180 * this.escenarios[3].pos,180, "gymplatform").setImmovable(true);
        p1_3_2.displayHeight=20;
        p1_3_2.displayWidth=80;

        this.tweens.timeline({
            targets: p1_3_2.body.velocity,
            loop: -1,
            tweens: [ 
                {x:-30, y:30, duration: 2200, ease: 'Stepped'},
                {x:30, y:-30, duration: 2200, ease: 'Stepped'}  
                
            ]
          });

          let p1_3_3=this.physics.add.image( 190 + 1180 * this.escenarios[3].pos,180, "gymplatform").setImmovable(true);
          p1_3_3.displayHeight=20;
          p1_3_3.displayWidth=80;
  
          this.tweens.timeline({
              targets: p1_3_3.body.velocity,
              loop: -1,
              tweens: [ 
                  {x:-30, y:-30, duration: 2200, ease: 'Stepped'},
                  {x:30, y:30, duration: 2200, ease: 'Stepped'}  
                  
              ]
            });

        let p1_3_4=this.physics.add.image( 40 + 1180 * this.escenarios[3].pos,115, "gymplatform").setImmovable(true);
        p1_3_4.displayHeight=20;
        p1_3_4.displayWidth=80;

        //let p1_3_5=this.physics.add.image( 500 ,115, "gymplatform").setImmovable(true);   
             
        let p1_3_5=this.physics.add.image( 500 + 1180 * this.escenarios[3].pos,200, "gymplatform").setImmovable(true).setVelocity(0,100);
        p1_3_5.displayHeight=20;
        p1_3_5.displayWidth=80;        

        this.tweens.timeline({
            
            targets: p1_3_5.body.velocity,
            loop: -1,
            duration:1000,
            
            tweens: [  
                {x:{value: -100, ease: 'Sine.easeOut'}, y:{value:0, ease: 'Sine.easeIn'}},
                {x:{value: 0, ease: 'Sine.easeIn'}, y:{value:-100, ease: 'Sine.easeOut'}},
                {x:{value: 100, ease: 'Sine.easeOut'}, y:{value:0, ease: 'Sine.easeIn'}},
                {x:{value: 0, ease: 'Sine.easeIn'}, y:{value:100, ease: 'Sine.easeOut'}},                         
                
            ],            
            onLoop:function(){
                //p1_3_5.body.reset(500,115);
                p1_3_5.body.reset(500 + 1180 * that.escenarios[3].pos,200);
            }
          });
        
        

        let grupoP1_elec=this.add.group();
        grupoP1_elec.add(p1_3_1);
        var intermitence=setInterval(()=>{
            p1_3_1.alpha=p1_3_1.alpha==1?0:1;
            p1_3_1.alpha==1?grupoP1_elec.add(p1_3_1):grupoP1_elec.remove(p1_3_1);           
          }, 1000);
        grupoP1_elec.add(p1_3_2);
        grupoP1_elec.add(p1_3_3);
        grupoP1_elec.add(p1_3_4);

        //Parte jugador 2

        let escD4 = this.add.image(0 + 1180 * this.escenarios[3].pos, this.game.canvas.height / 2, "Electricidad").setOrigin(0, 0);

        escD4.displayHeight = this.game.canvas.height / 2;
        escD4.displayWidth = this.game.canvas.width;


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

        this.cam2.setZoom(1)




        //Fisicas

        this.playerUS = false;

        this.physics.add.collider(this.playerU, this.plataformas);
        this.physics.add.collider(this.playerD, this.plataformas);
        this.physics.add.collider(this.playerU, this.paredes);
        this.physics.add.collider(this.playerD, this.paredes);

        //Colisión plataformas gimnasio
        this.physics.add.collider(this.playerU, grupoP1_gym);
        this.physics.add.collider(this.playerD, grupoP2_gym);

        //Colisión plataformas contador
        this.physics.add.collider(this.playerU, grupoP1_cont);
        this.physics.add.collider(this.playerD, grupoP2_cont);

        //Colisión plataformas electricidad
        this.physics.add.collider(this.playerU, grupoP1_elec);


        //this.ventana1 = this.physics.add.overlap(this.playerU, groupCintaU, () => { this.PruebaU(0) }, null, this);
        this.ventana1 = this.physics.add.overlap(this.playerU, groupCintaU, () => { this.Prueba(this.playerU) }, null, this);
        //this.ventana2 = this.physics.add.overlap(this.playerD, cintaD, () => { this.PruebaD(1) }, null, this);
        this.ventana2 = this.physics.add.overlap(this.playerD, cintaD, () => { this.Prueba(this.playerD) }, null, this);

        //this.physics.add.overlap(this.playerU, pruebaContador, () => { this.PruebaUC(0) }, null, this);
        this.physics.add.overlap(this.playerU, pruebaContador, () => { this.Prueba(this.playerU) }, null, this);
        this.physics.add.overlap(this.playerD, pruebaContador2, () => { this.Prueba(this.playerD) }, null, this);


        //Cronometro

        this.play = false;
        this.cro = 0;
        this.textoCronometro = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#ffffff');
        this.TiempoP1 = this.add.bitmapText(this.game.canvas.width - 350, 25, 'Digitalism', "00:00:00", 45);
        let reloj = this.add.image(this.game.canvas.width - 100, 50, 'Crono')
        reloj.scale = 0.08


        //Ajustes

        this.time.addEvent({
            delay: 100,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });



    }
    update() {

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
                this.playerU.setVelocityY(-750); //cambiar para que salte menos y poder bajar plataformas

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

             let p=0;
             for (let i=0;i<this.escenarios.length;i++){
                 if(code===this.escenarios[i].pos)
                 p=this.escenarios[i].nombre
                 console.log(p);
             }

            this.scene.launch(p + "P1", { escena: this });
            this.escenasActivas[0] = true;


        }
    }
    PruebaP2(code) {
        if (this.keyboardP2.SPACE.isDown === true && !this.escenasActivas[1]) {
            let p=0;
            for (let i=0;i<this.escenarios.length;i++){
                if(code===this.escenarios[i].pos)
                p=this.escenarios[i].nombre
                console.log(p);
            }

            this.scene.launch(p+ "P2", { escena: this });
            this.escenasActivas[1] = true;

        }
    }



    teletransporte(player, factor, camara) {

        if (this.keyboardP1.E.isDown === true && this.completado[0]) {

            player.body.setVelocityX(0);
            player.body.setVelocityY(0);
            player.anims.stop();
            player.x = (1180 * (factor + 1) + 25);


            player.y = this.game.canvas.height / 2 - 50;
            camara.setBounds(0 + 1180 * (factor + 1), 0, this.game.canvas.width, this.game.canvas.height / 2)
        }

    }
    teletransporteD(player, factor, camara) {
        if (this.keyboardP2.SPACE.isDown === true && this.completado[1]) {
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
        let actual = new Date();                    //Tiempo actual
        this.cro = actual - emp;                     //Tiempo transcurrido
        let cr = new Date();                        //Por si se para para continuar                        
        cr.setTime(this.cro);                        //Coje el tiempo actual
        //Transformar
        let cs = cr.getMilliseconds();
        cs = cs / 10;
        cs = Math.round(cs);
        let sg = cr.getSeconds();
        let mn = cr.getMinutes();
        let ho = cr.getHours() - 1;
        if (cs < 10) {
            cs = "0" + cs;
        }
        if (sg < 10) {
            sg = "0" + sg;
        }
        if (mn < 10) {
            mn = "0" + mn;
        }
        // this.textoCronometro.setText([
        //     'Tiempo: ' + ho + " : " + mn + " : " + sg + " : " + cs
        // ]);
        this.TiempoP1.setText([
            mn + " : " + sg + " : " + cs
        ]);

    }

    crearPortalGimnasioP1() {
        let spritePortal=this.add.sprite(1038+ 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155; //spritePortal.height x 0.5
        this.portal.displayWidth = 84; //spritePortal.width x 0.5
        this.portal.alpha = 0;
        

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[0].pos, this.cam1) }, null, this);

    }

    crearPortalPulsadorP1() {
        let spritePortal=this.add.sprite(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.34, "portal");
        spritePortal.play("portalAnim");
        spritePortal.setScale(0.5);
        this.portal = this.physics.add.image(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.34, "logo")
        this.portal.displayHeight = 155; //spritePortal.height x 0.5
        this.portal.displayWidth = 84; //spritePortal.width x 0.5
        this.portal.alpha = 0;

        this.physics.add.overlap(this.playerU, this.portal, () => { this.teletransporte(this.playerU, this.escenarios[1].pos, this.cam1) }, null, this);

    }





    crearPortalGimnasioP2() {
        let spritePortal2=this.add.sprite(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal2.play("portalAnim");
        spritePortal2.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[0].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155; //spritePortal.height x 0.5
        this.portalD.displayWidth = 84; //spritePortal.width x 0.5
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[0].pos, this.cam2) }, null, this); console.log(this.portal)
    }


    crearPortalPulsadorP2() {
        let spritePortal2=this.add.sprite(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.84, "portal");
        spritePortal2.play("portalAnim");
        spritePortal2.setScale(0.5);
        this.portalD = this.physics.add.image(1038 + 1180 * this.escenarios[1].pos, this.game.canvas.height * 0.84, "logo")
        this.portalD.displayHeight = 155; //spritePortal.height x 0.5
        this.portalD.displayWidth = 84; //spritePortal.width x 0.5
        this.portalD.alpha = 0;
        this.physics.add.overlap(this.playerD, this.portalD, () => { this.teletransporteD(this.playerD, this.escenarios[1].pos, this.cam2) }, null, this); console.log(this.portal)
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