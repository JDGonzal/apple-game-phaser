export function createGame (game) {
  game.add.image(0, 0, 'bg')
    .setOrigin(0, 0); // setOrigin, indica el inicio de la imagen
  const { height } = game.textures.game.config;
  game.player = game.physics.add.image(0, height - 100, 'basket')
    .setOrigin(0, 0);
  game.player.setImmovable(true);
  game.player.body.allowGravity = false;
}
