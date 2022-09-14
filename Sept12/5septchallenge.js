function arrayRemove(arr) {
  if (arr?.length < 3 || arr == null) {
    return 0;
  }
  const sortArray = arr.sort((a,b) => a -b);
  sortArray.pop()
  sortArray.shift()
  return addUpRemainingItems = sortArray.reduce((prev, curr) => prev + curr, 0)
}

module.exports =  arrayRemove;

