/* eslint-disable no-underscore-dangle */
export default class Model {
  constructor() {
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this._soundOn = true;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }
}