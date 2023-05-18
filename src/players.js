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
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (enemy.gameBoard.board[x][y] !== ".") {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    enemy.gameBoard.receiveAttack(x, y);
  }

  return { computerBoard, computerAttack };
}

export { Player, Computer };
