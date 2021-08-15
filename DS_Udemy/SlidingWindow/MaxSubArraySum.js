// Side Window Pattern approach time comaplexity   o(n)  finding maximum subArray sum
function maxSum(arr, n) {
  var max = 0;
  var temp = 0;

  for (let i = 0; i < n; i++) {
    max = max + arr[i];
  }

  for (var j = 1; j < arr.length; j++) {
    temp = max - arr[j - 1] + arr[j + n - 1];
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

function maxSum(array, window) {
  let maxSum = 0;
  let tempSum = 0;

  for (let index = 0; index < window; index++) {
    maxSum = maxSum + array[index];
  }

  for (let index = 1; index <= array.length - window; index++) {
    tempSum = maxSum - array[index - 1] + array[index + window - 1];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

function maxSum(array, window) {
  let maxsum = 0;
  let tempSum = 0;
  for (let index = 0; index < window; index++) {
    maxsum = maxsum + array[index];
  }

  for (let index = 1; index < array - window; index++) {
    tempSum = maxsum - array[index - 1] + array[index + window - 1];
    maxsum = Math.max(maxsum, tempSum);
  }

  return tempSum;
}

maxSum([1, 2, 3, 4, 5, 7], 3);

// Time Complexity
// The time complexity of the above algorithm will be O(N).
// Space Complexity
// The algorithm runs in constant space O(1).
