function sequence(sequenceFn) {
  return function (callback, input) {
    const promisify = function (fn) {
      return function (input) {
        return new Promise(function (resolve, reject) {
          fn((error, value) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(value);
          }, input);
        });
      };
    };
    const promiseFn = sequenceFn.map(promisify);
    let promise = Promise.resolve(input);

    promiseFn.forEach((promisifedFunction) => {
      promise = promise.then(promisifedFunction);
    });

    promise
      .then(function (data) {
        callback(undefined, data);
      })
      .catch(function (error) {
        callback(error);
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
