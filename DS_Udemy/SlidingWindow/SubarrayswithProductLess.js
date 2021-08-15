/*
Problem Statement 
Given an array with positive numbers and a target number, 
find all of its contiguous subarrays whose product is less than the target number.
Example 1:
Input: [2, 5, 3, 10], target=30 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:
Input: [8, 2, 6, 5], target=50 
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
Explanation: There are seven contiguous subarrays whose product is less than the target.
'''
*/

function subArray(array, target) {
  let i = 0;
  let j = i + 1;
  let product = array[i];

  while (i < array.length) {
    // if (array[i] < target) {
    //   product = array[i];
    //   console.log([array[i]]);
    // }

    if (j && product * array[j] < target) {
      console.log([array[i], array[j]]);
      product = product * array[j];
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }
}

subArray([8, 2, 6, 5], 50);
