class lazyArr {

    constructor(arr) {
        this.arr = arr;
    }


    double(fn) {
        const newArray = this.arr.map(fn);
        console.log(new lazyArr(newArray));
        return new lazyArr(newArray);
    }

    elements() {
        return this.arr;
    }
}


let l = new lazyArr([2, 3, 4]);
let double = l.double((x) => x * x);

console.log(l.elements());
console.log(double.elements());
console.log(double.double((x) => x * x * x).elements());

///


var sum = function (x, y, z) {
    return x + y + z;
}

const curryFun = (fn) => {
    const numberOfArguments = fn.length;
    let currentArgs = [];

    const sum = (...args) => {
        currentArgs = currentArgs.concat(...args);

        if (currentArgs.length >= numberOfArguments) {
            return currentArgs.reduce((acc, val) => {
                acc += val;
                return acc;
            }, 0);
        } else {
            return sum;
        }
    };

    return sum;
};

var result = curryFun(sum);
console.log(result(1)(2, 3, 5, 6));

var result1 = curryFun(sum);
console.log(result1(1, 2)(3));

var result2 = curryFun(sum);
console.log(result2(1, 2)(3));

// console.log(result(1)(2, 3));



const [InProgress, Completed, NotStarted] = [1, 2, 3];

let tasks = {
    'a': {
        job: function (finish) {
            setTimeout(function () {
                console.log('a done');
                finish('a');
            }, 5000);
        },
        dependencies: []
    },
    'b': {
        job: function (finish) {
            setTimeout(function () {
                console.log('b done');
                finish('b');
            }, 2000);
        },
        dependencies: []
    },
    'c': {
        job: function (finish) {
            setTimeout(function () {
                console.log('c done');
                finish('c');
            }, 2000);
        },
        dependencies: []
    },
    'd': {
        job: function (finish) {
            setTimeout(function () {
                console.log('d done');
                finish('d');
            }, 1000);
        },
        dependencies: ['a', 'b']
    },
    'e': {
        job: function (finish) {
            setTimeout(function () {
                console.log('e done');
                finish('e');
            }, 2000);
        },
        dependencies: ['c', 'd']
    }
};

tasks = Object.entries(tasks).reduce((tasks, [key, task]) => {
    task.status = NotStarted;
    task.listeners = [];
    task.executeJob = (fn) => {
        if (task.status === NotStarted) {
            task.status = InProgress;

            task.job((value) => {
                task.status = Completed;
                task.value = value;
                fn(value);
                task.listeners.forEach(listener => {
                    listener(value);
                });
            });

        } else if (task.status === InProgress) {
            task.listeners.push(fn)
        } else {
            // fn();
            fn(task.value);
        }
    };
    tasks[key] = task;
    return tasks;
}, {});

const keys = Object.keys(tasks);

const runAndResolve = (key, tasks, fn) => {
    const task = tasks[key];
    const numberOfDependencies = task.dependencies.length;
    if (numberOfDependencies > 0) {
        let resolvedDepenedencies = 0;
        for (dependency of task.dependencies) {
            runAndResolve(dependency, tasks, () => {
                ++resolvedDepenedencies;
                if (resolvedDepenedencies === numberOfDependencies) {
                    task.executeJob((res) => {
                        fn(res);
                    })
                }
            });
        }
    } else {
        task.executeJob((result) => {
            fn(result);
        });
    }
};

for (let key of keys) {
    runAndResolve(key, tasks, () => { });
};