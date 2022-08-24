class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(newNode) {
    const node = new Node(newNode);
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondLastNode = this.head;

      while (secondLastNode.next.next != null) {
        secondLastNode = secondLastNode.next;
      }
      this.tail = secondLastNode;
      this.tail.next = null;
      this.length--;

      console.log("secondLastNode", secondLastNode);
    }
  }
}

const list = new LinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");

console.log("linked list", list);
