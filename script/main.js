import { canvas, ctx } from './canvas.js';
import { ball } from './ball.js'
import { paddle } from './paddle.js';
import { score } from './score.js'
import { lives } from './lives.js'
import { bricks } from './bricks.js';
import { collisionDetection } from './collisionDetection.js';
import { endGame } from './endGame.js'; 
import { level } from './levels.js';
import { mainMenu } from './mainMenu.js';


mainMenu.draw();

// level.draw();

export let drawgame;
level.clickedLevel = (selectedLevel) => {
    console.log(`Received in main.js: Level ${selectedLevel}`);
    document.getElementById("choosingLevelAudio").play();
    bricks.init(selectedLevel);
    clearInterval(drawgame);
    drawgame = setInterval(draw, 10);
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
        lives.value -= 1;
        document.getElementById("losingLivesAudio").play();
        if (lives.value === 0){
            lives.draw();
            endGame(false,score.value);
        }else{
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    score.value = 0;
    lives.value = 3;
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 50;
    ball.dx = 2;
    ball.dy = -2;
    paddle.dx = 0;
    gameModel.style.display = "none";
    clearInterval(drawgame);
    level.draw();
});