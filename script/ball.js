import { canvas, ctx } from './canvas.js';
export const ball = {
    radius: 10,
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: 2,
    dy: -2,
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
    },
  };