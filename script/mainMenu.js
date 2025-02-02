import { canvas, ctx } from './canvas.js';
import { button } from './startGameBTN.js';

export const mainMenu = {
    width: 100,
    height: 50,
    padding: 20,

    draw(){
    const x = (canvas.width);
    const y = (canvas.height);


    const brickBreakerImg = document.getElementById("mainImg");
    ctx.drawImage(brickBreakerImg,0,0,x,y);
    button.drawButton();
    },

    clearAll(){
        // to clear the 'mainMenu' canvas & display the 'selectLevel' canvas
        ctx.clearRect(0,0,800,550);
    }

}