const Ship = require("./ship");

const Gameboard = () => {
  const grid = [];
  const missedAttacks = [];
  const range = (num) => [...Array(num).keys()];

  const placeShip = (coordinates, shipLength, direction) => {
    const newShip = Ship(shipLength);
    const shipRange = range(shipLength);
    shipRange.forEach((i) => {
      if (direction === "vertical") {
        grid[coordinates.x + i][coordinates.y] = newShip;
      } else {
        grid[coordinates.x][coordinates.y + i] = newShip;
      }
    });
  };

  const createGrid = () => {
    const columns = range(10);
    columns.forEach((c) => {
      const row = range(10);
      grid[c] = [];
      row.forEach((r) => {
        grid[c][r] = {};
        return undefined;
      });
      return undefined;
    });
  };

  const recordCoordinates = (coordinates) => {
    missedAttacks.push(coordinates);
  };

  const isShip = (cell, property = "hit") => Object.hasOwn(cell, property);

  const receiveAttack = (coordinates, cb = recordCoordinates) => {
    const cellContent = grid[coordinates.x][coordinates.y];
    const shipFound = isShip(cellContent);
    if (shipFound) {
      cellContent.hit();
      return true;
    }
    cb(coordinates);
    return false;
  };

  const getAllShips = () => {
    const gridCopy = grid.flat();
    return gridCopy.filter((cell) => isShip(cell, "isSunk"));
  };

  const areAllShipsSunk = () => {
    const ships = getAllShips();
    return ships.every((ship) => ship.isSunk());
  };

  const getGrid = () => grid;
  createGrid();
  return {
    missedAttacks,
    getGrid,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
  };
};

module.exports = Gameboard;
