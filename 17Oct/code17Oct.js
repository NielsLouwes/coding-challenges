function climbingLeaderboard(leaderboard = [], playerScores = []) {
  const addPlayerToLeaderboard = [...leaderboard, ...playerScores];
  const uniqueValuesLeaderboard = [...new Set(addPlayerToLeaderboard)].sort(
    (a, b) => b - a
  );
  const returnIndexPlayerScores = playerScores.map((searchTerm) =>
    uniqueValuesLeaderboard.findIndex(
      (compareTerm) => compareTerm === searchTerm
    )
  );
  return returnIndexPlayerScores.map((score) => score + 1);
}

module.exports = climbingLeaderboard;
