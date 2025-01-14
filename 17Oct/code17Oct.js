let leaderBoard = [100, 90, 90, 80];

function updateLeaderBoard(playerScore) {
  leaderBoard.push(playerScore);
  leaderBoard.sort((a, b) => b - a);

  const scorePosition = leaderBoard.findIndex((score) => score === playerScore);
  console.log("scorePosition", scorePosition);

  if (scorePosition < 6) {
    console.log(
      `Congrats, you achieved the ${
        scorePosition + 1
      }th score of ${playerScore}!`
    );
  } else {
    console.log(
      `You scored a ${playerScore}, but this score is not in the top 5. Try again to become a legend.`
    );
  }
  leaderBoard = leaderBoard.slice(0, 5);
  return leaderBoard;
}

console.log("updateLeaderBoard(82)", updateLeaderBoard(82));
console.log("leaderBoard", leaderBoard);

console.log("updateLeaderBoard(82)", updateLeaderBoard(81));
console.log("updateLeaderBoard(82)", updateLeaderBoard(81));
console.log("updateLeaderBoard(82)", updateLeaderBoard(55));
