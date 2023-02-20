const removeFalsy = require("./code20Feb");

describe("removeFalsy function", () => {
  test("should return only truthy values if both types of values are provided", () => {
    const input = [0, 1, false, 2, "", 3];
    const result = [1,2,3]

    expect(removeFalsy(input)).toEqual(result);
  });

  test("should return only an empty array if only falsey values are provided", () => {
    const input = [0, false ,""];
    const result = []

    expect(removeFalsy(input)).toEqual(result);
  });

   test("should return empty array if no values are input", () => {
    const input = []
    const result = []

    expect(removeFalsy(input)).toEqual(result);
  });

   test("should return only truthy values if edge cases are provided", () => {
    const input = [false, null, 0, "", undefined, NaN, 1, "hello", true, {}, [], Infinity]
    const result = [1, "hello", true, {}, [], Infinity]

    expect(removeFalsy(input)).toEqual(result);
  });
});
