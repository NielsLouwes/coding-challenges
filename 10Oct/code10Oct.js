/*You are to write a function that takes a string as its first parameter. This string will be a string of words.
You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third parameter indicates that it should be repeated 5 times.

modifyMultiply ("This is a string",0,3)
'This-This-This'

Simple. Good luck.
*/

function modifyMultiply(string = '', index = 0, amountOfRepeats = 0) {
  const splitWords = string.split(' '); 
  return Array(amountOfRepeats).fill(splitWords[index]).join('-'); 
}

console.log('modifyMultiply', modifyMultiply('Something else', 0, 4));

module.exports = modifyMultiply;
