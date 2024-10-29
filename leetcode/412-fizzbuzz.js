/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:
Input: n = 5

Output: ["1","2","Fizz","4","Buzz"]

1. First return the numbers lreading up to the given input
2. Then apply logic
 */

const fizzBuzz = (integer = 0) => {
  let array = [];
  let itemNumber = 1;

  for (let i = 0; i < integer; i++) {
    array.push(itemNumber);
    itemNumber++;
  }

  const result = array.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return "FizzBuzz";
    }
    if (item % 3 === 0) {
      return "Fizz";
    }
    if (item % 5 === 0) {
      return "Buzz";
    }

    return item.toString();
  });

  return result;
};

console.log(fizzBuzz(15));

// refactor

const fasterFizzBuzz = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }

  console.log("arr", arr);
  return arr;
};

fasterFizzBuzz(15);
