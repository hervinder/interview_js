class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root1() {
    return this.root;
  }

  insertNode(value) {
    let node = this.root;
    if (this.root === null) {
      this.root = new Node(value);
      return false;
    }
    while (node) {
      if (node.value === value) {
        console.log("node already exist");
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

  searchNode(value) {
    let node = this.root;
    if (this.root === null) {
      return "not found";
    } else {
      while (true) {
        if (node === null) {
          return "not found";
        } else if (value < node.value) {
          node = node.left;
        } else if (value > node.value) {
          node = node.right;
        } else if (value === node.value) {
          return node.value;
        } else {
          return "not found";
        }
      }
    }
  }

  BreathFirstSearch() {
    let node = this.root;
    let queue = [];
    if (this.root == null) {
      return;
    } else {
      queue.push(node);
      while (node && queue.length > 0) {
        let deque = queue.shift();
        console.log(deque.value);
        if (deque.left) {
          queue.push(deque.left);
        }
        if (deque.right) {
          queue.push(deque.right);
        }
      }
    }
  }

  DFS_PreOrder() {
    let node = this.root;
    function preOrderRecursion(node) {
      if (node === null) {
        return;
      }
      console.log(node.value);
      if (node.left) {
        preOrderRecursion(node.left);
      }
      if (node.right) {
        preOrderRecursion(node.right);
      }
    }
    preOrderRecursion(node);
  }

  DFS_PostOrder() {
    let node = this.root;
    function postOrderRecursion(node) {
      if (node === null) {
        return;
      }
      if (node.left) {
        postOrderRecursion(node.left);
      }
      if (node.right) {
        postOrderRecursion(node.right);
      }
      console.log(node.value);
    }
    postOrderRecursion(node);
  }

  DFS_inOrder() {
    function DFS_inOrder_recursively(node) {
      if (node === null) {
        return;
      }

      DFS_inOrder_recursively(node.left);
      console.log(node.data);
      DFS_inOrder_recursively(node.right);
    }
    DFS_inOrder_recursively(this.root);
  }

  ReverseLevelOrderTraversal() {
    let node = this.root;
    let queue = [node];
    let stack = [];

    while (queue.length > 0) {
      let dequeue = queue.shift();
      stack.push(dequeue.value);

      if (dequeue.left != null) {
        queue.push(dequeue.left);
      }
      if (dequeue.right != null) {
        queue.push(dequeue.right);
      }
    }
    while (stack.length > 0) {
      let last = stack.pop();
      console.log(last);
    }
  }
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  zigzagLevelOrder() {
    let root1 = this.root;
    let result = [];
    function zigzag(node, level) {
      if (node === null) {
        return;
      }

      if (result[level] != undefined) {
        result[level].push(node.value);
      } else {
        result[level] = [node.value];
      }
      zigzag(node.left, level + 1);
      zigzag(node.right, level + 1);
    }
    zigzag(root1, 0);

    console.log("length", result.length);

    let reverseResult = result.map((row, index) => {
      if ((index + 1) % 2 == 0) {
        return row.reverse();
      } else {
        return row;
      }
    });

    return reverseResult;
  }

  connect() {
    let root = this.root;

    let result = [];
    function zigzag(node, level) {
      if (node === null) {
        return;
      }

      if (result[level] != undefined) {
        let nodeprevious = result[level][result[level].length - 1];
        nodeprevious.next = node;
        result[level].push(node);
      } else {
        result[level] = [node];
      }
      zigzag(node.left, level + 1);
      zigzag(node.right, level + 1);
    }
    zigzag(root, 0);
    console.log("root", result);
  }
}

var bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(13);
bst.insertNode(11);
bst.insertNode(2);
bst.insertNode(16);
bst.insertNode(7);
bst.connect();

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

// reverse the node ouput [16,11,7,2,13,5,10]
//Time  O(n) Space  O(n)
bst.ReverseLevelOrderTraversal();
