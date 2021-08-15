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
  }

  dfs(startVertex, visited, result) {
    let adjacencyList = this.adjacencyList;
    function depthFirst(vertex) {
      visited[vertex] = true;

      adjacencyList[vertex] &&
        adjacencyList[vertex].forEach((v) => {
          if (!visited[v]) {
            return depthFirst(v);
          }
        });
      result.push(vertex);
    }
    depthFirst(startVertex);
  }
}

function topological(vertex, edges) {
  let g = new Graph();

  for (let index = 0; index < edges.length; index++) {
    g.addEdge(edges[index][0], edges[index][1]);
  }
  let visited = {};
  let result = [];
  let adjacencyList = g.adjacencyList;

  for (const key in adjacencyList) {
    visited[key] = false;
  }

  for (const key in adjacencyList) {
    if (!visited[key]) {
      g.dfs(key, visited, result);
    }
  }
  console.log("result", result);
  console.log("g", g.adjacencyList);
}

// topological(5, [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ]);

topological(5, [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1],
]);

// Detect cycle in an undirected graph
// Time Complexity: O(A + M) where A is number of vertices in the graph and M is number of edges in the graph.
// Space Compelxity: O(A).
