let gameModel = document.querySelector(".game-model");
import { drawgame } from "./main.js";
import { level } from "./levels.js";

export function endGame(won,score){
    if(won && level.currentLevel < level.levels) level.currentLevel++;
    clearInterval(drawgame);
    gameModel.style.display = "flex";
    gameModel.querySelector(".your-score").innerText=`${score}`;
    const resultText = gameModel.querySelector(".content h2");
    resultText.innerText = won ? `You Win!`: `GAME OVER!`;
}