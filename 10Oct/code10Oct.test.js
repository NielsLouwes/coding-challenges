const modifyMultiply = require("./code10Oct");

describe("modifyMultiply function", () => {
  test('should return the "string" one time', () => {
    expect(modifyMultiply("Test string", 1, 1)).toEqual("string");
  });

  test('should return the "string-" the specific amount of times (4)', () => {
    expect(modifyMultiply("Test string", 1, 4)).toEqual(
      "string-string-string-string"
    );
  });

  test("should return null or undefined if number is less than 1", () => {
    expect(modifyMultiply("Test string", 1, 0)).toEqual("");
  });
  test("should return undefined if location is not given", () => {
    expect(modifyMultiply("Test string")).toEqual("");
  });

  test("should return null if length of words is less than given index", () => {
    expect(modifyMultiply("Test String", 2, 5));
  });
});
