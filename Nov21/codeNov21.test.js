const mostExpensive = require("./codeNov21");

describe("mostExpensive function", () => {
  it("should correctly return the most expensive item in the list", () => {
    const mockItems = {
      "Diamond Earrings": 980,
      "Gold Watch": 250,
      "Pearl Necklace": 4650,
    };

    expect(mostExpensive(mockItems)).toEqual(
      "The most expensive item is Peal Necklace with a price of 4650."
    );
  });

  it("should return the fallback Old Watch item if no arguments are entered", () => {
    expect(mostExpensive()).toEqual(
      "The most expensive item is Old Watch with a price of 500."
    );
  });
});
