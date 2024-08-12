import './style.css';
import Phaser from 'phaser';
import { preloadGame } from './phaser-js/preload.js';
import { createGame } from './phaser-js/create.js';
import { updateGame } from './phaser-js/update.js';

const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor () {
    super('scene-game');
    this.player = null;
    this.cursor = null;
    this.playerSpeed = speedDown + 50;
    this.target = null;
    this.points = 0;
    this.textScore = null;
    this.textTime = null;
    this.timedEvent = null;
    this.remainingTime = null;
    this.coinMusic = null;
    this.bgMusic = null;
    this.gameOver = false;
    this.emitter = null;
  }

  // Definimos tres funciones principales:
  preload () { preloadGame(this); } // Precarga cada elemento
  create () { createGame(this); } // Lo crea en el juego y muestra en pantalla
  update () { updateGame(this); } // Se ejecuta cada segundo en el juego
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

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
