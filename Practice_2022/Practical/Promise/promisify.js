/**
 * @param {Function} fn
 */
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve) => {
      function cb(result) {
        resolve(result);
      }
      fn.apply(this, args.concat(cb));
    });
  };
}

function promisify1(func) {
  return function (...args) {
    return new Promise((resolve) => {
      let arguments = args;
      func.apply(this, [
        ...arguments,
        (value1) => {
          resolve(value1);
        },
      ]);
    });
  };
}

const exampleFn = function (a, b, cb) {
  cb(a + b);
};
const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log(res)); //20
