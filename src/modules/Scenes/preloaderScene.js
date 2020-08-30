import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(240, 200, 'logo');

    const progressBar = this.add.graphics();
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px sans-serif',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(100, 200, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(8000, this.ready, [], this);

    this.load.image('blueButton1', 'assets/images/blue_button02.png');
    this.load.image('blueButton2', 'assets/images/blue_button03.png');
    this.load.audio('bgMusic', ['assets/music/song.mp3']);
    this.load.image('gameLogo', 'assets/images/gameLogo.jpg');
    this.load.image('box', 'assets/images/grey_box.png');
    this.load.image('checkedBox', 'assets/images/blue_boxCheckmark.png');
    this.load.image('upKey', 'assets/images/upKey.png');
    this.load.image('downKey', 'assets/images/downKey.png');
    this.load.image('leftKey', 'assets/images/leftKey.png');
    this.load.image('rightKey', 'assets/images/rightKey.png');
    this.load.image('spaceKey', 'assets/images/spaceKey.png');
  }

  ready() {
    this.scene.start('Menu');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Menu');
    }
  }
}
