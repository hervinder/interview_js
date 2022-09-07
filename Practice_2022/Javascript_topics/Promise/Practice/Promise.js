class newPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = "";
    this.resolutionQueue = [];
    this.rejectQueue = [];
    try {
      executor(_resolve.bind(this), _reject.bind(this));
    } catch (error) {}
  }
  _resolve(value) {
    if (this.state === "pending") {
      this.state = "resolved";
      this.value = value;
      this.runResolutionQueue();
    }
  }

  _reject() {}

  runResolutionQueue() {
    while (this.resolutionQueue > 0) {
      const resolution = this.resolutionQueue.shift();
      let returnValue = "";
      try {
        returnValue = resolution.handler(this.value);
      } catch (error) {
        resolution.promise._reject(error);
      }

      if (returnValue && typeof returnValue instanceof Promise) {
        returnValue
          .then((value) => {
            resolution.promise._resolve(value);
          })
          .catch((error) => {
            resolution.promise._reject(error);
          });
      } else {
        resolution.promise._resolve(returnValue);
      }
    }
  }

  then(resolutionHander, rejecthandler) {
    const newPromise = new Promise(function () {});

    this.resolutionQueue.push({
      handler: resolutionHander,
      promise: newPromise,
    });

    if (this.state === "resolved") {
      this.runResolutionQueue();
    }

    return newPromise;
  }
}

let promise = new newPromise((resolve, reject) => {
  console.log("promise  start");
  setTimeout(() => {
    resolve("promise 1 start");
  }, 1000);
});

promise
  .then((value) => {
    console.log("second callback starts", value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise 2 resolve");
        resolve("second resolve");
      }, 1000);
    });
  })
  .then(function (value1) {
    console.log("finish", value1);
  })
  .then(function () {
    console.log("finish11");
  })
  .catch(function (error) {
    console.log("catch error", error);
  });
