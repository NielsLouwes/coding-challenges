const isSpecialArray = require("./codeNov14")

describe('isSpecialArray function', () => {
    test('should return false if either an odd index number is even or an even index number is odd', () => {
      expect(isSpecialArray([1,1,2,2])).toEqual(false);
    })

    test('should return true if every even index is an even number and every odd index is an odd number', () => {
      expect(isSpecialArray([0, 1, 4, 3, 4, 5])).toEqual(true);
    })
  });