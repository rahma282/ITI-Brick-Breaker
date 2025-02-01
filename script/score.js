import { ctx } from './canvas.js';
export const score = {
    value: 0,
    draw() {
      ctx.font = '20px monospace';
      ctx.fillStyle = 'white';
      ctx.fillText('Score: ' + this.value, 60, 25);
    },
};