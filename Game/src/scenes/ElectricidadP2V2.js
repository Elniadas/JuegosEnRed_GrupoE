class ElectricidadP2V2 extends Phaser.Scene {
    constructor() {
        super({ key: "ElectricidadP2V2" });

    }
    init(data) {
        this.data = data;
    }

    preload() {
        this.data.escena.blurElectricidadD.alpha = 1;
    }


    create() {



        this.prueba = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height *0.75, 'PruebaElectricidad2');
        this.prueba.displayHeight = this.prueba.height * 0.55
        this.prueba.displayWidth = this.prueba.width * 0.55
        
        


        this.pieza1=this.add.sprite(464, 164+this.game.canvas.height*0.5, 'PruebaElectricidadPieza1');
        this.pieza1.displayHeight=25;
        this.pieza1.displayWidth=5;
        this.pieza1.angle=90;

        


        this.pieza2=this.add.sprite(561, 212+this.game.canvas.height*0.5, 'PruebaElectricidadPieza2');       
        this.pieza2.displayHeight=12;
        this.pieza2.displayWidth=25;
        this.pieza2.angle=90;



        this.pieza3=this.add.sprite(595, 249+this.game.canvas.height*0.5, 'PruebaElectricidadPieza3');
        this.pieza3.scale=0.6
        this.pieza3.angle=90;
       

        this.pieza4=this.add.sprite(469, 250+this.game.canvas.height*0.5, 'PruebaElectricidadPieza2');
        this.pieza4.displayHeight=16;
        this.pieza4.displayWidth=20;
        this.pieza4.angle=0;
    
        this.pieza5=this.add.sprite(510, 164+this.game.canvas.height*0.5, 'PruebaElectricidadPieza1');
        this.pieza5.displayHeight=25;
        this.pieza5.displayWidth=5;
        this.pieza5.angle=90;
        

        this.pieza6=this.add.sprite(554, 160+this.game.canvas.height*0.5, 'PruebaElectricidadPieza1');
        this.pieza6.displayHeight=16;
        this.pieza6.displayWidth=5;
        this.pieza6.angle=90;

        this.pieza7=this.add.sprite(624, 175+this.game.canvas.height*0.5, 'PruebaElectricidadPieza1');
        this.pieza7.displayHeight=31;
        this.pieza7.displayWidth=5;
        this.pieza7.angle=90;

        this.piezas=new Array();
        this.piezas[0]=this.pieza1
        this.piezas[1]=this.pieza4
        this.piezas[2]=this.pieza5
        this.piezas[3]=this.pieza6
        this.piezas[4]=this.pieza7
        this.piezas[5]=this.pieza2
        this.piezas[6]=this.pieza3

        this.solucion= new Array();
        this.solucion[0]={uno:0,dos:-180};
        this.solucion[1]={uno:90,dos:-90};
        this.solucion[2]={uno:0,dos:-180};
        this.solucion[3]={uno:0,dos:-180};
        this.solucion[4]={uno:0,dos:-180};
        this.solucion[5]={uno:0,dos:-180};
        this.solucion[6]={uno:0,dos:0};

        this.marco=this.add.sprite(this.piezas[2].x,this.piezas[2].y,"Marco");
        this.marco.scale=0.33;
        this.posicion=2;

        this.keyboard = this.input.keyboard.addKeys('LEFT,RIGHT,UP,DOWN');

        this.input.keyboard.on('keyup-'+'LEFT', this.unlock.bind(this));
        this.input.keyboard.on('keyup-'+'RIGHT', this.unlock.bind(this));
        this.input.keyboard.on('keyup-'+'UP', this.unlock.bind(this));
        this.input.keyboard.on('keyup-'+'DOWN', this.unlock.bind(this));

    }
    unlock() {
        //console.log("unlock")

        this.keyLock = false;
    }


    update() {


        if (this.keyboard.LEFT.isDown == true && this.keyLock == false) {
            this.posicion--;
            if(this.posicion<0){
                this.posicion=this.piezas.length-1;
            }
            this.actualizarMarco();
            this.keyLock = true;
        }
        if (this.keyboard.RIGHT.isDown == true && this.keyLock == false) {
            
            this.posicion++;
            if(this.posicion>this.piezas.length-1){
                this.posicion=0;
            }

            this.actualizarMarco();
            this.keyLock = true;

        }

        //Salir prueba

        /*
        if (this.keyboard.Q.isDown === true && this.keyLock == false) {
            console.log("Cerrando");
            this.data.escena.escenasActivas[1] = false;
            this.keyLock = true;

            this.scene.stop(this);
        }
        //*/

        
        if (this.keyboard.UP.isDown === true && this.keyLock == false) {
            this.keyLock = true;
            this.piezas[this.posicion].angle+=90;
            this.completado();
            //console.log("La pieza: " +this.posicion+" tiene este angulo : "+this.piezas[this.posicion].angle);
        }

        if (this.keyboard.DOWN.isDown === true && this.keyLock == false) {
            this.keyLock = true;
            this.piezas[this.posicion].angle-=90;
            this.completado();
            //console.log("La pieza: " +this.posicion+" tiene este angulo : "+this.piezas[this.posicion].angle);
        }


        //*/
    }

    actualizarMarco(){
        console.log(this.posicion)
        this.marco.x=this.piezas[this.posicion].x;
        this.marco.y=this.piezas[this.posicion].y;
    }
    completado(){
        let casos = new Array(false,false,false,false,false,false,false);
        if(this.piezas[0].angle==this.solucion[0].uno || this.piezas[0].angle==this.solucion[0].dos){
            casos[0]=true;
        }
        if(this.piezas[1].angle==this.solucion[1].uno || this.piezas[1].angle==this.solucion[1].dos){
            casos[1]=true;
        }
        if(this.piezas[2].angle==this.solucion[2].uno || this.piezas[2].angle==this.solucion[2].dos){
            casos[2]=true;
        }
        if(this.piezas[3].angle==this.solucion[3].uno || this.piezas[3].angle==this.solucion[3].dos){
            casos[3]=true;
        }
        if(this.piezas[4].angle==this.solucion[4].uno || this.piezas[4].angle==this.solucion[4].dos){
            casos[4]=true;
        }
        if(this.piezas[5].angle==this.solucion[5].uno || this.piezas[5].angle==this.solucion[5].dos){
            casos[5]=true;
        }
        if(this.piezas[6].angle==this.solucion[6].uno || this.piezas[6].angle==this.solucion[6].dos){
            casos[6]=true;
        }
   
        if(casos[0]==true && casos[1]==true&&casos[2]==true&&casos[3]==true&&casos[4]==true && casos[5]==true&& casos[6]==true){
  

            //this.bombilla.alpha=1;

            

            setTimeout(()=>{this.scene.stop(this)
                this.data.escena.escenasActivas[1] = false;
                this.data.escena.escenarios[3].completadoP2D=true;
                this.keyLock = true;
                this.data.escena.blurElectricidadD.alpha = 0;
                this.data.escena.EP2.destroy();
                this.data.escena.crearBlindP2();
                this.scene.stop(this)
            },500);
        }
        console.log(casos)
    }





}
export default ElectricidadP2V2;