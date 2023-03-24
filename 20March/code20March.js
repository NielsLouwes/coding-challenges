const handOfStraights = (hand, groupSize) => {
    const checkHand = hand.length;
    if (hand.length % groupSize === 0){
      return true;
    } 
    return false
   
};

console.log('handOfStraights', handOfStraights([1,2,3,4]));

module.exports = handOfStraights;

