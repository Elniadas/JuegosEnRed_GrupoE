import Sprite from '../gameObjects/Sprite.js';

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MAINMENU" });
    }
    create(){
        console.log("asdasdasd")
        let bg= this.add.image(0,0,"mainmenu").setOrigin(0,0);
        // let pb= this.add.image(this.sys.game.canvas.width/2,this.sys.game.canvas.height/2,"playButton");
        // pb.setScale(0.3);
        let pb= new Sprite(this,this.sys.game.canvas.width/2,this.sys.game.canvas.height/2,"playButton");
        pb.setScale(0.3)
        pb.setInteractive();

        pb.on("pointerdown",()=>{
            console.log("hola");
            
        })
        pb.on("pointerup",()=>{
            console.log("bye puta");
            this.scene.start("Scene_play");
        })

    }
}
export default MainMenu;