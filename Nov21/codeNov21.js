const jewelry = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
};

function mostExpensive(obj = {}) {
  const pricy = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  console.log(`The most expensive piece of jewelry is the ${pricy}.`);
}

console.log("mostExpensive", mostExpensive(jewelry));
console.log("mostExpensive(", mostExpensive());

/*
1. Turn the values from the object into arr with object.values
2. find max of that. You need to spread the array.
3. return the sentence
*/

let obj = { a: 4, b: 0.5, c: 0.35, d: 5 };
let arr = Object.values(obj);
console.log(arr, "arr");

const obj2 = { a: 1, b: 2, c: 1 };
const highestValue = Object.keys(obj2).reduce((a, b) =>
  obj2[a] > obj2[b] ? a : b
);
console.log("The highest value item is: ", highestValue);

let max = Math.max(...arr);
console.log("the biggest number is: ", max);

module.exports = mostExpensive;
