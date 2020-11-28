class Pause extends Phaser.Scene {
    constructor() {
        super({ key: "Pause" });

    }
    init(data) {
        this.data = data;

    }

    preload() {

    }


    create() {
        this.scene.pause("Scene_play")

        this.keyboard = this.input.keyboard.addKeys('ESC');


        let pause = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "menuPausa");
        pause.displayHeight = this.game.canvas.height * 0.85;
        pause.displayWidth = this.game.canvas.width * 0.65;

        let reanudar = this.add.image(this.game.canvas.width / 2, this.game.canvas.height * 0.4, "botonPausa");
        reanudar.displayHeight = this.game.canvas.height * 0.1;
        reanudar.displayWidth = this.game.canvas.width * 0.2;

        reanudar.setInteractive();

        let salir = this.add.image(this.game.canvas.width / 2, this.game.canvas.height * 0.6, "botonPausa");
        salir.displayHeight = this.game.canvas.height * 0.1;
        salir.displayWidth = this.game.canvas.width * 0.2;

        salir.setInteractive();

        reanudar.on("pointerup", () => {
            if (this.scene.isPaused("Scene_play")) {
                this.scene.resume("Scene_play");
                this.data.escena.continuar();
                this.scene.stop("Pause");
            }
        })

        salir.on("pointerup", () => {
            if (this.scene.isPaused("Scene_play")) {
            this.data.escena.borrarIntervalos();
            this.scene.stop("Scene_play");
            this.scene.launch("MAINMENU");
            this.scene.stop("Pause");
            }
        })


        this.input.keyboard.on('keyup-' + 'ESC', this.unlock.bind(this));

    }
    unlock() {
        console.log("unlock")

        this.keyLock = false;
    }


    update() {

        if (this.keyboard.ESC.isDown === true) {
            this.scene.resume("Scene_play");
            this.data.escena.continuar();
            this.scene.stop("Pause");
        }

    }






}
export default Pause;