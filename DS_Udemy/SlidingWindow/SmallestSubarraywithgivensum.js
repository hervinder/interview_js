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

function sumSubArray(array, target) {
  let sum = 0;
  let start = 0;

  let minLength = Number.MAX_VALUE;

  for (let end = 0; end < array.length; end++) {
    sum = sum + array[end];

    while (sum >= target && start < end) {
      minLength = Math.min(minLength, end - start + 1);
      sum = sum - array[start];
      start++;
    }
  }
  return minLength;
}

function sumSubArray1(array, target) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Number.MAX_VALUE;
  for (let end = 0; end < array.length; end++) {
    sum = sum + array[index];

    while (sum >= target && start < end) {
      minLength = Math.min(minLength, end - start + 1);
      sum = sum - array[start];
      start++;
    }
  }

  return minLength;
}

sumSubArray([2, 1, 5, 2, 3, 2], 7);
