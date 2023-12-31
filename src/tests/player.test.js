const Player = require("../scripts/player");

test("Player sendAttack({ x: 2, y: 8 }, enemyGameBoard) should call the gameboard receiveAttack with { x: 2, y: 8 } as parameter", () => {
  const myPlayer = Player();
  const coordinates = { x: 2, y: 8 };
  const fakeEnemyGameboard = {
    receiveAttack: jest.fn((coordinates) => coordinates),
  };
  myPlayer.sendAttack(coordinates, fakeEnemyGameboard);
  expect(fakeEnemyGameboard.receiveAttack).toHaveBeenCalledWith(coordinates);
});

test("Player calculateAttack should return an empty object if player is a human", () => {
  const myPlayer = Player();
  expect(myPlayer.calculateAttack()).toStrictEqual({});
});

test("Player calculateAttack should return coordinates if player is a computer", () => {
  const myPlayer = Player("computer");
  expect(myPlayer.calculateAttack()).toStrictEqual({
    x: expect.any(Number),
    y: expect.any(Number),
  });
});

describe("If computer player attacked coordiantes (0,0), ", () => {
  test("Player calculateAttack should return different coordinates", () => {
    const myPlayer = Player("computer");
    const coordinates = myPlayer.calculateAttack();
    expect(coordinates).not.toStrictEqual({ x: 1, y: 5 });
  });
});

describe("If computer player attacked coordiantes (0,0) and (1,5), ", () => {
  test("Player calculateAttack should return different coordinates", () => {
    const myPlayer = Player("computer");
    const coordinates = myPlayer.calculateAttack();
    expect(coordinates).not.toStrictEqual({ x: 0, y: 0 });
    expect(coordinates).not.toStrictEqual({ x: 1, y: 5 });
  });
});
