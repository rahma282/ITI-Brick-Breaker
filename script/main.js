import { canvas, ctx } from './canvas.js';
import { ball } from './ball.js'
import { paddle } from './paddle.js';
import { score } from './score.js'
import { lives } from './lives.js'
import { bricks } from './bricks.js';

bricks.init();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.draw();
    ball.draw();
    paddle.draw();
    paddle.updatePaddle();
    score.draw();
    lives.draw();
}
setInterval(draw, 10);