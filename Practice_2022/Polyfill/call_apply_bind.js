// Array.prototype.myBind = function () {};

// let obj = {
//   name: "hevinder",
//   getName: function () {
//     return this.name;
//   },
// };

// let name1 = obj.getName;
// name1();

Function.prototype.myBind = function (...arr) {
  let funcObj = arr[0];
  let otherArguments = arr.slice(1, arr.length);
  let callInvocation = this;

  return function (...arg2) {
    return callInvocation.apply(funcObj, [...otherArguments, ...arg2]);
  };
};

Function.prototype.myCall = function (context, ...arg) {
  context.fn = this;

  context.fn(...arg);
};

Function.prototype.myApply = function (context, arg) {
  context.fn = this;

  context.fn(...arg);
};

let personName = {
  firstname: "Hervinder",
  lastname: "Singh",
};

function printName(hometown, state) {
  console.log(
    "name of the person",
    this.firstname + " " + this.lastname + "  " + hometown + " " + state
  );
}

// let print = printName.myBind(personName, "chandimandir");
// print("haryana");

// console.log(printName.myCall(personName, "chandimandir"));
console.log(printName.myApply(personName, ["chandimandir", "haryana"]));

// https://dev.to/araddula/js-polyfills-call-apply-bind-109i
