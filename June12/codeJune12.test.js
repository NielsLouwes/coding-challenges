const colorPatternTimes = require("./codeJune12");

describe("colorPatternTimes function", () => {
  test("returns 5 seconds correctly for two colors being used", () => {
    expect(colorPatternTimes(["red", 'blue'])).toEqual(5);
  });
});
