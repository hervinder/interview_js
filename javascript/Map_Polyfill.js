
// array reduce ployfill

// callback   acc  curindex	   array	     return value
// first call	0   1	1	[0, 1, 2, 3, 4]	  1
// second call	1	2	2	[0, 1, 2, 3, 4]	  3
// third call	3	3	3	[0, 1, 2, 3, 4]	  6
// fourth call	6	4	4	[0, 1, 2, 3, 4]   10

// [0, 1, 2, 3, 4].reduce(function (accumlator, currentValue, index) {

//     return accumlator + currentValue;

// })  // 10 



Array.prototype.myReduce = Array.prototype.myReduce || function (callback, initialValue) {
    let accumulator;
    let firstIndex;

    if (arguments.length === 1) {
        accumulator = this[0];
        firstIndex = 1;
    } else {
        accumulator = initialValue;
        firstIndex = 0;
    }

    for (let index = firstIndex; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index);
    }

    return accumulator;
};

[0, 1, 2, 3, 4].myReduce(function (accumlator, currentValue, index) {

    return accumlator + currentValue;

}, 2) // 12



let numbers = [1, 4, 9]
// let roots = numbers.map(function (num) {
//     return Math.sqrt(num)
// })
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


Array.prototype.myMap = Array.prototype.myMap || function (callback) {

    let newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;

}

let roots = numbers.myMap(function (num) {
    return Math.sqrt(num)
})

// forEach
// The forEach() method executes a provided function once for each array element.
// +----------------+-------------------------------------+---------------------------------------+
// |                | foreach                             | map                                   |
// +----------------+-------------------------------------+---------------------------------------+
// | Functionality  | Performs given operation on each    | Performs given "transformation" on    |
// |                | element of the array                | "copy" of each element                |
// +----------------+-------------------------------------+---------------------------------------+
// | Return value   | Returns undefined                   | Returns new array with tranformed     |
// |                |                                     | elements leaving back original array  |
// |                |                                     | unchanged                             |
// +----------------+-------------------------------------+---------------------------------------+
// | Preferrable    | Performing non-transformation like  | Obtaining array containing output of  |
// | usage scenario | processing on each element.         | some processing done on each element  |
// | and example    |                                     | of the array.                         |
// |                | For example, saving all elements in |                                       |
// |                | the database                        | For example, obtaining array of       |
// |                |                                     | lengths of each string in the         |
// |                |                                     | array                                 |
// +----------------+-------------------------------------+-----------------------





Array.prototype.myForEach = Array.prototype.myForEach || function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}


// Filter
/// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



Array.prototype.myFilter = Array.prototype.Filter || function (callback) {

    let newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }

    }
    return newArray;

}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);