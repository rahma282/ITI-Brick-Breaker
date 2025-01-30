import { ctx } from './canvas.js';
export const lives = {
    value: 3,
    draw() {
      ctx.font = '20px monospace';
      ctx.fillStyle = 'red';
      ctx.fillText('lives: ' + this.value, 150, 20);
    },
};