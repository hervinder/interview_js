Array.prototype.map = function (fn) {
  const arrayContext = this;
  const result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(fn(this[index], index, this));
  }

  return result;
};

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

Array.prototype.myReduce = function (callbackFn, initalValue) {
  let intialIndex = 1;
  let accumlator = this[0];

  if (initalValue) {
    intialIndex = 0;
    accumlator = initalValue;
  }

  for (let index = intialIndex; index < this.length; index++) {
    accumlator = callbackFn(accumlator, this[index], index);
  }

  return accumlator;
};
let numbers1 = [0, 1, 2, 3, 4];

numbers1.myReduce(function (accumlator, currentValue, index) {
  return accumlator + currentValue;
}, 9); // 10

Array.prototype.myForEach =
  Array.prototype.myForEach ||
  function (callback) {
    for (let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
  };

Array.prototype.myFilter =
  Array.prototype.Filter ||
  function (callback) {
    let newArray = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.myFilter((word) => word.length > 6);

/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce((promiseChain, currentFunction) => {
    return promiseChain.then(currentFunction);
  }, Promise.resolve(input));
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
