/*
Uou are given an array of positive integers nums.

Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false.

Example 1:

Input: nums = [1,2,3,4,10]

Output: false

Explanation:

Alice cannot win by choosing either single-digit or double-digit numbers.

Example 2:

Input: nums = [1,2,3,4,5,14]

Output: true

Explanation:

Alice can win by choosing single-digit numbers which have a sum equal to 15.

1. if num is < 10, sum it 
2. if num > 9 filter it out
3. double digit may be the last index
*/

const canAliceWin = (nums) => {
  let singleDigitSum = 0;
  let doubleDigitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      singleDigitSum += nums[i];
    } else {
      doubleDigitSum += nums[i];
    }
  }

  return singleDigitSum !== doubleDigitSum;
};

console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
