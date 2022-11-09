const generation = require("./code7Nov")

describe('modifyMultiply function', () => {
    test('should return grandfather when x = -2 and y = 0', () => {
      expect(generation(-2, 0)).toEqual("grandfather");
    })

     test('should return standard result of me when nothing is entered as arguments', () => {
      expect(generation()).toEqual("me");
    })
  });