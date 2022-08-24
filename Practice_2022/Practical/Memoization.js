// //with two arguments

// function sum(a, b) {
//   return a + b;
// }

// function cache(func) {
//   let memo = {};
//   return function (...args) {
//     let key = args.join("");
//     if (memo[key]) {
//       return memo[key];
//     } else {
//       memo[key] = func.apply(this, args);
//       return memo[key];
//     }
//   };
// }

// var csum = cache(sum);
// csum(4, 3) - 7;
// csum(3, 5) - 8;
// csum(4, 3) - 7;

/////// memotization of async function

function cacheAsync(func) {
  let memo = {};
  return function (...args) {
    let callbackFn = args.pop();
    let arguments = args;
    let key = arguments.join("");
    if (memo[key]) {
      callbackFn(memo[key]);
    } else {
      func.apply(this, [
        ...arguments,
        (value1) => {
          memo[key] = value1;
          callbackFn(value1);
        },
      ]);
    }
  };
}

function sum(a, b, cb) {
  // return a + b
  setTimeout(() => cb(a + b), 100);
}

var csum = cacheAsync(sum);
csum(4, 3, (result) => console.log(result)) - 7;
csum(3, 5, (result) => console.log(result)) - 8;
csum(4, 3, (result) => console.log(result)) - 7;
