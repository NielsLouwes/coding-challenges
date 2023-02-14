const getArrayOfMultiples = require("./code13Feb")

describe('getArrayOfMultiples function', () => {
     test('should return 5 multiples of 7 when 7 and 5 are entered as arguments', () => {
      expect(getArrayOfMultiples(7, 5)).toEqual([7, 14, 21, 28, 35]);
    })

     test('should return an array of length 10 based on number 12', () => {
      expect(getArrayOfMultiples(12, 10)).toEqual([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
    })

    test('should return an empty array and not fail if no values are entered into the function', () => {
      expect(getArrayOfMultiples()).toEqual([]);
    })

  });

 