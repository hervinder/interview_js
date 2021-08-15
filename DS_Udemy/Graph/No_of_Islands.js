class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1].push(v2);
    }
    // if (this.adjacencyList[v2]) {
    //   this.adjacencyList[v2].push(v1);
    // }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let vertex2 = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex2, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(startVertex, validVertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    let validPath = false;
    function depthFirst(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      if (validVertex === result[result.length - 1]) {
        validPath = true;
        return;
      }
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return depthFirst(v);
        }
      });
    }
    depthFirst(startVertex);
    console.log("valid", validPath);
    console.log(result);
  }

  BreadthFirstGraph(startVertex) {
    let result = [];
    let visited = {};
    let queue = [startVertex];
    visited[startVertex] = true;
    let adjacencyList = this.adjacencyList;
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    console.log(result);
  }
}

function isSafe(M, row, col, visited) {
  return (
    row < M.length &&
    row >= 0 &&
    col >= 0 &&
    col < M[0].length &&
    M[row][col] == 1 &&
    !visited[row][col]
  );
}
function DFS(M, row, col, visited) {
  let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
  let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

  visited[row][col] = true;
  for (let k = 0; k < 8; k++) {
    if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) {
      DFS(M, row + rowNbr[k], col + colNbr[k], visited);
    }
  }
}

function island(M) {
  let visited = [];
  let count = 0;
  for (let i = 0; i < M.length; i++) {
    visited[i] = [];
    for (let j = 0; j < M[0].length; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      if (M[i][j] === 1 && !visited[i][j]) {
        DFS(M, i, j, visited);
        count++;
      }
    }
  }
  console.log(count);
  console.log(visited);
}

let M = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];
island(M);

function isSafe_Rotten(M, row, col, visited) {
  return (
    row < M.length &&
    row >= 0 &&
    col >= 0 &&
    col < M[0].length &&
    M[row][col] == 1
  );
}
function Rotten_DFS(M, row, col, visited) {
  let rowNbr = [-1, 0, 1, 0];
  let colNbr = [0, 1, 0, -1];
  let tracked = 0;
  for (let k = 0; k < 4; k++) {
    if (isSafe_Rotten(M, row + rowNbr[k], col + colNbr[k], visited)) {
      M[row + rowNbr[k]][col + colNbr[k]] = 2;
      visited[row + rowNbr[k]][col + colNbr[k]] = true;
      tracked = 1;
      //   Rotten_DFS(M, row + rowNbr[k], col + colNbr[k]);
    }
  }
  return tracked;
}

function Rotten(M) {
  let visited = [];
  let count = 0;
  for (let i = 0; i < M.length; i++) {
    visited[i] = [];
    for (let j = 0; j < M[0].length; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      if (M[i][j] === 2) {
        let tr = Rotten_DFS(M, i, j, visited);
        count = count + tr;
        console.log(tr);
      }
    }
  }
  console.log("Rotten", count);
}

let A = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
Rotten(A);
