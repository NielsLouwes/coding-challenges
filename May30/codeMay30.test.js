const boomerangs = require("./index");

describe("boomerangs function", () => {
  test("returns three as an answer when three boomerangs are provided in the input", () => {
    expect(boomerangs([1, 2, 1, 2, 2, 2, 1, 2])).toEqual(3);
  });

  test("returns zero if no boomerang inputs are present", () => {
    expect(boomerangs([1, 1, 1])).toEqual(0);
  });

  test("returns zero if just two elements are in the input array", () => {
    expect(boomerangs([-1, 1])).toEqual(0);
  });

  test("returns one as answer when boomerang includes negative numbers", () => {
    expect(boomerangs([-1, 1, -1])).toEqual(1);
  });

  test("returns zero if no argumemnts are passed to the function as fallback", () => {
    expect(boomerangs([])).toEqual(0);
  });
});
