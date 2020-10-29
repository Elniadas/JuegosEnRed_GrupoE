<<<<<<< HEAD
import Sprite from '../gameObjects/Sprite.js';
import CharacterSprite from '../gameObjects/CharacterSprite.js'
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    load() {
        this.physics.world.setBoundsCollision(false, false, true, true);
    }
    create() {

        console.log("Jugando")

        //Ajustar la imagen al fondo

        this.physics.world.setBounds(0, 0, 1800, 1800)

        let agrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });


        let bgu = this.add.image(0, 0, "gymBackground").setOrigin(0, 0);
        let muro = this.physics.add.image(500, 600, "muro");

        this.plataformas = this.physics.add.group();
        this.plataformas.add(muro);
        this.plataformas.children.get(0).body.setImmovable(true);


        //  Player 1

        // this.playerU = new CharacterSprite(this, 0, 0, "tomato_walk");
        // this.playerU.displayHeight = 300;
        // this.playerU.displayWidth = 300;
        // Align.scaleToGameW(this.playerU, 0.1, this);

        this.playerU = this.physics.add.sprite(100, 450, 'left');
        this.playerU.setScale(0.5).refreshBody();
        this.playerU.body.collideWorldBounds = true;

        //window.playerU = this.playerU
        //Player 2
        // this.playerD = new CharacterSprite(this,0, this.game.canvas.height/2+10, "tomato_walk");
        // this.playerD.displayHeight = 300;
        // this.playerD.displayWidth = 300;
        // Align.scaleToGameW(this.playerD, 0.1, this);
        this.playerD = this.physics.add.sprite(100, 450, 'right');
        this.playerD.setScale(0.5).refreshBody();
        this.playerD.body.collideWorldBounds = true;

        this.time.addEvent({
            delay: 1000,
            callback: this.delayDone,
            callbackScope: this,
            loop: false
        });

        //controles

        //Player 2

        this.cursor = this.input.keyboard.createCursorKeys();

        //Player 1
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //Camaras

        // this.cam1=this.cameras.main.setSize(this.game.canvas.width,this.game.canvas.height/2).setName('Camara 1');

        // this.cam1.startFollow(this.playerU,true);

        // this.cam2=this.cameras.add(0,this.game.canvas.height/2,this.game.canvas.width,this.game.canvas.height/2).setName('Camara 2');

        // this.cam2.startFollow(this.playerD,true);

        //Texto debug camaras

        //this.texto = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#ffffff');

        //this.texto2 = this.add.text(32, this.game.canvas.height/2+32).setScrollFactor(0).setFontSize(32).setColor('#ffffff');

        //Grid

        //agrid.showNumbers();

       
        //Fisicas

    

        this.physics.add.collider(this.playerU, this.plataformas);
        this.physics.add.collider(this.playerD, this.plataformas);


    }
    update() {

        // Control personaje 2

        if (this.cursor.left.isDown === true) {
            this.playerD.body.setVelocityX(-300);
            this.playerD.anims.play("left", true);
        }
        if (this.cursor.right.isDown === true) {
            this.playerD.body.setVelocityX(300);
            this.playerD.anims.play("right", true);
        }
        if (this.cursor.up.isDown === true) {
            this.playerD.body.setVelocityY(-300);
            this.playerD.anims.play("left", true);
        }
        if (this.cursor.down.isDown === true) {
            this.playerD.body.setVelocityY(300);
            this.playerD.anims.play("right", true);
        }
        if (this.cursor.down.isUp && this.cursor.up.isUp && this.cursor.right.isUp && this.cursor.left.isUp) {
            this.playerD.body.setVelocityX(0);
            this.playerD.body.setVelocityY(0);
            this.playerD.anims.play("left", true, 0);
            this.playerD.anims.stop();
        }

        // Personaje 1
        if (this.cursor_S.isDown === true) {
            this.playerU.body.setVelocityY(300);
            this.playerU.anims.play("right", true);
        }
        if (this.cursor_W.isDown === true) {
            this.playerU.body.setVelocityY(-300);
            this.playerU.anims.play("left", true);
        }
        if (this.cursor_A.isDown === true) {
            this.playerU.body.setVelocityX(-300);
            this.playerU.anims.play("left", true);
        }
        if (this.cursor_D.isDown === true) {
            this.playerU.body.setVelocityX(300);
            this.playerU.anims.play("right", true);
        }
        if (this.cursor_A.isUp && this.cursor_D.isUp && this.cursor_S.isUp && this.cursor_W.isUp) {
            this.playerU.body.setVelocityX(0);
            this.playerU.body.setVelocityY(0);
            this.playerU.anims.play("left", true, 0);
            this.playerU.anims.stop();
        }



        //Camara debug

        // this.cam1=this.cameras.main;
        // this.texto.setText([
        //     'ScrollX: ' + this.cam1.scrollX,
        //     'ScrollY: ' + this.cam1.scrollY,
        //     'MidX: ' + this.cam1.midPoint.x,
        //     'MidY: ' + this.cam1.midPoint.y,
        //     'X: ' + this.cam1.x,
        //     'Y: ' + this.cam1.y
        // ]);

        /*
        this.texto2.setText([
            'ScrollX: ' + this.cam2.scrollX,
            'ScrollY: ' + this.cam2.scrollY,
            'MidX: ' + this.cam2.midPoint.x,
            'MidY: ' + this.cam2.midPoint.y,
            'X: ' + this.cam2.x,
            'Y: ' + this.cam2.y
        ]);
        */

    }

    suelo(player) {
        console.log("hola kloke cuanto la hora")
        player.body.setVelocityY(0)
    }

    delayDone() {
        this.playerU.body.setSize(this.playerU.width, this.playerU.height, true)
        this.playerD.body.setSize(this.playerD.width, this.playerD.height, true)
    }

}
=======
import Sprite from '../gameObjects/Sprite.js';
import CharacterSprite from '../gameObjects/CharacterSprite.js'
class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    load() {
        this.physics.world.setBoundsCollision(false, false, true, true);
    }
    create() {

        console.log("Jugando")

        //Ajustar la imagen al fondo

        this.physics.world.setBounds(0, 0, 1800, 1800)

        let agrid = new AlignGrid({ scene: this, rows: 11, cols: 11 });
        
      
        let bgu = this.add.image(0, 0, "gymBackground").setOrigin(0, 0);
        let muro= this.physics.add.image(500,600,"muro");

        this.plataformas = this.physics.add.group();
        this.plataformas.add(muro);
        this.plataformas.children.get(0).body.setImmovable(true);
       

        //  Player 1

        this.playerU = new CharacterSprite(this, 0, 0, "tomato_walk");
        this.playerU.displayHeight = 300;
        this.playerU.displayWidth = 300;
        Align.scaleToGameW(this.playerU, 0.1, this);

        this.playerU.body.collideWorldBounds = true;


        //Player 2
        this.playerD = new CharacterSprite(this,0, this.game.canvas.height/2+10, "tomato_walk");
        this.playerD.displayHeight = 300;
        this.playerD.displayWidth = 300;
        Align.scaleToGameW(this.playerD, 0.1, this);

        this.playerD.body.collideWorldBounds = true;

        //controles

        //Player 2

        this.cursor = this.input.keyboard.createCursorKeys();

        //Player 1
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //Camaras
        

        
        this.cam1=this.cameras.main.setSize(this.game.canvas.width,this.game.canvas.height/2).setName('Camara 1');

        this.cam1.startFollow(this.playerU,true);

        this.cam2=this.cameras.add(0,this.game.canvas.height/2,this.game.canvas.width,this.game.canvas.height/2).setName('Camara 2');
        
        this.cam2.startFollow(this.playerD,true);
        
        //Texto debug camaras
       
        //this.texto = this.add.text(32, 32).setScrollFactor(0).setFontSize(32).setColor('#ffffff');

        //this.texto2 = this.add.text(32, this.game.canvas.height/2+32).setScrollFactor(0).setFontSize(32).setColor('#ffffff');

        agrid.showNumbers();

        //Fisicas
    
        //this.playerU.setGravityY(3000)
        //plataformas.setImmovable();

        this.physics.add.collider(this.playerU, this.plataformas);
 
        
    }
    update() {

        // Control personaje 2

        if (this.cursor.left.isDown === true) {
            this.playerD.body.setVelocityX(-300);
            this.playerD.anims.play("tomato_walk", true);
        }
        if (this.cursor.right.isDown === true) {
            this.playerD.body.setVelocityX(300);
            this.playerD.anims.play("tomato_walk", true);
        }
        if (this.cursor.up.isDown === true) {
            this.playerD.body.setVelocityY(-300);
            this.playerD.anims.play("tomato_walk", true);
        }
        if (this.cursor.down.isDown === true) {
            this.playerD.body.setVelocityY(300);
            this.playerD.anims.play("tomato_walk", true);
        }
        if (this.cursor.down.isUp && this.cursor.up.isUp && this.cursor.right.isUp && this.cursor.left.isUp) {
            this.playerD.body.setVelocityX(0);
            this.playerD.body.setVelocityY(0);
            this.playerD.anims.play("tomato_walk", true, 0);
            this.playerD.anims.stop();
        }

        // Personaje 1
        if (this.cursor_S.isDown === true) {
            this.playerU.body.setVelocityY(300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor_W.isDown === true) {
            this.playerU.body.setVelocityY(-300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor_A.isDown === true) {
            this.playerU.body.setVelocityX(-300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor_D.isDown === true) {
            this.playerU.body.setVelocityX(300);
            this.playerU.anims.play("tomato_walk", true);
        }
        if (this.cursor_A.isUp && this.cursor_D.isUp && this.cursor_S.isUp && this.cursor_W.isUp) {
            this.playerU.body.setVelocityX(0);
            this.playerU.body.setVelocityY(0);
            this.playerU.anims.play("tomato_walk", true, 0);
            this.playerU.anims.stop();
        }



        //Camara debug
        
        // this.cam1=this.cameras.main;
        // this.texto.setText([
        //     'ScrollX: ' + this.cam1.scrollX,
        //     'ScrollY: ' + this.cam1.scrollY,
        //     'MidX: ' + this.cam1.midPoint.x,
        //     'MidY: ' + this.cam1.midPoint.y,
        //     'X: ' + this.cam1.x,
        //     'Y: ' + this.cam1.y
        // ]);
        
        /*
        this.texto2.setText([
            'ScrollX: ' + this.cam2.scrollX,
            'ScrollY: ' + this.cam2.scrollY,
            'MidX: ' + this.cam2.midPoint.x,
            'MidY: ' + this.cam2.midPoint.y,
            'X: ' + this.cam2.x,
            'Y: ' + this.cam2.y
        ]);
        */

    }

    suelo(player){
        console.log("hola kloke cuanto la hora")
        player.body.setVelocityY(0)
    }



}
>>>>>>> 2f10c2254acb0b2c3514da8cf1cefc1f7dd237d2
export default Scene_play;