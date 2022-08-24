// Throttling will change the function in such a way that it can be fired at most once in a time interval.
// For instance, throttling will execute the function only one time in 1000 milliseconds, no matter how many times the user clicks the button.

// function Basicthrottle(callbackFn, wait) {
//   let isThrottle = true;
//   return function (...args) {
//     const context = this;
//     if (isThrottle) {
//       callbackFn.apply(context, args);
//       isThrottle = false;
//       setTimeout(() => {
//         isThrottle = true;
//       }, wait);
//     }
//   };
// }

// window.addEventListener(
//   "resize",
//   Basicthrottle((event) => {
//     console.log("throttle", event);
//   }, 1000)
// );

// This is the real implementation for throttle
//Problem1: https://bigfrontend.dev/problem/implement-basic-throttle
function throttle(fn, wait) {
  let waiting = false;
  let lastArgs = [];
  return function (...args) {
    if (!waiting) {
      fn.apply(this, [...args]);
      waiting = true;
      let timeout = () =>
        setTimeout(() => {
          waiting = false;
          if (lastArgs) {
            fn.apply(this, lastArgs);
            waiting = true;
            lastArgs = null;
            timeout();
          }
        }, wait);
      timeout();
    } else {
      lastArgs = args;
    }
  };
}

// let currentTime = 0;

// const run = (input) => {
//   currentTime = 0;
//   const calls = [];

//   const func = (arg) => {
//     console.log("func resolve", arg);
//     calls.push(`${arg}@${currentTime}`);
//   };

//   const throttled = throttle(func, 3);
//   input.forEach((call) => {
//     const [arg, time] = call.split("@");
//     setTimeout(() => {
//       console.log("input resolve", time);
//       throttled(arg);
//     }, time);
//   });
//   return calls;
// };

// Problem 2

function throttleLeadingTrailing(
  func,
  wait,
  option = { leading: true, trailing: true }
) {
  var { leading, trailing } = option;
  var lastArgs = null;
  var timer = null;

  const setTimer = () => {
    console.log("setTimer", lastArgs, trailing);
    if (lastArgs && trailing) {
      func.apply(this, lastArgs);
      lastArgs = null;
      timer = setTimeout(setTimer, wait);
    } else {
      timer = null;
    }
  };

  return function (...args) {
    if (!timer) {
      if (leading) {
        func.apply(this, args);
      }
      timer = setTimeout(setTimer, wait);
    } else {
      lastArgs = args;
    }
  };
}
let currentTime = 0;

const run = (input) => {
  currentTime = 0;
  const calls = [];

  const func = (arg) => {
    console.log("func resolve", arg);
    calls.push(`${arg}@${currentTime}`);
  };

  const throttled = throttleLeadingTrailing(func, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => {
      console.log("input resolve", time);
      throttled(arg);
    }, time);
  });
  return calls;
};

// Throttle Promise
// https://bigfrontend.dev/problem/throttle-Promises

function throttlePromises(funcs, max) {
  let result = [];

  if (!funcs || !funcs.length) return Promise.resolve(result);

  // Called recursively, executing "max" API calls per batch
  const createBatch = (batchId, resolve, reject) => {
    const startIdx = batchId * max;
    const endIdx = startIdx + max;
    const batchedPromises = funcs.slice(startIdx, endIdx).map((fn) => fn());

    Promise.all(batchedPromises)
      .then((batchedData) => {
        result.push(...batchedData);

        if (result.length === funcs.length) {
          resolve(result);
        } else {
          createBatch(batchId + 1, resolve, reject);
        }
      })
      .catch((err) => reject(err));
  };

  return new Promise((res, rej) => createBatch(0, res, rej));
}
