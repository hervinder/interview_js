// https://bigfrontend.dev/problem/create-a-counter-object

function createCounter() {
  let count = 0;
  return {
    get count() {
      return count++;
    },
  };
}

const counter = createCounter();
counter.count; // 0, then it should increment
counter.count; // 1
counter.count; // 2
counter.count = 100; // it cannot be altered
counter.count; // 3
