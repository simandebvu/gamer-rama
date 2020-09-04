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
    this.load.audio('sndBtnPlay', 'assets/music/bender_2.mp3');
  }

  create() {
    this.sfx = {
      btnPlay: this.sound.add('sndBtnPlay'),
    };
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
    this.textConfig = {
      color: '#0277bd',
      fontFamily: 'monospace',
      fontSize: '25px',
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

    this.model = this.sys.game.globals.model;

    let playSound = null;
    if (this.model.soundOn === true) {
      playSound = this.sfx.btnPlay;
    }
    this.gameButton = new Button(this, config.width * 0.5 - 120, config.height * 0.2, 'blueButton1', 'blueButton2', 'Play', 'Game', playSound);


    this.optionsButton = new Button(this, config.width * 0.5, config.height * 0.2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    this.creditsButton = new Button(this, config.width * 0.5 + 120, config.height * 0.2, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.textKeys = this.add.text(25, 300, 'Key Controls', { fontSize: 18, color: '#fff', fontStyle: 'bold' });

    this.upKey = new Button(this, 260, 360, 'upKey', 'upKey');
    this.downKey = new Button(this, 260, 410, 'downKey', 'downKey');
    this.leftKey = new Button(this, 210, 385, 'leftKey', 'leftKey');
    this.rightKey = new Button(this, 310, 385, 'rightKey', 'rightKey');
    this.spaceKey = new Button(this, 110, 385, 'spaceKey', 'spaceKey');

    this.textInstructions = this.add.text(20, 500,
      'Use the direction keys to navigate'
      + '\nUse the space key to pew pew',
      { fontSize: 20 });


    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      window.setTimeout(() => {
        this.bgMusic.play();
      }, 500);
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
