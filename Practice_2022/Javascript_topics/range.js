function* range(from, to) {
  let counter = from;
  while (counter < to) {
    console.log("hello");
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

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
  return rangeIterator;
}

function* makeRangeIterator1(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const it = makeRangeIterator1(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

function* makeIterator2() {
  yield 1;
  yield 2;
}

const it1 = makeIterator2();

for (const itItem of it1) {
  console.log(itItem);
}

console.log(it1[Symbol.iterator]() === it1); // true
