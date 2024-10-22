/*
Return a running sum of a given array
Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

const runningSum = function (nums = []) {
  if (!nums) return;

  let result = [];

  result.push(nums[0]); // push the first item into result

  for (let i = 1; i < nums.length; i++) {
    const previousValue = result[i - 1]; // assign a prev value for each loop (current - 1)
    result.push(nums[i] + previousValue); // push current item + prev item into result
  }

  return result;
};

runningSum([1, 2, 3, 4]);

export default runningSum;
