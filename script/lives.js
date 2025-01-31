import { ctx } from './canvas.js';
export const lives = {
    value: 3,
    draw() {
      ctx.font = '20px monospace';
      ctx.fillStyle = 'white';
      let hearts = '🩷'.repeat(this.value);
      ctx.fillText(' ' + hearts, 150, 20);
    },
};