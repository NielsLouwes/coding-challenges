Create a function that returns true if an asterisk * is inside a box.

Examples:

inBox([
  "###",
  "#*#",
  "###"
]) ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ false

Note: The asterisk may be in the array, however, it must be inside the box, if it exists.

function inBox(arr) {
	// insert code here
} 