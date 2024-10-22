// have to deal with negative numbers as well

const findClosestNumber = (nums = []) => {
  let closest = nums[0];

  for (let num of nums) {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num;
    }
  }

  if (closest < 0 && nums.includes(Math.abs(closest))) {
    return Math.abs(closest);
  } else {
    return closest;
  }
};

findClosestNumber([-4, -2, 1, 4, 8]);

const text = Math.abs(-5);
console.log("text", text);
