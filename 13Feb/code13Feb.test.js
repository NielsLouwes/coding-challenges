const generation = require("./code13Feb")

describe('modifyMultiply function', () => {
    test('should return grandfather when x = -2 and y = 0', () => {
      expect(generation(-2, "m")).toEqual("grandfather");
    })

  });