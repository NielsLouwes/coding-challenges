function isSpecialArray(arr = []) {
  const evenIndexes = arr.filter((_, index) => {
    return index % 2 === 0;
  });
  const oddIndexes = arr.filter((_, index) => {
    return index % 2 !== 0;
  });
  const checkIfAllEven = evenIndexes.every((number) => {
    return number % 2 === 0;
  });
  const checkIfAllOdd = oddIndexes.every((number) => {
    return number % 2 !== 0;
  })

  if (checkIfAllOdd && checkIfAllEven === true) {
    return true
  }
  else {
    return false;
  }
}

module.exports = isSpecialArray;




