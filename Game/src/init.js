import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js'
import mainMenu from './scenes/mainMenu.js';
import CintaP1 from './scenes/CintaP1.js';
import CintaP1V2 from './scenes/CintaP1V2.js';
import CintaP2V2 from './scenes/CintaP2V2.js';
import CintaP2 from './scenes/CintaP2.js';
import ContadorP1 from './scenes/ContadorP1.js';
import ContadorP2 from './scenes/ContadorP2.js';
import ElectricidadP1 from './scenes/ElectricidadP1.js';
import ElectricidadP2 from './scenes/ElectricidadP2.js';
import ElectricidadP1V2 from './scenes/ElectricidadP1V2.js';
import ElectricidadP2V2 from './scenes/ElectricidadP2V2.js';
import LaboratorioP1 from './scenes/LaboratorioP1.js';

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
        ContadorP2,
        ElectricidadP1,
        ElectricidadP2,
        CintaP1V2,
        CintaP2V2,
        ElectricidadP1V2,
        ElectricidadP2V2,
        LaboratorioP1
    ]
}

let game = new Phaser.Game(config);