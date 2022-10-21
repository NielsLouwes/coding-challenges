const climbingLeaderboard = require("./code17Oct")

describe('climbingLeaderboard function', () => {
    test('should return empty array if nothing is entered into function', () => {
      expect(climbingLeaderboard()).toEqual([]);
    })

    test('should return results of player based on given scores', () => {
      expect(climbingLeaderboard([100, 90 ,80], [80 , 110 , 75])).toEqual([4,1,5]);
    })

     test('should return the correct score even with duplicate leaderboard scores', () => {
      expect(climbingLeaderboard([100, 100, 90 ,80], [80 , 110 , 100,])).toEqual([4,1,2]);
    })

    test('should return the correct score even with duplicate player scores', () => {
      expect(climbingLeaderboard([100, 100, 90 ,80], [80 , 100 , 100, ])).toEqual([3,1,1]);
    })
  });