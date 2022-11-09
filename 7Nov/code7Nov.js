const family = {
  "-3": ['great grandfather', 'great grandmother'],
  "-2": ['grandfather', 'grandmother'],
  "-1": ['father', 'mother'],
  "0": ['me', 'me'],
  "1": ['son', 'daughter'],
  "2": ['grandson', 'granddaughter'],
  "3": ['great grandson', 'great granddaughter'],
}

function generation(x = 0, y = 0) {
  const pickGeneration = Object.values(family[x]); // returns the correct generation key
  return pickGeneration[y]
}

module.exports = generation;