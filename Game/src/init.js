import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js'
import mainMenu from './scenes/mainMenu.js';
import CintaP1 from './scenes/CintaP1.js';
import CintaP2 from './scenes/CintaP2.js';
import ContadorP1 from './scenes/ContadorP1.js';
import ContadorP2 from './scenes/ContadorP2.js';

const config = {
    type: Phaser.AUTO,
    scale: {
        // mode: Phaser.Scale.ENVELOP,
        parent: "phaser_container",
        
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1080,//'100%',//document.getElementById("contenedor").clientWidth,
        height: 720//'100%'
    },
    audio: {
        disableWebAudio: true
    }
    ,
    dom: {
        createContainer: true
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
        mainMenu,
        CintaP1,
        CintaP2,
        ContadorP1,
        ContadorP2
    ]
}

let game = new Phaser.Game(config);