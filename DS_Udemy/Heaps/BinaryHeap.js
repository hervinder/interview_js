class MaxBinaryHeap {
  constructor() {
    // this.values = [41, 39, 33, 18, 27, 12]; // insert
    // this.values = [55, 39, 41, 18, 27, 12, 33]; // insert
    this.values = [];
  }

  insert(item) {
    this.values.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let currentValue = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (parentValue >= currentValue) {
        break;
      } else {
        let temp = parentValue;
        this.values[parentIndex] = currentValue;
        this.values[currentIndex] = temp;
        currentIndex = parentIndex;
      }
    }
  }

  extractMax() {
    let lastItem = this.values.pop();
    let max = this.values[0];
    this.values[0] = lastItem;
    this.sinkDown();
  }

  sinkDown() {
    let parentIndex = 0;

    while (true) {
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 1 + 1;
      let swap = null;

      if (leftIndex < this.values.length) {
        if (this.values[leftIndex] > this.values[parentIndex]) {
          swap = leftIndex;
        }
      }
      if (rightIndex < this.values.length) {
        if (
          (swap === null &&
            this.values[rightIndex] > this.values[parentIndex]) ||
          (swap != null && this.values[rightIndex] > this.values[leftIndex])
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) {
        break;
      }
      let temp = this.values[swap];
      this.values[swap] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      parentIndex = swap;
    }

    // console.log("this", this.values);
  }

  topKElements(array, k) {
    let maxHeap = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      this.insert(element);
      if (this.values.length > k) {
        this.extractMax();
        index--;
      }
    }
    console.log("this", this.values);
  }
}

const max = new MaxBinaryHeap();
// Big O binary Heap
// insertion and removal O(log n)
// search O(n)

////Time complexity :The time complexity of adding an element in a heap of size k is O(logk), and we do it N times that meansO( N logk) time complexity for the algorithm.
//Space complexity : O(k) to store the heap elements.
max.topKElements([3, 2, 1, 5, 6, 4], 4);
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
