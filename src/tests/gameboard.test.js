const Gameboard = require("../scripts/gameboard");

test("Gameboard placeShip({ x: 0, y: 0 }, 3, vertical) should place a ship from coordinates 0,0 to coordinates 2,0", () => {
  let myGameboard = Gameboard();
  myGameboard.placeShip({ x: 0, y: 0 }, 3, "vertical");
  let shipPlaced = myGameboard.getGrid()[0][0];
  let sameShip = myGameboard.getGrid()[1][0];
  let sameShipAgain = myGameboard.getGrid()[2][0];
  expect(shipPlaced).toHaveProperty("isSunk");
  expect(shipPlaced).toBe(sameShip);
  expect(shipPlaced).toBe(sameShipAgain);
});

test("Gameboard placeShip({ x: 3, y: 4 }, 4, horizontal) should place a ship from coordinates 3,4 to coordinates 3,7 ", () => {
  let myGameboard = Gameboard();
  myGameboard.placeShip({ x: 3, y: 4 }, 4, "horizontal");
  let shipPlaced = myGameboard.getGrid()[3][4];
  let sameShip = myGameboard.getGrid()[3][5];
  let sameShipAgain = myGameboard.getGrid()[3][6];
  let sameShipAgainAgain = myGameboard.getGrid()[3][7];
  expect(shipPlaced).toHaveProperty("isSunk");
  expect(shipPlaced).toBe(sameShip);
  expect(shipPlaced).toBe(sameShipAgain);
  expect(shipPlaced).toBe(sameShipAgainAgain);
});

describe("When gameboard grid[6][1] is empty", () => {
  test("Gameboard receiveAttack({ x: 6, y: 1 }) should call recordCoordinates", () => {
    let myGameboard = Gameboard();
    const recordCoordinatesMock = jest.fn();
    myGameboard.receiveAttack({ x: 6, y: 1 }, recordCoordinatesMock);
    expect(recordCoordinatesMock).toHaveBeenCalled();
  });
});

describe("When gameboard grid[5][5] has a ship placed", () => {
  test("Gameboard receiveAttack({ x: 5, y: 5 }) should call ship's hit function", () => {
    let myGameboard = Gameboard();
    const fakeShip = { hit: jest.fn() };
    myGameboard.getGrid()[5][5] = fakeShip;
    myGameboard.receiveAttack({ x: 5, y: 5 });
    expect(fakeShip.hit).toHaveBeenCalled();
  });
});

test("When receiveAttack({ x: 3, y: 7 }) fails, missedAttacks should equal [{ x: 3, y: 7 }]", () => {
  let myGameboard = Gameboard();
  myGameboard.receiveAttack({ x: 3, y: 7 });
  expect(myGameboard.missedAttacks).toStrictEqual([{ x: 3, y: 7 }]);
});

test("When shots at 0,0 and 9,9 fail, missedAttacks should equal [{ x: 0, y: 0 }, { x: 9, y: 9 }]", () => {
  let myGameboard = Gameboard();
  myGameboard.receiveAttack({ x: 0, y: 0 });
  myGameboard.receiveAttack({ x: 9, y: 9 });
  expect(myGameboard.missedAttacks).toStrictEqual([
    { x: 0, y: 0 },
    { x: 9, y: 9 },
  ]);
});

describe("When there is at least a ship that hasn't been sunk", () => {
  test("Gameboard areAllShipsSunk() should return false", () => {
    let myGameboard = Gameboard();
    const fakeSunkShip = { isSunk: jest.fn().mockReturnValue(false) };
    const fakeShip = { isSunk: jest.fn().mockReturnValue(true) };
    myGameboard.getGrid()[4][5] = fakeSunkShip;
    myGameboard.getGrid()[5][4] = fakeShip;
    expect(myGameboard.areAllShipsSunk()).toBe(false);
  });
});

describe("When all the shps have been sunk", () => {
  test("Gameboard areAllShipsSunk() should return true", () => {
    let myGameboard = Gameboard();
    const fakeIsSunk = jest.fn().mockReturnValue(true);
    const fakeSunkShip = { isSunk: fakeIsSunk };
    const fakeSunkShip2 = { isSunk: fakeIsSunk };
    const fakeSunkShip3 = { isSunk: fakeIsSunk };
    myGameboard.getGrid()[4][5] = fakeSunkShip;
    myGameboard.getGrid()[5][4] = fakeSunkShip2;
    myGameboard.getGrid()[2][3] = fakeSunkShip3;
    expect(myGameboard.areAllShipsSunk()).toBe(true);
  });
});
