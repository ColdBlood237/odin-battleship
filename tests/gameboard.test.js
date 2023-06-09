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
  expect(JSON.stringify(testBoard.board[3][1])).toBe(JSON.stringify(Ship(1)));
});

test("Can't place a ship at coordinates (0,3) over an other one", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(1, 1, 3);
  expect(testBoard.placeShip(3, 0, 3)).toBeFalsy();
});

test("Hit the ship at coordinates (1,3)", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(1, 1, 3);
  testBoard.receiveAttack(1, 3);
  expect(testBoard.board[3][1].hits).toBe(1);
});

test("Hit the ocean at coordinates (2,3)", () => {
  const testBoard = Gameboard();
  testBoard.receiveAttack(2, 3);
  expect(testBoard.board[3][2]).toMatch("x");
});

test("All the ships have been sunk", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(2, 1, 3);
  testBoard.placeShip(1, 0, 2);
  testBoard.receiveAttack(1, 3);
  testBoard.receiveAttack(2, 3);
  testBoard.receiveAttack(0, 2);
  expect(testBoard.allSunk()).toBeTruthy();
});
