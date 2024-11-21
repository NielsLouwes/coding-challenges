/*

test cases
isBalanced("({[]})"); // true
isBalanced("([)]");   // false
isBalanced("{[}");    // false

*/

// if current item === stack point  return false

const isBalanced = (s) => {
  // Stack to store opening brackets
  const stack = [];

  // Object to map closing brackets to their corresponding opening brackets
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Iterate over the string
  for (let char of s) {
    // If it's an opening bracket, push it to the stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // If it's a closing bracket
    else if (char === ")" || char === "]" || char === "}") {
      // Check if the stack is empty or if the top of the stack does not match the corresponding opening bracket
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, it means all opening brackets were matched
  return stack.length === 0;
};

console.log(isBalanced("({[]})"));

console.log("hi");
