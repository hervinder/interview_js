/* Problem Statement 
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

Example 2:
Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
'''
*/

function triplet(arr) {
  let array = arr.sort();
  for (let index = 0; index < array.length - 1; index++) {
    let first = index + 1;
    let last = array.length - 1;
    let x = array[index];

    while (first < last) {
      if (x + array[first] + array[last] === 0) {
        console.log([x, array[first], array[last]]);
        first++;
        last--;
      } else if (x + array[first] + array[last] < 0) {
        first++;
      } else {
        last--;
      }
    }
  }
}

triplet([-3, 0, 1, 2, -1, 1, -2]);

// time o(n2) space 0(1)
