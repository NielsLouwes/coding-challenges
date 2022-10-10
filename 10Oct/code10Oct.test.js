const modifyMultiply = require("./code10Oct")

describe('modifyMultiply function', () => {
    test('should return the "string-" one time', () => {
      expect(modifyMultiply("Test string", 1, 1)).toEqual("string-");
    })

    test('should return the "string-" the specific amount of times (4)', () => {
      expect(modifyMultiply("Test string", 1, 4)).toEqual("string-string-string-string ");
    })
  });