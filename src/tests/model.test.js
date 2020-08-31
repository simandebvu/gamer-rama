import Model from '../modules/Objects/ModelObject';

describe('Model Tests', () => {
  test('Initial music settings', () => {
    const mModel = new Model();
    expect(mModel.bgMusicPlaying).toBe(false);
  });
  test('Change of sound on', () => {
    const mModel = new Model();
    mModel.soundOn = true;
    expect(mModel.soundOn).not.toBe(false);
  });
});