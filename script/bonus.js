import { canvas, ctx } from "./canvas.js";

export const heart = {
    x: 0,
    y: 0,
    size: 25,
    color: "red",
    active: false,
    speed: 3,

    activate(x, y) {
        this.active = true;
        this.x = x;
        this.y = y;
    },

    updateHeart(paddle, lives) {
        if (this.active) {
            this.y += this.speed;

            if (this.y + this.size >= paddle.y &&
                this.x >= paddle.x &&
                this.x <= paddle.x + paddle.width) {
                this.active = false;
                lives.value += 1;
            }

            if (this.y > canvas.height) {
                this.active = false;
            }
        }
    },

    draw() {
        if (!this.active) return;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size / 4);

        ctx.bezierCurveTo(
            this.x - this.size / 2, this.y - this.size / 2,
            this.x - this.size, this.y + this.size / 3,
            this.x, this.y + this.size
        );

        ctx.bezierCurveTo(
            this.x + this.size, this.y + this.size / 3,
            this.x + this.size / 2, this.y - this.size / 2,
            this.x, this.y + this.size / 4
        );

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
};