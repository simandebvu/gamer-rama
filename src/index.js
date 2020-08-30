import Phaser from 'phaser';
import Model from './modules/Objects/ModelObject';
import config from './modules/Config/config';
import bootScene from './modules/Scenes/BootScene';
import preloaderScene from './modules/Scenes/PreloaderScene';
import menuScene from './modules/Scenes/MenuScene';
import gameScene from './modules/Scenes/GameScene';
import gameOverScene from './modules/Scenes/GameOverScene';
import leaderBoardScene from './modules/Scenes/LeaderBoardScene';
import optionsScene from './modules/Scenes/OptionsScene';
import creditsScene from './modules/Scenes/CreditsScene';
import './assets/styles.css';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Menu', menuScene);
    this.scene.add('Options', optionsScene);
    this.scene.add('Credits', creditsScene);
    this.scene.add('Game', gameScene);
    this.scene.add('GameOver', gameOverScene);
    this.scene.add('LeaderBoard', leaderBoardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();