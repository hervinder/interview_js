class MinBinaryHeap {
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

      if (parentValue <= currentValue) {
        break;
      } else {
        let temp = parentValue;
        this.values[parentIndex] = currentValue;
        this.values[currentIndex] = temp;
        currentIndex = parentIndex;
      }
    }
  }

  extractMin() {
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let lastItem = this.values.pop();
    let min = this.values[0];
    this.values[0] = lastItem;
    this.sinkDown();

    return min;
  }

  sinkDown() {
    let parentIndex = 0;

    while (true) {
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 1 + 1;
      let swap = null;

      if (leftIndex < this.values.length) {
        if (this.values[leftIndex] < this.values[parentIndex]) {
          swap = leftIndex;
        }
      }
      if (rightIndex < this.values.length) {
        if (
          (swap === null &&
            this.values[rightIndex] < this.values[parentIndex]) ||
          (swap != null && this.values[rightIndex] < this.values[leftIndex])
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
    for (let index = 0; index < k; index++) {
      const element = array[index];
      this.insert(element);
    }

    for (let index = k; index < array.length; index++) {
      if (this.values[0] < array[index]) {
        this.extractMin();
        this.insert(array[index]);
      }
    }
    console.log("this", this.value);
  }
}

const minHeap = new MinBinaryHeap();

minHeap.topKElements([3, 2, 1, 5, 6, 4], 4);

function ConnectedRope(arr) {
  // Create a priority queue
  let minBinaryHeap = new MinBinaryHeap();

  // Adding items to the pQueue
  for (let i = 0; i < arr.length; i++) {
    minBinaryHeap.insert(arr[i]);
  }

  // Initialize result
  let res = 0;

  // While size of priority queue
  // is more than 1
  while (minBinaryHeap.values.length > 1) {
    // Extract shortest two ropes from pq
    let first = minBinaryHeap.extractMin();
    let second = minBinaryHeap.extractMin();

    // Connect the ropes: update result
    // and insert the new rope to pq
    res += first + second;
    minBinaryHeap.insert(first + second);
  }

  console.log(res);
}

/* 
  
  Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. 
  The cost of connecting two ropes is equal to the sum of their lengths.
  Example 1:
  Input: [1, 3, 11, 5]
  Output: 33
  
  Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)
  Example 2:
  Input: [3, 4, 5, 6]
  Output: 36
  
  Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total cost is 36 (7+11+18)
  Example 3:
  
    */
//nlogn
ConnectedRope([3, 4, 5, 6], 2);
