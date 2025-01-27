/*   Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

const isSubsequence = (s, t) => {
  if (s.length > t.length) {
    return false;
  }

  const tLength = t.length;
  let subsequence = 0;

  for (let i = 0; i < tLength; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }

  return subsequence === s.length;
};

isSubsequence("ab", "baab"); // true case
// isSubsequence("axc", "abcd"); // false case - not all letters in substring are present
// isSubsequence(
