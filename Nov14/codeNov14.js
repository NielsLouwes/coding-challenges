/* 
I need to check if I can divide the index by with no remainder
// filter out all elements that are located at an even index in the array.
let x = arr.filter((element, index) => {
  return index % 2 === 0;
})
I need to also checks for adds.
Then use every to make sure each in their individual arrays match what I need.
*/

function isSpecialArray(arr) {
  //return even indexs in a new array
  const evenIndexes = arr.filter((_, index) => {
    return index % 2 === 0;
  });
  //return odd indexes in a new array
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

console.log("isSpecialArray", isSpecialArray([0, 1, 4, 3, 4, 5]));


