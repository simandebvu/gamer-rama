/* eslint-disable no-unused-expressions */
import Phaser from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    const story = 'Trained by: Microverse';

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });

    this.madeByText = this.add.text(0, 0, 'Created By: S I Mandebvu', { fontSize: '26px', fill: '#fff' });

    this.storyText = this.add.text(0, 0, story, { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.storyText,
      this.zone,
    );

    this.madeByText.setY(500);
    this.storyText.setY(700);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: () => {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 5000,
      delay: 1000,
      onComplete: function func() {
        this.madeByTween.destroy;
        this.scene.start('Menu');
      }.bind(this),
    });

    this.storyTween = this.tweens.add({
      targets: this.storyText,
      y: -300,
      ease: 'Power1',
      duration: 6000,
      delay: 1000,
      onComplete: function func() {
        this.madeByTween.destroy;
        this.scene.start('Menu');
      }.bind(this),
    });
  }
}