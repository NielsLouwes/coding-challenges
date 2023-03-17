const getPhoneNumberCombinations = require("./code13March");

describe("getPhoneNumberCombinations function", () => {
  it("should return the letter combination for a single digit entered", () => {
    expect(getPhoneNumberCombinations("2")).toEqual('abc');
  });

  it("should return all letters combinations represented by the digits", () => {
     expect(getPhoneNumberCombinations("23")).toEqual(['abc' , 'def']);
  });

  it("should return an empty array if no digit is entered", () => {
     expect(getPhoneNumberCombinations()).toEqual([]);
  });


});
