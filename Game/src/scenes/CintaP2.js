class CintaP2 extends Phaser.Scene {
    constructor() {
        super({ key: "CintaP2" });

    }
    init(data) {
        this.data = data;
    


    }

    preload() {
        this.data.escena.blurGD.alpha = 1;

    }

    create() {



        this.cinta = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height * 0.75, 'CintaA');
        this.cinta.play('CintaA');
        this.cinta.displayHeight = this.cinta.height * 0.55
        this.cinta.displayWidth = this.cinta.width * 0.55

     
        this.keyboard = this.input.keyboard.addKeys('LEFT,RIGHT');

        this.input.keyboard.on('keyup-'+'LEFT', this.unlock.bind(this));
        this.input.keyboard.on('keyup-'+'RIGHT', this.unlock.bind(this));
        this.teclado = new Array();
        console.log(this.keyboard.W);
        this.contF = 0;
        this.puntuacion = 0;
      
        this.tope = 20;
        this.texto = this.add.text(32, this.game.canvas.height * 0.75,).setScrollFactor(0).setFontSize(32).setColor('#00000');



    }
    unlock() {
  
        this.keyLock = false;
    }


    update() {

        if (this.keyboard.LEFT.isDown == true && this.keyLock == false) {
            this.keyLock = true;
            this.teclado.push('A');

         

        }
        if (this.keyboard.RIGHT.isDown == true && this.keyLock == false) {
            this.keyLock = true;
            this.teclado.push('D');
        
        }

        //Cerrar nivel
        /*
        if (this.cursor.shift.isDown === true) {

            this.data.escena.escenasActivas[this.data.id] = false;
            this.data.escena.blur2.alpha = 0;
            this.scene.stop(this);
        }
        */


        if (this.teclado[0] != undefined) {
            if (this.ultimaL != this.teclado[0]) {
                console.log("corrido un paso");
                this.cinta.setFrame(this.contF)
                this.contF++;
                this.puntuacion++;
                
                if (this.contF >= 3)
                    this.contF = 0;
            } if(this.ultimaL==this.teclado[0]) {
                console.log("Te has tropezado");
                this.cinta.setFrame(3);
                this.puntuacion=0;
            }
            this.ultimaL = this.teclado.shift();
            console.log(this.ultimaL)
        }

        if (this.puntuacion >= this.tope) {
            this.data.escena.escenasActivas[1] = false;
            this.data.escena.escenarios[0].completadoP2U=true;
            this.data.escena.blurGD.alpha = 0;
            this.data.escena.completado[1]=true;

            this.data.escena.crearPortalGimnasioP2();
            this.scene.stop(this);
        }

        this.texto.setText(['Puntuacion: ' + this.puntuacion, 'Tope: ' + this.tope])
    }




}
export default CintaP2;