function climbingLeaderboard(leaderboard = [], playerScores = []) {

  const addPlayerToLeaderboard = [...leaderboard, ...playerScores];
  const uniqueValuesLeaderboard = [...new Set(addPlayerToLeaderboard)];
  const sortedUniqueBoard = uniqueValuesLeaderboard.sort((a, b) => b - a);
  const returnIndexPlayerScores = playerScores.map((searchTerm) =>
    sortedUniqueBoard.findIndex((compareTerm) => compareTerm === searchTerm)
  );

  const finalScores = returnIndexPlayerScores.map((score) => score + 1);
  return finalScores;
}

console.log(climbingLeaderboard([100, 90, 80], [80, 110, 75]));
