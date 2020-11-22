class ContadorP1 extends Phaser.Scene {
    constructor() {
        super({ key: "ContadorP1" });

    }
    init(data) {
        this.data = data;
    }

    preload() {
        this.data.escena.escBU2.alpha = 1;
    }


    create() {

        this.pulsador = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, 'Pulsador');
        this.pulsador.displayHeight = this.pulsador.height * 0.55;
        this.pulsador.displayWidth = this.pulsador.width * 0.55;

        this.pulsadorA = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, 'PulsadorC').setDepth(100);
        this.pulsadorA.play('PulsadorP')

        this.pulsadorA.displayHeight = this.pulsadorA.height * 0.55;
        this.pulsadorA.displayWidth = this.pulsadorA.width * 0.55;

        this.pulsar = false




        this.keyboard = this.input.stopPropagation().keyboard.addKeys('D,A');


        this.play = false;
        this.cro = 0;

        this.textoCronometro = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#ffffff').setDepth(-1);


        this.TiempoP1 = this.add.bitmapText(this.game.canvas.width * 0.46, this.game.canvas.height * 0.28, 'Digitalism', "00 : 00", 45);


        this.input.keyboard.on('keyup-' + 'D', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'A', this.unlock.bind(this));

        this.keyLock = false;

        setTimeout(() => { this.empezar() }, 1200);


    }
    unlock() {
        console.log("unlock")

        this.keyLock = false;
    }


    update() {

        if (this.keyboard.A.isDown === true && this.keyLock === false && this.pulsar === true && this.pulsadorA.frame.name === 3) {
            this.keyLock = true
            this.parar();
            this.pintarTiempo();
            this.pulsadorA.play('PulsadorB');
            this.pulsar = false;


            console.log(this.Marca)
            if (this.Marca >= 650 && this.Marca <= 750) {
                console.log("Has ganado puto un abrazo");
                this.completado=true
            }
            else if (this.css == 700) {
                console.log("Te la has sacado hermano")
                this.completado=true;
            } else {
                console.log("Vaya looser, te toca probar de nuevo")
            }

            setTimeout(() => {
                this.data.escena.escenasActivas[0] = false;
                this.data.escena.escBU2.alpha = 0;
                
                
                if(this.completado===true){
                    this.data.escena.escenarios[1].completadoP1U=true;
                    this.data.escena.CoP1.destroy();
                    this.data.escena.crearPortalPulsadorP1();
                }
                this.scene.stop(this)
            }, 1200);


        }



    }

    empezar() {
        if (this.play == false) {
            this.emp = new Date();                      //Fecha en la que empezamos
            this.elcrono = setInterval(() => { this.tiempo() }, 10);   //Funcion temporizador cada 10 ms llama a la funcion tiempo
            this.play = true;                         //Reloj puesta en marcha
        }
    }

    tiempo(emp) {
        let actual = new Date();                    //Tiempo actual
        this.cro = actual - this.emp;                     //Tiempo transcurrido
        let cr = new Date();                        //Por si se para para continuar                        
        cr.setTime(this.cro);                        //Coje el tiempo actual
        //Transformar
        this.cs = cr.getMilliseconds();
        this.cs = this.cs / 10;
        this.cs = Math.round(this.cs);
        this.sg = cr.getSeconds();
        this.Marca = this.sg * 100 + this.cs;
        if (this.cs < 10) {
            this.cs = "0" + this.cs;
        }
        if (this.sg < 10) {
            this.sg = "0" + this.sg;
        }
        if (this.Marca < 400) {
            this.pintarTiempo();

        }
        if (this.Marca >= 400 && this.Marca <= 401) {
            this.pulsar = true;
            setTimeout(() => { this.pulsadorA.play('PulsadorC'); }, 100);
            this.TiempoP1.setText([
                "4" + " : " + "00"
            ]);
        }
        console.log(this.css)
    }



    pintarTiempo(sg, cs) {

        this.TiempoP1.setText([
            this.sg + " : " + this.cs
        ]);

    }

    parar() {
        if (this.play == true) {
            clearInterval(this.elcrono);
            this.play = false;
        }
    }




}
export default ContadorP1;