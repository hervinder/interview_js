class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(node) {
    this.value.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const nodeValue = this.value[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.value[parentIndex];

      if (nodeValue < parentValue) {
        break;
      } else {
        const temp = parentValue;
        this.value[parentIndex] = nodeValue;
        this.value[index] = temp;
        index = parentIndex;
      }
    }
  }

  extractMax() {
    const max = this.value[0];
    const lastValue = this.value.pop();
    this.value[0] = lastValue;
    this.sinkingDown();
    return max;
  }

  sinkingDown() {
    let index = 0;
    const length = this.value.length - 1;

    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let swap = null;

      if (leftIndex < length) {
        if (this.value[leftIndex] > this.value[index]) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        if (
          (swap === null && this.value[rightIndex] > this.value[index]) ||
          (swap != null && this.value[rightIndex] > this.value[leftIndex])
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) {
        break;
      } else {
        const temp = this.value[index];
        this.value[index] = this.value[swap];
        this.value[swap] = temp;
        index = swap;
      }
    }
  }

  topKElements(array, k) {
    let maxHeap = [];
    for (let index = 0; index < k; index++) {
      const element = array[index];
      this.insert(element);
    }

    console.log("this", this.value, maxHeap);
  }
}

const heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);

heap.topKElements([3, 2, 1, 5, 6, 4], 4);
