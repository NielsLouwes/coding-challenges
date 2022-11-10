const generation = require("./code7Nov")

describe('modifyMultiply function', () => {
    test('should return grandfather when x = -2 and y = 0', () => {
      expect(generation(-2, "m")).toEqual("grandfather");
    })

    test('should return daughter when x = 1 and 1 is given for Y', () => {
      expect(generation(1, "f")).toEqual("daughter");
    })

     test('should return standard result of me when nothing is entered as arguments', () => {
      expect(generation()).toEqual("me!");
    })

  });