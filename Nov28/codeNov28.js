function inBox(arr = []) {
  const asterisk = "*";
  const poundSign = "#";
  //Capture both first item in first array item and last item in last array item
  const firstPart = arr[0].split(""); // split up into individual parts so I can check the 0th index of that.
  const lastPart = arr[arr.length - 1].split(""); // split up the final party of arrays

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
  const middlePart = arr[arr.length - 2].split("");
  const middleFirstIndexIsPoundSign = arr[arr.length - 2]
    .split("") === poundSign;
   
  const middleLastIndexIsPoundSign = arr[arr.length - 2]
    .split("")
    [arr.length - 1] === poundSign;

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

module.exports = inBox;


