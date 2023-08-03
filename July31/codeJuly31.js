function restructureArray(arr = []) {
  const numberArr = [];
  const letterArr = [];

  arr.forEach((element) => {
    if (!isNaN(element)) {
      numberArr.push(element);
    } else {
      letterArr.push(element);
    }
  });

  return [...numberArr, ...letterArr];
}

module.exports = restructureArray;

