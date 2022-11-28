/* 
1. Look for the asterisk *
2. If it doesn't exist = false
3. If it index 0 or index last (length - 1 ) = false
4. If it's after a # sign, true, but need to check that its after and before one
5. Check for a asterisk somehow
*/

const testArr = [
  "###",
  "#*#",
  "###"
]

const numbers = [1,2,3,4,5, '*']
const asterisk = '*'

const firstPart = testArr[0].split('')[0]; // split up into individual parts so I can check the 0th index of that.
const lastPart = testArr[testArr.length - 1].split(''); // split up the final party of array


console.log('lastPart', lastPart);
console.log('testArr[0]', testArr[0]);
console.log('firstPart', firstPart);

const checkFirst = firstPart.includes(asterisk); // I'm checking if the firstPart array has the asterisk , or includes it.
const checkLast = lastPart.includes(asterisk); // Also checking if the last Pary final indexed item has the asterisk
console.log('checkFirst', checkFirst);
console.log('checkLast', checkLast);

//First part needs to be a #


const filterAsterisk = numbers.some((element) => element === "*");
console.log('filterAsterisk', filterAsterisk);

const findAsterisk = testArr.some((element) => element === '#*#');
console.log('findAsterisk', findAsterisk);


function inBox(arr) {
	const asterisk = '*';

  //Capture both first item in first array item and last item in last array item
  const firstItem = arr[0].split('')[0];
  const lastItem = arr[arr.length - 1].split('');

  // check if both cases includes the asterisk, if so, the function returns false because it should be in the box
  const checkFirst = firstPart.includes(asterisk);
  const checkLast = lastPart.includes(asterisk);    

  if (checkFirst || checkLast === true) {
    return false;
  }
} 

