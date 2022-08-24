function avg(...params) {
  let avergae = 1;
  for (var i = 0; i < params.length; i++) {
    avergae = avergae * params[i];
  }

  return avergae;
}

function curry(...intialArguments) {
  const avgFn = intialArguments[0];
  const OtherArguments = intialArguments.slice(1);
  const self = this;
  return function (...arguments) {
    return avgFn.apply(self, [...arguments, ...OtherArguments]);
  };
}

var temp = curry(avg, 1, 2, 3);
temp(10); //4 - stores 1, 2, 3 in closures and adds 10 for average
temp(1, 2); //1.8 - stores 1, 2, 3 in closures and add 1, 2 for average

//Advanced Curry Problem
// https://javascript.info/currying-partials
function advancedCurry(argFn) {
  let fnLength = argFn.length;
  const self = this;
  return function curried(...arg1) {
    if (arg1.length >= fnLength) {
      return argFn.apply(self, [...arg1]);
    } else {
      return function (...arg2) {
        return curried.apply(self, [...arg1, ...arg2]);
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = advancedCurry(sum);

// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3, 4, 5)); // 6, full currying

// Curry with Plcaeholdera
// https://lodash.com/docs/4.17.15#curry
//https://bigfrontend.dev/problem/implement-curry-with-placeholder
/**
 * @param { Function } func
 */
function curryPlaceholder(func) {
  const placeholder = {};
  curryPlaceholder.placeholder = placeholder;
  return function curried(...args) {
    // we need to return a function to make it curry-able.

    // 1. If the arguments are extra then eliminate them
    // we don't want to pass 6 arguments when the expected is 3.
    // it will interfere with our placeholder logic
    const sanitizedArgs = args.slice(0, func.length);

    // see if placeholder is available in arguments
    const hasPlaceholder = sanitizedArgs.some(
      (arg) => arg == curryPlaceholder.placeholder
    );

    // if no placeholder and arguements are equal to what expected then it is normal function call
    if (!hasPlaceholder && sanitizedArgs.length == func.length) {
      return func.apply(this, sanitizedArgs);
    }

    // else we need to replace placeholders with actual values
    // we call helper function `mergeArgs` for this
    // we pass first and next arguments to helper function
    return function next(...nextArgs) {
      return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
    };
  };
}

function mergeArgs(args, nextArgs) {
  let result = [];

  // iterate over args (because we need to replace from it)
  // in each iteration, if we find element == curry.placeholder
  // then we replace that placeholder with first element from nextArgs
  // else we put current element
  args.forEach((arg, idx) => {
    if (arg == curryPlaceholder.placeholder && nextArgs.length > 0) {
      result.push(nextArgs.shift());
    } else {
      result.push(arg);
    }
  });

  // we merge both, because there might be chance that args < nextArgs
  return [...result, ...nextArgs];
}
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curryPlaceholder(join);
const _ = curryPlaceholder.placeholder;

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
