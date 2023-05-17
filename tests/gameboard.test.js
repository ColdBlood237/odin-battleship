import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

test("Gameboard is a 10x10 matrix", () => {
  expect(Gameboard().board.length).toBe(10);
  for (let i = 0; i < Gameboard().board.length; i++) {
    expect(Gameboard().board[i].length).toBe(10);
  }
});

test("Place a ship at coordinates (1,3)", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(1, 1, 3);
  expect(JSON.stringify(testBoard.board[1][3])).toBe(JSON.stringify(Ship(1)));
});

test("Hit the ship at coordinates (1,3)", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(1, 1, 3);
  testBoard.receiveAttack(1, 3);
  expect(testBoard.board[1][3].hits).toBe(1);
});

test("Hit the ocean at coordinates (2,3)", () => {
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
