const handOfStraights = (hand, groupSize) => {
  return hand.length % groupSize === 0;
   
};

module.exports = handOfStraights;

