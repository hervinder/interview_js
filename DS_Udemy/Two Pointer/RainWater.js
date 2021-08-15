/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Examples:  

Input: arr[]   = {2, 0, 2}
Output: 2
Explanation:
The structure is like below
*/

function trap(A) {
  let lf = new Array(A.length),
    rt = new Array(A.length);

  lf[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    lf[i] = Math.max(lf[i - 1], A[i]);
  }

  let ans = 0;
  rt[A.length - 1] = A[A.length - 1];
  for (let i = A.length - 2; i >= 0; i--) {
    rt[i] = Math.max(rt[i + 1], A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    ans += Math.max(0, Math.min(lf[i], rt[i]) - A[i]);
  }
  return ans;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

//Complexity Analysis:
// Time Complexity: O(n).
// Only one traversal of the array is needed, So time Complexity is O(n).
// Space Complexity: O(n).
// Two extra array is needed each of size n.

// DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
function trapWater(A) {
  let maxBuilding = Number.MIN_VALUE;
  let totalWater = 0;
  let m = 0; // position of maxBuilding

  for (let i = 0; i < A.length; i++) {
    if (A[i] > maxBuilding) {
      maxBuilding = A[i];
      m = i;
    }
  }

  //we divide the array along the maxBuilding and consider the left side first
  //for each building rightmax is always maxBuilding, we need to calculate leftmax
  let leftmax = 0;
  for (let i = 0; i < m; i++) {
    if (A[i] > leftmax) {
      leftmax = A[i];
    }
    totalWater += leftmax - A[i];
  }

  //now we consider the right side
  //for each building leftmax is always maxBuilding, we need to calculate rightmax
  let rightmax = 0;
  for (let i = A.length - 1; i > m; i--) {
    if (A[i] > rightmax) {
      rightmax = A[i];
    }
    totalWater += rightmax - A[i];
  }

  return totalWater;
}

function trapWater(array) {
  let maxBuilding = Number.MIN_VALUE;
  let maxIndex;

  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxBuilding) {
      maxBuilding = array[index];
      maxIndex = index;
    }
  }

  let leftMax = 0;
  let totalWater = 0;
  for (let index = 0; index < maxIndex; index++) {
    if (array[index] > leftmax) {
      leftmax = array[index];
    }
    totalWater = totalWater + leftmax - array[index];
  }

  let rightMax = 0;
  for (let index = array.length - 1; index > maxIndex; index--) {
    if (array[index] > rightMax) {
      rightMax = array[index];
    }
    totalWater = totalWater + rightMax - array[index];
  }

  return totalWater;
}

trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
