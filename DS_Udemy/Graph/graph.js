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

  depthFirstRecursive(startVertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function depthFirst(vertex) {
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return depthFirst(v);
        }
      });
    }
    depthFirst(startVertex);
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

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
