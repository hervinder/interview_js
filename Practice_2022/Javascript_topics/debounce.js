function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("hello");
      fn.apply(this, [...args]);
    }, delay);
  };
}

let currentTime = 0;

const run = (input) => {
  currentTime = 0;
  const calls = [];

  const func = (arg) => {
    calls.push(`${arg}@${currentTime}`);
  };

  const debounced = debounce(func, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => debounced(arg), time);
  });
  return calls;
};

console.log(run(["A@0", "B@2", "C@3", "D@4", "E@15"]));

//https://github.com/kalpeshsingh/data-structure-agorithms-in-js/blob/master/7.md
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // in basic debounce, we kept only timerId
  // here, we will keep lastArgs too as we trailing function call with last arguments
  let timerId = null;
  let lastArgs = null;

  // if both leading and trailing are false then do nothing.
  if (!option.leading && !option.trailing) return () => null;

  return function debounced(...args) {
    // if timer is over and leading is true
    // then immediately call supplied function
    // else capture arguments in lastArgs
    if (!timerId && option.leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    // clear timer so that next call is exactly after `wait` time
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      // invoke only if lastArgs is present and trailing is true
      if (option.trailing && lastArgs) func.apply(this, lastArgs);

      // reset variables as they need to restart new life after calling this function
      lastArgs = null;
      timerId = null;
    }, wait);
  };
}
