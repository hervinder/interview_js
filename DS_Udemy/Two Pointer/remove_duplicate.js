/*Problem Statement 

Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
''' */

function removeDuplicate(array) {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  console.log("length", i + 1);
}

// Time : o(n)
// space: o(1)
removeDuplicate([2, 3, 3, 3, 6, 9, 9]);

/*
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:
Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

Example 2:
Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].
'''  */

function removeDuplicate1(array, key) {
  let i = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[j] != key) {
      array[i] = array[j];
      i++;
    }
  }

  console.log("length", i);
}

removeDuplicate1([2, 11, 2, 2, 1], 2);

// time o(n) space o(1)
