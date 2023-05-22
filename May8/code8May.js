
const returnAnagrams = (strings) => {
  const anagrams = {};

  for (const str of strings) {
    const sortedStr = str.split("").sort().join("");
    console.log('sortedStr', sortedStr);

    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [];
    }

    anagrams[sortedStr].push(str);
  }

  return Object.values(anagrams);
};

console.log('returnAnagrams', returnAnagrams(["hat", "tan", "ten"]));
module.exports = returnAnagrams;
