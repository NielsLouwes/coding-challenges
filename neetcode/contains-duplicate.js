/*
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/

const containsDuplicate = (nums = []) => {
  // iterate over, if the next index item is the same, we have a duplicate
  let currentItem = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log("num", nums[i]);
    // if last index item === currentItem, then duplicate found
    // if not, that becomes new current item and we .pop the item we checked out of array

    if (nums[i] !== currentItem) {
      currentItem = nums[i];
    } else if (nums[i] === currentItem) {
      console.log("duplicate found!");
    }
  }
  console.log("currentItem", currentItem);
};

containsDuplicate([1, 2, 3, 6]);

// const duplicateIndexMethods = (nums) => {

// }

// SOLUTION 3 : NEW SET

const duplicateNewSetMethod = (input) => {
  const uniquesLength = [...new Set(input)].length;

  if (uniquesLength === input.length) {
    return false;
  }

  return true;
};

// console.log(duplicateNewSetMethod([1, 2, 3, 3])); // returns TRUE
console.log(duplicateNewSetMethod([1, 2, 3, 4])); // returns FALSE
