const isGoodMatch = (arr = []) => {
  if (arr.length % 2 !== 0) {
    return "bad match";
  }
  let result = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    result.push(arr[i] + arr[i + 1]);
  }
  return 'good match';
};

module.exports = isGoodMatch;
