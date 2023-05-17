function renderBoards(player, computer) {
  const boardsDiv = document.querySelector(".boards");
  const playerBoardDiv = document.createElement("div");
  const computerBoardDiv = document.createElement("div");
  playerBoardDiv.classList.add("player-board", "board");
  computerBoardDiv.classList.add("computer-board", "board");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const currSquare = player.gameBoard.board[i][j];
      const squareDiv = document.createElement("div");
      // if a boat
      if (currSquare !== "." && currSquare !== "x" && currSquare !== "o")
        squareDiv.style.backgroundColor = "#444444";
      // if a missed shot
      else if (currSquare === "x") squareDiv.style.backgroundColor = "#85ffb3";
      // if a hit shot
      else if (currSquare === "o") squareDiv.style.backgroundColor = "#ff8585";
      playerBoardDiv.appendChild(squareDiv);
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const currSquare = computer.computerBoard.board[i][j];
      const squareDiv = document.createElement("div");
      // if a boat
      if (currSquare !== "." && currSquare !== "x" && currSquare !== "o")
        squareDiv.style.backgroundColor = "#444444";
      // if a missed shot
      else if (currSquare === "x") squareDiv.style.backgroundColor = "#85ffb3";
      // if a hit shot
      else if (currSquare === "o") squareDiv.style.backgroundColor = "#ff8585";
      else squareDiv.classList.add("water");
      computerBoardDiv.appendChild(squareDiv);
    }
  }

  boardsDiv.append(playerBoardDiv, computerBoardDiv);
}

export { renderBoards };
