import { canvas, ctx } from './canvas.js';
import { score } from './score.js'
import { lives } from './lives.js'
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    score.draw();
    lives.draw();
}
setInterval(draw, 10);