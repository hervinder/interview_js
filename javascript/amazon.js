function myObjectCreate(params) {

    var f = function () { };
    f.prototype = params;
    return new f();
}

var obj = {

    firstname: "hervinder",
    lastname: "singh"
}

function printName(name1, name2) {
    return "firstname" + this.firstname + "lastname" + this.lastname + name1 + name2;
}

Function.prototype.bindCreate = function (...arg1) {

    let obj = arguments[0];

    var argumen = arg1.splice(1);
    let objthis = this;
    return function (...arg2) {

        objthis.apply(obj, [...argumen, ...arg2])
    }
}

var bind = printName.bindCreate(obj, "sameer");
bind("hello");

let array = [];

function flatArray(arr) {

    if (arr.length === 0) {
        return;
    }
    if (Array.isArray(arr[0])) {
        flatArray(arr[0]);
        flatArray(arr.slice(1));
    }
    else {

        array.push(arr[0]);
        flatArray(arr.slice(1));
    }

}

flatArray([[1, 2], [[3], [4]], 5]);


function avg(...params) {
    let avergae = 1;
    for (var i = 0; i < params.length; i++) {
        avergae = avergae * params[i];
    }

    return avergae;

}
function curry(...arg1) {

    let argum = arg1[0];
    var otherArg1 = arg1.slice(1);
    let obj = this;

    return function (...arg2) {

        argum.apply(this, [...otherArg1, ...arg2]);
    }

}



var temp = curry(avg, 1, 2, 3);
temp(10); //4 - stores 1, 2, 3 in closures and adds 10 for average
temp(1, 2); //1.8 - stores 1, 2, 3 in closures and add 1, 2 for average


function getVolume(a, b, c) {
    return a * b * c;
}


function curryFun(fn) {

    let length = fn.length;

    return (function repeat(...a) {




        return function (...b) {

            var next = [...a, ...b];

            return next.length >= length ? fn.apply(this, next) : repeat.apply(null, next);

        }






    })()

}




function cuury(fn) {

    let length = fn.length;

    return (function repeat(...a) {

        return function (...b) {
            let next = [...a, ...b];

            return next.length >= length ? fn.apply(this, next) : repeat.apply(this, next);


        }


    })()


}

function curryFn(fn){
    let fnlength = fn.length;

    return (function repeat(...a){

        return function(...b){

            let next = [...a,...b];
            return next.length >= fnlength ? fn.apply(this,next) : repeat.apply(this,next);

        }

    })()
}







// var curry = curryFun(getVolume);

// console.log(curry(2)(3,4));

var sum = function (x, y, z) {
    return x + y + z;
}

var result = curryFun(sum);
console.log(result(1)(2, 3, 5, 6));
console.log(result(1, 2)(3));
console.log(result(1)(2, 3));



Array.prototype.Map = function (fn) {

    let values = '';
    let ValArray = [];
    for (let i = 0; i < this.length; i++) {

        values = fn(this[i]);
        ValArray.push(values);

    }

    return ValArray;

}



let arr = [3, 4, 5, 6, 7]
let maps = arr.map(function (value) { return value - 1 });
console.log(maps);


////
function debounce(fn, time) {

    let timer = '';
    return function (...args) {

        let obj = this
        let funcCall = function () {
            fn.apply(this, arguments)
        }
        clearTimeout(timer);
        timer = setTimeout(funcCall, time)

    }
}

window.addEventListener('keyup', debounce(() => {
    console.log("ehllo");
}, 1000));


function debounce(fn, timer) {

    var timer;
    return function (...args) {

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, timer)
    }

}

export function debouncer(fn, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...arguments);
        }, wait);
    }
}

function debouncer(fn,wait){
    var timeout;
    return function(){
         clearTimeout(timeout);
        timeout  = setTimeout(function(){
    fn(...arguments);
        },wait)
        
    }
}