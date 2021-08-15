// Naive approach time comaplexity   o(n^2) and space o(1)

function sumZero(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 4]);

// Multi pointer approach time comaplexity   o(n) and space o(1)

function sumZero(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// time complexity O(n) and space O(1)
function CountUniqueValues(arr) {
  let i = 0;
  let j = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log("i",i+1);
}



CountUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 12]);
