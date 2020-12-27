
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;


class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MAINMENU" });
    }
    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'C:\Users\Elnidas\Desktop\Try2\JuegosEnRed_GrupoE\Game\assets\rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }
    init(data) {
        this.soundManager = data.soundManager
        console.log(this.soundManager)
    }
    create() {



        



        let bg = this.add.image(0, 0, "menu").setOrigin(0, 0);
        bg.displayWidth = this.game.canvas.width;
        bg.displayHeight = this.game.canvas.height;
        //let container= document.getElementsByClassName('animated-button1');

        this.soundManager.play('Musica_fondo')

        //container.addEventListener('click',()=>{});
        //container.setOrigin(0,0);


        let hoverSprite = this.add.sprite(100, 100, "FlagSheet2");
        hoverSprite.setVisible(false);
        hoverSprite.setScale(0.80);
        let pb2 = this.add.sprite(200, 280, "buttonPlay");
        pb2.setFrame(0);
        pb2.setScale(0.75);
        pb2.setOrigin(0.48, -0.1);
        pb2.setInteractive();

        pb2.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.play("wave");
            hoverSprite.x = pb2.x + 10;
            hoverSprite.y = pb2.y - 40;
            pb2.setFrame(1);

        })

        pb2.on("pointerout", () => {
            hoverSprite.setVisible(false);
            pb2.setFrame(0);

        })

        pb2.on("pointerup", () => {
            /*this.scene.transition({
                target: "Scene_Play",
                duration:3000
            })*/
            //this.scene.sleep("MAINMENU")
            this.scene.start("Lobby", { escena: null, soundManager: this.soundManager });
        })

        pb2.on("pointerdown", () => {
            pb2.setFrame(2);
        })

        this.playT = this.add.text(pb2.x - 75, pb2.y + 25).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.playT.setText("Jugar");


        //let soundM=this.add.sprite(950, 75, "Mute");
        //let pb= this.add.image(this.sys.game.canvas.width/2,this.sys.game.canvas.height/2,"playButton");

        //soundM.setScale(0.45);
        //soundM.setInteractive();

        let pbCM = this.add.sprite(200, 380, "buttonPlay");
        pbCM.setFrame(0);
        pbCM.setScale(0.75);
        pbCM.setOrigin(0.48, -0.1);
        pbCM.setInteractive();

        pbCM.on("pointerover", () => {
            pbCM.setFrame(1);
        })

        pbCM.on("pointerout", () => {
            pbCM.setFrame(0);
        })

        pbCM.on("pointerdown", () => {
            pbCM.setFrame(2);
        })

        pbCM.on("pointerup", () => {
            pbCM.setFrame(0);
            //this.scene.sleep("MAINMENU")
            this.scene.start("Tutorial", { escena: null, soundManager: this.soundManager });
        })

        this.cjT = this.add.text(pbCM.x - 145, pbCM.y + 30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjT.setText("Cómo Jugar");




        let pbCG = this.add.sprite(200, 480, "buttonPlay");
        pbCG.setFrame(0);
        pbCG.setScale(0.75);
        pbCG.setOrigin(0.48, -0.1);
        pbCG.setInteractive();

        pbCG.on("pointerover", () => {
            pbCG.setFrame(1);
        })

        pbCG.on("pointerout", () => {
            pbCG.setFrame(0);
        })

        pbCG.on("pointerdown", () => {
            pbCG.setFrame(2);
        })

        pbCG.on("pointerup", () => {
            pbCG.setFrame(0);
            //CODIGO MENU
            let pause = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "menuPausa");
            pause.displayHeight = this.game.canvas.height * 0.85;
            pause.displayWidth = this.game.canvas.width * 0.65;

            let salir = this.add.image(this.game.canvas.width / 2 - 200, this.game.canvas.height * 0.5 - 200, "botonPausa");
            salir.displayHeight = this.game.canvas.height * 0.1;
            salir.displayWidth = this.game.canvas.width * 0.2;
            salir.setInteractive();
            let textoSalir = this.add.text(salir.x -55, salir.y-15 ).setScrollFactor(0).setFontSize(30)
            textoSalir.setText("Salir");



            var print0 = this.add.text(this.game.canvas.width / 2 - 75, this.game.canvas.height / 2 - 100, '').setFontSize(45);
            //this.cambiarSonido();
            //var cambiar= this.cambiarSonido;
            //cambiar();
            

            this.slider = this.rexUI.add.slider({
                x: this.game.canvas.width / 2,
                y: this.game.canvas.height / 2,
                width: 200,
                height: 30,
                orientation: 'x',

                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 6, COLOR_DARK),
                thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
                value: this.soundManager.volume,
                valuechangeCallback: function (value) {

                },
                space: {
                    top: 4,
                    bottom: 4
                },
                input: 'drag', // 'drag'|'click'
            }).layout();

            this.slider.on('valuechange', function (newValue) {
                this.cambiarSonido();
                newValue = newValue.toFixed(4)
                print0.text = newValue;
            }, this);

            salir.on("pointerup", () => {
                salir.destroy();
                pause.destroy();
                textoSalir.destroy();
                print0.text=''
                this.slider.destroy();
            })



        })

        this.cjCF = this.add.text(pbCG.x - 80, pbCG.y + 30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjCF.setText("Sonido");



    }

    cambiarSonido() {
        console.log("Cambiando el sonido")
        this.soundManager.volume = this.slider.value;
        this.soundManager.resumeAll();

    }


}
export default MainMenu;