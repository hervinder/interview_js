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
        this._state = 'pending';
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
                returnValue.then(function (v) {
                    rejection.promise._resolve(v);
                }).catch(function (e) {
                    rejection.promise._reject(e);
                });
            } else {
                rejection.promise._resolve(returnValue);
            }
        }
    }

    _runResolutionHandlers() {
        console.log("this._resolutionQueue.", this._resolutionQueue);
        while (this._resolutionQueue.length > 0) {
            var resolution = this._resolutionQueue.shift();

            try {
                var returnValue = resolution.handler(this._value);
            } catch (e) {
                resolution.promise._reject(e);
            }

            if (returnValue && returnValue instanceof MyPromise) {
                returnValue.then(function (v) {
                    resolution.promise._resolve(v);
                }).catch(function (e) {
                    resolution.promise._reject(e);
                });
            } else {
                resolution.promise._resolve(returnValue);
            }
        }
    }

    _reject(reason) {
        if (this._state === 'pending') {
            this._rejectionReason = reason;
            this._state = 'rejected';

            this._runRejectionHandlers();

            while (this._resolutionQueue.length > 0) {
                var resolution = this._resolutionQueue.shift();
                resolution.promise._reject(this._rejectionReason);
            }
        }
    }

    _resolve(value) {
        if (this._state === 'pending') {
            this._value = value;
            this._state = 'resolved';

            this._runResolutionHandlers();
        }
    }

    then(resolutionHandler, rejectionHandler) {


        console.log("this._resolutionQueue.", this._resolutionQueue);
        var newPromise = new MyPromise(function () { });

        this._resolutionQueue.push({
            handler: resolutionHandler,
            promise: newPromise
        });

        if (typeof rejectionHandler === 'function') {
            this._rejectionQueue.push({
                handler: rejectionHandler,
                promise: newPromise
            });
        }

        if (this._state === 'resolved') {
            this._runResolutionHandlers();
        }

        if (this._state === 'rejected') {
            newPromise._reject(this._rejectionReason);
        }

        return newPromise;
    }

    catch(rejectionHandler) {
        var newPromise = new MyPromise(function () { });

        this._rejectionQueue.push({
            handler: rejectionHandler,
            promise: newPromise
        });

        if (this._state === 'rejected') {
            this._runRejectionHandlers();
        }

        return newPromise;
    }

}


var promise = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve("first resolve");
    }, 50000)
})

promise.then(function (value) {

    console.log("second callback starts");

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("second resolve");
        }, 500000)
    })
}).then(function () {
    console.log("second handler");
})


// promise.then(function () {
//     console.log("bye")
// })



////

console.log("promise 1");

var promise1 = new Promise((resolve, reject) => {
    console.log("promise 4");
    setTimeout(resolve, 1000, 'first')
    console.log("promise 5");
}).then(function (x) {
    return promise2;
}).then((x) => {
    return promise3;
}).then((x) => {
    console.log(x);
})





var promise2 = new Promise((resolve, reject) => {

    setTimeout(resolve, 2000, 'second')

}).then(function (x) {
    return x;
}).then(() => {
    return 10;
})


var promise3 = new Promise((resolve, reject) => {

    setTimeout(resolve, 3000, 'third')

})

//////////
var printNumber1 = function (i, time) {
    return new Promise(function (r) {
        setTimeout(function () {
            console.log(i);
            r(i);
        }, time);
    });
};
var queue1 = Promise.resolve();

for (let i = 0; i <= 10; i++) {
    console.log("hello");

    queue1 = queue1.then(function () {

        console.log("hey");
        return printNumber1(i, 2000);

    });
}