const handOfStraights = (hand = [], groupSize = 0) => {
  if (hand.length % groupSize !== 0) {
    return false;
  } else if (hand.length % groupSize == 0) {
    return true;
  }
};

console.log(handOfStraights([1, 2, 3, 4, 5], 4));
console.log(handOfStraights([1, 2, 3, 4, 5], 5));
