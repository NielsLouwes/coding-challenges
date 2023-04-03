const mergeIntervals = (intervalArray = []) => {
  const flatten = intervalArray.flat();

  for (let i = 0; i < flatten.length - 1; i++) {
    if (flatten[i] > flatten[i + 1]) {
      flatten.splice(i, 2); // remove both elements
      i--; // adjust index to account for removed elements
    }
  }

  const finalArray = [];
  for (let i = 0; i < flatten.length; i += 2) {
    finalArray.push([flatten[i], flatten[i + 1]]);
  }

  return finalArray;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);

module.exports = mergeIntervals;
