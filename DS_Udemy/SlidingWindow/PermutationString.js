/*
'''
Problem Challenge 1
Permutation in a String (hard) 
Given a string and a pattern, find out if the string contains any permutation of the pattern.
Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.
Example 1:
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:
Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:
Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:
Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
'''

*/

function sort(str) {
  return str.split("").sort().join("");
}

function permutuationString(string, pattern) {
  let start = 0;
  let patternFrequency = {};
  let matchCount = 0;

  for (let index = 0; index < pattern.length; index++) {
    patternFrequency[pattern[index]] = patternFrequency[pattern[index]] || +1;
  }

  for (let end = 0; end < string.length; end++) {
    let currentValue = string[end];

    if (patternFrequency[currentValue]) {
      patternFrequency[currentValue] = patternFrequency[currentValue] - 1;

      if (patternFrequency[currentValue] == 0) {
        matchCount++;
      }
    }
    if (matchCount == Object.keys(patternFrequency).length) {
      return true;
    }

    if (end > pattern.length - 1) {
      let charStart = string[start];
      start++;
      if (patternFrequency[charStart]) {
        if (patternFrequency[charStart] == 0) {
          matchCount--;
        }
        patternFrequency[charStart] = patternFrequency[charStart] + 1;
      }
    }
  }
  return false;
}

console.log(permutuationString("odicf", "dc"));
