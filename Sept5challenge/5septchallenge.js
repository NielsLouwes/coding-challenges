function arrayRemove(arr) {
  if (arr.length < 1 || arr == null) {
    return 0;
  }
  const filteredArray = arr.filter((item) => {
    return item == Math.max(...arr) || item == Math.min(...arr)
  });
  const compareArrays = arr.filter(item => !filteredArray.includes(item));
  return addUpRemainingItems = compareArrays.reduce((prev, curr) => prev + curr)
}

module.exports = arrayRemove;
console.log("arrayRemove", arrayRemove([]));
