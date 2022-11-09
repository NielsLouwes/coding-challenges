const generation = require("./code7Nov")

describe('modifyMultiply function', () => {
    test('should return the "string" one time', () => {
      expect(generation("Test string", 1, 1)).toEqual("string");
    })

  });