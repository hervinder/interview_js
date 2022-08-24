class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  DFS() {
    let visited = {};
    let result = [];
    let adjacencyList = this.adjacencyList;
    function dfsRecursively(vertex) {
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((siblingVertex) => {
        if (!visited[siblingVertex]) {
          return dfsRecursively(siblingVertex);
        }
      });
    }
    dfsRecursively("A");
    console.log("result", result);
  }

  BFS() {
    let visited = {};
    let result = [];
    let adjacencyList = this.adjacencyList;
    let queue = [];
    queue.push("A");
    visited["A"] = true;
    function bfsRecursively(vertex) {
      while (queue.length > 0) {
        let firstVertex = queue.shift();

        result.push(firstVertex);
        adjacencyList[firstVertex].forEach((siblingVertex) => {
          if (!visited[siblingVertex]) {
            visited[siblingVertex] = true;
            queue.push(siblingVertex);
          }
        });
      }
    }

    bfsRecursively("A");
    console.log("result", result);
  }

  //https://www.youtube.com/watch?v=hwCWi7-bRfI&ab_channel=takeUforward
  Shortest_UNWEIGTED_PATH_BFS() {
    let result = [];
    let adjacencyList = this.adjacencyList;
    let queue = [];
    let distance = {};
    let visited = {};
    Object.keys(adjacencyList).forEach((v) => {
      console.log(v);
      distance[v] = Number.MAX_VALUE;
    });

    queue.push("E");

    visited["E"] = true;
    distance["E"] = 0;
    function bfsRecursively(vertex) {
      while (queue.length > 0) {
        let firstVertex = queue.shift();
        result.push(firstVertex);
        visited[firstVertex] = true;
        adjacencyList[firstVertex].forEach((siblingVertex) => {
          if (!visited[siblingVertex]) {
            const distanceFromSource = distance[firstVertex] + 1;
            if (distanceFromSource < distance[siblingVertex]) {
              distance[siblingVertex] = distanceFromSource;
            }
            queue.push(siblingVertex);
          }
        });
      }
    }

    bfsRecursively("E");
    console.log("result", result);
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

g.Shortest_UNWEIGTED_PATH_BFS();

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

/* */

// function DFS_cyclic(vertex, parent, visited, adjacencyList) {
//   if (!visited[vertex]) {
//     visited[vertex] = true;

//     for (const key in adjacencyList[vertex]) {
//       const v = adjacencyList[vertex][key];
//       if (!visited[v]) {
//         if (DFS_cyclic(v, vertex, visited, adjacencyList)) {
//           return true;
//         }
//       } else if (v != parent) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// function cycle_undirected_graph(length, vertexList) {
//   let g = new Graph();
//   let visited = {};
//   let adjacencyList = g.adjacencyList;
//   let cyclic = false;
//   for (let index = 1; index <= length; index++) {
//     g.addVertex(index);
//   }

//   for (let index = 0; index < vertexList.length; index++) {
//     g.addEdge(vertexList[index][0], vertexList[index][1]);
//   }

//   for (let index = 1; index <= length; index++) {
//     visited[index] = false;
//   }

//   for (const key in adjacencyList) {
//     if (adjacencyList.hasOwnProperty(key)) {
//       if (DFS_cyclic(key, null, visited, adjacencyList)) {
//         cyclic = true;
//         break;
//       }
//     }
//   }
//   console.log("g", g);
//   console.log("gcyclic", cyclic);
// }
// cycle_undirected_graph(5, [
//   [1, 2],
//   [3, 1],
//   [2, 3],
//   [1, 4],
//   [4, 5],
// ]);
