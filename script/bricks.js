import { ctx } from './canvas.js';

export const bricks = {
    width: 72,
    height: 24,
    rows: 1,
    columns: 1,
    padding: 12,
    offsetTop: 50,
    offsetLeft: 114,
    brickArr:[],


    init(level){
        this.rows = 2;
        this.rows+=level;
        for (let c = 0; c < this.columns; c++) {
        this.brickArr[c] = [];
            for (let r = 0; r < this.rows; r++) {
                this.brickArr[c][r] = { x: 0, y: 0, isHit: 0 };
            }
        }
    },


    draw(){
        const brickAudio = document.getElementById("audioo");
        for (let c = 0; c < this.columns; c++) {
            
            for (let r = 0; r < this.rows; r++) {
                const brick = this.brickArr[c][r];
                    const brickX = c * (this.width + this.padding) + this.offsetLeft;
                    const brickY = r * (this.height + this.padding) + this.offsetTop;
                    brick.x = brickX;
                    brick.y = brickY;
                    if (brick.isHit === 0 || brick.isHit === 1){ // NOT HIT
                        const grad=ctx.createLinearGradient(0,0,400,200);
                        grad.addColorStop(0, "#DDA0DD");
                        grad.addColorStop(1, "#E6E6FA");
                        ctx.fillStyle = grad;
                        ctx.fillRect(brickX,brickY, this.width,this.height);

                        if(brick.isHit === 1){
                            // var flag=1;
                            const brickCrack = document.getElementById("crack");
                            ctx.drawImage(brickCrack, brickX, brickY, 72, 24);
                            brickAudio.play();
                            // brick is = 1 so audio won't stop (pause not working)
                        }
                      }
            }
            
        }



    }


}