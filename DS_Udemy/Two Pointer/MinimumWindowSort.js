/* Problem Statement 
Minimum Window Sort (medium)
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
Example 1:
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:
Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:
Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:
Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted

Solution video: https://www.youtube.com/watch?v=p-O7FExDH1M

''' */

function findUnsortedSubarray(nums) {
  let min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) flag = true;
    if (flag) min = Math.min(min, nums[i]);
  }
  flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) flag = true;
    if (flag) max = Math.max(max, nums[i]);
  }
  let l, r;
  for (l = 0; l < nums.length; l++) {
    if (min < nums[l]) break;
  }
  for (r = nums.length - 1; r >= 0; r--) {
    if (max > nums[r]) break;
  }
  return r - l < 0 ? 0 : r - l + 1;
}

findUnsortedSubarray([1, 2, 5, 3, 7, 10, 9, 12]);
