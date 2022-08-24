function isSafe(rowKey, colKey, A) {
  return (
    rowKey >= 0 &&
    colKey >= 0 &&
    rowKey < A.length &&
    colKey < A[0].length &&
    A[rowKey][colKey] === 1
  );
}

function checkRotten(row, col, A, visited) {
  let rowKey = [-1, 0, 1, 0];
  let colKey = [0, 1, 0, -1];
  let min = 0;
  for (let k = 0; k < 4; k++) {
    if (isSafe(row + rowKey[k], col + colKey[k], A)) {
      A[row + rowKey[k]][col + colKey[k]] = 2;
      min = 1;
    }
  }

  return min;
}

function Rotten(A) {
  let visited = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    visited[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 2) {
        const track = checkRotten(i, j, A, visited);
        count = track + count;
      }
    }
  }
  console.log("visited", visited, count);
}

let A = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
Rotten(A);
