/*
Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.


The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example one , K = 2, so we want the 2 elements that occur most often in the array

Example 2:

Input: nums = [7,7], k = 1

Output: [7]

1. Put all number sin a hash, number is key, add up occurences, then sort the values
2. Based on occurence number (k), return them in an array or as a number (if K = 1)
*/

const topKFrequent = (nums = [], k = 0) => {
  let hash = {};

  nums.map((item) => {
    if (!hash[item]) {
      hash[item] = 0;
    }

    hash[item]++;
  });

  // return array of arrays sorted by value and slice by K
  const array = Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  console.log("array", array);

  const result = array.map((item) => {
    return Number(item[0]);
  });
  console.log("result", result);
  return result;
};

topKFrequent([1, 1, 2, 2, 4, 5], 3);

// Now in the case of K = 3, both 4 and 5 are eligible, so we want to check for that
