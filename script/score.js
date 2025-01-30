import { ctx } from './canvas.js';
export const score = {
    value: 0,
    draw() {
      ctx.font = '20px monospace';
      ctx.fillStyle = 'brown';
      ctx.fillText('Score: ' + this.value, 8, 20);
    },
};