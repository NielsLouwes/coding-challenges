import runningSum from "./1480-running-sum";

describe("running Sum function", () => {
  it("should correctly add up the sums of each item in the array", () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  it("should return null on an empty array", () => {
    expect(runningSum([])).toEqual(null);
  });
});
