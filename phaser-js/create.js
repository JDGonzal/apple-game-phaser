import { getRandomX, gameOver } from './utils.js';

export function createGame (game) {
  function targetHit () {
    game.target.setY(0); // La `apple` reaparece arriba
    game.target.setX(getRandomX()); // `apple` de forma aleatoria
    game.points++;
    game.textScore.setText(`Score:${game.points}`);
    game.coinMusic.play();
    game.emitter.start();
  }
  game.scene.pause('scene-game');

  game.coinMusic = game.sound.add('coin');
  game.bgMusic = game.sound.add('bgMusic');
  game.bgMusic.play();

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

  game.timedEvent = game.time.delayedCall(30000, gameOver, [], game);
  // game.timedEvent = game.time.addEvent({
  //   delay: 30000, // Phaser.Math.Between(3000, 6000),
  //   loop: true,
  //   repeat: -1,
  //   callback: gameOver,
  //   paused: false,
  //   callbackScope: game,
  // });
  console.log(game.timedEvent);
  game.emitter = game.add.particles(0, 0, 'money', {
    speed: 100,
    gravityY: game.playerSpeed - 250,
    scale: 0.04,
    duration: 100,
    emitting: false,
  });
  game.emitter.startFollow(game.player, wB / 2, hB / 2);

  console.log(game);
}
