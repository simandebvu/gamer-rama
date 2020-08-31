const scoresAPI = (() => {
  const fromMicroverseAPI = {
    result: [
      {
        score: 400,
        user: 'bender',
      },
      {
        user: 'Lrrrr',
        score: 800,
      },
      {
        user: 'Leela',
        score: 200,
      },
    ],
  };

  const order = (obj) => {
    const array = [];
    for (let i = 0; i < obj.length; i += 1) {
      array.push([obj[i].score, obj[i].user]);
    }
    return Array.from(array).sort((a, b) => b[0] - a[0]);
  };

  const getScoreBoard = () => order(fromMicroverseAPI.result);

  return { getScoreBoard };
})();

export default scoresAPI;
