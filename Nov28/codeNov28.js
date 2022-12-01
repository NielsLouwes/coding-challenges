/* 
1. Look for the asterisk *
2. If it doesn't exist = false
3. If it index 0 or index last (length - 1 ) = false
4. If it's after a # sign, true, but need to check that its after and before one
5. Check for a asterisk somehow
*/

const testArr = [
  "###", // the first arrayItem needs to have every item being # AND minimum length of 3
  "#*#", // the second arrayItem should have a * in not the last AND first position AND must exist
  "###", // the last arrayItem should have minimum 3 # signs and all contain #
];

const asterisk = "*";
const poundSign = "#";

// PART 1

const firstPart = testArr[0].split(""); // split up into individual parts so I can check the 0th index of that.
const lastPart = testArr[testArr.length - 1].split(""); // split up the final party of arrays
console.log("lastPart", lastPart);
console.log("firstPart", firstPart);

const meetsThreePoundSignsCriteria = (currentValue) =>
  currentValue === poundSign;
const containsAtleastThreePoundSignsBeginning = firstPart.every(
  meetsThreePoundSignsCriteria
);
const containsAtleastThreePoundSignsEnd = lastPart.every(
  meetsThreePoundSignsCriteria
);

console.log(
  "First array contains at least three # signs ###",
  containsAtleastThreePoundSignsBeginning
);
console.log(
  "last array row should contain at least three ###",
  containsAtleastThreePoundSignsEnd
);

// PART 2 ADDING LOGIC FOR CHECKING MIDDLE PART OF GIFT
const middlePart = testArr[testArr.length - 2].split("");
console.log("middlePart", middlePart);
// if the first index of middle part and last index of middlepart = # && middlePart.includes(asterisk), then we are good to go.
const middleFirstIndexIsPoundSign =
  testArr[testArr.length - 2].split("")[0] === poundSign;

const middleLastIndexIsPoundSign =
  testArr[testArr.length - 2].split("")[testArr.length - 1] === poundSign;

console.log("middleFirstIndexIsPoundSign", middleFirstIndexIsPoundSign);
console.log("middleLastIndexIsPoundSign", middleLastIndexIsPoundSign);

// if (containsAtleastThreePoundSignsBeginning && containsAtleastThreePoundSignsEnd === true) - our function should check for this to be true before checking on the middle bit.

const checkFirst = firstPart.includes(asterisk); // I'm checking if the firstPart array has the asterisk , or includes it.
const checkMiddle = middlePart.includes(asterisk);
const checkLast = lastPart.includes(asterisk); // Also checking if the last Pary final indexed item has the asterisk
console.log("checkFirst", checkFirst);
console.log("checkMiddle", checkMiddle);
console.log("checkLast", checkLast);

//First part needs to be a # and there must be an astrisk inside

const findAsterisk = testArr.some((element) => element === "#*#");
console.log("findAsterisk", findAsterisk);

function inBox(arr = []) {
  const asterisk = "*";
  const poundSign = "#";
  //Capture both first item in first array item and last item in last array item
  const firstPart = testArr[0].split(""); // split up into individual parts so I can check the 0th index of that.
  const lastPart = testArr[testArr.length - 1].split(""); // split up the final party of arrays

  // Check that both beginning array and ending array have at least 3 pound signs for border of the box
  const meetsThreePoundSignsCriteria = (currentValue) =>
    currentValue === poundSign;
  const containsAtleastThreePoundSignsBeginning = firstPart.every(
    meetsThreePoundSignsCriteria
  );
  const containsAtleastThreePoundSignsEnd = lastPart.every(
    meetsThreePoundSignsCriteria
  );

  //check if middle has * in either first index or last
  const middlePart = testArr[testArr.length - 2].split("");
  const middleFirstIndexIsPoundSign = testArr[testArr.length - 2]
    .split("")[0] === asterisk;
   
  const middleLastIndexIsPoundSign = testArr[testArr.length - 2]
    .split("")
    [testArr.length - 1] === asterisk;

  console.log("middleFirstIndexIsPoundSign", middleFirstIndexIsPoundSign);
  console.log("middleLastIndexIsPoundSign", middleLastIndexIsPoundSign);

  // check if both cases includes the asterisk, if so, the function returns false because it should be in the box
  const checkFirst = firstPart.includes(asterisk);
  const checkMiddle = middlePart.includes(asterisk);
  const checkLast = lastPart.includes(asterisk);

  if (
    checkFirst ||
    checkLast === true ||
    checkMiddle === false ||
    (containsAtleastThreePoundSignsBeginning &&
      containsAtleastThreePoundSignsEnd === false) ||
    (middleFirstIndexIsPoundSign && middleLastIndexIsPoundSign === true)
  ) {
    return false;
  }
  return true;
}

console.log("inBox", inBox(testArr));

module.exports = inBox;
