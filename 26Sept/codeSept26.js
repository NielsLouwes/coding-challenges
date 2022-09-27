// Given an array of integers, sort only the odd numbers but keep the even numbers in their original position within the array.
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions in the array

// 1. filter out of array numbers that are divided by 2 = 0
// 2. sort the filtered numbers
// 3. how to get them back into the OG array?

function sortOddsOnly(arr) {
  if (arr.length == 0 || arr == null) {
    return 
  }
  const odds = arr
    .filter(x => x % 2)
    .sort((a, b) => a - b);
  console.log(odds)
  return arr
    .map(x => x % 2 ? odds.shift() : x);
}

module.exports = sortOddsOnly;
