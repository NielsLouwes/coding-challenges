const arrayRemove = require("./5septchallenge")

describe('arrayRemove function', () => {
    test('should return 0 if nothing entered as an array', () => {
      expect(arrayRemove([])).toEqual(0);
    })

     test('should return 0 if null is entered as an array', () => {
      expect(arrayRemove(null)).toEqual(0);
    })

    test('should not remove duplicate max and min values from array', () => {
      expect(arrayRemove([1,1,1,4,5,6,7,7])).toEqual(24);
    })

    test('should also remove min negative values', () => {
      expect(arrayRemove([-1,-1,1,4,5,6,7,7])).toEqual(22);
    })

    test('should return zero if there is only one value in array', () => {
      expect(arrayRemove([1])).toEqual(0);
    })
  });

