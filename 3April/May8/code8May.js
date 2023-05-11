
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

module.exports = returnAnagrams;
