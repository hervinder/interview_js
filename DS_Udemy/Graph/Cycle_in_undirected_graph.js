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
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2].push(v1);
    }
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

  DFS(startVertex, parent) {
    let visited = {};
    let cyclic = false;
    let adjacencyList = this.adjacencyList;
    function depthFirst(vertex, parent) {
      visited[vertex] = true;
      adjacencyList[vertex].forEach((v) => {
        if (visited[v] && v != parent) {
          cyclic = true;
          return true;
        } else {
          if (!visited[v]) {
            return depthFirst(v, vertex);
          }
        }
      });
    }

    console.log(depthFirst(startVertex, parent));
    console.log("cyclic", cyclic);
  }

  DFScyclic(vertex, parent, visited) {
    if (visited[vertex] == false) {
      visited[vertex] = true;

      for (const key in this.adjacencyList[vertex]) {
        const v = this.adjacencyList[vertex][key];
        if (!visited[v]) {
          if (this.DFScyclic(v, vertex, visited)) {
            return true;
          }
        } else if (v != parent) {
          return true;
        }
      }
    }
    return false;
  }
}

function cyclic(vertex, edges) {
  let g = new Graph();
  let cyclic = false;
  let visited = {};
  for (let index = 1; index <= vertex; index++) {
    g.addVertex(index);
  }

  for (let index = 0; index < edges.length; index++) {
    g.addEdge(edges[index][0], edges[index][1]);
  }

  for (const key in g.adjacencyList) {
    visited[key] = false;
  }

  for (const key in g.adjacencyList) {
    if (g.DFScyclic(key, null, visited)) {
      cyclic = true;
      break;
    }
  }
  console.log("cylic", cyclic);

  console.log("g", g.adjacencyList);
}

cyclic(5, [
  [1, 2],
  [3, 1],
  [2, 3],
  [1, 4],
  [4, 5],
]);

// Detect cycle in an undirected graph
// Time Complexity: O(A + M) where A is number of vertices in the graph and M is number of edges in the graph.
// Space Compelxity: O(A).
