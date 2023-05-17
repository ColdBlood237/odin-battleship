import { Player, Computer } from "../src/player";

test("Player attacks computer at position (1,3)", () => {
  const testPlayer = Player();
  const testCpt = Computer();
  testPlayer.playerAttack(testCpt, 1, 3);
  expect(testCpt.computerBoard.board[1][3]).toMatch("x");
});

test("Computer attacks Player at a random position", () => {
  const testPlayer = Player();
  const testCpt = Computer();
  testCpt.computerAttack(testPlayer);
  let playerAttacked = false;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (testPlayer.gameBoard.board[i][j] == "x") playerAttacked = true;
    }
  }
  expect(playerAttacked).toBeTruthy();
});
