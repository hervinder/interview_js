function* range(from, to) {
  let counter = from;
  while (counter < to) {
    yield counter++;
  }
}

function rangeIterator(from, to) {
  let counter = from;

  return {
    next: function (params) {
      if (counter < to) {
        return { value: counter++, done: false };
      } else {
        return { value: counter, done: true };
      }
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}

console.log([...range(0, 5)]);
console.log([...rangeIterator(0, 5)]);
