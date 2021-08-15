/* Problem Statement 
Problem Challenge 1

Quadruple Sum to Target (medium) 
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:
Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.

Example 2:
Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
'''
*/

function Quadruple(arr, target) {
  let array = arr.sort();
  for (let index = 0; index < array.length - 3; index++) {
    for (let j = index + 1; j < array.length - 2; j++) {
      let first = j + 1;
      let last = array.length - 1;

      while (first < last) {
        if (array[index] + array[j] + array[first] + array[last] === target) {
          console.log([array[index], array[j], array[first], array[last]]);
          first++;
          last--;
        } else if (
          array[index] + array[j] + array[first] + array[last] <
          target
        ) {
          first++;
        } else {
          last--;
        }
      }
    }
  }
}

Quadruple([4, 1, 2, -1, 1, -3], 1);

// time o(n3) space 0(1)
