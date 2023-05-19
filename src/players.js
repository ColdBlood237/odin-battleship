import Gameboard from "./gameboard";

function Player() {
  const gameBoard = Gameboard();

  function playerAttack(enemy, x, y) {
    enemy.computerBoard.receiveAttack(x, y);
  }

  function initializeBoard(e) {
    const carrierXInput = document.querySelector("#carrier-x");
    const carrierYInput = document.querySelector("#carrier-y");

    const battleshipXInput = document.querySelector("#battleship-x");
    const battleshipYInput = document.querySelector("#battleship-y");

    const destroyerXInput = document.querySelector("#destroyer-x");
    const destroyerYInput = document.querySelector("#destroyer-y");

    const submarineXInput = document.querySelector("#submarine-x");
    const submarineYInput = document.querySelector("#submarine-y");

    const patrolXInput = document.querySelector("#patrol-x");
    const patrolYInput = document.querySelector("#patrol-y");

    const carrierX = parseInt(carrierXInput.value);
    const carrierY = parseInt(carrierYInput.value);

    const battleshipX = parseInt(battleshipXInput.value);
    const battleshipY = parseInt(battleshipYInput.value);

    const destroyerX = parseInt(destroyerXInput.value);
    const destroyerY = parseInt(destroyerYInput.value);

    const submarineX = parseInt(submarineXInput.value);
    const submarineY = parseInt(submarineYInput.value);

    const patrolX = parseInt(patrolXInput.value);
    const patrolY = parseInt(patrolYInput.value);

    this.gameBoard.placeShip(5, carrierX, carrierY);
    this.gameBoard.placeShip(4, battleshipX, battleshipY);
    this.gameBoard.placeShip(3, destroyerX, destroyerY);
    this.gameBoard.placeShip(3, submarineX, submarineY);
    this.gameBoard.placeShip(2, patrolX, patrolY);
  }

  return { gameBoard, playerAttack, initializeBoard };
}

function Computer() {
  const computerBoard = Gameboard();
  let prevHit = false;
  let gottaCheckOtherSide = false;
  let prevX;
  let prevY;

  function computerAttack(enemy) {
    let x;
    let y;
    let valid = false;

    breakme: if (prevHit) {
      if (
        enemy.gameBoard.board[prevY][prevX - 1] === "." ||
        typeof enemy.gameBoard.board[prevY][prevX - 1] == "object"
      ) {
        x = prevX - 1;
        y = prevY;
        valid = true;
        console.log(x, y);
      } else if (
        enemy.gameBoard.board[prevY][prevX + 1] === "." ||
        typeof enemy.gameBoard.board[prevY][prevX + 1] == "object"
      ) {
        x = prevX + 1;
        y = prevY;
        valid = true;
      }
      if (typeof enemy.gameBoard.board[y][x] == "object") {
        if (
          enemy.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
            .length !== 0
        ) {
          valid = false;
          break breakme;
        }
        prevHit = true;
        prevX = x;
        prevY = y;
      } else {
        prevHit = false;
        gottaCheckOtherSide = true;
      }
    }

    while (!valid) {
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
          prevHit = true;
          prevX = x;
          prevY = y;
        }
      }
    }
    enemy.gameBoard.receiveAttack(x, y);
  }

  function initializeBoard() {
    let carrierPlaced = false;
    do {
      carrierPlaced = this.computerBoard.placeShip(
        5,
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10)
      );
    } while (!carrierPlaced);

    let battleshipPlaced = false;
    do {
      battleshipPlaced = this.computerBoard.placeShip(
        4,
        Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 10)
      );
    } while (!battleshipPlaced);

    let destroyerPlaced = false;
    do {
      destroyerPlaced = this.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!destroyerPlaced);

    let submarinePlaced = false;
    do {
      submarinePlaced = this.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!submarinePlaced);

    let patrolPlaced = false;
    do {
      patrolPlaced = this.computerBoard.placeShip(
        2,
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10)
      );
    } while (!patrolPlaced);
  }

  return { computerBoard, computerAttack, initializeBoard };
}

export { Player, Computer };
