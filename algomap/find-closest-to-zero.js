// have to deal with negative numbers as well , find the number that is closest to 0
// 1. first regular numbers - compare each item difference with 0

const findClosestNumber = (nums = []) => {
  let closest = nums[0]

  nums.forEach((number) => {
    const absoluteDiff = Math.abs(number)
    if (absoluteDiff < closest) {
      closest = number
    }
  
    return absoluteDiff;
  })

  return closest;
};

findClosestNumber([ 4, 2, 5, -1 , -3]);


