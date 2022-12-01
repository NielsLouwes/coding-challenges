
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
  "###" // the last arrayItem should have minimum 3 # signs and all contain #
];

const asterisk = "*";

// PART 1

const firstPart = testArr[0].split(""); // split up into individual parts so I can check the 0th index of that.
const lastPart = testArr[testArr.length - 1].split(""); // split up the final party of arrays

const meetsThreePoundSignsCriteria = (currentValue) => currentValue === "#";
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

// if (firstPartAllPoundSigns && atLeastThreePoundSigns === true) - our functino should check for this to be true before checking on the middle bit.

console.log("lastPart", lastPart);

console.log("firstPart", firstPart);

const checkFirst = firstPart.includes(asterisk); // I'm checking if the firstPart array has the asterisk , or includes it.
const checkLast = lastPart.includes(asterisk); // Also checking if the last Pary final indexed item has the asterisk
console.log("checkFirst", checkFirst);
console.log("checkLast", checkLast);

//First part needs to be a # and there must be an astrisk inside

const findAsterisk = testArr.some((element) => element === "#*#");
console.log("findAsterisk", findAsterisk);

function inBox(arr) {
  const asterisk = "*";

  //Capture both first item in first array item and last item in last array item
  const firstItem = arr[0].split("")[0];
  const lastItem = arr[arr.length - 1].split("");

  // check if both cases includes the asterisk, if so, the function returns false because it should be in the box
  const checkFirst = firstPart.includes(asterisk);
  const checkLast = lastPart.includes(asterisk);

  if (checkFirst || checkLast === true) {
    return false;
  }
}
