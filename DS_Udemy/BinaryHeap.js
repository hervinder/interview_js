class MaxBinaryHeap {
  constructor() {
    // this.values = [41, 39, 33, 18, 27, 12]; // insert
    this.values = [55, 39, 41, 18, 27, 12, 33]; // insert
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentValue = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (parentValue >= currentValue) {
        break;
      } else {
        this.values[parentIndex] = currentValue;
        this.values[currentIndex] = parentValue;
        currentIndex = parentIndex;
      }
    }
  }

  extractMax() {
    let end = this.values.pop();
    let first = this.values[0];
    this.values[0] = end;

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

        if (leftChild > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];

        if (
          (swap === null && rightIndex > element) ||
          (swap != null && rightChild > leftChild)
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

var heap = new MaxBinaryHeap();
