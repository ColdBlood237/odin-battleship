import Gameboard from "./gameboard";

function Player() {
  const gameBoard = Gameboard();

  function playerAttack(enemy, x, y) {
    enemy.computerBoard.receiveAttack(x, y);
  }

  return { gameBoard, playerAttack };
}

function Computer() {
  const computerBoard = Gameboard();

  function computerAttack(enemy) {
    let x;
    let y;
    let valid = false;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      // if the target is water
      if (enemy.gameBoard.board[y][x] === ".") {
        valid = true;
      }
      // if target is a boat
      if (typeof enemy.gameBoard.board[y][x] == "object") {
        // more precisely if it's a square not hit of a boat
        if (
          enemy.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
            .length === 0
        ) {
          valid = true;
        }
      }
    } while (!valid);
    enemy.gameBoard.receiveAttack(x, y);
  }

  return { computerBoard, computerAttack };
}

export { Player, Computer };
