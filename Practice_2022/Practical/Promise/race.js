//sequence

let promisifyRace = function (callback) {
  return function () {
    return new Promise((resolve, reject) => {
      callback((error, item) => {
        if (error) {
          reject(error);
        } else {
          resolve(item);
        }
      });
    });
  };
};

function race(funcs) {
  let promiseFuncs = funcs.map((func) => {
    return promisifyRace(func);
  });

  return function (callback, value) {
    let taskResolved = true;
    let promise = Promise.resolve(value);

    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise
        .then(promiseFunc)
        .then((completedtask) => {
          if (taskResolved) {
            callback(undefined, completedtask);
            taskResolved = false;
          }
        })
        .catch((error) => {
          taskResolved = false;
          callback(error, completedTasks);
        });
    });

    // callback(undefined, completedTasks);
  };
}

const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 300);
};

const async2 = (callback) => {
  setTimeout(() => callback(undefined, 2), 100);
};

const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 200);
};

const first = race([async1, async2, async3]);

first((error, data) => {
  console.log(data); // 2, since 2 is the first to be given
}, 1);
