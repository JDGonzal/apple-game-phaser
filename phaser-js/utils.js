/* eslint-disable no-undef */
export function getRandomX () {
  return Math.floor(Math.random() * 480);
}

export function gameOver () {
  console.log('Game Over');
  this.gameOver = true;
  gameEndScoreSpan.textContent = this.points;
  if (this.points >= 10) {
    gameWinLoseSpan.textContent = ' Ganó! 😃';
  } else {
    gameWinLoseSpan.textContent = ' Perdió! 😔';
  }
  gameEndDiv.style.display = 'flex';
  this.sys.game.destroy(true);
}
