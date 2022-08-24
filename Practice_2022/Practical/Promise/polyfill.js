// class Promise {

//     constructor(executor) {
//         this.resolutionStack = [];
//         executor(this.resolver.bind(this))
//     }

//     resolver() {
//         while (this.resolutionStack.length > 0) {
//             let resolverhandler = this.resolutionStack.shift();
//             resolverhandler();
//         }

//     }
//     then(resolutionhandler) {
//         this.resolutionStack.push(resolutionhandler);
//     }

// }

class MyPromise {
  constructor(executor) {
    this._resolutionQueue = [];
    this._rejectionQueue = [];
    this._state = "pending";
    this._value;
    this._rejectionReason;

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }

  _runRejectionHandlers() {
    while (this._rejectionQueue.length > 0) {
      var rejection = this._rejectionQueue.shift();

      try {
        var returnValue = rejection.handler(this._rejectionReason);
      } catch (e) {
        rejection.promise._reject(e);
      }

      if (returnValue && returnValue instanceof MyPromise) {
        returnValue
          .then(function (v) {
            rejection.promise._resolve(v);
          })
          .catch(function (e) {
            rejection.promise._reject(e);
          });
      } else {
        rejection.promise._resolve(returnValue);
      }
    }
  }

  _runResolutionHandlers() {
    // console.log("this._resolutionQueue.", this._resolutionQueue);
    while (this._resolutionQueue.length > 0) {
      var resolution = this._resolutionQueue.shift();

      try {
        var returnValue = resolution.handler(this._value);
      } catch (e) {
        resolution.promise._reject(e);
      }

      if (returnValue && returnValue instanceof MyPromise) {
        returnValue
          .then(function (v) {
            resolution.promise._resolve(v);
          })
          .catch(function (e) {
            resolution.promise._reject(e);
          });
      } else {
        resolution.promise._resolve(returnValue);
      }
    }
  }

  _reject(reason) {
    if (this._state === "pending") {
      this._rejectionReason = reason;
      this._state = "rejected";

      this._runRejectionHandlers();

      while (this._resolutionQueue.length > 0) {
        var resolution = this._resolutionQueue.shift();
        resolution.promise._reject(this._rejectionReason);
      }
    }
  }

  _resolve(value) {
    if (this._state === "pending") {
      this._value = value;
      this._state = "resolved";

      this._runResolutionHandlers();
    }
  }

  then(resolutionHandler, rejectionHandler) {
    var newPromise = new MyPromise(function () {});

    this._resolutionQueue.push({
      handler: resolutionHandler,
      promise: newPromise,
    });

    console.log(
      "this._resolutionQueue.",
      this,
      this._resolutionQueue[0].handler,
      this._resolutionQueue.length
    );

    if (typeof rejectionHandler === "function") {
      this._rejectionQueue.push({
        handler: rejectionHandler,
        promise: newPromise,
      });
    }

    if (this._state === "resolved") {
      this._runResolutionHandlers();
    }

    if (this._state === "rejected") {
      newPromise._reject(this._rejectionReason);
    }

    return newPromise;
  }

  catch(rejectionHandler) {
    var newPromise = new MyPromise(function () {});

    this._rejectionQueue.push({
      handler: rejectionHandler,
      promise: newPromise,
    });

    if (this._state === "rejected") {
      this._runRejectionHandlers();
    }

    return newPromise;
  }
}

// var promise = new MyPromise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("first resolve");
//   }, 2000);
// });

// promise
//   .then(function (value) {
//     console.log("second callback starts");

//     return new MyPromise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve("second resolve");
//       }, 5000);
//     });
//   })
//   .then(function (value) {
//     console.log("finish", value);
//   });

var promise = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 1 resolve");
    resolve("10");
  }, 1000);
});

promise
  .then(function (value) {
    console.log("second callback starts", value);

    return new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        console.log("promise 2 resolve");
        resolve("second resolve");
      }, 50000);
    });
  })
  .then(function (value) {
    console.log("finish", value);
  });
