function parallel(sequenceFn) {
  return function (callback, input) {
    //
    //
    const promisify = function (fn) {
      return function () {
        return new Promise(function (resolve, reject) {
          fn((error, value) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(value);
          });
        });
      };
    };

    const promiseFn = sequenceFn.map(promisify);
    let promise = Promise.resolve(input);
    const task = [];
    let funCount = 0;
    let taskCompleted = true;
    promiseFn.forEach((promisifedFunction) => {
      promise
        .then(promisifedFunction)
        .then(function (completedTask) {
          funCount++;
          task.push(completedTask);
          if (funCount === promiseFn.length && taskCompleted) {
            callback(undefined, task);
          }
        })
        .catch(function (error) {
          taskCompleted = false;
          callback(error);
        });
    });
  };
}

const async1 = (callback) => {
  console.log("async1");
  setTimeout(() => {
    callback(undefined, 1);
  }, 2000);
};

const async2 = (callback) => {
  console.log("async2");

  callback(undefined, 2);
};

const async3 = (callback) => {
  console.log("async3");
  callback(undefined, 3);
};

const all = parallel([async1, async2, async3]);

all((error, data) => {
  console.log(error, data); // [1, 2, 3]
}, 1);
