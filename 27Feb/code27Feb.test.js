const checkEnoughDynamic = require("./code27Feb");

describe("checkEnoughDynamic function", () => {
  test("should return true if there is enough change to cover the amount due", () => {
    const change = [8,20,20,0];
    const amountDue = 3;
    const result = checkEnoughDynamic(change, amountDue);

    expect(result).toBe(true);
  });

  test("should return false there is less change than the amount due", () => {
    const change = [1,1,1,1];
    const amountDue = 2;
    const result = checkEnoughDynamic(change, amountDue)

    expect(result).toBe(false)
  });

   test('returns true when the amount due is zero', () => {
    const change = [2, 0, 1, 0]; // $0.85 in change
    const amountDue = 0; // nothing due
    const result = checkEnoughDynamic(change, amountDue);
    expect(result).toBe(true);
  });
});
