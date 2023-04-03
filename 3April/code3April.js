const handOfStraights = (hand, groupSize) => {
  if (!Number.isInteger(groupSize) || groupSize === 0) {
    return false;
  }
  return hand.length % groupSize === 0;
   
};

module.exports = handOfStraights;

