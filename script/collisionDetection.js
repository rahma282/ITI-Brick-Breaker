import { ball } from './ball.js';
import { bricks } from './bricks.js';
import { endGame } from './endGame.js';
import { score } from './score.js'; 


export function collisionDetection() {
  for (let c = 0; c < bricks.columns; c++) {
    const brickAudio = document.getElementById("audioo");
    for (let r = 0; r < bricks.rows; r++) {
      const b = bricks.brickArr[c][r];
      if (b.isHit === 0 || b.isHit === 1) {
        if (
          ball.x + ball.radius >= b.x &&
          ball.x - ball.radius <= b.x + bricks.width &&
          ball.y + ball.radius >= b.y &&
          ball.y - ball.radius <= b.y + bricks.height
        ) {
          brickAudio.play();

          const ballBottom = ball.y + ball.radius;
          const ballTop = ball.y - ball.radius;
          const ballRight = ball.x + ball.radius;
          const ballLeft = ball.x - ball.radius;
          const brickBottom = b.y + bricks.height;
          const brickTop = b.y;
          const brickRight = b.x + bricks.width;
          const brickLeft = b.x;
  
          if (ballBottom >= brickTop && ballTop <= brickBottom) {
            ball.dy = -ball.dy; 
          }
    
          if (ballRight >= brickLeft && ballLeft <= brickRight) {
            ball.dx = -ball.dx; 
          }

          if (b.isHit === 0) {
            b.isHit = 1;
          } else {
            b.isHit = 2;
            score.value++;
          }

          if (score.value === bricks.rows * bricks.columns) {
            setTimeout(() => endGame(true, score.value), 100);
          }
        }
      }
    }
  }
}