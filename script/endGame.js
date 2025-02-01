// import { gameState } from './main.js';

let gameModel = document.querySelector(".game-model");
export function endGame(won,score){
    // gameState.gameOver = true;
    gameModel.style.display = "flex";
    gameModel.querySelector(".your-score").innerText=`${score}`;
    const resultText = gameModel.querySelector(".content h2");
    resultText.innerText = won ? `You Win!`: `GAME OVER!`;
    // document.getElementById("resetGame").style.display = "block";
}