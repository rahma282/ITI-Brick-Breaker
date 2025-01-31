import { canvas, ctx } from './canvas.js';
import { ball } from './ball.js'
import { paddle } from './paddle.js';
import { score } from './score.js'
import { lives } from './lives.js'
import { bricks } from './bricks.js';
import { collisionDetection } from './collisionDetection.js';
import { endGame } from './endGame.js'; 

bricks.init();
export const gameState = {
    gameOver: false
};

function draw() {
    if (gameState.gameOver) 
        return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.draw();
    ball.draw();
    paddle.draw();
    paddle.updatePaddle();
    score.draw();
    lives.draw();
    collisionDetection(endGame);

    if (ball.x + ball.dx >= canvas.width - ball.radius || ball.x + ball.dx <= ball.radius) {
        ball.dx = -ball.dx;
    }

    if ( ball.y + ball.dy <= ball.radius ||
        ((ball.x + ball.radius) >= paddle.x &&
        (ball.x - ball.radius) <= (paddle.x + paddle.width) &&
        (ball.y + ball.radius) >= paddle.y)) {
        ball.dy = -ball.dy;
    }

    if (ball.y + ball.dy > canvas.height - ball.radius) {

        if (lives.value > 0) {
            lives.value -= 1;
        }
          if (lives.value === 0){
            gameState.gameOver = true; //using for frazze paddle movement , ball movement
            endGame(false);
          } 
          
          else {
          // reset the ball's position after missing to centered on paddle
          ball.x = paddle.x + paddle.width / 2; 
          ball.y = paddle.y - ball.radius - 2;  
          ball.dx = 2; 
          ball.dy = -2;
      }
    }
   

    ball.x += ball.dx;
    ball.y += ball.dy;

}


export function reset(){
    score.value =0;
    lives.value=3;
    gameState.gameOver =false;
    //reset ball position
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 50;
    ball.dx = 2;
    ball.dy = -2;
    //reset paddle possition
    paddle.x = canvas.width / 2 - paddle.width / 2;  
    paddle.dx = 0;  //stop paddle movement
    //reset brakes
    bricks.init();
    document.getElementById("result-text").innerText = "";
    document.getElementById("resetGame").style.display = "none";

}
  

setInterval(draw, 10);

document.getElementById("resetGame").addEventListener("click", () => {
    reset();
    draw();
});
document.getElementById("start").addEventListener("click", () => {
    if (!gameState.gameOver) {
        draw(); 
    }
});