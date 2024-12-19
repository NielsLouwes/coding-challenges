/*Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]
Output: [[""]];

1. put first item in a pointer, then compare it vs the other item, if its letter are included in any of the other words, if yes, place them in an array together
*/

const groupAnagrams = (input = []) => {
  let currentItem = "";
  let result = [];

  currentItem = input[0];
  const firstItem = input.shift();
  console.log("input", input);

  input.map((item) => {
    if (currentItem.includes(item)) {
      console.log("found a match!", item);
    }
  });

  console.log("currentItem", currentItem);
};

groupAnagrams((strs = ["act", "pots", "tops", "cat", "stop", "hat"]));
