let result1 = [];
function flattern(arr) {
  if (arr.length === 0) {
    return;
  }

  if (Array.isArray(arr[0])) {
    flattern(arr[0]);
    flattern(arr.splice(1));
  } else {
    result1.push(arr[0]);
    flattern(arr.splice(1));
  }
}

flattern([[1], [2, 3], [4], 5]);
