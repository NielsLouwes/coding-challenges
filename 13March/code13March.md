JS Challenge

Letter Combinations of a phone number.
This one will make those who texted before smart phones feel extra nostalgic.

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 and 0 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]


TODO
1. Create a config
2. Take the digit input and split that so we can map over it
3. Then while mapping over it, if the number matches the numberMapping, push that value to an array
4. Return all possible letter combinations
5. for a single digit, its just each letter from value (splitting it)