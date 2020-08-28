import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/ButtonObject';
import ScrollingBackground from '../Entities/ScrollingBackgroundEntity';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  preload() {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    this.load.image('gameImage', 'assets/images/cover.png');
  }

  create() {
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
    this.textConfig = {
      color: '#0277bd',
      fontFamily: 'sans-serif',
      fontSize: '30px',
      lineHeight: 1.3,
      align: 'center',
      fontStyle: 'bold',
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

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
