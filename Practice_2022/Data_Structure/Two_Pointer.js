/* Problem Statement 
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Example 2:
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
''' */

function findPairs(array, target) {
  if (array.length === 1) {
    return "should be atleast pair";
  }

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] + array[j] === target) {
      return [i, j];
    } else if (array[i] + array[j] > target) {
      j--;
    } else {
      i++;
    }
  }
}

findPairs([2, 5, 9, 11], 11);

//time complexity o(n)
//space complexity o(1)

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
    const firstElement = array[i];
    const nextElement = array[j];

    if (firstElement !== nextElement) {
      i++;
      array[i] = array[j];
    }
  }
  return array.splice(0, i + 1);
}

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

function removeKPlaceDuplicate(array, target) {
  let i = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[j] !== target) {
      array[i] = array[j];
      i++;
    }
  }

  console.log("ith  position", i);
}

removeKPlaceDuplicate([2, 11, 2, 2, 1], 2);

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

function squareArray(array) {
  let result = [];
  let i = 0;
  let lastIndex = array.length - 1;

  for (let j = array.length - 1; j >= 0; j--) {
    if (Math.abs(array[i]) > array[lastIndex]) {
      result[j] = array[i] * array[i];
      i++;
    } else {
      result[j] = array[lastIndex] * array[lastIndex];
      lastIndex--;
    }
  }
  console.log("result", result);
}

squareArray([-3, -1, 0, 1, 2]);

//time o(n)
//space o(n)

/* Problem Statement 
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
*/

function tripletsSumZero(arr, target) {
  let array = arr.sort();
  for (let index = 0; index < array.length; index++) {
    let currentElement = index;
    let first = index + 1;
    let last = array.length - 1;

    while (first < last) {
      if (array[first] + array[last] + array[currentElement] === target) {
        // console.log("no of unique triplets", [
        //   array[first],
        //   array[last],
        //   array[currentElement],
        // ]);
        first++;
        last--;
      } else if (array[first] + array[last] + array[currentElement] > target) {
        last--;
      } else {
        first++;
      }
    }
  }
}

tripletsSumZero([-3, 0, 1, 2, -1, 1, -2], 0);

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
*/

function tripletsSumClosetoTarget(arr, target) {
  let array = arr.sort();

  let result = [];
  let closetSum = 0;

  for (let index = 0; index < array.length - 2; index++) {
    let currentElement = index;
    let first = index + 1;
    let last = array.length - 1;

    while (first < last) {
      let sum = array[first] + array[last] + array[currentElement];

      if (Math.abs(target - sum) < Math.abs(target - closetSum)) {
        closetSum = sum;
        first++;
        last--;
      } else if (sum > target) {
        last--;
      } else {
        first++;
      }
    }
  }

  console.log("result", closetSum);
}

tripletsSumClosetoTarget([1, 0, 1, 1], 100);

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

function tripletWithSmallerSum(arr, target) {
  let array = arr.sort();
  let count = 0;
  for (let index = 0; index < array.length - 2; index++) {
    let first = index + 1;
    let last = array.length - 1;
    let x = array[index];

    while (first < last) {
      if (x + array[first] + array[last] < target) {
        count = count + last - first;
        first++;
      } else {
        last--;
      }
    }
  }
  console.log("count", count);
}

tripletWithSmallerSum([-1, 0, 2, 3], 3);

/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Examples:  

Input: arr[]   =[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 2
Explanation:
The structure is like below
*/

function rainWater(array) {
  let maxBuilding = Number.MIN_VALUE;
  let maxBuildingIndex = "";

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (maxBuilding < element) {
      maxBuilding = element;
      maxBuildingIndex = index;
    }
  }

  let leftMax = 0;
  let totalWater = 0;

  for (let index = 0; index < maxBuildingIndex; index++) {
    if (leftMax < array[index]) {
      leftMax = array[index];
    }
    totalWater = totalWater + leftMax - array[index];
  }

  let rightMax = 0;

  for (let index = array.length - 1; index > maxBuildingIndex; index--) {
    if (rightMax < array[index]) {
      rightMax = array[index];
    }
    totalWater = totalWater + rightMax - array[index];
  }

  console.log("max", maxBuilding, maxBuildingIndex, totalWater);
}

rainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
//Complexity Analysis:
// Time Complexity: O(n).
// Only one traversal of the array is needed, So time Complexity is O(n).
// Space Complexity: O(n).
// Two extra array is needed each of size n.
