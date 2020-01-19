class MaxBinaryHeap {

    constructor() {
        // this.values = [41, 39, 33, 18, 27, 12]; // insert
        this.values = []; // insert


    }

    Enqueue(data, priority) {

        let newNode = new Node(data, priority);

        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let currentIndex = this.values.length - 1;
        const currentValue = this.values[currentIndex];


        while (currentIndex > 0) {


            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.values[parentIndex];
            if (parentValue.priority >= currentValue.priority) {
                break;
            } else {
                this.values[parentIndex] = currentValue;
                this.values[currentIndex] = parentValue;
                currentIndex = parentIndex;
            }

        }

    }

    Dequeue() {

        if (this.values.length === 0) {
            return undefined;
        }
        let end = this.values.pop();
        let first = this.values[0];
        this.values[0] = end;

        const element = this.values[0];
        let index = 0;
        let length = this.values.length;

        while (true) {

            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftChild = null; let rightChild = null;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];

                if (leftChild.priority > element.priority) {
                    swap = leftIndex;
                }


            }

            if (rightIndex < length) {
                rightChild = this.values[rightIndex];

                if ((swap === null && rightIndex.priority > element.priority) || (swap != null && rightChild.priority > leftChild.priority)) {
                    swap = rightIndex;
                }


            }

            if (swap === null) {
                break;

            }
            let temp = this.values[index];
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;



        }

    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;

    }
}

var doctor = new MaxBinaryHeap();

doctor.Enqueue("common cold", 5);
doctor.Enqueue("arm injury", 2);
doctor.Enqueue("accident", 1);