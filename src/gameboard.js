import Ship from "./ship";

function Gameboard() {
  const board = [];
  const shotsHit = [];
  for (let i = 0; i < 10; i++) {
    board.push(Array(10).fill("."));
  }

  // place ship horizontally
  function placeShip(shipLength, x, y) {
    if (shipLength + x < 10 && x >= 0 && y >= 0 && y < 10) {
      for (let i = x; i < x + shipLength; i++) {
        this.board[y][i] = Ship(shipLength);
      }
    }
  }

  function receiveAttack(x, y) {
    if (this.board[y][x] !== ".") {
      this.board[y][x].hit();
      this.shotsHit.push([x, y]);
    } else {
      this.board[y][x] = "x";
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

  return { board, shotsHit, placeShip, receiveAttack, allSunk };
}

export default Gameboard;
