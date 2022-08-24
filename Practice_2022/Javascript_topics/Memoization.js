// Normal Memo
function cache(fn) {
  let cache = {};
  return function (...args) {
    let key = args.join("");

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, [...args]);
      cache[key] = result;
      return result;
    }
  };
}

function sum1(a, b) {
  return a + b;
}

var csum = cache(sum1);
csum(4, 3) - 7;
csum(3, 5) - 8;
csum(4, 3) - 7;

// Async Memo
function cacheAsync(fn) {
  let cache = {};
  return function (...args) {
    const resultFn = args.pop();
    let key = args.join("");
    if (cache[key]) {
      resultFn(cache[key]);
    } else {
      const callbackFN = (resultValue) => {
        cache[key] = resultValue;
        resultFn(resultValue);
      };
      fn.apply(this, [...args, callbackFN]);
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

// memoizeOne
//https://bigfrontend.dev/problem/implement-memoizeOne
// You might need to restrict the cache capacity, just like memoize-one , it only remembers the latest arguments and result.
// Please implement your own memoizeOne(), it takes 2 arguments
// target function
// (optional) a equality check function to compare current and last arguments
// Default equality check function should be a shallow comparison on array items with strict equal ===.

/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

// simplified implementation

// 1. Write default shallow comparision on array items with string equal ===
const defaultIsEqual = (args1, args2) => {
  return args1.every((element, index) => element === args2[index]);
};

function memoizeOne(func, isEqual = defaultIsEqual) {
  // 2. For memoizeOne you can store context, previous arguments and previous value in variables or cache object
  // 3.  return a new function
  // 4. if previous thisContext is the same as current and isEqual truthy, return previous cached value
  // 5. otherwise call input function with call(this, ...args) and save result in variable
  // 6. cache new arguments and current context and return value
  let thisContext = null;
  let previousArgs = null;
  let previousValue = null;

  return function (...args) {
    const newArgs = args;
    if (thisContext === this && isEqual(args, previousArgs)) {
      return previousValue;
    } else {
      previousValue = func.call(this, ...args);
      previousArgs = newArgs;
      thisContext = this;

      return previousValue;
    }
  };
}

// const func = (...args) => args
// const memoed = memoizeOne(func)
// console.log(memoed(1)) //.toEqual([1])
// console.log(memoed(1, 2)) //.toEqual([1,2])
// console.log(memoed(1, 2, 3)) //.toEqual([1,2,3])

// let callCount = 0
// const func = (a, b) => {
//   callCount += 1
//   return a + b
// }
// const memoed = memoizeOne(func, () => true)

// console.log(memoed(1,2)) //.toBe(3)
// console.log(callCount) //.toBe(1)
// console.log(memoed(1,3)) //.toBe(3)
// console.log(callCount) //.toBe(1)
// console.log(memoed(10,30)) //.toBe(3)
// console.log(callCount) //.toBe(1)

// memoizeOne() should also take `this` into the comparison spec  , expects 1 but gets 2
let callCount = 0;
function funcThis(b) {
  callCount += 1;
  return `${this.a}_${b}`;
}
const memoed = memoizeOne(funcThis);
const a = {
  a: 1,
  memoed,
};

const b = {
  a: 2,
  memoed,
};
console.log(a.memoed(2)); // //.toBe('1_2')
console.log(callCount); //.toBe(1)
console.log(a.memoed(2)); //.toBe('1_2')
console.log(callCount); //.toBe(1)
console.log(a.memoed(3)); //.toBe('1_3')
console.log(callCount); //.toBe(2)
console.log(a.memoed(3)); //.toBe('1_3')
console.log(callCount); //.toBe(2)
console.log(b.memoed(3)); //.toBe('2_3')
console.log(callCount); //.toBe(3)
console.log(a.memoed(3)); //.toBe('1_3')
console.log(callCount); //.toBe(4)
