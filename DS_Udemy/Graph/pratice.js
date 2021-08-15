function isSafe(M, row, col, visited) {
  console.log(row, col);
  return (
    row < M.length &&
    col < M[0].length &&
    row >= 0 &&
    col >= 0 &&
    M[row][col] == 1
  );
}

function checkRotten(M, row, col, visited) {
  let rowKey = [0, -1, 1, 0];
  let colKey = [-1, 0, 0, 1];
  let min = 0;
  for (let k = 0; k < 8; k++) {
    if (isSafe(M, row + rowKey[k], col + colKey[k], visited)) {
      M[row + rowKey[k]][col + colKey[k]] = 2;
      visited[row + rowKey[k]][col + colKey[k]] = true;
      min = 1;
    }
  }

  return min;
}

function Rotten(M) {
  let visited = [];
  let track = 0;
  for (let i = 0; i < M.length; i++) {
    visited[i] = [];
    for (let j = 0; j < M[0].length; j++) {
      visited[i][j] = false;
    }
  }
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      if (M[i][j] == 2) {
        const count = checkRotten(M, i, j, visited);
        track = count + track;
      }
    }
  }

  console.log("track", track);
}

let A = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
Rotten(A);
