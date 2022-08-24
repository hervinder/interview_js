class PriorityQueue {
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

    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkinDown();
    }

    return max;
  }

  sinkinDown() {
    const element = this.values[0];
    let index = 0;
    let length = this.values.length;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild = null;
      let rightChild = null;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];

        if (leftChild.priority > element.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];

        if (
          (swap === null && rightIndex.priority > element.priority) ||
          (swap != null && rightChild.priority > leftChild.priority)
        ) {
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

var doctor = new PriorityQueue();

doctor.Enqueue("accident", 1);
doctor.Enqueue("common cold", 5);
doctor.Enqueue("arm injury", 2);

function topKclosest(array, k) {
  const priorityQueue = new PriorityQueue();

  for (let index = 0; index < array.length; index++) {
    priorityQueue.Enqueue(
      array[index],
      array[index][0] * array[index][0] + array[index][1] * array[index][1]
    );

    if (priorityQueue.values.length > k) {
      priorityQueue.Dequeue();
    }
  }
  console.log(priorityQueue.values);
}

/* 
  Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.
  Example 1:
  Input: points = [[1,2],[1,3]], K = 1
  Output: [[1,2]]
  
  Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
  The Euclidean distance between (1, 3) and the origin is sqrt(10).
  Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
  
  Example 2:
  Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
  Output: [[1, 3], [2, -1]]
  */

// time //(K + n * log(k))
topKclosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
);

function RearrangingString(string) {
  let frequency = {};
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    frequency[element] = (frequency[element] || 0) + 1;
  }

  let priorityQueue = new PriorityQueue();

  const previousVisitedQueue = [];

  for (const key in frequency) {
    priorityQueue.Enqueue(key, frequency[key]);
  }
  const repeatedString = priorityQueue.values;

  let str = "";
  let previousVisited = "#";
  while (priorityQueue?.values.length > 0) {
    const topElement = priorityQueue.Dequeue();

    if (previousVisitedQueue.length > 0) {
      const pop = previousVisitedQueue.pop();
      pop.priority > 0 && priorityQueue.Enqueue(pop.val, pop.priority);
    }

    str = str + topElement.val;
    topElement.priority = topElement.priority - 1;
    previousVisitedQueue.push(topElement);
    previousVisited = topElement.val;
  }

  if (str.length !== string.length) {
    console.log("unmatched");
  } else {
    console.log("matched");
  }

  console.log(str);
}
