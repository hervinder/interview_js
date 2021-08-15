class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }
  insertNode(value) {
    let node = this.root;
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      while (node) {
        if (value == node.value) {
          console.log("already exists");
          return false;
        } else if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return false;
          } else {
            node = node.left;
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return false;
          } else {
            node = node.right;
          }
        }
      }
    }
  }

  searchNode(value) {
    let node = this.root;
    if (value == null) {
      return false;
    } else {
      if (value === node.value) {
        console.log("found", value);
        return false;
      } else if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        console.log("not found");
      }
    }
  }

  BFS() {
    let node = this.root;
    let queue = [];
    if (this.root == null) {
      console.log("emoty");
      return false;
    } else {
      queue.push(node);

      while (node && queue.length > 0) {
        let newNode = queue.shift();
        console.log(newNode.value);
        if (newNode.left) {
          queue.push(newNode.left);
        }
        if (newNode.right) {
          queue.push(newNode.right);
        }
      }
    }
  }

  connect(node) {
    if (this.root == null) {
      console.log("emoty");
      return false;
    }

    let result = [];

    function orderlevelDP(node, level) {
      if (node == null) {
        return;
      }

      if (result[level]) {
        let nodePrevious = result[level][result[level].length - 1];
        nodePrevious.next = node;
        result[level].push(node);
      } else {
        result[level] = [];
        result[level].push(node);
      }
      if (node.left) {
        orderlevelDP(node.left, level + 1);
      }
      if (node.right) {
        orderlevelDP(node.right, level + 1);
      }
    }

    orderlevelDP(node, 0);

    console.log("connect", result);
  }

  orderLevel(node) {
    if (this.root == null) {
      console.log("emoty");
      return false;
    }

    let result = [];

    function orderlevelDP(node, level) {
      if (node == null) {
        return;
      }

      if (result[level]) {
        result[level].push(node.value);
      } else {
        result[level] = [];
        result[level].push(node.value);
      }
      if (node.left) {
        orderlevelDP(node.left, level + 1);
      }
      if (node.right) {
        orderlevelDP(node.right, level + 1);
      }
    }

    orderlevelDP(node, 0);

    console.log("result", result);
  }

  hasPathSum() {
    let sum = 22;
    let totalSum = 22;
    let matched = false;
    let result = [];
    function preOrderDFS(node, sum, targetArr) {
      if (node == null) {
        return;
      }
      sum = sum - node.value;
      let newArr = [...targetArr];

      if (sum < 0) {
        sum = totalSum;
      } else {
        newArr.push(node.value);
      }

      // if (node.left === null && node.right === null) {
      if (sum === 0) {
        result.push(newArr);
        matched = true;
      }
      // }

      preOrderDFS(node.left, sum, newArr);
      preOrderDFS(node.right, sum, newArr);
    }

    preOrderDFS(this.root, sum, []);
    console.log("matched", matched, result);
  }

  hsPathSumIII() {
    let path = [];
    let count = 0;
    function preOrderDFS(node, targetSum) {
      if (node === null) {
        return;
      }

      path.push(node.value);
      preOrderDFS(node.left, targetSum);
      preOrderDFS(node.right, targetSum);
      let sum = 0;
      for (let index = path.length - 1; index >= 0; index--) {
        const element = path[index];
        sum = element + sum;
        if (sum == targetSum) {
          count = count + 1;
          console.log("targetSum", path);
        }
      }

      path.pop();
    }
    preOrderDFS(this.root, 12);
    console.log("coutn", count);
  }

  longestDiameter() {
    //Time complexity: O(N)
    //Sace complexity: O(N)
    //        10
    //    5 .     13
    // 2 .  7 . 11 .  16

    let diameter = 0;
    function longestPath(node) {
      if (node == null) {
        return 0;
      }
      const ltree = longestPath(node.left);
      const rtree = longestPath(node.right);

      diameter = Math.max(diameter, ltree + rtree);

      return Math.max(ltree, rtree) + 1;
    }
    longestPath(this.root);
    console.log("diameter", diameter);
  }
}

var bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(12);
bst.insertNode(11);
bst.insertNode(2);
bst.insertNode(16);
bst.insertNode(7);
//        10
//    5 .     13
// 2 .  7 . 11 .  16
