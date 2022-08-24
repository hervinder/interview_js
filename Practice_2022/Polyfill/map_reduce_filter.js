Array.prototype.myMap = function (callbackFn) {
  let newArray = [];

  for (let index = 0; index < this.length; index++) {
    newArray.push(callbackFn(this[index], index, this));
  }

  return newArray;
};

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Reduce

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

[0, 1, 2, 3, 4].myReduce(function (accumlator, currentValue, index) {
  return accumlator + currentValue;
}, 9); // 10

Array.prototype.myForEach =
  Array.prototype.myForEach ||
  function (callback) {
    for (let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
  };

// Filter
/// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

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

// practice reduce function

// sum of all array
let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  previousValue,
  currentValue
) {
  return previousValue + currentValue.x;
},
initialValue);

// flattering array
let flatArrarsum = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (previousValue, currentValue) {
  return [...previousValue, ...currentValue];
}, []);

// flattened is [0, 1, 2, 3, 4, 5]

//Counting instances of values in an object

let countedNames = ["Alice", "Bob", "Tiff", "Bruce", "Alice"].reduce(function (
  previousValue,
  currentValue
) {
  if (previousValue[currentValue]) {
    previousValue[currentValue] = previousValue[currentValue] + 1;
  } else {
    previousValue[currentValue] = 1;
  }

  return previousValue;
},
{});

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Grouping objects by a property

let people1 = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
].reduce(function (previousValue, currentValue) {
  if (!previousValue[currentValue.age]) {
    previousValue[currentValue.age] = [];
  }
  previousValue[currentValue.age].push(currentValue);

  return previousValue;
}, {});

// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//Remove duplicate items in an array

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let myArrayWithNoDuplicates = myArray.reduce(function (
  previousValue,
  currentValue
) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue);
  }
  return previousValue;
},
[]);

console.log(myArrayWithNoDuplicates);

////

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

// Write map using reduce

if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, initialValue) {
    return this.reduce(function (
      mappedArray,
      currentValue,
      currentIndex,
      array
    ) {
      mappedArray[currentIndex] = callback.call(
        initialValue,
        currentValue,
        currentIndex,
        array
      );
      return mappedArray;
    },
    []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) =>
    currentValue + currentIndex + array.length
); // [5, 7, , 10]
