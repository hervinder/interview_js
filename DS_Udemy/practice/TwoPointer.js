function twoSum(array, sum) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] + array[j] === sum) {
      return [i, j];
    } else if (array[i] + array[j] > sum) {
      j--;
    } else {
      i++;
    }
  }
}

// twoSum([1, 2, 3, 4, 6], 6);

function removeDuplicate(array) {
  let i = 0;

  for (let j = 1; j < array.length - 1; j++) {
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  array.length = i;
}

// Time : o(n)
// space: o(1)
removeDuplicate([2, 3, 3, 3, 6, 9, 9]);

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

function TripletSumZero(array) {
  let arr = array.sort();

  for (let index = 0; index < arr.length - 1; index++) {
    let x = arr[index];
    let first = index + 1;
    let last = arr.length - 1;

    while (first < last) {
      if (x + arr[first] + arr[last] === 0) {
        console.log([x, arr[first], arr[last]]);
        first++;
        last--;
      } else if (x + arr[first] + arr[last] < 0) {
        first++;
      } else {
        last--;
      }
    }
  }
}

TripletSumZero([-3, 0, 1, 2, -1, 1, -2]);
