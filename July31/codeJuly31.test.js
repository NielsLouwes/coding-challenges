const restructureArray = require("./codeJuly31");

describe('Restructure Array function', () => {
  test('that the function returns first numbers and then letters in one array', () => {
    const numbersAndLettersArray = [1, "a", 2, "b"];
    expect(restructureArray(numbersAndLettersArray)).toEqual(
      [1,2,'a','b']
    );
  })

  test('that the function returns just numbers if no letters are provided', () => {
    const numbersOnlyArray = [2, 5, 1];
    expect(restructureArray(numbersOnlyArray)).toEqual(
      [2,5,1]
    );
  })

  test('that the function returns just letters if no numbers are provided', () => {
    const lettersOnlyArray = ['f', 'b' , 'o'];
    expect(restructureArray(lettersOnlyArray)).toEqual(
      ['f', 'b' , 'o']
    );
  })

  test('that the function returns an empty array if nothing is passed', () => {
    const emptyArray = [];
    expect(restructureArray(emptyArray)).toEqual(
      []
    );
  })
})