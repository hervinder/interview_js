//sequence

let promisifyParallel = function (callback) {
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

function parallel(funcs) {
  let promiseFuncs = funcs.map((func) => {
    return promisifyParallel(func);
  });

  return function (callback, value) {
    let completedTasks = [];
    let taskResolved = true;
    let promise = Promise.resolve(value);
    let funcCount = 0;
    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise
        .then(promiseFunc)
        .then((completedtask) => {
          console.log("completedtask====", completedtask);
          funcCount++;
          completedTasks.push(completedtask);
          if (funcCount === promiseFuncs.length && taskResolved) {
            callback(undefined, completedTasks);
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
