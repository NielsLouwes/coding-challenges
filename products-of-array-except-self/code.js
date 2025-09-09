let currentNum = 0;
let result = [];

const productExceptSelf = (nums = []) => {
  // recursion
  // if nums.length > 0 , run multiplication

  //   for (let i = nums.length - 1; i >= 0; i--) {
  //     currentNum = nums[i];
  //     nums.pop();
  //     console.log("nums", nums);
  //   }

  // pop last item, do a reduce on remaining, repeat

  // reduce solution
  const product = nums.reduce((prevValue, currValue) => {
    return prevValue * currValue;
  }, 1);

  //   result.push(product);
 

  console.log("product", product);
};

productExceptSelf([1, 2, 3]);
console.log("result", result);
