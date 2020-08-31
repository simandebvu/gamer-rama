import Phaser from 'phaser';
import bootScene from '../src/modules/Scenes/BootScene';
import preloaderScene from '../src/modules/Scenes/PreloaderScene';
import menuScene from '../src/modules/Scenes/MenuScene';
import gameScene from '../src/modules/Scenes/GameScene';
import gameOverScene from '../src/modules/Scenes/GameOverScene';
import leaderBoardScene from '../src/modules/Scenes/LeaderBoardScene';
import optionsScene from '../src/modules/Scenes/OptionsScene';
import creditsScene from '../src/modules/Scenes/CreditsScene';

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