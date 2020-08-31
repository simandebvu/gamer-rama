import Phaser from 'phaser';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene, audio = null, currentSound = null) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '23px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      if (audio != null) {
        audio.play();
      }
      if (currentSound != null) {
        currentSound.stop();
      }
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}