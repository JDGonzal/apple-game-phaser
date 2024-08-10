import './style.css';
import Phaser from 'phaser';

const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor () {
    super('scene-game');
  }

  // Definimos tres funciones principales:
  preload () {} // Precarga cada elemento
  create () {} // Lo crea en el juego y muestra en pantalla
  update () {} // Se ejecuta cada segundo en el juego
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  // eslint-disable-next-line no-undef
  canvas: gameCanvas, // <canvas id="gameCanvas"></canvas>
  physics: {
    default: 'arcade',
    gravity: { y: speedDown },
    debug: true,
  },
  scene: [GameScene], // Depende de la `class` definida
};

const game = new Phaser.Game(config);
