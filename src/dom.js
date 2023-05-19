function renderBoards(player, computer) {
  const boardsDiv = document.querySelector(".boards");
  boardsDiv.innerHTML = "";
  const playerBoardDiv = document.createElement("div");
  const computerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("player-board", "board");
  computerBoardDiv.classList.add("computer-board", "board");

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const currSquare = player.gameBoard.board[y][x];
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(`(${x},${y})`);
      // if shot hit
      if (
        player.gameBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
          .length !== 0
      ) {
        squareDiv.classList.add("hit");
      }
      // if a boat
      else if (currSquare !== "." && currSquare !== "x" && currSquare !== "o") {
        squareDiv.classList.add("boat");
      }
      // if shot missed
      else if (currSquare === "x") {
        squareDiv.classList.add("missed");
      }
      // nothing just water
      else {
        squareDiv.classList.add("water");
      }
      playerBoardDiv.appendChild(squareDiv);
    }
  }

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const currSquare = computer.computerBoard.board[y][x];
      //console.log(currSquare, `(${x},${y})`);
      const squareDiv = document.createElement("div");
      squareDiv.classList.add(`(${x},${y})`);

      if (currSquare === "x") {
        squareDiv.classList.add("missed");
      } else if (
        computer.computerBoard.shotsHit.filter((e) => e[0] === x && e[1] === y)
          .length !== 0
      ) {
        squareDiv.classList.add("hit");
      } else {
        squareDiv.classList.add("water");
      }

      computerBoardDiv.appendChild(squareDiv);
    }
  }

  boardsDiv.append(playerBoardDiv, computerBoardDiv);
}

// create a function that handles the clicks on the board
// if the click is on the water
// change the square to green for missed shot
// or to red for hit shot

function handleClick(e, player, enemy) {
  const x = parseInt(e.target.classList[0].charAt(1));
  const y = parseInt(e.target.classList[0].charAt(3));
  player.playerAttack(enemy, x, y);
  enemy.computerAttack(player);
}

function renderWinScreen(player, enemy) {
  const winnerScreen = document.querySelector(".winner-screen");
  const winnerMsg = document.querySelector(".winner-msg");
  if (player.gameBoard.allSunk()) {
    winnerMsg.innerHTML = "Computer Won !";
  } else {
    winnerMsg.innerHTML = "You Won !";
  }
  winnerScreen.style.display = "flex";
}

function removeWinScreen() {
  const winnerScreen = document.querySelector(".winner-screen");
  winnerScreen.style.display = "none";
}

export { renderBoards, handleClick, renderWinScreen, removeWinScreen };
