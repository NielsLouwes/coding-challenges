const isGoodMatch = require("./code4Dec")

describe('isGoodMatch function', () => {
    test('should return bad match if uneven amount of numbers provided in array', () => {
      expect(isGoodMatch([2, 6, 7, -2, 4])).toEqual('bad match');
    })

     test('should return good match if even number of numbers in array are givne', () => {
      expect(isGoodMatch([2, 6, 7, 4])).toEqual('good match');
    })
  });