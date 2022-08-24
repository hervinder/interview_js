class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);

    newNode.next = this.head;

    this.head = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    let start = this.head;

    while (start.next != null) {
      start = start.next;
    }

    start.next = newNode;
  }

  detectLoop() {
    let slow = this.head;
    let fast = this.head;
    let flag = 0;

    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        flag = 1;
        break;
      }
    }

    if (flag === 1) {
      return "loop detected";
    } else {
      return "loop not detected";
    }
  }

  middleNode() {
    let slow = this.head;
    let fast = this.head;
    let flag = 0;

    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log("slow", slow);
  }
}

let list = new SinglyLinkedList();
list.insertAtBeginning("fifth");
list.insertAtBeginning("fourth");
list.insertAtBeginning("third");
list.insertAtBeginning("second");
list.insertAtBeginning("first");

console.log("list", list);

// find detect loop

// Create loop for testing
// list.head.next.next.next.next = list.head;

// list.detectLoop();

// find Happy Number
//A number is called happy if it leads to 1 after a sequence of steps wherein each step number is replaced by the sum of squares of its digit that is if we start with Happy Number and keep replacing it with digits square sum, we reach 1.

function isHappy(n) {
  let slow = (fast = n);
  while (true) {
    slow = sq(slow);
    fast = sq(sq(fast));
    if (slow === fast) break;
  }

  return slow === 1;
}

function sq(num) {
  let sum = 0;
  while (num > 0) {
    let d = num % 10;
    sum += d * d;
    num = Math.floor(num / 10);
  }
  return sum;
}

isHappy(19);

// Rearrange a LinkedList (medium)
//https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/

// Efficient Solution:

// 1) Find the middle point using tortoise and hare method.
// 2) Split the linked list into two halves using found middle point in step 1.
// 3) Reverse the second half.
// 4) Do alternate merge of first and second halves.
// The Time Complexity of this solution is O(n).
//Space o(1)

// Palindrome LinkedList
//https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/
// METHOD 2 (By reversing the list)
// This method takes O(n) time and O(1) extra space.
// 1) Get the middle of the linked list.
// 2) Reverse the second half of the linked list.
// 3) Check if the first half and second half are identical.
// 4) Construct the original linked list by reversing the second half again and attaching it back to the first half

//******************************* Reverse Linked List without Recursion ****************** */

//take 3 pointer prev , current , next.

function reverseLinkedList() {
  let head = list.head;

  let currentNode = head;
  let prev = null;

  while (currentNode != null) {
    let nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }

  head = prev;

  return head;
}

// reverseLinkedList();

//******************************* Reverse Linked List Recursion ****************** */

//take 3 pointer prev , current , next.

function reverseRecLinkedList() {
  let node = list.head;
  let head = null;
  function recursiveList(node) {
    var currentNode = node;

    console.log("recuirsive list", currentNode);
    if (currentNode.next === null) {
      head = currentNode;
      return head;
    }
    let temp = recursiveList(currentNode.next);
    var y = currentNode.next;
    y.next = currentNode;
    currentNode.next = null;
    return temp;
  }

  let temp1 = recursiveList(node);
  console.log("head", temp1);
}

reverseRecLinkedList();
