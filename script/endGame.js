import { gameState } from './main.js';

export function endGame(won){
    gameState.gameOver = true; //using for frazze paddle movement , ball movement
    const resultText = document.getElementById("result-text");
    resultText.innerText = won ? `You Win!`: `GAME OVER!! Try again...!`;
    document.getElementById("resetGame").style.display = "block";
}