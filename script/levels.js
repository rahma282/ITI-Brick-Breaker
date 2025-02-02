import { canvas, ctx } from './canvas.js';

export const level = {
    levels: 6,
    currentLevel: 6,
    clickedLevel: null,
    width: 100,
    height: 100,
    padding: 20,
    levelPosition: [],

    draw() {
        const columns = 2;
        const totalWidth = columns * (this.width + this.padding) - this.padding;
        const totalHeight = Math.ceil(this.levels / columns) * (this.height + this.padding) - this.padding;

        const startX = (canvas.width - totalWidth) / 2;
        const startY = (canvas.height - totalHeight) / 2;

        // const gradTitle = ctx.createLinearGradient(0, 0, 400, 200);
        // gradTitle.addColorStop(0, "#DDA0DD");
        // gradTitle.addColorStop(1, "#E6E6FA");

        // ctx.fillStyle = gradTitle;
        ctx.fillStyle = 'white';
        ctx.font = "70px NewFont";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Select Level", canvas.width / 2, 80);

        for (let c = 1; c <= this.levels; c++) {
            const X = (((c - 1) % columns) * (this.width + this.padding)) + startX;
            const Y = ((Math.floor((c - 1) / columns)) * (this.height + this.padding)) + startY + 50;

            this.levelPosition.push({ level: c, x: X, y: Y});

            ctx.beginPath();
            // const grad = ctx.createLinearGradient(0, 0, 400, 200);
            // grad.addColorStop(0, "#DDA0DD");
            // grad.addColorStop(1, "#E6E6FA");
            ctx.fillStyle = 'white';
            // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            // ctx.shadowBlur = 10;
            ctx.fillRect(X, Y, this.width, this.height);

            if (c <= this.currentLevel) {
                ctx.fillStyle = '#6050DC';
                ctx.font = " 70px NewFont";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(c, X + this.width / 2, Y + this.height / 2);
            } else {
                const lock = document.getElementById("lock");
                ctx.drawImage(lock, X, Y, 100, 100);
            }

            ctx.fill();
            ctx.closePath();
        }
    }
};


canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    level.levelPosition.forEach(pos => {
        if (
            mouseX >= pos.x && mouseX <= pos.x + level.width &&
            mouseY >= pos.y && mouseY <= pos.y + level.height &&
            pos.level <= level.currentLevel
        ) {
            level.clickedLevel(pos.level);
        }
    });
});
