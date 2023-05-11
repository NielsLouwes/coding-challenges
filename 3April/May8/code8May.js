
const returnAnagrams = (strings) => {
  const anagrams = {};

  for (const str of strings) {
    const sortedStr = str.split("").sort().join("");

    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [];
    }

    anagrams[sortedStr].push(str);
  }

  return Object.values(anagrams);
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = [""];
const strs3 = ["a"];

// console.log(returnAnagrams(strs1)); // [["eat","tea","ate"],["tan","nat"],["bat"]]
// console.log(returnAnagrams(strs2)); // [[""]]
// console.log(returnAnagrams(strs3)); // [["a"]]

module.exports = returnAnagrams;
