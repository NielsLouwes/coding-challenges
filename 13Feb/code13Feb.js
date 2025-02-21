// first solution - recursion
function getArrayOfMultiples(num = 0, length = 0) {
  // num multiplied length amount of times, but show each iteration

  if (length === 0) {
    return [];
  }

  let result = getArrayOfMultiples(num, length - 1); // Recursive call
  result.push(num * length); // Push the current multiple
  console.log("result", result);

  return result; // Return the accumulated result
}

// console.log(getArrayOfMultiples(7, 5));

// 2nd solution - my way

function secondGetArrOfMultiples(num = 0, length = 0) {
  let result = [];
  let multiple = length;

  for (let i = 0; i < length; i++) {
    result.push(num * multiple);
    multiple--;
  }

  return result.sort((a, b) => a - b);
}

secondGetArrOfMultiples(7, 5);

module.exports = getArrayOfMultiples;
