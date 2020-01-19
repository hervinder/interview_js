class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {


    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }


    }


    pop() {
        var poperNode = this.tail;
        if (this.length <= 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        else {
            this.tail = poperNode.prev;
            this.tail.next = null;
            poperNode.prev = null;
            this.length--;
        }
    }

    shift() {
        var poperNode = this.head;


        if (this.length <= 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        else {
            this.head = poperNode.next;
            this.head.prev = null;
            poperNode.next = null;
            this.length--;
        }
    }

    unshift(value) {
        var poperNode = this.head;
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = value;
            this.tail = value;
            this.length++
        }
        else {
            this.head = newNode;
            this.head.prev = null;
            this.head.next = poperNode;
            poperNode.prev = this.head;
            this.length++;

        }

    }

    get(index) {
        var traversal = null;

        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index >= 0 && index <= (this.length / 2)) {
            traversal = this.head;

            for (var i = 0; i < index; i++) {
                if (index === i) {
                    break;
                }
                traversal = traversal.next;
            }

        }
        else {
            traversal = this.tail;
            if (index >= 0 && index < (this.length / 2)) {

                for (var i = 0; i < index; i++) {
                    if (index === i) {
                        break;
                    }
                    traversal = traversal.prev;
                }

            }
        }
        return traversal;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let newNode = new Node(value);
        if (index === 0) {
            this.unshift(value)
        }
        if (index === this.length) {
            this.push(value)
        }
        else {
            let foundNode = this.get(index);
            var prevNode = foundNode.prev;
            newNode.next = foundNode;
            newNode.prev = prevNode;
            foundNode.prev = newNode;
            prevNode.next = newNode;
            this.length++;

        }

    }
    remove(index, value) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let newNode = new Node(value);
        if (index === 0) {
            this.shift()
        }
        if (index === this.length) {
            this.pop()
        }
        else {
            let foundNode = this.get(index);
            var prevNode = foundNode.prev;
            var nextNode = foundNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            foundNode.next = null;
            foundNode.prev = null;
            this.length--;

        }

    }

}


let secondNode = new DoublyLinkedList();
secondNode.push("1");
secondNode.push("2");
secondNode.push("3");
secondNode.push("4")
