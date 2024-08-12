import { getRandomX } from './utils.js';

export function updateGame (game) {
  const { left, right } = game.cursor;
  const { height } = game.textures.game.config;

  game.reamainingTime = game.timedEvent.getRemainingSeconds();
  game.textTime.setText(
    `Remaining time:${Math.round(game.reamainingTime)}`);

  if (game.target.y >= height) {
    game.target.setY(0); // La `apple` reaparece arriba
    game.target.setX(getRandomX()); // `apple` de forma aleatoria
  }

  if (left.isDown) {
    game.player.setVelocityX(-game.playerSpeed);
  } else if (right.isDown) {
    game.player.setVelocityX(game.playerSpeed);
  } else {
    game.player.setVelocityX(0);
  }
}
