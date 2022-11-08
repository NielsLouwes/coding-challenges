/* 
Need an array with objects
Need to access it's index
Return either male of female answer based on y
*/

const family = {
  "-3": ['great grandfather', 'great grandmother'],
  "-2": ['grandfather', 'grandmother'],
  "-1": ['father', 'mother'],
  "0": ['me', 'me'],
  "1": ['son', 'daughter'],
  "2": ['grandson', 'granddaughter'],
  "3": ['great grandson', 'great granddaughter'],
}

// const {"-3": great} = family;
// console.log('great', great);

// const greatGrandfather = great[0];
// console.log('greatGrandfather', greatGrandfather);

// const grandfather = Object.values(family["-2"]);
// console.log('grandfather', grandfather);

function generation(x = 0, y = 0) {
  const grandfather = Object.values(family[x]); // return the correct generation key
  // if (y != m || y != f) {
  //   return
  // }
  if (y = m) {
    return grandfather[0]
  }
   else if (y = f) {
    return grandfather[1];  
  }
  
}

console.log(generation(2, f));

module.exports = generation;