const pigIt = require("./codeSept19")

describe('pigIt function', () => {
    test('should return nothing if empty string is entered', () => {
      expect(pigIt('')).toEqual(undefined);
    })

    test('should return the correct format', () => {
      expect(pigIt('')).toEqual('');
    })
  });
