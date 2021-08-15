/*

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

function longestSubString(string, target) {
  let distinctObj = {};
  let start = 0;
  let maxLength = Number.MIN_VALUE;

  for (let end = 0; end < string.length; end++) {
    let strValue = string[end];
    distinctObj[strValue] = (distinctObj[strValue] || 0) + 1;

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
  return maxLength;
}

longestSubString("araaci", 3);

// Time Complexity: O(N), where N is the length of tree.
// Space Complexity: O(N)
