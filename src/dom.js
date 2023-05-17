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
      else squareDiv.classList.add("water");
      playerBoardDiv.appendChild(squareDiv);
    }
  }

  for (let i = 0; i < player.gameBoard.shotsHit.length; i++) {
    const position =
      player.gameBoard.shotsHit[i].x * player.gameBoard.shotsHit[i].y;
    document.querySelector(
      `.player-board :nth-child(${position})`
    ).style.backgroundColor = "#ff8585";
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
      else squareDiv.classList.add("water");
      computerBoardDiv.appendChild(squareDiv);
    }
  }

  for (let i = 0; i < computer.computerBoard.shotsHit.length; i++) {
    const position =
      computer.computerBoard.shotsHit[i].x *
      computer.computerBoard.shotsHit[i].y;
    document.querySelector(
      `.computer-board :nth-child(${position})`
    ).style.backgroundColor = "#ff8585";
  }

  boardsDiv.append(playerBoardDiv, computerBoardDiv);
}

// create a function that handles the clicks on the board
// if the click is on the water
// change the square to green for missed shot
// or to red for hit shot

export { renderBoards };
