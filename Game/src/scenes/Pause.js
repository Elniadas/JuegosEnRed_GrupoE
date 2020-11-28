class Pause extends Phaser.Scene {
    constructor() {
        super({ key: "Pause" });

    }
    init(data) {
        this.data = data;
    }

    preload() {
        this.data.escena.blurGU.alpha = 1;
    }


    create() {


        this.keyboard = this.input.stopPropagation().keyboard.addKeys('A,D,E');


        this.input.keyboard.on('keyup-' + 'A', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'D', this.unlock.bind(this));
        this.teclado = new Array();
        this.aux = new Array();
        this.contF = 0;
        this.puntuacion = 0;
        this.keyLock = false;
        this.tope = 20;
        this.texto = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#00000');
        this.keyLock = false;
      

    }
    unlock() {
        console.log("unlock")

        this.keyLock = false;
    }


    update() {


    }






}
export default Pause;