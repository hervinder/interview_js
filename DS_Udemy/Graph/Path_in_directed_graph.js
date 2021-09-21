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

let g = new Graph();

function Path(vertex, edges) {
  let g = new Graph();

  for (let index = 1; index <= vertex; index++) {
    g.addVertex(index);
  }

  for (let index = 0; index < edges.length; index++) {
    g.addEdge(edges[index][0], edges[index][1]);
  }

  g.depthFirstRecursive(1, 2);
  console.log("adjacencyList", g.adjacencyList);
}

Path(5, [
  [1, 2],
  [4, 1],
  [2, 4],
  [3, 4],
  [5, 2],
  [1, 3],
]);

// Time Complexity: O(A + M) where A is number of vertices in the graph and M is number of edges in the graph.
// Space Compelxity: O(A).
