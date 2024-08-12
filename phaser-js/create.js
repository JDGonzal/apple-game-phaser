import { getRandomX } from './utils.js';

export function createGame (game) {
  function targetHit () {
    game.target.setY(0); // La `apple` reaparece arriba
    game.target.setX(getRandomX()); // `apple` de forma aleatoria
    game.points++;
    game.textScore.setText(`Score:${game.points}`);
  }

  game.add.image(0, 0, 'bg')
    .setOrigin(0, 0); // setOrigin, indica el inicio de la imagen
  const { width, height } = game.textures.game.config;

  // Creo primero la 'apple'
  game.target = game.physics.add.image(0, 0, 'apple')
    .setOrigin(0, 0);
  game.target.setMaxVelocity(0, game.playerSpeed - 50);

  // Creo de Segundo la 'basket'
  game.player = game.physics.add.image(0, height - 100, 'basket')
    .setOrigin(0, 0);
  game.player.setImmovable(true);
  game.player.body.allowGravity = false;
  game.player.setCollideWorldBounds(true);
  const { width: wB, height: hB } = game.player; // tamaño de la `basket`
  game.player.setSize(wB * 3 / 4, hB / 6)
    .setOffset(wB / 10, hB * 9 / 10);

  game.physics.add.overlap(game.target, game.player, targetHit, null, game); // Colisión entre la `apple` y la `basket`

  game.cursor = game.input.keyboard.createCursorKeys();

  game.textScore = game.add.text(width - 120, 10, 'Score:0',
    {
      font: '25px Arial',
      fill: '#000000',
    },
  );

  game.textTime = game.add.text(10, 10, 'Remaining time:00', {
    font: '25px Arial',
    fill: '#000000',
  });

  console.log(game);
}
