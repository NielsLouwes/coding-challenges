const mergeIntervals = (intervalArray = []) => {
  const flattenArray = intervalArray.flat();
  console.log("flattenArray", flattenArray);
};

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
