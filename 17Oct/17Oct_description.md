# Example
Leaderboard = [100,90,90,80]
Player = [70,80,105]
The Leaderboard will have ranks 1,2,2 and 3 respectively. If the player's scores are 70, 80, 105, their rankings after each game are 4th, 3rd, and 1st.
Output in this case would be =  [4,3,1}.

## Important details:
The existing leaderboard leaderboard[] is in descending order.
The player's scores player[]  are in ascending order.


 1. Combine the leaderboard and player arrays
2. If leaderboard item === players item, return its index
3. if (index === index) {
  return rank
}
rank = index + 1
if playerScore item === leaderboard item after combining, return its index.

