import scoresAPI from '../../__mocks__/ScoreApi';

describe('Scores API', () => {
  test('Gets the scores as a list', () => {
    expect(scoresAPI.getScoreBoard()).toStrictEqual([
      [800, 'Lrrrr'], [400, 'bender'], [200, 'Leela'],
    ]);
  });
  test('Does not return an empty list', () => {
    expect(scoresAPI.getScoreBoard()).not.toStrictEqual([]);
  });
});
