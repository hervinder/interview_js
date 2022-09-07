class newPromise {
  constructor(executor) {
    this.value = "";
    this.state = "pending";
    this.resolution = [];
    this.rejectionQueue = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {}
  }

  _runresolveHandler() {
    console.log("resolution", this.resolution);
    if (this.resolution.length > 0) {
      console.log("resolution 1 ---", this.resolution);
      const resolution = this.resolution.shift();
      let returnValue = "";
      try {
        returnValue = resolution.handler(this.value);
      } catch (error) {
        resolution.promise._reject(error);
      }

      if (returnValue && returnValue instanceof Promise) {
        returnValue
          .then(function (value) {
            resolution.promise._resolve(value);
          })
          .catch(function (error) {
            resolution.promise._resolve(returnValue);
          });
      } else {
        resolution.promise._resolve(returnValue);
      }
    }
  }
  _runRejectionHandlers() {
    console.log("rejectionQueue", this.rejectionQueue);
    if (this.rejectionQueue.length > 0) {
      console.log("resolution 1 ---", this.resolution);
      const rejection = this.rejectionQueue.shift();
      let returnValue = "";
      try {
        returnValue = rejection.handler(this.rejectionReason);
      } catch (error) {
        rejection.promise._reject(error);
      }

      if (returnValue && returnValue instanceof Promise) {
        returnValue
          .then(function (value) {
            rejection.promise._resolve(value);
          })
          .catch(function (error) {
            rejection.promise._resolve(returnValue);
          });
      } else {
        rejection.promise._resolve(returnValue);
      }
    }
  }
  _resolve(value) {
    if (this.state === "pending") {
      this.value = value;
      this.state = "resolved";
      this._runresolveHandler();
    }
  }
  _reject(reason) {
    if (this.state === "pending") {
      this.rejectionReason = reason;
      this.state = "rejected";
      this._runRejectionHandlers();
      while (this.resolution && this.resolution.length > 0) {
        var resolution = this.resolution.shift();
        resolution.promise._reject(this.rejectionReason);
      }
    }
  }

  then(resolveHandler, rejectHandler) {
    console.log("resolveHandler", resolveHandler);
    var Promise = new newPromise(function () {});
    this.resolution.push({
      handler: resolveHandler,
      promise: Promise,
    });

    if (typeof rejectHandler === "function") {
      this.rejectionQueue.push({
        handler: rejectHandler,
        promise: Promise,
      });
    }

    if (this.state === "resolved") {
      this._runresolveHandler();
    }

    if (this.state === "rejected") {
      Promise._reject(this.rejectionReason);
    }

    return Promise;
  }

  catch(rejectHandler) {
    console.log("rejectHandler", rejectHandler);
    var Promise = new newPromise(function () {});
    this.rejectionQueue.push({
      handler: rejectHandler,
      promise: Promise,
    });

    if (this.state === "rejected") {
      this._runRejectionHandlers();
    }

    return Promise;
  }
}

var promise = new newPromise(function (resolve, reject) {
  console.log("promise  start");
  setTimeout(function () {
    console.log("promise 1 resolve");
    reject("fuck off");
  }, 1000);
  //     resolve("10");
  //   reject("fuck off");
});

promise
  .then(function (value) {
    console.log("second callback starts", value);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("promise 2 resolve");
        resolve("second resolve");
      }, 5000);
    });
  })
  .then(function (value1) {
    console.log("finish", value1);
  })
  .then(function () {
    console.log("finish11", value1);
  })
  .catch(function (error) {
    console.log("catch error", error);
  });

// console.log("hello");
// Promise.resolve().then(function () {});
