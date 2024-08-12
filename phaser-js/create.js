import { getRandomX } from './utils.js';

export function createGame (game) {
  function targetHit () {
    game.target.setY(0); // La `apple` reaparece arriba
    game.target.setX(getRandomX()); // `apple` de forma aleatoria
    game.points++;
    console.log(game.points);
  }

  game.add.image(0, 0, 'bg')
    .setOrigin(0, 0); // setOrigin, indica el inicio de la imagen
  const { height } = game.textures.game.config;
  game.player = game.physics.add.image(0, height - 100, 'basket')
    .setOrigin(0, 0);
  game.player.setImmovable(true);
  game.player.body.allowGravity = false;
  game.player.setCollideWorldBounds(true);
  const { width: wB, height: hB } = game.player; // tamaño de la `basket`
  game.player.setSize(wB * 3 / 4, hB / 6)
    .setOffset(wB / 10, hB * 9 / 10);

  game.target = game.physics.add.image(0, 0, 'apple')
    .setOrigin(0, 0);
  game.target.setMaxVelocity(0, game.playerSpeed - 50);

  game.physics.add.overlap(game.target, game.player, targetHit, null, game); // Colisión entre la `apple` y la `basket`

  game.cursor = game.input.keyboard.createCursorKeys();

  console.log(game);
}
