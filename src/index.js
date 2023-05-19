import { hideBoards, removeWinScreen, renderStartingScreen } from "./dom";
import game from "./game";
import "./styles.css";

game();

const restartBtn = document.querySelector(".restart-btn");
restartBtn.onclick = () => {
  removeWinScreen();
  renderStartingScreen();
  hideBoards();
  game();
};
