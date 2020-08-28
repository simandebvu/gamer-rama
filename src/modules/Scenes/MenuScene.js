import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  preload() {
    this.load.image('gameImage', 'assets/images/cover.png');
  }

  create() {
    this.textConfig = {
      color: '#0277bd',
      fontFamily: 'sans-serif',
      fontSize: '30px',
      lineHeight: 1.3,
      align: 'justify',
      wordWrap: {
        width: this.game.config.width * 0.5,
        useAdvancedWrap: true,
      },
    };

    this.add.text(
      this.game.config.width * 0.3,
      this.game.config.height * 0.05,
      'Welcome to the year 3000!',
      this.textConfig,
    );

    this.gameHeader = this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'gameImage');

    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
  }
}
