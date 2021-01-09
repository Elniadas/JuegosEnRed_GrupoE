class Lobby extends Phaser.Scene {
    constructor() {
        super({ key: "Lobby" });

    }
    init(data) {
        this.data = data;
        this.soundManager = data.soundManager
        console.log(this.soundManager)
    }

    preload() {
        this.load.html('User1', './src/inputName.html');
    }


    create() {
        let lobby = this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, 'Victoria');
        lobby.displayHeight = this.game.canvas.height
        lobby.displayWidth = this.game.canvas.width;

        let logged = [false, false]
        let p1Name;
        let p2Name;

        let player1 = this.add.sprite(150, 500 - 50, 'P1');
        player1.setScale(0.8)
        var textP1 = this.add.text(player1.x - 100, player1.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });

        var inputTextP1 = this.add.dom(player1.x, player1.y + 200).createFromCache('User1');


        inputTextP1.addListener('keyup');


        inputTextP1.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');

                    //  Hide the login element
                    this.setVisible(false);
                    p1Name = inputText.value;
                    //  Populate the text with whatever they typed in
                    textP1.setText('Jugador 1 ' + inputText.value);
                    logged[0] = true;
                    inputText.value = ''
                } else {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: textP1,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }

        });



        let player2 = this.add.sprite(800, 500 - 50, 'P2')
        player2.flipX = true;
        player2.setScale(0.8)
        var textP2 = this.add.text(player2.x - 100, player2.y - 200, 'Introduce su nombre', { color: 'white', fontSize: '20px ' });

        var inputTextP2 = this.add.dom(player2.x, player2.y + 200).createFromCache('User1');


        inputTextP2.addListener('keyup');


        inputTextP2.on('keyup', function (event) {

            //if (event.target.name === 'playButton') {
            var inputText = this.getChildByName('nameField');
            if (event.key === 'Enter') {
                //  Have they entered anything?
                if (inputText.value !== '') {
                    //  Turn off the click events
                    this.removeListener('keyup');
                    p2Name = inputText.value
                    //  Hide the login element
                    this.setVisible(false);

                    //  Populate the text with whatever they typed in
                    textP2.setText('Jugador 2 ' + inputText.value);
                    logged[1] = true;
                    inputText.value = ''
                } else {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: textP2,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }

        });







        let pbCM = this.add.sprite(200, 100, "buttonPlay");
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
            let textoP1 = inputTextP1.getChildByName('nameField').value
            let textoP2 = inputTextP2.getChildByName('nameField').value
            if (textoP1 !== '') {

                inputTextP1.removeListener('keyup');
                inputTextP1.setVisible(false);
                p1Name = textoP1;
                textP1.setText('Jugador 1 ' + textoP1);
                logged[0] = true;
                textoP1 = ''
            }


            if (textoP2 !== '') {
                //  Turn off the click events
                inputTextP2.removeListener('keyup');
                p2Name = textoP2
                //  Hide the login element
                inputTextP2.setVisible(false);

                //  Populate the text with whatever they typed in
                textP2.setText('Jugador 2 ' + textoP2);
                logged[1] = true;
                textoP2 = ''
            }


            if (logged[0] === true && logged[1] === true)
                this.scene.start("Scene_play", { escena: null, soundManager: this.soundManager, users: { p1: { user: p1Name }, p2: { user: p2Name } } });
        })

        this.cjT = this.add.text(pbCM.x - 145, pbCM.y + 30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjT.setText("Jugar");






    }


    update() {


    }




}

export default Lobby;