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
  const startBtn = document.querySelector("#start-btn");
  setupForm.onsubmit = (e) => {
    e.preventDefault();
    Ryan.initializeBoard();
    Asus.initializeBoard();
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
