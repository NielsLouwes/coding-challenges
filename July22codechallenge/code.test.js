const checkSubstringIncluded = require("./code")

test('testing to see if it returns the correct substrings', () => {
  expect(checkSubstringIncluded(['Wearable', 'Blind', 'BLE Transit', 'Camera', 'Play Games', 'Pokemon Go'], "PG")).toStrictEqual(["Play Games", "Pokemon Go"]);
});

test('testing to see if nothing enters it return nothing', () => {
  expect(checkSubstringIncluded([], "")).toStrictEqual([]);
});