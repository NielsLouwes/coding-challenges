const creditCardChecker = require("./codeJuly10");

describe("CreditCardChecker Function", () => {
  it("should return valid card number if criteria is met", () => {
    const validCardNumber = "4539 3195 0343 6467";
    expect(creditCardChecker(validCardNumber)).toEqual(
      "Credit card number is valid"
    );
  });

  it("should return inavlid credit card number if the criteria is not met", () => {
    const invalidCardNumber = "4439 3195 0343 6467";
    expect(creditCardChecker(invalidCardNumber)).toEqual(
      "Credit card number is not valid"
    );
  });

  it("should return inavlid credit card number if length is smaller than one", () => {
    const shortInvalidCardNumber = "4";
    expect(creditCardChecker(shortInvalidCardNumber)).toEqual(
      "Credit card number is not valid"
    );
  });

  it("should return inavlid credit card number if a non number is input", () => {
    const nonNumberInvalidCardNumber = "B";
    expect(creditCardChecker(nonNumberInvalidCardNumber)).toEqual(
      "Credit card number is not valid"
    );
  });
});
