import Phaser from 'phaser';
import Button from '../Objects/ButtonObject';
import config from '../Config/config';
import ScrollingBackground from '../Entities/ScrollingBackgroundEntity';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    this.load.image('bender', 'assets/images/bender.jpg');
  }

  create() {
    this.gameHeader = this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.8, 'bender');

    this.title = this.add.text(this.game.config.width * 0.5, 90, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.score = this.add.text(this.game.config.width * 0.5, 130,
      'Hello your score is: 0', {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
    this.score.setOrigin(0.5);

    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" id="nameField" placeholder="Enter your name" style="width: ${this.game.config.width * 0.30}px"><br>
      <input type="button" name="submitButton" value="Submit Score" id="submitButton">
    `;

    const element = this.add.dom(config.width * 0.85, 250, div);
    element.addListener('click');

    this.optionsButton = new Button(this, config.width * 0.2, config.height * 0.3, 'blueButton1', 'blueButton2', 'Restart', 'Game');

    this.creditsButton = new Button(this, config.width * 0.5 + 130, config.height * 0.3, 'blueButton1', 'blueButton2', 'Menu', 'Menu');


    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}