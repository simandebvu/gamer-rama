import Phaser from 'phaser';
import config from './modules/Config/config';
import bootScene from './modules/Scenes/BootScene';
import preloaderScene from './modules/Scenes/PreloaderScene';
import menuScene from './modules/Scenes/MenuScene';
import gameScene from './modules/Scenes/GameScene';
import gameOverScene from './modules/Scenes/GameOverScene';
import './assets/styles.css';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Menu', menuScene);
    this.scene.add('Game', gameScene);
    this.scene.add('GameOver', gameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();