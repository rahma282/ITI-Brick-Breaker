export function endGame(won){
    const resultText = document.getElementById("result-text");
    resultText.innerText = won ? `You Win!`: `GAME OVER!! Try again...!`;
    document.getElementById("resetGame").style.display = "block";
}