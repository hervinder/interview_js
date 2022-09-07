Function.prototype.myBind = function (...args) {
  const functionInvocation = this;
  const objReference = args.shift();

  return function (...otherArguments) {
    return functionInvocation.apply(objReference, [...args, ...otherArguments]);
  };
};

Function.prototype.myCall = function (...args) {
  const objReference = args.shift();
  objReference.fn = this;
  return objReference.fn(...args);
};

Function.prototype.myApply = function (objReference, args) {
  objReference.fn = this;
  return objReference.fn(...args);
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

let print = printName.myBind(personName, "chandimandir");
print("haryana");

console.log(printName.myCall(personName, "chandimandir", "haryana"));
console.log(printName.myApply(personName, ["chandimandir", "haryana"]));
