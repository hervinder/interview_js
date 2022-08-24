class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.depth = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    let node = this.root;
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    while (node) {
      if (this.root.value === value) {
        console.log("already exist");
        return;
      }

      if (node.value > value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else {
          node = node.left;
        }
      }

      if (node.value < value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else {
          node = node.right;
        }
      }
    }
  }

  BreathFirstSearch() {
    let node = this.root;
    let queue = [];
    let result = [];
    if (node === null) {
      console.log("no node present");
      return;
    }
    queue.push(node);
    while (node && queue.length > 0) {
      const shiftedNode = queue.shift();
      result.push(shiftedNode.value);

      if (shiftedNode.left) {
        queue.push(shiftedNode.left);
      }
      if (shiftedNode.right) {
        queue.push(shiftedNode.right);
      }
    }
    console.log("result", result);
  }

  DFS_PreOrder() {
    let node = this.root;

    function preOrder(node) {
      if (node === null) {
        return;
      }
      console.log("DFS_PreOrder", node.value);
      if (node.left) {
        preOrder(node.left);
      }

      if (node.right) {
        preOrder(node.right);
      }
    }

    preOrder(node);
  }

  DFS_PostOrder() {
    let node = this.root;

    function postOrder(node) {
      if (node === null) {
        return;
      }

      if (node.left) {
        postOrder(node.left);
      }

      if (node.right) {
        postOrder(node.right);
      }

      console.log("DFS_PostOrder", node.value);
    }

    postOrder(node);
  }

  DFS_InOrder() {
    let node = this.root;

    function inOrder(node) {
      if (node === null) {
        return;
      }

      if (node.left) {
        inOrder(node.left);
      }
      console.log("DFS_InOrder", node.value);

      if (node.right) {
        inOrder(node.right);
      }
    }

    inOrder(node);
  }

  zigzagOrder() {
    let node = this.root;
    let treeLevels = {};

    function zigzag(node, level) {
      if (node === null) {
        return;
      }

      if (treeLevels[level]) {
        treeLevels[level].push(node.value);
      } else {
        treeLevels[level] = [];
        treeLevels[level].push(node.value);
      }

      zigzag(node.left, level + 1);
      zigzag(node.right, level + 1);
    }
    zigzag(node, 0);

    let result = [];
    Object.keys(treeLevels).forEach((level) => {
      if (level % 2 != 0) {
        const reverse = treeLevels[level].reverse();
        result = [...result, ...reverse];
      } else {
        result = [...result, ...treeLevels[level]];
      }
    });
    console.log("zigzag", treeLevels, result);
  }

  MinDepthTree() {
    let node = this.root;
    // node.depth = 1;
    let queue = [];
    let level = 1;
    if (node === null) {
      console.log("no node present");
      return;
    }
    queue.push(node);
    while (node && queue.length > 0) {
      const shiftedNode = queue.shift();

      if (shiftedNode.left === null && shiftedNode.right === null) {
        console.log("depth", shiftedNode.depth);
        return;
      } else {
        const depth = shiftedNode.depth;
        if (shiftedNode.left) {
          shiftedNode.left.depth = depth + 1;
          queue.push(shiftedNode.left);
        }
        if (shiftedNode.right) {
          shiftedNode.right.depth = depth + 1;
          queue.push(shiftedNode.right);
        }
      }
    }
  }

  hasPathSum() {
    let node = this.root;
    const sum = 22;
    let matched = false;
    let nodeSum = [];
    function preOrderRecursion(node, sum, trackNode) {
      if (node === null) {
        return;
      }

      sum = sum - node.value;
      let newArr = [...trackNode];

      newArr.push(node.value);
      console.log(node.value, sum);
      if (node.left == null && node.right == null) {
        if (sum == 0) {
          nodeSum.push(newArr);
          matched = true;
          return;
        }
      }

      if (node.left) {
        preOrderRecursion(node.left, sum, newArr);
      }
      if (node.right) {
        preOrderRecursion(node.right, sum, newArr);
      }
    }

    preOrderRecursion(node, sum, []);
    console.log("matched", matched, nodeSum);
  }

  hasPathSumII() {
    let node = this.root;
    const sum = 24;
    const totalSum = 24;
    let matched = false;
    let pathSum = [];
    function preOrderRecursion(node, sum, trackArray) {
      if (node === null) {
        return;
      }

      sum = sum - node.value;
      const newArr = [...trackArray];

      if (sum < 0) {
        sum = totalSum;
      } else {
        newArr.push(node.value);
      }

      if (node.value === totalSum) {
        pathSum.push([node.value]);
      }

      if (sum === 0) {
        pathSum.push(newArr);
        matched = true;
        return;
      }

      preOrderRecursion(node.left, sum, newArr);
      preOrderRecursion(node.right, sum, newArr);
    }
    preOrderRecursion(node, sum, []);
    console.log("hasPathSumII", pathSum);
  }

  geeksforgeeksPathSumIII() {
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
    preOrderDFS(this.root, 7);
    console.log("coutn", count);
  }
}

//        10
//    5 .     13
// 2 .  7 . 11 .  16

var bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(13);
bst.insertNode(11);
bst.insertNode(2);
bst.insertNode(16);
bst.insertNode(7);

// bst.DFS_PreOrder();
// bst.DFS_PostOrder();
// bst.DFS_InOrder();

// bst.zigzagOrder();
// bst.hasPathSumII();

//insert Time Comp: avergae case log(n) worst case; O(n)
//search Time Comp: avergae case log(n) worst case; O(n)
//        10
//    5 .     13
// 2 .  7 . 11 .  16

// Algorithm	Average	   Worst case
// Space		O(n)	    O(n)
// Search		O(log n)	O(n)
// Insert		O(log n)	O(n)
// Delete		O(log n)	O(n)
