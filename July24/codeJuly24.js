/*
    IF brickH > holeW || holeH = false
    IF brickW > holeH || holeW = false
*/

function doesBrickFit(brickH, brickW, brickD, holeW, holeH) {
  if (brickH > holeW || brickH > holeH) {
    return false;
  }

  if (brickW > holeW || brickW > holeH) {
    return false;
  }

  return true;
}

console.log("test1:", doesBrickFit(1, 1, 1, 1, 1) === true);
// console.log("test2:", doesBrickFit(1, 2, 1, 1, 1) === true);
console.log("test3:", doesBrickFit(1, 2, 2, 1, 1) === false);
// console.log("test3:", doesBrickFit(1, 2, 2, 2, 1) === true);
