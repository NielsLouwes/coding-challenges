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

console.log(restructureArray([1, "a", 2, "b"]));
console.log(restructureArray([1, 2]));

module.exports = restructureArray;

