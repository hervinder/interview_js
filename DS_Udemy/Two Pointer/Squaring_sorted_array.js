/*
'''
Problem Statement 
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:
Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
'''
*/
function sorted(arr) {
  let n = arr.length,
    left = 0,
    right = n - 1;

  let result = [];

  for (let index = n - 1; index >= 0; index--) {
    if (Math.abs(arr[left]) > arr[right]) {
      result[index] = arr[left] * arr[left];
      left++;
    } else {
      result[index] = arr[right] * arr[right];
      right--;
    }
  }
  for (let i = 0; i < n; i++) arr[i] = result[i];
  console.log("arr", result);
}

sorted([-2, -1, 0, 2, 3]);

// Time Complexity: O(n)
// Space Complexity: O(n)
