function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      return fn.apply(this, [
        ...args,
        (value) => {
          resolve(value);
        },
      ]);
    });
  };
}

const exampleFn = function (a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 2000);
};
const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log(res)); //20

// function promisify1(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       fn([
//         ...args,
//         (value) => {
//           resolve(value);
//         },
//       ]);
//     });
//   };
// }
