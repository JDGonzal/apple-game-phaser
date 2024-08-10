import './style.css';
import Phaser from 'phaser';

const sizes = {
  width: 500,
  height: 500,
};

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  // eslint-disable-next-line no-undef
  canvas: gameCanvas, // <canvas id="gameCanvas"></canvas>
};

const game = new Phaser.Game(config);
