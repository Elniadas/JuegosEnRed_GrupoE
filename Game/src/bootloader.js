
//Clase que usamos para cargar los sprites

class Bootloader extends Phaser.Scene {
    constructor() {
        super({key: "Bootloader"});
    }
    preload() {
        this.load.on("complete", () => {
            this.scene.start("MAINMENU");
        });

        //Fuente texto//

        this.load.bitmapFont('Digitalism','./assets/Digitalism.png','./assets/Digitalism.xml')
        
        //Gimnasio//
        
        this.load.image("Gimnasio","./assets/Gimnasio.png");
        this.load.image("CintaReposo","./assets/CintaReposo.png");
        this.load.image("GimnasioBlur","./assets/GimnasioBlur.png")
        this.load.spritesheet("CintaCorrer","./assets/CintaAnimada.jpg",{frameWidth:500,frameHeight:600});
        this.load.image("gymplatform", "./assets/GymPlat.png");
        this.load.image("cintaSprite", "./assets/CintaSprite.png");

        
        //Contador//

        this.load.image("Pulsador", "./assets/Pulsador.png");
        this.load.image("ContadorBlur","./assets/ContadorBlur.png");
        this.load.image("Contador","./assets/Contador2.png")
        this.load.spritesheet("PulsadorA","./assets/PulsadorAnimacion.png",{frameWidth:500,frameHeight:600});

        //Nieve//

        this.load.image("Nieve", "./assets/NivelHelado.png");

        //Electricidad//

        this.load.image("Electricidad", "./assets/NivelElectricidad.png");

        //Menu//
        this.load.image("menu","./assets/MainMenu.jpg");
        this.load.spritesheet("FlagSheet2", "./assets/FlagSheet2.png", {frameWidth:450,frameHeight:300}); //banderas
        this.load.spritesheet("Play", "./assets/Play.png", {frameWidth:792,frameHeight:410}); //botón de play
        this.load.spritesheet("Mute", "./assets/SpriteSheetSound.png", {frameWidth:300, frameHeight:300}); //botón sonido

        //Otros//
        
        this.load.image("muro", "./assets/Muro.png");
        //this.load.image("mainmenu","./assets/MainMenuB.jpg");
        //this.load.image("playButton","./assets/playButton.png");
        this.load.image("logo","./assets/Logo.jpg")
        this.load.image("Crono","./assets/Cronometro.png")
        
        //Efectos//

        this.load.atlas('flares', './assets/flares.png', './assets/flares.json');
        this.load.image('snowFlake','./assets/snowFlakeC.png');

        
        //Sonidos//
        this.load.audio("Paso1","./assets/Sonidos/Paso1.mp3",{instances: 10});
        this.load.audio("Reloj","./assets/Sonidos/Reloj.mp3");
        this.load.audio("Teletransporte","./assets/Sonidos/Teletransporte.mp3");
        
        //Animaciones//
       this.load.atlas("P1","./assets/RunP1.png","./assets/RunP1.json")
       this.load.atlas("P2","./assets/RunP2.png","./assets/RunP2.json")
       this.load.spritesheet("portal", "./assets/SpriteSheetPortal.png", {frameWidth:168, frameHeight:310});
        
        
        
        
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
        
        ////////////////////////////////////////////////
        ///////////////////////////////////////////////

        //Player 1

        this.anims.create({
            key:'CorrerDerechaP1',
            frames: [{
                key:'P1',
                frame:"DPose1DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose2DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose3DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose4DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose5DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose6DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose7DchaPJ1.png"
            },
            {
                key:'P1',
                frame:"DPose8DchaPJ1.png"
            }
        ],
            repeat:-1,
            frameRate:8
        })
        this.anims.create({
            key:'IdleDerechaP1',
            frames: [{
                key:'P1',
                frame:"DIdleDchaPJ1.png"
            }
        ],
            repeat:0,
            frameRate:8
        })
        this.anims.create({
            key:'SaltoDerechaP1',
            frames: [{
                key:'P1',
                frame:"DSaltoDchaPJ1.png"
            }
        ],
            repeat:0,
            frameRate:8
        })
        this.anims.create({
            key:'CorrerIzquierdaP1',
            frames: [{
                key:'P1',
                frame:"Pose1IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose2IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose3IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose4IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose5IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose6IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose7IzqPJ1.png"
            },
            {
                key:'P1',
                frame:"Pose8IzqPJ1.png"
            },

        ],
            repeat:1,
            frameRate:8
        })

        this.anims.create({
            key:'IdleIzquierdaP1',
            frames: [{
                key:'P1',
                frame:"IdleIzqPJ1.png"
            }
        ],
            repeat:0,
            frameRate:8
        })
        this.anims.create({
            key:'SaltoIzquierdaP1',
            frames: [{
                key:'P1',
                frame:"SaltoIzqPJ1.png"
            }
        ],
            repeat:0,
            frameRate:8
        })
        /////////////////////////////////////////////////////////7
        //////////////////////////////////////////////////////////
        
        this.anims.create({
            key:'CorrerDerechaP2',
            frames: [{
                key:'P2',
                frame:"DPose1DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose2DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose3DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose4DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose5DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose6DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose7DchaPJ2.png"
            },
            {
                key:'P2',
                frame:"DPose8DchaPJ2.png"
            }
        ],
            repeat:-1,
            frameRate:8
        })
        this.anims.create({
            key:'IdleDerechaP2',
            frames: [{
                key:'P2',
                frame:"DIdleDchaPJ2.png"
            }
        ],
            repeat:0,
            frameRate:8
        })
        this.anims.create({
            key:'SaltoDerechaP2',
            frames: [{
                key:'P2',
                frame:"DSaltoDchaPJ2.png"
            }
        ],
            repeat:0,
            frameRate:8
        })


        this.anims.create({
            key:'CorrerIzquierdaP2',
            frames: [{
                key:'P2',
                frame:"Pose1IzqPJ2.png"
            },
            {
                key:'P2',
                frame:"Pose2IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose3IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose4IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose5IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose6IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose7IzqPJ2.png"
            },
            
            {
                key:'P2',
                frame:"Pose8IzqPJ2.png"
            },
            

            

        ],
            repeat:1,
            frameRate:8
        })

        this.anims.create({
            key:'IdleIzquierdaP2',
            frames: [{
                key:'P2',
                frame:"IdleIzqPJ2.png"
            }
        ],
            repeat:0,
            frameRate:8
        })

        this.anims.create({
            key:'SaltoIzquierdaP2',
            frames: [{
                key:'P2',
                frame:"SaltoIzqPJ2.png"
            }
        ],
            repeat:0,
            frameRate:8
        })

        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////
        
         this.anims.create({
             key:'CintaA',
             frames: this.anims.generateFrameNumbers('CintaCorrer',{frames:[0,1,2,3]}),
             repeat:0,
             frameRate:0
         })
         this.anims.create({
            key:'CintaP',
            frames: this.anims.generateFrameNumbers('CintaCorrer',{frames:[3]}),
            repeat:0,
            frameRate:8
        })
        this.anims.create({
            key:'PulsadorP',
            frames: this.anims.generateFrameNumbers('PulsadorA',{frames:[9]}),
            repeat:0,
            frameRate:5
        })
        this.anims.create({
            key:'PulsadorC',
            frames: this.anims.generateFrameNumbers('PulsadorA',{frames:[0,1,2,3]}),
            repeat:0,
            frameRate:5
        })
        this.anims.create({
            key:'PulsadorB',
            frames: this.anims.generateFrameNumbers('PulsadorA',{frames:[4,5,6,7,8]}),
            repeat:0,
            frameRate:8
        })


        //banderas
        this.anims.create({
            key: "wave",
            frames: this.anims.generateFrameNumbers("FlagSheet2", {frames:[0,1,2,3,4,5]}),            
            repeat: -1,
            frameRate: 6
            
        })

        //portal
        this.anims.create({
            key: 'portalAnim',
            frames: this.anims.generateFrameNumbers("portal", {frames:[0,1,2,3,4,5,6,7,8]}),
            repeat: -1,
            frameRate: 6
        })
        

        
        
    }
}

export default Bootloader;