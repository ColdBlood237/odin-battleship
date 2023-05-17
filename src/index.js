import { renderBoards } from "./dom";
import { Computer, Player } from "./players";
import "./styles.css";

const Ryan = Player();
const Asus = Computer();

Ryan.gameBoard.placeShip(5, 3, 0);
Ryan.gameBoard.placeShip(4, 3, 2);
Ryan.gameBoard.placeShip(3, 3, 4);
Ryan.gameBoard.placeShip(3, 3, 6);
Ryan.gameBoard.placeShip(2, 3, 8);

renderBoards(Ryan, Asus);
