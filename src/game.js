import {
  closeStartingScreen,
  handleClick,
  renderBoards,
  renderWinScreen,
} from "./dom";
import { Computer, Player } from "./players";

function game() {
  const Ryan = Player();
  const Asus = Computer();

  const setupForm = document.querySelector("#setup-form");
  setupForm.onsubmit = (e) => {
    e.preventDefault();
    Ryan.initializeBoard();
    Asus.initializeBoard();
    closeStartingScreen();
    renderBoards(Ryan, Asus);
    setupForm.reset();
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
