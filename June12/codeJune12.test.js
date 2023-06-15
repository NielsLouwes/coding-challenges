const colorPatternTimes = require("./codeJune12");

describe("colorPatternTimes function", () => {
  test("returns 5 seconds correctly for two colors being used", () => {
    expect(colorPatternTimes(['red', 'blue'])).toEqual(5);
  });

  test("returns 0 seconds if no arguments for colors are entered", () => {
    expect(colorPatternTimes([])).toEqual(0);
  });

  test("returns 4 seconds if two of the same colors are used", () => {
    expect(colorPatternTimes(['red', 'red'])).toEqual(4);
  });

  test("returns 2 seconds if just a single solor is used", () => {
    expect(colorPatternTimes(['red'])).toEqual(2);
  });

  test("returns 11 seconds if switching back to previously used colors", () => {
    expect(colorPatternTimes(['red', 'blue', 'red', 'blue'])).toEqual(11);
  });
});
