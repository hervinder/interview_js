// Implement a function which allows you to clean all timeouts
const clearAllTimeout = (function () {
  let callbacks = [];
  const oldTimeout = window.setTimeout;
  window.setTimeout = (fn, time) => {
    const id = oldTimeout(fn, time);
    callbacks.push(id);
    return id;
  };
  window.clearAllTimeout = () => {
    for (const id of callbacks) {
      clearTimeout(id);
    }
    callbacks = [];
  };
  return window.clearAllTimeout;
})();

const func1 = () => {
  console.log("func1");
};

const func2 = () => {
  console.log("func2");
};

const func3 = () => {
  console.log("func3");
};
setTimeout(func1, 10000);
setTimeout(func2, 10000);
setTimeout(func3, 10000);

// all 3 functions are scheduled 10 seconds later
// clearAllTimeout();
