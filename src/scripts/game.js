const Gameboard = require("./gameboard");
const Player = require("./player");

const Game = () => {
  const getRandomIndex = (arrayLength) =>
    Math.floor(Math.random() * arrayLength);

  const populateGameboard = (computerGameboard) => {
    const shipLengths = [2, 3, 4, 5];
    const validCoordinates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const directions = ["horizontal", "vertical"];
    while (!computerGameboard.isMaxShipCountReached()) {
      const randomCoordinates = {
        x: validCoordinates[getRandomIndex(10)],
        y: validCoordinates[getRandomIndex(10)],
      };
      const randomShipLength = shipLengths[getRandomIndex(4)];
      const randomDirection = directions[getRandomIndex(2)];
      if (
        computerGameboard.canShipBePlaced(
          randomCoordinates,
          randomShipLength,
          randomDirection,
        )
      ) {
        computerGameboard.placeShip(
          randomCoordinates,
          randomShipLength,
          randomDirection,
        );
      }
    }
  };

  const createObjects = () => {
    const humanPlayer = Player();
    const computerPlayer = Player("computer");
    const humanGameboard = Gameboard();
    const humanTrackingGameboard = Gameboard();
    const computerGameboard = Gameboard();
    populateGameboard(computerGameboard);
    const computerTrackingGameboard = Gameboard();
    return {
      humanPlayer,
      computerPlayer,
      humanGameboard,
      humanTrackingGameboard,
      computerGameboard,
      computerTrackingGameboard,
    };
  };

  const isGameOver = (humanGameboard, computerGameboard) =>
    humanGameboard.areAllShipsSunk() || computerGameboard.areAllShipsSunk();

  return { createObjects, isGameOver };
};

module.exports = Game;
