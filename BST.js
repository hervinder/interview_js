class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}


class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        if (data === null) {
            return null;
        }
        if (this.root === null) {
            this.root = new Node(data);
        }
        else {
            this.insertNode(this.root, data)

        }


    }
    insertNode(node, data) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
                return;
            }
            else {

                return this.insertNode(node.left, data);
            }
        }
        else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                return;
            }
            else {

                return this.insertNode(node.right, data);
            }

        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, data) {

        if (node) {
            if (data < node.data) {
                node.left = this.removeNode(node.left, data);
            }
            else if (data > node.data) {
                node.right = this.removeNode(node.right, data);
            }
            else if (node.left && node.right) {
                node.data = this.findMinNode(node.right);
                node.right = this.removeNode(node.right, data);
            }
            else {
                node = node.left || node.right;
            }
        }
        return node;
    }
    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;

    }
    inOrder() {
        this._inOrderRecursive(this.root);
        this._inOrderWithoutRecursion(this.root);

    }
    _inOrderRecursive(node) {
        if (node != null) {

            this._inOrderRecursive(node.left);
            console.log("node", node.data);
            this._inOrderRecursive(node.right);
        }

    }
    findNodeLeft(node) {

    }
    _inOrderWithoutRecursion(node) {
        let nodeStack = [];
        while (node.left) {
            nodeStack.push(node)
            node = node.left;
        }
        if (nodeStack.length > 0) {
            let current = nodeStack.pop();
            console.log("inorder", current.data);
            if (current.right != null) {
                this._inOrderWithoutRecursion(current.right);
            }
        }
        console.log("node", nodeStack);

    }
    postOrder() {
        this._postOrderRecursive(this.root);
    }
    _postOrderRecursive(node) {
        if (node != null) {

            this._postOrderRecursive(node.left);
            this._postOrderRecursive(node.right);
            console.log("node", node.data);
        }
    }

    preOrder() {
        this._preOrderRecursive(this.root);
        this._preOrderWithoutRecursion(this.root);
    }

    _preOrderRecursive(node) {
        if (node != null) {
            console.log("node", node.data);
            this._preOrderRecursive(node.left);
            this._preOrderRecursive(node.right);
        }

    }
    _preOrderWithoutRecursion(node) {
        let nodeStack = [];
        nodeStack.push(node);

        while (nodeStack.length > 0) {


            let current = nodeStack.pop();


            console.log("current", current.data);

            if (current.right != null) {
                nodeStack.push(current.right);
            }
            if (current.left != null) {
                nodeStack.push(current.left);
            }

        }

    }
    print() {
        console.log("bst", this.root);
    }
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

BST.print();


// Insert Case
//insert(data) – It creates a new node with a value data, if the tree is empty it add this node to tree and make it a root, otherwise it calls insert(node, data).
//insertNode(node, data) – It compares the given data with the data of current node and moves left or right accordingly and recur until it finds a correct node with a null value where new node can be added.



// BST.remove(27);
BST.print();



/*  Delete Case
While deleting a node from the tree their are three different scenarios as follows:-

Deleting the leaf node – As leaf node do not have any children hence they can be easily removed and null is returned to the parent node
Deleting a node with one child – If a node have a left child then we update the pointer of the parent node to the left child of the node to be deleted and similarly if a node have a right child then we update the pointer of the parent node to the right child of the node to be deleted
Deleting a node with two children – In order to delete a node with two children we find the node with minimum value in its right subtree and replace this node with the minimum valued node and remove the minimum valued node from the tree

*/




/**************** Pre order-- Visit left Right(VLR)  */

// BST.preOrder();

/**************** Pre order without Recursion-- Visit left Right(VLR)
 *
 *
 * You start traversal by pushing the root node into Stack and loop until Stack is empty. In each iteration, you pop the last element from Stack and print its value. That means you visited it. Now, push the left and right nodes into Stack if they are not null.
 * Create an empty Stack
 *  Push the root into Stack
 * Loop until Stack is empty
 * Pop the last node and print its value
 * Push right and left node if they are not null
 * Repeat from step 4 to 6 again.
 */

/**************** In order--  left Visit Right(VLR)  */
BST.inOrder();


/**************** Inorder order without Recursion--  left Visit Right(LVR)
 *
 *
1) Create an empty stack S.
2) Initialize current node as root
3) Push the current node to S and set current = current->left until current is NULL
4) If current is NULL and stack is not empty then
     a) Pop the top item from stack.
     b) Print the popped item, set current = popped_item->right
     c) Go to step 3.
5) If current is NULL and stack is empty then we are done.
 */


 // BST POSTORDER
/****************
Algorithm Postorder(tree)
  1. Traverse the left subtree, i.e., call Postorder(left-subtree)
  2. Traverse the right subtree, i.e., call Postorder(right-subtree)
  3. Visit the root

  */