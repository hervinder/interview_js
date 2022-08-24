// // Example using a function expression
// function createObject() {
//   console.log("Inside `createObject`:", this.foo);
//   return {
//     foo: 42,
//     bar: function () {
//       console.log("Inside `bar`:", this.foo);
//     },
//   };
// }

// let b = createObject(); // override `this` inside createObject
// console.log(b);
// b.bar();
// //Inside `createObject`: 21
// //   Inside `bar`: 42

class FullName {
  constructor(name) {
    this.name = name;
  }
  result() {
    console.log("dfd", this, this.name);
  }
}
let name = new FullName("Suprabha");
console.log(name);
// FullName {name: "Suprabha"}

//https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#3-method-invocation
