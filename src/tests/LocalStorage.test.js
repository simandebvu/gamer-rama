import Storage from '../modules/Objects/LocalStorage';

Storage.getLocalStorage = jest.fn(() => [0, 0]);

describe('Test Storage', () => {
  const scores = Storage.getLocalStorage();
  test('Receive [0, 0] when localStorage is empty', () => {
    expect(scores.length).toBe(2);
    expect(scores[0]).toBe(0);
    expect(scores[1]).toBe(0);
  });
  test('Able to save scores', () => {
    const scores = Storage.getMax([0, 0], 500);
    expect(scores.length).toBe(2);
    expect(scores[0]).toBe(500);
    expect(scores[1]).toBe(500);
    expect(scores[1]).not.toBe(0);
  });
  test('Able to save high scores', () => {
    const scores = Storage.getMax([500, 500], 1000);
    expect(scores.length).toBe(2);
    expect(scores[0]).toBe(1000);
    expect(scores[1]).toBe(1000);
    expect(scores[1]).not.toBe(500);
  });
  test('Able to ignore lower scores', () => {
    const scores = Storage.getMax([500, 500], 499);
    expect(scores.length).toBe(2);
    expect(scores[0]).toBe(499);
    expect(scores[1]).toBe(500);
    expect(scores[1]).not.toBe(499);
  });
});
