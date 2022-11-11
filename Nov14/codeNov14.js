/* 
I need to check if I can divide the index by with no remainder
// filter out all elements that are located at an even index in the array.
let x = arr.filter((element, index) => {
  return index % 2 === 0;
})
I need to also checks for adds.
THen use every to make sure each in their individual arrays match what I need.

*/

function isSpecialArray(arr) {
  //return even indexs in a new array
  const evenIndexes = arr.filter((element, index) => {
    return index % 2 === 0;
  });
  //return odd indexes in a new array
  const oddIndexes = arr.filter((element, index) => {
    return index % 2 !== 0;
  });
  const isEven = evenIndexes.every((number) => {
    return number % 2 === 0;
  });

  return isEven;
}

console.log("isSpecialArray", isSpecialArray([2, 2, 4, 4, 4, 5]));

// const ages = [32, 33, 16, 40];

// ages.every(checkAge() => {

// function checkAge(age) {
//   return age > 18;
// }
