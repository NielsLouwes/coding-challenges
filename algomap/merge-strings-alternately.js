const mergeAlternately = (word1, word2) => {
  let word1Length = word1.length;
  let word2Length = word2.length;
  let a = 0;
  let b = 0;
  let result = "";

  while (a < word1Length && b < word2Length) {
    result += word1[a++];
    result += word2[b++];
  }

  while (a < word1Length) {
    result += word1[a++];
  }

  while (b < word2Length) {
    result += word2[b++];
  }

  console.log("result", result);
  return result;
};

mergeAlternately("abc", "bqsss");

/* track word length
- track string index of word 1 and word 2
- hold result in a string
- while both a AND b are smaller then the lengths, add a letter each loop of both
- then handle if pointer a has extra chars
- handle if word 2 has extra chars, append either at the end.

*/
