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
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
'''
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
      distinctObj = distinctObj.splice(1, distinctObj.length - 1);
      start++;
    }
  }
  return maxLength;
}

noRepeatSubString("abccde");
