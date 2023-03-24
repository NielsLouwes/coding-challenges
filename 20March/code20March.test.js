const handOfStraights = require("./code20March");

describe("handOfStraights function", () => {
  it("should return true if the groupSize is divisible by the hand length", () => {
    expect(handOfStraights([1,2,3,4], 2)).toEqual(true);
  });

  it("should return false if the groupSize is NOT divisible by the hand length", () => {
    expect(handOfStraights([1,2,3,4], 3)).toEqual(false);
  });
});
