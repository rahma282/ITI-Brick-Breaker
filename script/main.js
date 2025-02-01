import { canvas, ctx } from './canvas.js';
import { ball } from './ball.js'
import { paddle } from './paddle.js';
import { score } from './score.js'
import { lives } from './lives.js'
import { bricks } from './bricks.js';
import { collisionDetection } from './collisionDetection.js';
import { endGame } from './endGame.js'; 
import { level } from './levels.js';

level.draw();

level.clickedLevel = (selectedLevel) => {
    console.log(`Received in main.js: Level ${selectedLevel}`);
    bricks.init();
    let drawgame = setInterval(draw, 10);
};

// export const gameState = {
//     gameOver: false
// };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (gameState.gameOver){
    //     level.draw();
    //     return;
    // }      
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
        if (lives.value === 0) {
            endGame(false,score.value);
        }else{
            lives.value -= 1;
            ball.x = canvas.width / 2; 
            ball.y = canvas.height - 50;  
            ball.dx = 2; 
            ball.dy = -2; 
        }
    }

    ball.x += ball.dx;
    ball.y += ball.dy;

}

let playAgain = document.querySelector(".play-again");
let gameModel = document.querySelector(".game-model");

playAgain.addEventListener("click",function(){
    score.value = 0;
    lives.value = 3;
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 50;
    ball.dx = 2;
    ball.dy = -2;
    gameModel.style.display = "none";
    clearInterval(drawgame);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    level.draw();
});

// export function reset(){
//     score.value =0;
//     lives.value=3;
//     gameState.gameOver =false;
//     //reset ball position
//     ball.x = canvas.width / 2;
//     ball.y = canvas.height - 50;
//     ball.dx = 2;
//     ball.dy = -2;
//     //reset paddle possition
//     paddle.x = canvas.width / 2 - paddle.width / 2;  
//     paddle.dx = 0;  //stop paddle movement
//     //reset brakes
//     bricks.init();
//     document.getElementById("result-text").innerText = "";
//     document.getElementById("resetGame").style.display = "none";

// }
  

// document.getElementById("resetGame").addEventListener("click", () => {
//     reset();
//     draw();
// });
// document.getElementById("start").addEventListener("click", () => {
//     if (!gameState.gameOver) {
//         draw(); 
//     }
// });