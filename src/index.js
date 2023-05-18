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

Asus.computerBoard.placeShip(5, 1, 0);
Asus.computerBoard.placeShip(4, 1, 2);
Asus.computerBoard.placeShip(3, 1, 4);
Asus.computerBoard.placeShip(3, 1, 6);
Asus.computerBoard.placeShip(2, 1, 8);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    Asus.computerAttack(Ryan);
  }
}

console.log(Ryan.gameBoard.shotsHit);

renderBoards(Ryan, Asus);

while (!Ryan.gameBoard.allSunk && !Asus.computerBoard.allSunk) {}
