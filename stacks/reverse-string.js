// reverse a string using a stack
// reverseString("hello"); // "olleh"
// reverseString("stack"); // "kcats"

const reverseString = (string) => {
  // split the string to turn into ARRAY
  const chars = string.split("");

  //   then pop each character into a new empty string, staring with the item on top.
  let reversedString = "";
  while (chars.length > 0) {
    reversedString += chars.pop();
  }

  return reversedString;
};

console.log(reverseString("hello"));
