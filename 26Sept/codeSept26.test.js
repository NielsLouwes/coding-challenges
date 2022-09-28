const sortOddsOnly = require("./codeSept26")

describe('sortOddsOnly function', () => {
    test('should return nothing if empty string is entered', () => {
      expect(sortOddsOnly('')).toEqual(undefined);
    })

    test('should return list with odd numbers sorted along with even numbers in original position of OG array', () => {
      expect(sortOddsOnly([3,1,2,5,6,3])).toEqual([1,3,2,3,6,5]);
    })

     test('should return correct list even with negative numbers', () => {
      expect(sortOddsOnly([3,-1,2,5,6,3])).toEqual([-1,3,2,3,6,5]);
    })
  });