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
  /** right solution for has path sum II  */
  hasPathSumII() {
    let node = this.root;
    let sum = 22;
    let matched = false;
    // let trackNode = [];
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

    return nodeSum;
  }
  hasPathSumII() {
    let node = this.root;
    let sum = 7;
    let totalSum = 7;
    let matched = false;
    // let trackNode = [];
    let nodeSum = [];
    function preOrderRecursion(node, sum, trackNode) {
      if (node === null) {
        return;
      }

      sum = sum - node.value;
      let newArr = [...trackNode];

      if (sum < 0) {
        sum = totalSum;
      } else {
        newArr.push(node.value);
      }

      console.log(node.value, sum);
      //   if (node.left == null && node.right == null) {
      if (sum == 0) {
        nodeSum.push(newArr);
        matched = true;
        return;
      }
      //   }

      if (node.left) {
        preOrderRecursion(node.left, sum, newArr);
      }
      if (node.right) {
        preOrderRecursion(node.right, sum, newArr);
      }
    }

    preOrderRecursion(node, sum, []);

    return nodeSum;
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
   * @param {number} targetSum
   * @return {number}
   */
  pathSumIII() {
    let node = this.root;
    let hashmap = {};
    let count = 0;
    let targetSum = 13;
    function preOrderRecursion(node, currSum) {
      if (node === null) {
        return;
      }

      currSum = currSum + node.value;

      if (currSum == targetSum) {
        count++;
      }

      if (hashmap[currSum - targetSum]) {
        count = count + hashmap[currSum - targetSum] || 0;
      }

      hashmap[currSum] = (hashmap[currSum] || 0) + 1;

      if (node.left) {
        preOrderRecursion(node.left, currSum);
      }
      if (node.right) {
        preOrderRecursion(node.right, currSum);
      }
      hashmap[currSum] = hashmap[currSum] - 1;
    }

    preOrderRecursion(node, 0);
    return count;
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
    preOrderDFS(this.root, 12);
    console.log("coutn", count);
  }
  longestDiameter() {
    //Time complexity: O(N)
    //Sace complexity: O(N)
    let diameter = 0;
    function longestPath(node) {
      if (node == null) return 0;
      // recursively find the longest path in
      // both left child and right child
      let leftPath = longestPath(node.left);
      let rightPath = longestPath(node.right);

      // update the diameter if left_path plus right_path is larger
      diameter = Math.max(diameter, leftPath + rightPath);

      // return the longest one between left_path and right_path;
      // remember to add 1 for the path connecting the node and its parent
      return Math.max(leftPath, rightPath) + 1;
    }
    longestPath(this.root);
    console.log("diameter", diameter);
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

//insert Time Comp: avergae case log(n) worst case; O(n)
//search Time Comp: avergae case log(n) worst case; O(n)
//        10
//    5 .     13
// 2 .  7 . 11 .  16
//       9
// Algorithm	Average	   Worst case
// Space		O(n)	    O(n)
// Search		O(log n)	O(n)
// Insert		O(log n)	O(n)
// Delete		O(log n)	O(n)

// reverse the node ouput [16,11,7,2,13,5,10]
//Time  O(n) Space  O(n)

// Time complexity
// The time complexity of the above algorithm is O(N)O, where ‘N’ is the total number of nodes in the tree.
// This is due to the fact that we traverse each node once.
// Space complexity
// The space complexity of the above algorithm will be O(N) in the worst case.
// This space will be used to store the recursion stack.
// The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
bst.hasPathSum();

//Count Paths for a Sum
//https://github.com/cl2333/Grokking-the-Coding-Interview-Patterns-for-Coding-Questions/blob/master/8.%20Pattern%20Tree%20Depth%20First%20Search/Count%20Paths%20for%20a%20Sum%20(medium).py
bst.pathSumIII();
