const mostExpensive = require("./codeNov21");

describe("mostExpensive function", () => {
  test("returns the most expensive item in the jewelry object", () => {
    expect(
      mostExpensive({
        "Diamond Earrings": 980,
        "Gold Watch": 250,
        "Pearl Necklace": 4650,
      })
    ).toEqual("The most expensive one is the Pearl Necklace.");
  });

  test("returns a fallback piece of jewelry when no argument is given", () => {
    expect(mostExpensive()).toEqual(
      `The most expensive one is the Watch.`
    );
  });

});
