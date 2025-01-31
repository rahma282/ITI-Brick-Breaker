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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.draw();
    ball.draw();
    paddle.draw();
    paddle.updatePaddle();
    score.draw();
    lives.draw();
    collisionDetection();

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
            endGame(false);
            //fraze
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
    ball.y = canvas.height - 30;
    ball.dx = 2;
    ball.dy = -2;
    //reset paddle possition
    paddle.x = canvas.width / 2 - paddle.width / 2;  
    paddle.dx = 0;  //stop paddle movement
    bricks.init();
    draw();
    document.getElementById("resetGame").style.display = "none";

}
  

setInterval(draw, 10);
document.getElementById("resetGame").addEventListener("click", reset);
document.getElementById("start").addEventListener("click", draw);
