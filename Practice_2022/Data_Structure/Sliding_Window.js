//Maximum Sum Subarray of Size K
function maxSum(array, k) {
  let maxWindow = 0;

  for (let index = 0; index < k; index++) {
    maxWindow = maxWindow + array[index];
  }

  for (let index = 1; index <= array.length - k; index++) {
    const totalSum = maxWindow - array[index - 1] + array[index + k - 1];
    maxWindow = Math.max(maxWindow, totalSum);
  }
  console.log("maxWindow", maxWindow);
}

maxSum([1, 2, 3, 4, 5, 7], 3);

// Time Complexity
// The time complexity of the above algorithm will be O(N).
// Space Complexity
// The algorithm runs in constant space O(1).

/*'''
Problem Statement 
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
'''
*/

function smallestSubarray(array, target) {
  let sum = 0;
  let minLength = Number.MAX_VALUE;
  let start = 0;
  for (let end = 0; end < array.length; end++) {
    sum = sum + array[end];

    while (sum >= target && start < end) {
      minLength = Math.min(minLength, end - start + 1);
      sum = sum - array[start];
      start++;
    }
  }
  console.log("minLength", minLength);
}

smallestSubarray([3, 4, 1, 1, 6], 8);

/*
Longest Substring with K Distinct Characters

Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.
Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
*/

function longestSubstring(string, target) {
  let distinctObj = {};
  let maxLength = Number.MIN_VALUE;
  let start = 0;
  let strVal = "";
  for (let end = 0; end < string.length; end++) {
    strVal = string[end];
    distinctObj[strVal] = (distinctObj[strVal] || 0) + 1;

    while (Object.keys(distinctObj).length > target && start < end) {
      maxLength = Math.max(maxLength, end - start);

      if (distinctObj[string[start]] === 1) {
        delete distinctObj[string[start]];
      } else {
        distinctObj[string[start]] = distinctObj[string[start]] - 1;
      }
      start++;
    }
  }
  console.log("maxLength", maxLength);
}

longestSubstring("araaci", 1);

//
/*'''
Problem Statement 
Given a string, find the length of the longest substring which has no repeating characters.
Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde"
*/
function noRepeatSubString(string) {
  let distinctObj = [];
  let start = 0;
  let maxLength = Number.MIN_VALUE;
  distinctObj.push(string[0]);
  for (let end = 1; end < string.length; end++) {
    let strValue = string[end];
    distinctObj.push(strValue);

    while (
      distinctObj.length > 1 &&
      distinctObj[distinctObj.length - 2] === strValue &&
      start < end
    ) {
      maxLength = Math.max(maxLength, end - start);
      distinctObj.shift();
      start++;
    }
  }
  return maxLength;
}

noRepeatSubString("aabccde");

/*
'''

Difficult Question
Problem Statement 
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
'''
https://www.youtube.com/watch?v=00FmUN1pkGE&ab_channel=NickWhite

*/

function sameSubArray(string, target) {
  let distinctObj = {};
  let start = 0;
  let maxLength = Number.MIN_VALUE;
  let maxCount = Number.MIN_VALUE;

  for (let end = 0; end < string.length; end++) {
    let strValue = string[end];
    distinctObj[strValue] = (distinctObj[strValue] || 0) + 1;
    maxCount = Math.max(maxCount, distinctObj[strValue]);

    while (end - start - maxCount + 1 > target) {
      if (distinctObj[string[start]] === 1) {
        delete distinctObj[string[start]];
      } else {
        distinctObj[string[start]] = distinctObj[string[start]] - 1;
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

sameSubArray("aabccbb", 2);

//sameSubArray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3);

// Time O(n)  space O(n)

function sameSubArray1(string, target) {
  let distinctObj = {};
  let maxLength = Number.MIN_VALUE;
  let start = 0;
  let strVal = "";
  let maxCount = Number.MIN_VALUE;
  for (let end = 0; end < string.length; end++) {
    strVal = string[end];
    distinctObj[strVal] = (distinctObj[strVal] || 0) + 1;
    maxCount = Math.max(maxCount, distinctObj[strVal]);

    while (end - start - maxCount + 1 > target) {
      if (distinctObj[string[start]] === 1) {
        delete distinctObj[string[start]];
      } else {
        distinctObj[string[start]] = distinctObj[string[start]] - 1;
      }
      start++;
    }
    maxLength = Math.max(maxLength, end - start);
  }
  console.log("maxLength", maxLength);
}

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

function PermutationString(string, pattern) {
  const patternFrequency = {};
  let matched = 0;
  let start = 0;
  for (let index = 0; index < pattern.length; index++) {
    const element = pattern[index];

    patternFrequency[element] = (patternFrequency[element] || 0) + 1;
  }

  for (let end = 0; end < string.length; end++) {
    const curentElement = string[end];

    if (patternFrequency[curentElement]) {
      patternFrequency[curentElement] = patternFrequency[curentElement] - 1;

      if (patternFrequency[curentElement] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(patternFrequency).length) {
      return true;
    }

    if (end >= pattern.length - 1) {
      const startElement = string[start];
      start++;

      if (patternFrequency[startElement]) {
        if (patternFrequency[startElement] == 0) {
          matched--;
        }

        patternFrequency[startElement] = patternFrequency[startElement] + 1;
      }
    }
  }
  return false;
}

console.log(PermutationString("odicf", "abc"));
