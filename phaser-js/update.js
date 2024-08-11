export function updateGame (game) {
  const { left, right } = game.cursor;
  const { height } = game.textures.game.config;

  if (game.target.y >= height) {
    game.target.setY(0);
  }

  if (left.isDown) {
    game.player.setVelocityX(-game.playerSpeed);
  } else if (right.isDown) {
    game.player.setVelocityX(game.playerSpeed);
  } else {
    game.player.setVelocityX(0);
  }
}
