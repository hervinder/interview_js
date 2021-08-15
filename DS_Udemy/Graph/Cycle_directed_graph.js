class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.adjacencyList[v1] = [];
      this.adjacencyList[v1].push(v2);
    } else {
      this.adjacencyList[v1].push(v2);
    }

    // if (this.adjacencyList[v2]) {
    //   this.adjacencyList[v2].push(v1);
    // }
  }

  depthFirstRecursive(vertex, visited, recursiceStack) {
    if (visited[vertex] == false) {
      visited[vertex] = true;
      recursiceStack[vertex] = true;

      for (const key in this.adjacencyList[vertex]) {
        const v = this.adjacencyList[vertex][key];
        if (!visited[v]) {
          if (this.depthFirstRecursive(v, visited, recursiceStack)) {
            return true;
          }
        } else if (recursiceStack[vertex]) {
          return true;
        }
      }
    }

    recursiceStack[vertex] = false;
    return false;
  }
}

function cyclic(vertex, edges) {
  let g = new Graph();

  // for (let index = 1; index <= vertex; index++) {
  //   g.addVertex(index);
  // }

  for (let index = 0; index < edges.length; index++) {
    g.addEdge(edges[index][0], edges[index][1]);
  }
  let visited = {};
  let recursiceStack = {};
  let adjacencyList = g.adjacencyList;
  let cyclic = false;

  for (const key in adjacencyList) {
    visited[key] = false;
    recursiceStack[key] = false;
  }

  for (const key in adjacencyList) {
    if (g.depthFirstRecursive(key, visited, recursiceStack)) {
      cyclic = true;
      break;
    }
  }

  console.log("cyclic", cyclic);
  console.log("g", g.adjacencyList);
}

// cyclic(5, [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ]);

cyclic(5, [
  [0, 1],
  [1, 2],
  [2, 0],
  [0, 2],
  [2, 3],
  [3, 3],
]);

// Detect cycle in an undirected graph
// Time Complexity: O(A + M) where A is number of vertices in the graph and M is number of edges in the graph.
// Space Compelxity: O(A).
