import Phaser from 'phaser';
import bootScene from '../modules/Scenes/BootScene';
import preloaderScene from '../modules/Scenes/PreloaderScene';
import menuScene from '../modules/Scenes/MenuScene';
import gameScene from '../modules/Scenes/GameScene';
import gameOverScene from '../modules/Scenes/GameOverScene';
import leaderBoardScene from '../modules/Scenes/LeaderBoardScene';
import optionsScene from '../modules/Scenes/OptionsScene';
import creditsScene from '../modules/Scenes/CreditsScene';

function newGame() {
  const config = {
    type: Phaser.WEBGL,
    parent: 'game-div',
    width: 480,
    height: 640,
    backgroundColor: 'black',
    dom: {
      createContainer: true,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 0 },
      },
    },
    scene: [
      bootScene,
      preloaderScene,
      menuScene,
      gameScene,
      gameOverScene,
      leaderBoardScene,
      optionsScene,
      creditsScene,
    ],
    pixelArt: true,
    roundPixels: true,
  };

  const game = new Phaser.Game(config);

  return game;
}

export default newGame;