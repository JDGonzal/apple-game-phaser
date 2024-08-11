export function updateGame (game) {
  const { left, right } = game.cursor;

  if (left.isDown) {
    game.player.setVelocityX(-game.playerSpeed);
  } else if (right.isDown) {
    game.player.setVelocityX(game.playerSpeed);
  } else {
    game.player.setVelocityX(0);
  }
}
