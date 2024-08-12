export function getRandomX () {
  return Math.floor(Math.random() * 480);
}

export function gameOver () {
  console.log('Game Over');
  this.gameOver = true;
}
