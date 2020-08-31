import NewGame from '../../__mocks__/index';

describe('Tests on a Mocked game', () => {
  const game = NewGame();
  test('Returns an Object', () => {
    expect(typeof game).toBe('object');
  });

  test('Game to have scenes', () => {
    expect(typeof game.scene.scenes).toBe('object');
  });
});