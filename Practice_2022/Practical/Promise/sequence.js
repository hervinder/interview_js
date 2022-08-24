// function sequence(fns) {
//   return function (handler, param) {
//     const componsed = fns.reduce((acculumator, fn) => {
//       return () => {};
//     }, param);
//   };
// }

// function sequence(thunks) {
//   return function (handler) {
//     const composed = thunks.reduce((prev, next) => {
//       return (cb) => {
//         prev((err, data) => next(cb, data));
//       };
//     });
//     composed(handler);
//   };
// }

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  const promiseFuncs = funcs.map(promisify);

  return function (callback, input) {
    // init promise
    let promise = Promise.resolve(input);

    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise = promise.then(promiseFunc);
    });

    // handle resolved or rejected promise
    promise
      .then((data) => {
        callback(undefined, data);
      })
      .catch(callback);
  };
}

function promisify(fn) {
  return function (input) {
    return new Promise((resolve, reject) => {
      fn((err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      }, input);
    });
  };
}

const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};

const asyncTimes3 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};

const asyncTimes4 = sequence([asyncTimes2, asyncTimes3]);

asyncTimes4((error, data) => {
  console.log(data); // 4
}, 1);
