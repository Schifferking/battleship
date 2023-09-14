const Gameboard = require("./gameboard");
const Player = require("./player");

const Game = () => {
  const populateGameboard = (gameboard) => {
    gameboard.placeShip({ x: 1, y: 3 }, 1, "horizontal");
    gameboard.placeShip({ x: 7, y: 7 }, 2, "vertical");
    gameboard.placeShip({ x: 4, y: 3 }, 3, "horizontal");
    gameboard.placeShip({ x: 0, y: 8 }, 4, "vertical");
    gameboard.placeShip({ x: 7, y: 0 }, 5, "horizontal");
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
