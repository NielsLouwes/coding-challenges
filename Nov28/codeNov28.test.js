const inBox = require("./codeNov28");

const correctBox = ["###", "#*#", "###"];

const brokenBox = ["###", "*#", "###"];

const noGiftBox = ["###", "# #", "###"];

describe("inBox function", () => {
  test("shoudl return false if there is no asterisk at all", () => {
    expect(inBox(noGiftBox)).toEqual(false);
  });

  test("should return false if either an odd index number is even or an even index number is odd", () => {
    expect(isSpecialArray(["###", "#*#", "###"])).toEqual(true);
  });

  test("should return false if there is no border around the asterik", () => {
    expect(inBox(brokenBox)).toEqual(false);
  });

  test("should return true if there is a box with an asterisk inside", () => {
    expect(inBox(correctBox).toEqual(true));
  });

  test("should return false if no box provided in function", () => {
    expect(inBox().toEqual(false));
  });
});
