const mergeIntervals = require("./code3April");

describe("handOfStraights function", () => {
  it("should return true if the groupSize is divisible by the hand length", () => {
    expect(mergeIntervals([1,2,3,4], 2)).toEqual(true);
  });

  it("should return false if the groupSize is NOT divisible by the hand length", () => {
    expect(mergeIntervals([1,2,3,4], 3)).toEqual(false);
  });

  it("should return false if the groupSize is a full integer", () => {
    expect(mergeIntervals([1,2,3,4,5], 1.5)).toEqual(false);
  });
});
