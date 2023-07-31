function doesBrickFit(brickH, brickW, brickD, holeW, holeH) {
  const sortedSmallestBrickDimensions = [brickH, brickW, brickD]
    .sort()
    .slice(0, 2);

  const sortedHoleDimensions = [holeW, holeH].sort();

  if (
    sortedSmallestBrickDimensions[0] <= sortedHoleDimensions[0] &&
    sortedSmallestBrickDimensions[1] <= sortedHoleDimensions[1]
  ) {
    return true;
  }

  return false;
}

console.log("test1:", doesBrickFit(1, 1, 1, 1, 1) === true);
console.log("test2:", doesBrickFit(1, 2, 1, 1, 1) === true);
console.log("test3:", doesBrickFit(1, 2, 2, 1, 1) === false);
console.log("test3:", doesBrickFit(1, 2, 2, 2, 1) === true);

