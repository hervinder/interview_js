// function yes() {
//   var a = "hello";
//   console.log("a", a);
// }

// console.log(yes());

// var foo = {
//   a: 2,
//   get: function () {
//     console.log(this.a);
//   },
// };
// const bro = foo.get;
// console.log(bro());

// function alert() {
//   "use strict";
//   console.log(this.name + " is calling");
// }

// const name = "Kingsley";
// alert(); // Kingsley is calling

// function alert() {
//   console.log(this.age1 + " years old");
// }

// const myObj = {
//   age1: 22,
//   alert: alert,
//   nestedObj: {
//     age: 26,
//     alert: alert,
//   },
// };

// myObj.nestedObj.alert(); // 26 years old

// function alert() {
//   console.log(this.age + " years old");
// }

// const myObj = {
//   age: 22,
// };

// alert.call(myObj); // 22 years old

function giveAge(age) {
  this.age = age;
}

const bar = new giveAge(22);
console.log(bar.age); // 22
