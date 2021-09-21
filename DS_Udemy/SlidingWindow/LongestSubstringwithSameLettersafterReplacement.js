/*
'''
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
