import Ship from "./ship";

function Gameboard() {
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push(Array(10).fill("."));
  }

  // place ship horizontally
  function placeShip(ship, x, y) {
    if (ship.length + x < 10 && x >= 0 && y >= 0 && y < 10) {
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y] = ship;
      }
    }
  }

  function receiveAttack(x, y) {
    if (this.board[x][y] !== ".") {
      this.board[x][y].hit();
    } else {
      this.board[x][y] = "x";
    }
  }

  function allSunk() {
    const allSunk = true;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] !== "." && board[i][j] !== "x" && !board[i][j].isSunk) {
          allSunk = false;
        }
      }
    }
    return allSunk;
  }

  return { board, placeShip, receiveAttack, allSunk };
}

export default Gameboard;
