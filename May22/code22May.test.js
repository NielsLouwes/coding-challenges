const onlyStringsWithNumbers = require("./code22May");

describe("returnAnagrams function", () => {
  it("should return only items that have a number included", () => {
    const input = ["1a", "a", "2b", "b"];

    expect(onlyStringsWithNumbers(input)).toEqual(["1a", "2b"]);
  });

  it("should return an empty array if there are no numbers in strings", () => {
    const input = ["a", "b"];

    expect(onlyStringsWithNumbers(input)).toEqual([]);
  });
});
