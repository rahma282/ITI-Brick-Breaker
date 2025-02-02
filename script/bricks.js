import { canvas, ctx } from "./canvas.js";
import { heart } from "./bonus.js";

export const bricks = {
    width: 72,
    height: 24,
    rows: 2,
    columns: 3,
    padding: 12,
    offsetTop: 50,
    offsetLeft: 114,
    brickArr: [],
    totalBricks: 0,
    previousBrickCount: 0,

    init(level) {
        this.rows= 2+ level;
        this.totalBricks = this.columns * this.rows;
        this.previousBrickCount = this.totalBricks;
        for (let c = 0; c < this.columns; c++) {
            this.brickArr[c] = [];
            for (let r = 0; r < this.rows; r++) {
                this.brickArr[c][r] = { x: 0, y: 0, isHit: 0 };
            }
        }
    },

    draw() {
        let currentBrickCount = 0;
        for (let c = 0; c < this.columns; c++) {
            for (let r = 0; r < this.rows; r++) {
                const brick = this.brickArr[c][r];
                const brickX = c * (this.width + this.padding) + this.offsetLeft;
                const brickY = r * (this.height + this.padding) + this.offsetTop;
                brick.x = brickX;
                brick.y = brickY;

                if (brick.isHit === 0 || brick.isHit === 1) {
                    const grad = ctx.createLinearGradient(0, 0, 400, 200);
                    grad.addColorStop(0, "#DDA0DD");
                    grad.addColorStop(1, "#E6E6FA");
                    ctx.fillStyle = grad;
                    ctx.fillRect(brickX, brickY, this.width, this.height);

                    if (brick.isHit === 1) {
                        const brickCrack = document.getElementById("crack");
                        ctx.drawImage(brickCrack, brickX, brickY, 72, 24);
                    }

                    currentBrickCount++;
                }
            }
        }

        if (this.previousBrickCount - currentBrickCount >= 1) {
            heart.activate(Math.random() * canvas.width, 0);
            this.previousBrickCount = currentBrickCount;
        }
    }
};
