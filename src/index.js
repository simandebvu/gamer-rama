import Phaser from 'phaser';
import config from './modules/Config/config';
import bootScene from './modules/Scenes/bootScene';
import preloaderScene from './modules/Scenes/preloaderScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();