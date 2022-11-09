
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

function generation(x = 0, y) {
  const pickGeneration = Object.values(family[x]); // returns the correct generation key
  return pickGeneration[y]
}

console.log(generation(2, 0));
console.log('generation', generation(3,1));
console.log('generation', generation(3,0));

module.exports = generation;