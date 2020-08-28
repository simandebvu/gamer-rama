const storage = (() => {
  const saveScore = (score) => {
    const scr = JSON.stringify(score);
    localStorage.setItem('scores', scr);
  };
  const getScores = () => {
    const score = localStorage.getItem('scores');
    let result = JSON.parse(score);
    if (result === null) {
      result = [0, 0];
      saveScore(result);
    }
    return result;
  };
  const saveScores = (score) => {
    const localScore = getScores();
    localScore[0] = score;
    localScore[1] = Math.max(...localScore);
    saveScore(localScore);
  };

  return { saveScore, getScores, saveScores };
})();

export default storage;
