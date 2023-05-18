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
      const newShip = Ship(shipLength);
      for (let i = x; i < x + shipLength; i++) {
        this.board[y][i] = newShip;
      }
    }
  }

  function receiveAttack(x, y) {
    if (typeof this.board[y][x] === "object") {
      this.board[y][x].hit();
      this.shotsHit.push([x, y]);
    } else {
      this.board[y][x] = "x";
    }
  }

  function allSunk() {
    let allSunk = true;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (
          board[y][x] !== "." &&
          board[y][x] !== "x" &&
          !board[y][x].isSunk()
        ) {
          allSunk = false;
        }
      }
    }
    return allSunk;
  }

  return { board, shotsHit, placeShip, receiveAttack, allSunk };
}

export default Gameboard;
