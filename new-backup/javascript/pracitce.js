let name = {
    firstname: "Hervinder",
    lastname: "Singh"
}

function printName(hometown, state) {
    console.log("name of the person", this.firstname + ' ' + this.lastname + '  ' + hometown + ' ' + state);

}
Function.prototype.myBind = function (...args1) {

    let obj = this;
    let bind = args1[0];
    let arguments1 = args1.slice(1);

    return function (...args2) {

        obj.apply(bind, [...arguments1, ...args2])
    }
}


let print = printName.myBind(name, "hervinder");
print("Singh");



createAndLinkObject = function (obj) {

    var fn = function () { };
    fn.prototype = obj;
    let constr = new fn();
    return constr;
}



var anotherObject = {
    a: 2
};

var myObject = createAndLinkObject(anotherObject);



class Promise {

    constructor(executor) {

        let resolver = []
        executor(this.resolveBind.bind(this))

    }

    resolveBind(...arguments) {

        while (this.resolver.length > 0) {
            let call = resolver.shift();
            call(...arguments);

        }

    }
    then(fn) {
        resolver.push(fn);
    }



}

var items = {};
subscribe = function (item, listner) {


    if (!items.hasOwnProperty[item]) {
        items[item] = [];
    }
    items[item].push(listner)


}


publish = function (item, params) {

    if (!items.hasOwnProperty[item]) {
        return;
    }

    items[item][0](params);

}


let arr1 = [];
function flattern(arr) {

    if (arr.length === 0) {
        return;
    }

    if (Array.isArray(arr[0])) {
        flattern(arr[0]);
        flattern(arr.splice(1))

    }
    else {
        arr1.push(arr[0]);
        flattern(arr.splice(1));
    }

}



function sum(x) {

    return function (y) {

        if (y === undefined) {
            return x;
        }
        else {
            return sum(x + y)
        }


    }
}


function deepCloning(obj) {
    var deep = {};
    for (let key in obj) {

        if (typeof key === 'number') {
            deep[key] = obj[key].toString();
        }
        if (typeof key === 'object' && !Array.isArray(key)) {

            deep[key] = deepCloning(obj[key])
        }
        else {
            deep[key] = obj[key];
        }

    }

    return obj;
}

deepCloning(obj23)


obj23 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}




//Debounce ployfill



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



/// bind ployfill

let objConfig = {
    name: "hervinder",
    department: "Computer Science"
}

function printNameConfig() {
    console.log("name printed" + this.name + "deparment" + this.department);
}


Function.prototype.bindCreate = function (...arg1) {

    let obj = arg1[0];
    let arg1_remaining = arg1.slice(1);
    let objThis = this;

    return function (...arg2) {

        this.apply(obj, [...arg1_remaining, arg2])
    }

}


var name1 = printNameConfig.bindCreate(objConfig, "arg1", "arg2");
name1("Hello");


// debounce


function debounce(fn, time) {
    let timer = '';
    return function (...arg) {

        let config = function () {
            fn.apply(this, [...arg])
        }

        clearInterval(timer);
        timer = setTimeout(config, time)
    }
}


debounce(() => {
    console.log("debounce trigger");
}, 200)





//promise

class PromiseRes {

    constructor(executor) {
        this.stack = [];
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        while (this.stack.length > 0) {

            let fn = this.stack.shift();
            fn(value);
        }
    }
    reject(value) {

    }
    then(fn) {
        this.stack.push(fn);

    }

}

var promise = new PromiseRes(function (resolve, reject) {

    setTimeout(function () {
        resolve("first resolve");
    }, 50000)
})

promise.then(function (value) {
    console.log("first callback starts", value);

})

class Promise {
    constructor(executor) {
        this.stack = [];
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        let fn = this.stack.shift();
        fn(value)
    }
    reject(){
     
    }
    then(fn) {
        this.stack.push(fn);
    }
    catch(){

    }
}



let promiseCreate = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve("first resolve");
    }, 1000)
})

promiseCreate.then(function (value) {
    console.log(value);
})
