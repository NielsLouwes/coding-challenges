
JS

Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
*You are not allowed to solve this using Regex.

TODO
1. iterate over the array
2. if item does NOT include the nnumbers i specify, filter it out
3. Need to setup the numbers in an array.
4. Check that array for each item, if !include, remove it

