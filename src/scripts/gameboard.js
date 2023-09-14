const Ship = require("./ship");

const Gameboard = () => {
  const grid = [];
  const missedAttacks = [];
  const maxShipCount = 5;
  let shipCount = 0;

  const getShipCount = () => shipCount;
  const range = (num) => [...Array(num).keys()];

  const isMaxShipCountReached = () => getShipCount() >= maxShipCount;

  const isCellEmpty = (cellValue) =>
    JSON.stringify(cellValue) === JSON.stringify({});

  const isCoordinatevalid = (coordinate) => coordinate >= 0 && coordinate <= 9;

  const areCoordinatesValid = (coordinates) =>
    isCoordinatevalid(coordinates.x) && isCoordinatevalid(coordinates.y);

  const getSurroundCoordinates = (coordinates) => {
    const { x } = coordinates;
    const { y } = coordinates;
    const surroundCoordinates = [
      { x: x - 1, y: y - 1 },
      { x: x - 1, y },
      { x: x - 1, y: y + 1 },
      { x, y: y - 1 },
      { x, y },
      { x, y: y + 1 },
      { x: x + 1, y: y - 1 },
      { x: x + 1, y },
      { x: x + 1, y: y + 1 },
    ];
    return surroundCoordinates.filter((sCoordinates) =>
      areCoordinatesValid(sCoordinates),
    );
  };

  const getSurroundCells = (coordinates) => {
    const surroundCoordinates = getSurroundCoordinates(coordinates);
    const surroundCells = [];
    surroundCoordinates.forEach((sCoordinates) =>
      surroundCells.push(grid[sCoordinates.x][sCoordinates.y]),
    );
    return surroundCells;
  };

  const getShipCoordinates = (coordinates, shipLength, direction) => {
    const shipRange = range(shipLength);
    let index = direction === "vertical" ? coordinates.x : coordinates.y;
    const shipCoordinates = [];
    let cellCoordinate;
    shipRange.forEach(() => {
      if (direction === "vertical") {
        cellCoordinate = { x: index, y: coordinates.y };
      } else {
        cellCoordinate = { x: coordinates.x, y: index };
      }
      shipCoordinates.push(cellCoordinate);
      index += 1;
    });
    return shipCoordinates;
  };

  const calculateEndIndex = (coordinates, shipLength, direction) => {
    if (direction === "vertical") {
      return coordinates.x + shipLength;
    }
    return coordinates.y + shipLength;
  };

  const isNumberInRange = (num) => num <= 9;

  const canShipBePlaced = (coordinates, shipLength, direction) => {
    const endIndex = calculateEndIndex(coordinates, shipLength, direction);
    if (!isNumberInRange(endIndex)) {
      return false;
    }

    let surroundCells = getSurroundCells(coordinates);
    const shipCoordinates = getShipCoordinates(
      coordinates,
      shipLength,
      direction,
    );
    return shipCoordinates.every((shipCoordinate) => {
      surroundCells = getSurroundCells(shipCoordinate);
      return surroundCells.every((cell) => isCellEmpty(cell));
    });
  };

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
    shipCount = getShipCount() + 1;
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
    canShipBePlaced,
    getGrid,
    isMaxShipCountReached,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
  };
};

module.exports = Gameboard;
