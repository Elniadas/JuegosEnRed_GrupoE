import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js';
import mainMenu from './scenes/mainMenu.js';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        // mode: Phaser.Scale.ENVELOP,
        parent: "contenedor",

        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },

    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 1000 },
            debug: true
        }
    },
    scene: [
        Bootloader,
        Scene_play,
        mainMenu
    ]
}

let game = new Phaser.Game(config);