const storage = (() => {
  const getLocalStorage = () => localStorage.getItem('scores');

  const saveScore = (score) => {
    const scr = JSON.stringify(score);
    localStorage.setItem('scores', scr);
  };
  const getScores = () => {
    const score = getLocalStorage();
    let result = JSON.parse(score);
    if (result === null) {
      result = [0, 0];
      saveScore(result);
    }
    return result;
  };
  const getMax = (localScore, score) => {
    localScore[0] = score;
    localScore[1] = Math.max(...localScore);
    return localScore;
  };
  const saveScores = (score) => {
    const localScore = getScores();
    const scores = getMax(localScore, score);
    saveScore(scores);
  };


  return {
    saveScore, getScores, saveScores, getLocalStorage, getMax,
  };
})();

export default storage;
