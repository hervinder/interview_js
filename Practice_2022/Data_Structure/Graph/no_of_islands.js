function isSafe(rowKey, colKey, A, visited) {
  return (
    rowKey >= 0 &&
    colKey >= 0 &&
    rowKey < A.length &&
    colKey < A[0].length &&
    A[rowKey][colKey] == 1 &&
    !visited[rowKey][colKey]
  );
}

function checkIsland(row, col, A, visited) {
  let rowKey = [-1, 0, 1, 0];
  let colKey = [0, 1, 0, -1];
  visited[row][col] = true;
  for (let k = 0; k < 4; k++) {
    if (isSafe(row + rowKey[k], col + colKey[k], A, visited)) {
      checkIsland(row + rowKey[k], col + colKey[k], A, visited);
    }
  }
}

function island(A) {
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
      if (A[i][j] == 1 && !visited[i][j]) {
        checkIsland(i, j, A, visited);
        count++;
      }
    }
  }
  console.log("checkIsland", count);
}

let M = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

island(M);
