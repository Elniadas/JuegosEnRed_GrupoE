//Clase que usamos para cargar los sprites

class Bootloader extends Phaser.Scene {
    constructor() {
        super({key: "Bootloader"});
    }
    preload() {
        this.load.on("complete", () => {
            this.scene.start("MAINMENU");
        });

        this.load.image("fullscreen", "./assets/fullscreen.png");
        this.load.image("muro", "./assets/Muro.png");
        this.load.image("mainmenu","./assets/MainMenuB.jpg");
        this.load.image("playButton","./assets/playButton.png");
        this.load.image("gymBackground", "./assets/BAC.jpg");
        this.player_Sprite=this.load.spritesheet("player","./assets/evil_tomato.png",{frameWidth:16,frameHeight:25});

        //barra de carga

        let loadingBar=this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })

        this.load.on("progress",(percent=>{
            loadingBar.fillRect(0,this.game.renderer.height/2,this.game.renderer.width*percent,50);
        }))

        //

    }
    create(){
        
        //Animacion player
        this.anims.create({
            key:'tomato_walk',
            frames: this.anims.generateFrameNumbers('player',{frames:[1,2,3,4,5,6,7,8]}),
            repeat:-1,
            frameRate:16
        })
        
        
    }
}

export default Bootloader;