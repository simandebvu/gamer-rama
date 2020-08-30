const scoresAPI = (() => {
  const apiKey = 'm12veMqu2dKTg710y5GN';
  const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const scoresURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

  const postData = async (mURL, postParams) => {
    const postHeader = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: postParams,
    };
    const response = await fetch(mURL, postHeader);
    const answer = await response.json();
    return answer;
  };

  const order = (obj) => {
    const array = [];
    for (let i = 0; i < obj.length; i += 1) {
      array.push([obj[i].score, obj[i].user]);
    }
    return Array.from(array).sort((a, b) => b[0] - a[0]);
  };

  const getData = async (mURL) => {
    const mHeader = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(mURL, mHeader);
    const answer = await response.json();
    return order(answer.result);
  };

  const createGame = async () => {
    const gameName = 'Gamer-ama';
    const postParams = JSON.stringify(gameName);
    return postData(gameURL, postParams);
  };

  const submitScore = (user, score) => {
    const values = { user, score };
    const postParams = JSON.stringify(values);
    return postData(scoresURL, postParams);
  };

  const getScoreBoard = async () => getData(scoresURL);

  return { submitScore, getScoreBoard, createGame };
})();

export default scoresAPI;