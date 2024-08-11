import './style.css';
import Phaser from 'phaser';
import { preloadGame } from './phaser-js/preload.js';
import { createGame } from './phaser-js/create.js';

const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor () {
    super('scene-game');
    // eslint-disable-next-line no-unused-expressions
    this.player;
  }

  // Definimos tres funciones principales:
  preload () { preloadGame(this); } // Precarga cada elemento
  create () { createGame(this); } // Lo crea en el juego y muestra en pantalla
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
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene], // Depende de la `class` definida
};

const game = new Phaser.Game(config);
