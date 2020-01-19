class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {


    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        var data = new Node(val);
        if (this.head === null) {
            this.head = data;
            this.tail = this.head;
        }
        else {
            this.tail.next = data;
            this.tail = data;
        }

        this.length++;
        return this;



    }

    pop() {
        if (!this.head) return undefined;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return;
        }
        var currentNode = this.head;
        var nextNode = currentNode.next;
        while (nextNode.next != null) {
            nextNode = nextNode.next;
            currentNode = currentNode.next
        }
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;



    }

    shift() {
        if (!this.head) return undefined;

        var currentNode = this.head;
        this.head = currentNode.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

    }
    unshift(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

    }
    get(index) {

        let currentNode = this.head;
        if (index >= this.length || index < 0) {
            return null;
        }
        for (var i = 0; i < this.length; i++) {
            if (index === i) {
                return currentNode;
            }
            else {
                currentNode = currentNode.next;
            }
        }

    }
    set(index, value) {
        let node = this.get(index);
        if (!node) {
            return false
        }
        else {
            node.val = value;
            return node;
        }

    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value)
            return;
        }
        if (index == 0) {
            this.unshift(value);
            return;
        }
        let newNode = new Node(value);
        let foundNode = this.get(index - 1);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++



    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length - 1) {
            this.pop()
            return;
        }
        if (index == 0) {
            this.shift();
            return;
        }

        let foundNode = this.get(index - 1);
        foundNode.next = foundNode.next.next;
        this.length--
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let nextNode = null;
        let prevNode = null;

        for (var i = 0; i < this.length; i++) {

            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;

        }
    }

    reverseRecursively(linked) {
        var currentNode = linked;

        if (currentNode.next === null) {
            this.head = currentNode;
            return this.head;
        }

        let temp = this.reverseRecursively(currentNode.next);

        var y = currentNode.next;
        y.next = currentNode;
        currentNode.next = null;
        return temp;
    }


}

let firstNode = new SinglyLinkedList();
firstNode.push("1");
firstNode.push("2");
firstNode.push("3");
firstNode.push("4");
// firstNode.pop()


console.log(firstNode);