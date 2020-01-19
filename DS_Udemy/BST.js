class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insertNode(value) {
        let newNode = new Node(value);
        let node = this.root;

        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        while (node) {

            if (value === node.data) {
                return false;
            }
            if (value < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                    return this
                }
                else {
                    node = node.left;
                }

            }


            if (value > node.data) {
                if (node.right === null) {
                    node.right = newNode;
                    return this;
                }
                else {
                    node = node.right;
                }

            }

        }


    }

    searchNode(value) {
        let node = this.root;
        if (this.root === null) {
            return "not found";
        }
        else {
            while (true) {

                if (node === null) {
                    return "not found"
                }
                if (value === node.data) {
                    return node;
                }
                else if (value < node.data) {
                    node = node.left;
                }
                else if (value > node.data) {
                    node = node.right;
                }
                else {
                    return "not found"
                }

            }
        }

    }
    BreadthFirstSearch() {

        let queue = [];
        let visited = [];

        if (this.root === null) {
            return false;
        }
        else {
            queue.push(this.root);
            while (queue.length > 0) {

                let dequeue = queue.shift();
                visited.push(dequeue.data);
                if (dequeue.left) {
                    queue.push(dequeue.left);
                }
                if (dequeue.right) {
                    queue.push(dequeue.right);
                }
            }

        }
        return visited;
    }

    DFS_Preorder() {

        function DFS_Preorder_recursively(node) {
            if (node === null) {
                return;
            }
            console.log(node.data);
            DFS_Preorder_recursively(node.left);
            DFS_Preorder_recursively(node.right);
        }
        DFS_Preorder_recursively(this.root);

    }

    DFS_Postorder() {

        function DFS_Postorder_recursively(node) {
            if (node === null) {
                return;
            }

            DFS_Postorder_recursively(node.left);
            DFS_Postorder_recursively(node.right);
            console.log(node.data);
        }
        DFS_Postorder_recursively(this.root);

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


}

var bst = new BinarySearchTree();
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(13);
bst.insertNode(11);
bst.insertNode(2);
bst.insertNode(16);
bst.insertNode(7);

//        10 
//    5 .     13
// 2 .  7 . 11 .  16 

console.log("dfdfdf")