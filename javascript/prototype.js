function foo(name) {
  this.name = name;
}

foo.prototype.myName = function () {
  return "foo return"`${this.name}`;
};

function bar(name, label) {
  foo.call(this, name);
  this.label = label;
}

bar.prototype = Object.create(foo.prototype);

bar.prototype.myLabel = function () {
  return "foo return"`${this.label}`;
};

var a = new bar();
a.myName();
a.myLabel();

///////////////////////

function superType(firstName, lastname) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.friends = ["Mohit Jindal", "Sameer Kapoor"];
}

superType.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastname}`;
};

function subType(firstName, lastName, age) {
  superType.call(this, firstName, lastName);
  this.age = age;
}

subType.prototype = new superType();

subType.prototype.getAge = function () {
  return this.age;
};

let subTypeObject1 = new subType("hervinder", "singh", "29");
subTypeObject1.friends.push("lovesh sharma");

let subTypeObject2 = new subType("akash", "singh", "27");
