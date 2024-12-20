/*
Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

1. Need a delimiter that keeps track of the boundaries of each word in the array.
2. Encode - create string variable, iterate over the arr of strings, push each letter into that string variable.
3. Before pusing them all, create a boundary that is unique 
 - a number that reprsents that string length, followed by separator character, like '&'

 ["neet","code","love","you"] becomes ['neet4&' , 'code4&', 'love4&', 'you3%'] 

*/

const encode = (strs) => {
  const encodedArray = strs.map((item) => {
    const wordLength = item.length;

    return `${item}${wordLength}&`;
  });

  return encodedArray.join("");
};

const solution = encode(["neet", "code", "love", "you"]);

const decode = (encodedString) => {
  console.log("encodedString", encodedString);
};

decode(solution);

// To pass result of one function into another, call the first function and store that ina  variable. Pass that variable as argument to the second function.
