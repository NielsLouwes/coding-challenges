const climbingLeaderboard = require("./code17Oct")

describe('climbingLeaderboard function', () => {
    test('should return empty array if nothing is entered into function', () => {
      expect(climbingLeaderboard()).toEqual([]);
    })

    test('should return results of player based on given scores', () => {
      expect(climbingLeaderboard([100, 90 ,80], [80 , 110 , 75])).toEqual([3,1,6]);
    })

     test('should return the same position of duplicate scores', () => {
      expect(climbingLeaderboard([100, 90 ,80], [80 , 110 , 75])).toEqual([3,1,6]);
    })
  });