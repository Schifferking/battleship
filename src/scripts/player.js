const Player = (type = "human") => {
  const playerType = type;
  const attacksMade = [];
  const sendAttack = (coordinates, enemyGameBoard) =>
    enemyGameBoard.receiveAttack(coordinates);

  const getRandomInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const isAttackMade = (coordinates) =>
    attacksMade.find(
      (coordinate) =>
        coordinate.x === coordinates.x && coordinate.y === coordinates.y,
    );

  const calculateAttack = () => {
    if (playerType !== "computer") {
      return {};
    }
    let coordinates;
    do {
      const x = getRandomInclusive(0, 9);
      const y = getRandomInclusive(0, 9);
      coordinates = { x, y };
    } while (isAttackMade(coordinates));
    attacksMade.push(coordinates);
    return coordinates;
  };
  return { sendAttack, calculateAttack };
};

module.exports = Player;
