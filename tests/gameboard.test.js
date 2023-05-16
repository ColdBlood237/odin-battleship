test("Gameboard is a 10x10 matrix", () => {
  expect(Gameboard.board.length).toBe(10);
  for (let i = 0; i < Gameboard.board.length; i++) {
    expect(Gamepad.board[i].length).toBe(10);
  }
});

test("Place a ship at coordinates (1,3)", () => {
  const testShip = Ship(1);
  const testBoard = Gameboard();
  testBoard.placeShip(testShip, 1, 3);
  expect(testBoard.board[1][3]).toMatch("s");
});

test("Hit the ship at coodinates (1,3)", () => {
  const testShip = Ship(1);
  const testBoard = Gameboard();
  testBoard.placeShip(testShip, 1, 3);
  testBoard.receiveAttack(1, 3);
  expect(testShip.hits).toBe(1);
});

test("Hit the ocean at coodinates (2,3)", () => {
  const testBoard = Gameboard();
  testBoard.receiveAttack(2, 3);
  expect(testBoard.board[2][3]).toMatch("x");
});

test("All the ships have been sunk", () => {
  const testShip = Ship(1);
  const testBoard = Gameboard();
  testBoard.placeShip(testShip, 1, 3);
  testBoard.receiveAttack(1, 3);
  expect(testBoard.allSunk()).toBeTruthy();
});
