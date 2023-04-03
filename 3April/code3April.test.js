const mergeIntervals = require("./code3April");

describe("mergeIntervals function", () => {
  it("should return the original array of arrays if there are no overlapping intervals", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const noOverLapSolution = [
      [1, 2],
      [3, 4],
    ];

    expect(mergeIntervals(input)).toEqual(noOverLapSolution);
  });

  it("should return the new array of arrays if there are overlapping intervals", () => {
    const input = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const overlapResult = [[1,6], [8,10], [15,18]];
    
    expect(mergeIntervals(input)).toEqual(overlapResult)
  });

  it("should return an empty array if nothing is entered", () => {
    expect(mergeIntervals()).toEqual([]);
  });
});
