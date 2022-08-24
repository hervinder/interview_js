// Function Composition
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0

const curry = (fn) => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = (str) => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

// traditional way of writing function: no readability
const toSlug = (input) =>
  encodeURIComponent(join("-")(map(toLowerCase)(split(" ")(input))));

const compose = function (...fns) {
  return function (args) {
    return fns.reduceRight((args, fn1) => {
      return fn1(args);
    }, args);
  };
  s;
};

const toSlug1 = compose(
  encodeURIComponent,
  join("-"),
  map(toLowerCase),
  split(" ")
);

// compose function

/**
 * @param {Function} fns
 */
function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((arg, fn) => fn(arg), args);
  };
}
const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const multiply = (a) => (b) => b * a;

const result = compose(plus(5), minus(10), multiply(2));

// 10 * 2 - 10 + 5 = 15
console.log(result(10)); // 15
