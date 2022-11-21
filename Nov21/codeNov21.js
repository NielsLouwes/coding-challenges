
const jewelry = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}


function mostExpensive(obj) {
	
}

/*
1. Turn the values from the object into arr with object.values
2. find max of that. You need to spreasd the array.
3. return the sentence
*/
let obj = { a: 4, b: 0.5 , c: 0.35, d: 5 };
let arr = Object.values(obj);
console.log(arr, "arr")

let max = Math.max(...arr);
console.log('the biggest number is: ', max);

module.exports = mostExpensive;




