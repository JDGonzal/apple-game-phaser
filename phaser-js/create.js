export function createGame (game) {
  game.add.image(0, 0, 'bg')
    .setOrigin(0, 0); // setOrigin, indica el inicio de la imagen
  const { height } = game.textures.game.config;
  game.player = game.physics.add.image(0, height - 100, 'basket')
    .setOrigin(0, 0);
  game.player.setImmovable(true);
  game.player.body.allowGravity = false;
  game.player.setCollideWorldBounds(true);

  game.target = game.physics.add.image(0, 0, 'apple')
    .setOrigin(0, 0);
  game.target.setMaxVelocity(0, game.playerSpeed - 50);

  game.cursor = game.input.keyboard.createCursorKeys();

  console.log(game);
}
