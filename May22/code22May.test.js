const returnAnagrams = require("./code22May");

describe("returnAnagrams function", () => {
  it("should return anagrams of the same groups of letters", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const solution = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

    expect(returnAnagrams(input)).toEqual(solution);
  });

  it("should return an empty string if nothing is entered", () => {
    const input = [""];
    const emptyStringResult = [[""]]
    
    expect(returnAnagrams(input)).toEqual(emptyStringResult)
  });

  it("should also return an anagram if a single letter is provided", () => {
    expect(returnAnagrams(["a"])).toEqual([["a"]]);
  });
});
