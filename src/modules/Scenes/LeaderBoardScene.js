import Phaser from 'phaser';
import scoresAPI from '../ThirdParties/ScoreApi';
import Button from '../Objects/ButtonObject';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.text(225, 100, 'Employees Of The Week', {
      color: 'white',
      fontSize: '25px',
    }).setOrigin(0.5, 0.5);

    this.loadScores = scoresAPI.getScoreBoard();
    this.loadScores.then((score) => {
      const scoreStyle = {
        color: 'white',
        fontSize: '18px ',
      };
      score.sort((x, y) => y.score - x.score);
      const space = 40;
      for (let i = 0; i < 5; i += 1) {
        if (score[i] !== undefined) {
          this.add.text(60, 200 + (space * i),
            `${i + 1}. ${score[i][1]} -- Score: ${score[i][0]}`,
            scoreStyle);
        }
      }
    });
    this.menuButton = new Button(this, 225, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');

    this.menuButton.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Guide');
    });
  }
}