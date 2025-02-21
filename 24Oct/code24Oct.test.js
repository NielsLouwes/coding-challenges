const getMoneySpent = require("./code24Oct");

describe("getMoneySpent function", () => {
  test("should return -1 if there is not enough money(b) to afford at least one keyboard and drive`", () => {
    expect(getMoneySpent([10, 20, 30], [3, 5, 8], 12)).toEqual(-1);
  });

  test("should return 38, which is the highest amount of money that can be spent on both keyboard and drive from selection", () => {
    expect(getMoneySpent([10, 20, 30], [3, 5, 8], 40)).toEqual(38);
  });
});
