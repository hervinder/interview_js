class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

}

LinkedList.prototype.insertAtBeginning = function (data) {

    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

}
LinkedList.prototype.insertAtEnd = function (data) {

    let newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    }
    let start = this.head;
    while (start.next != null) {
        start = start.next;
    }
    start.next = newNode;
    console.log(start);

}



// let list = new LinkedList();
// list.insertAtBeginning("Singh");
// list.insertAtBeginning("Herviner");
// list.insertAtBeginning("Hello");
// list.insertAtEnd("Bye");
// list.insertAtEnd("Bye 23");
// console.log(list, "list");

//******************************* Find  Middle Node ****************** */
function middleNode() {

    let listMiddle = new LinkedList();

    listMiddle.insertAtBeginning("4");
    listMiddle.insertAtBeginning("Third");
    listMiddle.insertAtBeginning("Second");
    listMiddle.insertAtBeginning("FIrst");

    let head = listMiddle.head;
    let current = head;
    let middle = head;
    counter = 0;
    while (current.next != null) {
        counter++;
        if (counter % 2 == 0) {
            middle = middle.next
        }
        current = current.next;
    }

}

middleNode();


//******************************* Reverse Linked List without Recursion ****************** */

//take 3 pointer prev , current , next.

function reverseLinkedList() {
    let reverseList = new LinkedList();

    reverseList.insertAtBeginning("4");
    reverseList.insertAtBeginning("Third");
    reverseList.insertAtBeginning("Second");
    reverseList.insertAtBeginning("FIrst");
    var head = reverseList.head;
    var prevNode = null;
    var currentNode = head;

    while (currentNode != null) {
        var nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;

    }
    head = prevNode;


}

reverseLinkedList();



//******************************* Reverse Linked List with Recursion ****************** */

//take 3 pointer prev , current , next.

function reverse(head) {
    console.log("next head", head);
    if (!head || !head.next) {
        return head;
    }
    let tmp = reverse(head.next);
    console.log("recursive call", tmp, "head", head)
    debugger
    head.next.next = head;
    head.next = undefined;
    return tmp;
}
function recursiveList(linkedList) {
    var currentNode = linkedList;

    console.log("recuirsive list", currentNode);
    if (currentNode.next === null) {
        head = currentNode;
        return head;
    }

    let temp = recursiveList(currentNode.next);
    console.log("temp", currentNode);
    console.log("temp", temp);
    // debugger;
    var y = currentNode.next;
    y.next = currentNode;
    // currentNode.next.next = currentNode;
    currentNode.next = null;
    return temp;



}

function reverseLinkedListRecursion() {
    let reverseList = new LinkedList();

    reverseList.insertAtBeginning("4");
    reverseList.insertAtBeginning("Third");
    reverseList.insertAtBeginning("Second");
    reverseList.insertAtBeginning("FIrst");
    
    var headCount = recursiveList(reverseList.head);
    console.log("list", headCount);
    var re = reverse(reverseList.head);
    console.log(re);
    debugger;
}

reverseLinkedListRecursion();


//******************************* How do you find first intersection node of two linked list in Java ****************** */

//https://www.google.com/search?q=How+do+you+find+first+intersection+node+of+two+linked+list+in+Java&oq=How+do+you+find+first+intersection+node+of+two+linked+list+in+Java&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8#kpvalbx=1


//******************************* How do you merge two sorted lists into a single sorted linked list? //*******************************


//https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/


//*******************************  How do add two numbers represented using linked list??


