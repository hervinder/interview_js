let promise = new Promise((resolve, reject) => {
  console.log("0");
  setTimeout(() => {
    resolve("1");
  }, 100);
});
promise
  .then(function (value) {
    console.log("2", value);
  })
  .then(function (value) {
    console.log("3");
  });

//sequence

function sequence(funcs) {
  let promiseFuncs = funcs.map((func) => {
    return promisify23(func);
  });

  return function (callback, value) {
    let promise = Promise.resolve(value);
    // firstResolve
    //   .then(promise[0])
    //   .then(promise[1])
    //   .then(function (value111) {
    //     callback("fdf", value111);
    //   });

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

let promisify23 = function (callback) {
  return function (value) {
    return new Promise((resolve, reject) => {
      callback((noCallback, item) => {
        resolve(item);
      }, value);
    });
  };
};

const asyncTimes6 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};

const asyncTimes7 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};

const asyncTimes8 = sequence([asyncTimes6, asyncTimes7]);

asyncTimes8((error, data) => {
  console.log(data); // 4
}, 1);
