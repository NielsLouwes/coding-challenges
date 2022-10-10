// You are to write a function that takes a string as its first parameter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// modifyMultiply ("This is a string",0,3)
// 'This-This-This'

// Simple. Good luck.

// STEPS
// 1. Need split up the string into words
// 2. Need to select the word at index location (loc)
// 3. return a string that return the indexed word from location with hyphens (num) amount of times
function modifyMultiply(str, loc, repeat) {
  const splitWords = str.split(' ');
  const locatedWord = splitWords[loc];
  const returnString = `${locatedWord}-`
  let count = 0;
  if (repeat = 0) {
    return;
  }
  // while (repeat < loc) {
  //   repeat += 1;
  //   str = str + returnString;
  // }
  while (count < repeat) {
   
    count += 1;
    str = str + returnString;
  }
  return returnString
}

console.log(modifyMultiply("Test string", 1, 4))

module.exports = modifyMultiply;
