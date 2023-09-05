const Player = (type = "human") => {
  const playerType = type;
  const sendAttack = (coordinates, enemyGameBoard) => {
    enemyGameBoard.receiveAttack(coordinates);
  };

  const getRandomInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const calculateAttack = (enemyGameBoard) => {
    if (playerType !== "computer") {
      return {};
    }
    let coordinates;
    do {
      const x = getRandomInclusive(0, 9);
      const y = getRandomInclusive(0, 9);
      coordinates = { x, y };
    } while (enemyGameBoard.missedAttacks.includes(coordinates));
    return coordinates;
  };
  return { sendAttack, calculateAttack };
};

module.exports = Player;
