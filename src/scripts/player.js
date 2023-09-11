const Player = (type = "human") => {
  const playerType = type;
  const attacksMade = [];
  const registerAttack = (attack) => {
    attacksMade.push(attack);
  };
  const sendAttack = (coordinates, enemyGameBoard) =>
    enemyGameBoard.receiveAttack(coordinates);

  const getRandomInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const isAttackMade = (coordinates) =>
    attacksMade.find(
      (attack) =>
        attack.coordinates.x === coordinates.x &&
        attack.coordinates.y === coordinates.y,
    );

  const getRandomCoordinates = () => {
    let coordinates;
    do {
      const x = getRandomInclusive(0, 9);
      const y = getRandomInclusive(0, 9);
      coordinates = { x, y };
    } while (isAttackMade(coordinates));
    return coordinates;
  };

  const isCoordinateValid = (coordinate) =>
    coordinate.x >= 0 &&
    coordinate.x <= 9 &&
    coordinate.y >= 0 &&
    coordinate.y <= 9;

  const getAdjacentCells = (coordinates) => {
    const adjacentCells = [
      { x: coordinates.x - 1, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y + 1 },
      { x: coordinates.x - 1, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y - 1 },
    ];
    const validCells = adjacentCells.filter((coordinate) =>
      isCoordinateValid(coordinate),
    );
    return validCells.filter((cell) => !isAttackMade(cell));
  };

  const calculateAttack = () => {
    if (playerType !== "computer") {
      return {};
    }
    const lastAttack = attacksMade[attacksMade.length - 1];
    let adjacentCells;
    let coordinates;
    if (lastAttack && lastAttack.result) {
      adjacentCells = getAdjacentCells(lastAttack.coordinates);
      if (adjacentCells.length !== 0) {
        const random = Math.floor(Math.random() * adjacentCells.length);
        coordinates = adjacentCells[random];
      } else {
        coordinates = getRandomCoordinates();
      }
    } else {
      coordinates = getRandomCoordinates();
    }
    return coordinates;
  };
  return { sendAttack, calculateAttack, registerAttack };
};

module.exports = Player;
