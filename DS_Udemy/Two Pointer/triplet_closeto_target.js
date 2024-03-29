/*
Triplet Sum Close to Target (medium)
Problem Statement 
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
If there are more than one such triplet, return the sum of the triplet with the smallest sum.


Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2:
Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.


Example 3:
Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
'''  */

function triplet(arr, target) {
  let array = arr.sort();
  let closestSum = 0;
  for (let index = 0; index < array.length - 2; index++) {
    let first = index + 1;
    let last = array.length - 1;
    let x = array[index];

    while (first < last) {
      let sum = x + array[first] + array[last];

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
        first++;
        last--;
      } else if (sum < target) {
        first++;
      } else {
        last--;
      }
    }
  }
  console.log("closestSum", closestSum);
}

triplet([-3, -1, 1, 2], 1);

// time o(n2) space 0(1)
