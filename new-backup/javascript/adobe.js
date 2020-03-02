Function.prototype.mybind = function (...arg) {

    let objCreate = arg[0];
    let objthis = this;
    let left = arg.splice(1);

    return function (...args2) {


        objthis.apply(objCreate, [...left, ...args2]);

    }




}


Array.prototype.myReduce = Array.prototype.myReduce || function (callback, initialValue) {

    let firstIndex, accumenter;

    if (arguments.length === 1) {
        accumenter = this[0]
        firstIndex = 1;
    } else {
        accumenter = initialValue
        firstIndex = 0;
    }

    for (let i = firstIndex; i < this.length; i++) {

        accumenter = callback(accumenter, this[i], i)
    }
}

[1, 2, 3, 4].myReduce(function (accumenter, currentValue, index) {

    return accumenter + currentValue;

}, 2)