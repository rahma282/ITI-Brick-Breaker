import { ball } from './ball.js';
import { bricks } from './bricks.js';
import { endGame } from './endGame.js';
import { score } from './score.js'; 


export function collisionDetection() {
  for (let c = 0; c < bricks.columns; c++) {
    for (let r = 0; r < bricks.rows; r++) {
      const b = bricks.brickArr[c][r];
      if (b.isHit === 0 || b.isHit === 1) {
        if (
          (ball.x + ball.radius) >= b.x &&
          (ball.x - ball.radius) <= (b.x + bricks.width) &&
          (ball.y + ball.radius) >= b.y &&
          (ball.y - ball.radius) <= (b.y + bricks.height)
        ) {
          ball.dy = -ball.dy;
          ball.dx = -ball.dx;
          if(b.isHit === 0) b.isHit= 1;
          else{ 
            b.isHit= 2;
            score.value++;
          }
          if (score.value === bricks.rows * bricks.columns) {
            score.draw(); 
            setTimeout(() => endGame(true, score.value), 100);
          }
        }
      }
    }
  }
}