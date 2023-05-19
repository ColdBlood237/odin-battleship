import {
  closeStartingScreen,
  handleClick,
  renderBoards,
  renderWinScreen,
} from "./dom";
import { Computer, Player } from "./players";

function game() {
  // add an event listner on setup form that will
  // take all the input values and call placeship
  // with them

  const Ryan = Player();
  const Asus = Computer();

  const setupForm = document.querySelector("#setup-form");
  setupForm.onsubmit = (e) => {
    e.preventDefault();

    const carrierX = parseInt(document.querySelector("#carrier-x").value);
    const carrierY = parseInt(document.querySelector("#carrier-y").value);

    const battleshipX = parseInt(document.querySelector("#battleship-x").value);
    const battleshipY = parseInt(document.querySelector("#battleship-y").value);

    const destroyerX = parseInt(document.querySelector("#destroyer-x").value);
    const destroyerY = parseInt(document.querySelector("#destroyer-y").value);

    const submarineX = parseInt(document.querySelector("#submarine-x").value);
    const submarineY = parseInt(document.querySelector("#submarine-y").value);

    const patrolX = parseInt(document.querySelector("#patrol-x").value);
    const patrolY = parseInt(document.querySelector("#patrol-y").value);

    Ryan.gameBoard.placeShip(5, carrierX, carrierY);
    Ryan.gameBoard.placeShip(4, battleshipX, battleshipY);
    Ryan.gameBoard.placeShip(3, destroyerX, destroyerY);
    Ryan.gameBoard.placeShip(3, submarineX, submarineY);
    Ryan.gameBoard.placeShip(2, patrolX, patrolY);

    console.table(Ryan.gameBoard.board);
    let carrierPlaced = false;
    do {
      carrierPlaced = Asus.computerBoard.placeShip(
        5,
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10)
      );
    } while (!carrierPlaced);

    let battleshipPlaced = false;
    do {
      battleshipPlaced = Asus.computerBoard.placeShip(
        4,
        Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 10)
      );
    } while (!battleshipPlaced);

    let destroyerPlaced = false;
    do {
      destroyerPlaced = Asus.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!destroyerPlaced);

    let submarinePlaced = false;
    do {
      submarinePlaced = Asus.computerBoard.placeShip(
        3,
        Math.floor(Math.random() * 7),
        Math.floor(Math.random() * 10)
      );
    } while (!submarinePlaced);

    let patrolPlaced = false;
    do {
      patrolPlaced = Asus.computerBoard.placeShip(
        2,
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 10)
      );
    } while (!patrolPlaced);

    closeStartingScreen();
    renderBoards(Ryan, Asus);
  };

  let gameOver = false;

  const boards = document.querySelector(".boards");
  boards.addEventListener("click", (e) => {
    const computerBoard = document.querySelector(".computer-board");
    if (
      !gameOver &&
      e.target.classList[1] === "water" &&
      computerBoard.contains(e.target)
    ) {
      handleClick(e, Ryan, Asus);
      renderBoards(Ryan, Asus);
      if (Ryan.gameBoard.allSunk() || Asus.computerBoard.allSunk()) {
        gameOver = true;
        renderWinScreen(Ryan, Asus);
      }
    }
  });
}

export default game;
