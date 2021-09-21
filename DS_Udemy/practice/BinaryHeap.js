class maxHeap {
  constructor() {
    this.values = [];
  }

  insert(item) {
    this.values.push(item);
    this.bubleUp();
  }

  bubleUp() {
    let currentIndex = this.values[this.values.length - 1];
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
      let rightIndex = 2 * parentIndex + 1;
      let swap = null;
      if (leftIndex > this.values.length - 1) {
        if (this.values[leftIndex] > this.values[parentIndex]) {
          swap = leftIndex;
        }
      }

      if (rightIndex > this.values.length - 1) {
        if (
          (swap == null && this.values[right] > this.values[parentIndex]) ||
          (swap != null && this.values[right] > this.values[leftIndex])
        ) {
          swap = rightIndex;
        }
      }

      if (swap == null) {
        break;
      }
      let temp = this.values[swap];
      this.values[swap] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      parentIndex = swap;
    }
  }

  topKElements(array, k) {
    let maxHeap = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      this.insert(element);
      if (this.values.length > k) {
        this.extractMax();
      }
    }
    console.log("this", this.values);
  }
}
