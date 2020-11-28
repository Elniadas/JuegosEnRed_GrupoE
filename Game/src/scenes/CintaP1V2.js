class CintaP1V2 extends Phaser.Scene {
    constructor() {
        super({ key: "CintaP1V2" });

    }
    init(data) {
        this.data = data;
    }

    preload() {
        this.data.escena.blurGU.alpha = 1;
    }


    create() {





        this.cinta = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, 'CintaA');
        this.cinta.play('CintaA');
        this.cinta.displayHeight = this.cinta.height * 0.55
        this.cinta.displayWidth = this.cinta.width * 0.55



        this.keyboard = this.input.stopPropagation().keyboard.addKeys('A,D,E');




        this.input.keyboard.on('keyup-' + 'A', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'D', this.unlock.bind(this));
        this.teclado = new Array();
        this.aux = new Array();
        this.contF = 0;
        this.puntuacion = 0;
        this.keyLock = false;
        this.tope = 50;
        this.texto = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#00000');
        this.keyLock = false;
     

    }
    unlock() {
        console.log("unlock")

        this.keyLock = false;
    }


    update() {


        if (this.keyboard.A.isDown == true && this.keyLock == false) {

            this.keyLock = true;
            this.teclado.push('A');
            this.aux.push('A');



        }
        if (this.keyboard.D.isDown == true && this.keyLock == false) {
            this.keyLock = true;
            this.teclado.push('D');
            this.aux.push('D');

        }

        //Salir prueba

        /*
        if (this.keyboard.E.isDown === true) {

            this.data.escena.escenasActivas[this.data.id] = false;
            this.data.escena.blurGU.alpha = 0;
            this.scene.stop(this);
        }
        //*/


        if (this.teclado[0] == 'A' || this.teclado[0] == 'D') {

            if (this.ultimaL != this.teclado[0]) {

                this.cinta.setFrame(this.contF)
                this.contF++;
                this.puntuacion++;


                //this.audioCinta.play();
                this.sound.play('Paso1');

                if (this.contF >= 3)
                    this.contF = 0;
            } if (this.ultimaL == 'A' && this.teclado[0] == 'A') {

                this.cinta.setFrame(3);
                this.puntuacion = 0;
            }
            if (this.ultimaL == 'D' && this.teclado[0] == 'D') {
                this.cinta.setFrame(3);
                this.puntuacion = 0;

            }
            this.ultimaL = this.teclado.shift();
            this.teclaChupa = this.teclado[0];

        }
        if (this.puntuacion >= this.tope) {

            this.data.escena.escenasActivas[0] = false;
            this.data.escena.blurGU.alpha = 0;
            this.data.escena.escenarios[0].completadoP1D=true;
            this.data.escena.particlesCPU.destroy()
            this.data.escena.CP1.destroy()
            this.data.escena.crearRayosP1()
            console.log("Saliendo")
            this.scene.stop(this);
        }
        //console.log(this.keyLock)
        this.texto.setText(['Puntuacion: ' + this.puntuacion, 'Tope: ' + this.tope])
    }






}
export default CintaP1V2;