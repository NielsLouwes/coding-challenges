const removeFalsy = require("./code20Feb");

describe("removeFalsy function", () => {
  test("should return 5 multiples of 7 when 7 and 5 are entered as arguments", () => {
    expect(removeFalsy(7, 5)).toEqual([7, 14, 21, 28, 35]);
  });
});
