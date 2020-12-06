class Victoria extends Phaser.Scene {
    constructor() {
        super({ key: "Victoria" });

    }
    init(data) {
        this.data = data;
        this.soundManager = data.soundManager
        this.ganador = data.ganador
        this.name=data.name;
        console.log(this.soundManager)
    }

    preload() {

    }


    create() {
        
        let victoria= this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2,'Victoria');
        victoria.displayHeight=this.game.canvas.height
        victoria.displayWidth=this.game.canvas.width;

        if (this.ganador === 1) {   
            console.log("Ha ganado el jugador 1")
            this.texto = this.add.text(this.game.canvas.width / 2-500, this.game.canvas.height / 2).setScrollFactor(0).setFontSize(75).setColor("#000000");
            this.texto.setText("Ganador "+ this.name);
        }
        if (this.ganador === 2) {
            console.log("Ha ganado el jugador 2")
            this.texto = this.add.text(this.game.canvas.width / 2-500, this.game.canvas.height / 2).setScrollFactor(0).setFontSize(75).setColor("#000000");
            this.texto.setText("Ganador "+ this.name);
        }
        this.time.addEvent({
            delay: 3000,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });

    }
    unlock() {

    }


    update() {






    }
    delayDone(){
        this.scene.start("MAINMENU",{escena:null,soundManager:this.soundManager});
    }
}
    export default Victoria;