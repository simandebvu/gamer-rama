import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('logo', 'assets/cover.png');
  }

  create() {
    this.scene.start('GameOver');
  }
}