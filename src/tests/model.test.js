import Model from '../modules/Objects/ModelObject';

describe('Model Tests', () => {
  test('Initiates with no music.', () => {
    const mModel = new Model();
    expect(mModel.bgMusicPlaying).toBe(false);
  });
  test('Correctly changes sound on.', () => {
    const mModel = new Model();
    mModel.soundOn = true;
    expect(mModel.soundOn).not.toBe(false);
  });
  test('Correctly changes music option', () => {
    const mModel = new Model();
    mModel.musicOn = true;
    expect(mModel.musicOn).not.toBe(false);
  });
  test('Only puts values as boolean', () => {
    const mModel = new Model();
    mModel.musicOn = true;
    expect(mModel.musicOn).not.toBe('true');
  });
});