import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: 480,
  height: 600,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  parent: 'game-div',
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  roundPixels: true,
};