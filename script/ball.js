import { canvas, ctx } from './canvas.js';
import { paddle } from './paddle.js';
import { score } from './score.js';
import { lives } from './lives.js';
import { endGame } from './endGame.js';

export const ball = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height - 50,
    dx: 5,
    dy: -5,
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#05bbaa';
      ctx.fill();
      ctx.closePath();
    },

    updateBall() {
  
      ball.x += ball.dx;
      ball.y += ball.dy;
    
    
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
      }
      if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
      }
    
      if (
        ball.y + ball.radius >= paddle.y && 
        ball.x >= paddle.x &&               
        ball.x <= paddle.x + paddle.width   
      ) {
        ball.dy = -ball.dy;
      }

    if (ball.y + ball.radius > canvas.height) {
        lives.value -= 1;
        document.getElementById("losingLivesAudio").play();
        if (lives.value === 0) {
            lives.draw();
            setTimeout(() => endGame(false, score.value), 100);
        } else {
              ball.x = paddle.x + paddle.width / 2;
              ball.y = paddle.y - ball.radius - 5;
              ball.dx = ball.dx;
              ball.dy = -ball.dy;
        }
    }
    },

  };