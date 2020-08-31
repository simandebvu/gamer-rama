import Phaser from 'phaser';
import Button from '../Objects/ButtonObject';
import config from '../Config/config';
import ScrollingBackground from '../Entities/ScrollingBackgroundEntity';
import ScoresAPI from '../ThirdParties/ScoreApi';
import LocalStorage from '../Objects/LocalStorage';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    this.load.image('sprBg0', 'assets/images/sprBg0.png');
    this.load.image('sprBg1', 'assets/images/sprBg1.png');
    this.load.image('bender', 'assets/images/bender.jpg');
    this.load.audio('goMusic', 'assets/music/roberto.wav');
  }

  create() {
    this.scores = LocalStorage.getScores();
    this.gameHeader = this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.8, 'bender');
    this.model = this.sys.game.globals.model;
    this.song = this.sound.add('goMusic', { volume: 0.7 });
    if (this.model.soundOn === true) {
      this.song.play();
    }

    this.title = this.add.text(this.game.config.width * 0.5, 90, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.message = this.add.text(config.width * 0.2, 125,
      'Zoidberg: Killed, eh? I\'m no doctor, but that sounds painful.', {
        fontFamily: 'monospace',
        fontSize: 12,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
    this.message.setOrigin(0.2);

    this.score = this.add.text(this.game.config.width * 0.5, 150,
      `Well, your score is: ${this.scores[0]}`, {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
    this.score.setOrigin(0.5);

    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" id="nameField" placeholder="Enter your name" style="width: ${this.game.config.width * 0.30}px" minlength="2" maxlength="10" required><br>
      <input type="button" name="submitButton" value="Submit Score" id="submitButton">
    `;

    this.userName = '';

    const element = this.add.dom(config.width * 0.85, 250, div);
    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'submitButton') {
        const inputText = document.getElementById('nameField');
        if (inputText.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.userName = inputText.value;
          if (this.scores[0] > 0) {
            this.submit = ScoresAPI.submitScore(this.userName, this.scores[0]);
            this.submit.then(() => {
              this.scene.start('LeaderBoard');
            });
          }
          this.song.stop();
          this.scene.start('LeaderBoard');
        }
      }
    });

    this.optionsButton = new Button(this, config.width * 0.2, config.height * 0.3, 'blueButton1', 'blueButton2', 'Restart', 'Game', null, this.song);

    this.creditsButton = new Button(this, config.width * 0.5 + 130, config.height * 0.3, 'blueButton1', 'blueButton2', 'Menu', 'Menu', null, this.song);

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