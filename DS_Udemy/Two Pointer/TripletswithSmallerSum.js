/*Problem Statement 
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
Example 1:
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:
Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

  */

function triplet(arr, target) {
  let array = arr.sort();
  let count = 0;
  for (let index = 0; index < array.length - 2; index++) {
    let first = index + 1;
    let last = array.length - 1;
    let x = array[index];

    while (first < last) {
      if (x + array[first] + array[last] < target) {
        console.log("dfdf");
        count = count + last - first;
        first++;
      } else {
        last--;
      }
    }
  }
  console.log("count", count);
}

triplet([-1, 0, 2, 3], 3);

// -1 1 2 3 4

// -1 1 2
// -1 2 3

// 4 2 3
