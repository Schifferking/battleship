const Ship = require("../scripts/ship");

/* test("Ship class should have a length, hits and sunk properties", () => {
  const myShip = Ship(3);
  expect(myShip).toHaveProperty("length", 3);
  expect(myShip).toHaveProperty("hits", 0);
  expect(myShip).toHaveProperty("sunk", false);
}); */

test("Ship hit function should increase hits property by one", () => {
  const myShip = Ship(5);
  myShip.hit();
  expect(myShip.getHits()).toBe(1);
});

test("Ship isSunk function should return false if hits is lower than ship's length", () => {
  const myShip = Ship(4);
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
});

test("Ship isSunk function should return true if hits is equal to ship's length", () => {
  const myShip = Ship(2);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});
