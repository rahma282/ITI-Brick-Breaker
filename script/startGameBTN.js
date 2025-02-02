import { canvas, ctx } from './canvas.js';
import { level } from './levels.js';
import { mainMenu } from './mainMenu.js';

export const button = {
    x:305,
    y:450,
    width:200,
    height:50,
    padding: 0,
    offsetTop: 0,
    offsetLeft: 14,
    text: 'Start Game',
    // text: document.getElementById("startGamebtn").innerText,

    drawButton(){
        const buttonWidth = button.width + button.padding*2;
        const buttonHeight = button.height + button.padding*2;


        ctx.strokeStyle = "white";
        ctx.roundRect(button.x, button.y, buttonWidth, buttonHeight, 10);
        ctx.fillStyle = "rgb(255 0 0 / 70%)";
        ctx.globalAlpa = 0.5;
        ctx.fill();
        ctx.stroke();
    
        ctx.fillStyle = "white";
        ctx.font = "italic small-caps bold 30px arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(button.text, button.x + buttonWidth / 2, button.y + buttonHeight / 2);
    
    }

}

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX >= button.x && mouseX <= button.x + button.width && mouseY >= button.y && mouseY <= button.y + button.height) {
        // to clear the 'mainMenu' canvas & display the 'selectLevel' canvas
        document.getElementById("gameAudio").play();
        mainMenu.clearAll();
        level.draw();

    }

})
