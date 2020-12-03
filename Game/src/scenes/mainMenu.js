import Sprite from '../gameObjects/Sprite.js';

class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "MAINMENU" });
    }
    create(){
        let bg= this.add.image(0,0,"menu").setOrigin(0,0);     
        bg.displayWidth=this.game.canvas.width;  
        bg.displayHeight=this.game.canvas.height;  
        let container= document.getElementsByClassName('animated-button1');
        
        
        
        //container.addEventListener('click',()=>{});
        //container.setOrigin(0,0);
            
         
         let hoverSprite=this.add.sprite(100,100,"FlagSheet2");
         hoverSprite.setVisible(false);
         hoverSprite.setScale(0.80);
         let pb2=this.add.sprite(200, this.sys.game.canvas.height/2, "buttonPlay");
         pb2.setFrame(0);
         pb2.setScale(0.75);
         pb2.setOrigin(0.48,-0.1);
         pb2.setInteractive();
 
         pb2.on("pointerover", ()=>{
             hoverSprite.setVisible(true);
             hoverSprite.play("wave");
             hoverSprite.x=pb2.x+10;
             hoverSprite.y=pb2.y-40;
             pb2.setFrame(1);
            
         }) 
         
         pb2.on("pointerout", ()=>{
             hoverSprite.setVisible(false);
             pb2.setFrame(0);
             
         } )
         
         pb2.on("pointerup",()=>{            
             /*this.scene.transition({
                 target: "Scene_Play",
                 duration:3000
             })*/
             this.scene.start("Scene_play");
         })

         pb2.on("pointerdown", ()=>{
             pb2.setFrame(2);
         })

         this.playT=this.add.text(pb2.x-75, pb2.y+25).setScrollFactor(0).setFontSize(50).setColor("#000000");
         this.playT.setText("Jugar");


         let soundM=this.add.sprite(950, 75, "Mute");
         //let pb= this.add.image(this.sys.game.canvas.width/2,this.sys.game.canvas.height/2,"playButton");

         soundM.setScale(0.45);
         soundM.setInteractive();

         let pbCM=this.add.sprite(200, this.sys.game.canvas.height/2 + 120, "buttonPlay");
         pbCM.setFrame(0);
         pbCM.setScale(0.75);
         pbCM.setOrigin(0.48,-0.1);
         pbCM.setInteractive();

         pbCM.on("pointerover", ()=>{
             pbCM.setFrame(1);
         })

         pbCM.on("pointerout", ()=>{
            pbCM.setFrame(0);
        })

        pbCM.on("pointerdown", ()=>{
            pbCM.setFrame(2);
        })

        pbCM.on("pointerup", ()=>{
            pbCM.setFrame(0);
        })

        this.cjT=this.add.text(pbCM.x-145, pbCM.y+30).setScrollFactor(0).setFontSize(50).setColor("#000000");
        this.cjT.setText("Cómo Jugar");

        

        

        /*soundM.on("pointerdown", ()=>{
            console.log(soundM.frame.name);
            soundM.frame.name=soundM.frame.name==0?soundM.setFrame(1):soundM.setFrame(0);           
        })*/

         
        
       



        //ESTO ES UN COMENTARIO DE PRUEBA PARA GITHUB

    }
}
export default MainMenu;