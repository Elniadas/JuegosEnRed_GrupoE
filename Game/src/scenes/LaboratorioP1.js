class LaboratorioP1 extends Phaser.Scene {
    constructor() {
        super({ key: "LaboratorioP1" });

    }
    init(data) {
        this.data = data;
    }

    preload() {
        this.data.escena.blurLaboratorioU.alpha = 1;
    }


    create() {





        this.prueba = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, 'PruebaLaboratorio');
        this.prueba.displayHeight = this.prueba.height * 0.55
        this.prueba.displayWidth = this.prueba.width * 0.55



        this.sprites = new Array();
        this.sprites[0] = "PruebaLaboratorioPieza1"
        this.sprites[1] = "PruebaLaboratorioPieza2"
        this.sprites[2] = "PruebaLaboratorioPieza3"
        this.sprites[3] = "PruebaLaboratorioPieza4"
        this.sprites[4] = "PruebaLaboratorioPieza5"






        this.solucion = new Array();
        this.solucion[0] = 1
        this.solucion[1] = 0
        this.solucion[2] = 2
        this.solucion[3] = 3
        this.solucion[4] = 4



        this.pieza1 = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, this.sprites[0]);//La E
        this.pieza1.y = 200;
        this.pieza1.x = 445;
        this.pieza1.scale = 0.7
        this.pieza1.sprite = 0

        this.pieza2 = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, this.sprites[1]);//Beta
        this.pieza2.y = 200;
        this.pieza2.x = 490;
        this.pieza2.scale = 0.7
        this.pieza2.sprite = 1




        this.pieza3 = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, this.sprites[2]);// U
        this.pieza3.y = 200;
        this.pieza3.x = 530;
        this.pieza3.scale = 0.7
        this.pieza3.sprite = 2

        this.pieza4 = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, this.sprites[3]);//Lamda
        this.pieza4.y = 200;
        this.pieza4.x = 580;
        this.pieza4.scale = 0.7
        this.pieza4.sprite = 3



        this.pieza5 = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 4, this.sprites[4]); //Delta
        this.pieza5.y = 200;
        this.pieza5.x = 630;
        this.pieza5.scale = 0.7
        this.pieza5.sprite = 4





        this.piezas = new Array();
        this.piezas[0] = this.pieza1
        this.piezas[1] = this.pieza2
        this.piezas[2] = this.pieza3
        this.piezas[3] = this.pieza4
        this.piezas[4] = this.pieza5



        this.marco = this.add.sprite(this.piezas[2].x, this.piezas[2].y, "Marco");
        this.marco.scale = 0.33;
        this.posicion = 2;

        this.keyboard = this.input.stopPropagation().keyboard.addKeys('A,D,W,S,Q');
        this.input.keyboard.on('keyup-' + 'A', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'D', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'W', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'S', this.unlock.bind(this));
        this.input.keyboard.on('keyup-' + 'Q', this.unlock.bind(this));


    }
    unlock() {
        //console.log("unlock")

        this.keyLock = false;
    }


    update() {


        if (this.keyboard.A.isDown == true && this.keyLock == false) {
            this.posicion--;
            if (this.posicion < 0) {
                this.posicion = this.piezas.length - 1;
            }
            this.actualizarMarco();
            this.keyLock = true;
        }
        if (this.keyboard.D.isDown == true && this.keyLock == false) {

            this.posicion++;
            if (this.posicion > this.piezas.length - 1) {
                this.posicion = 0;
            }

            this.actualizarMarco();
            this.keyLock = true;

        }

        //Salir prueba


        if (this.keyboard.Q.isDown === true && this.keyLock == false) {
            console.log("Cerrando");
            this.data.escena.escenasActivas[0] = false;
            this.keyLock = true;
            this.data.escena.blurLaboratorioU.alpha = 0;

            this.scene.stop(this);
        }
        //*/

        if (this.keyboard.W.isDown === true && this.keyLock == false) {
            this.keyLock = true;
            let sprite = this.piezas[this.posicion].sprite;
            sprite++;
            if (sprite >= 5)
                sprite = 0
            this.piezas[this.posicion].setTexture(this.sprites[sprite])
            this.piezas[this.posicion].sprite=sprite;
            this.completado();
            //console.log("La pieza: " +this.posicion+" tiene este angulo : "+this.piezas[this.posicion].angle);
        }



    }

    actualizarMarco() {
        console.log(this.posicion)
        this.marco.x = this.piezas[this.posicion].x;
        this.marco.y = this.piezas[this.posicion].y;
    }
    completado() {
        let casos = new Array(false, false, false, false, false);
        if (this.piezas[0].sprite == this.solucion[0]) {
            casos[0] = true;
        }
        if (this.piezas[1].sprite == this.solucion[1]) {
            casos[1] = true;
        }
        if (this.piezas[2].sprite == this.solucion[2]) {
            casos[2] = true;
        }
        if (this.piezas[3].sprite == this.solucion[3]) {
            casos[3] = true;
        }
        if (this.piezas[4].sprite == this.solucion[4]) {
            casos[4] = true;
        }
        if (casos[0] == true && casos[1] == true && casos[2] == true && casos[3] == true && casos[4] == true) {
            console.log("Completado")
            console.log("Cerrando");


            setTimeout(() => {
                this.scene.stop(this)
                this.data.escena.escenasActivas[0] = false;
                this.data.escena.escenarios[4].completadoP1U = true;
                this.keyLock = true;
                this.data.escena.blurLaboratorioU.alpha = 0;
                //this.data.escena.crearPortalElectricidadP1();
                this.scene.stop(this)
            }, 500);
        }
        console.log(casos)
        console.log(this.piezas);
    }





}
export default LaboratorioP1;