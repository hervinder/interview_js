/**
 * @param {Function} Child  - class which should be extended
 * @param {Function} Parent - class which should be the parent
 * @return {Function}
 */
function _extend(Child, Parent) {
  // Create a prototype object which have a __proto__
  // link to parent class
  Child.prototype = Object.create(Parent.prototype);
  // Defined a super class link
  Child.prototype._super = Parent;
  // We've created a prototype object on Child with an empty
  // constuctor, this will result to resolving the constructor
  // to ParentClass. Let's provide a correct constuctor function
  Object.defineProperty(Child.prototype, "constructor", {
    value: Child,
    enumerable: false,
    writable: true,
  });

  return Child;
}

function extend(child, parent) {
  child.prototype = Object.create(parent);
  child._super = parent;

  Object.defineProperties(child.prototype, "constructor", {
    value: child,
    enumerable: false,
    writable: true,
  });
}

function ParentClass() {
  this.score = 0;
}
ParentClass.prototype.increment = function () {
  return ++this.score;
};
ParentClass.prototype.decrement = function () {
  return --this.score;
};

const ChildClass = _extend(function ChildClass() {
  this._super();
  this.name = "Eugene";
  this.age = 26;
}, ParentClass);

ChildClass.prototype.toString = function () {
  return `${this.name} ${this.age} ${this.score}`;
};

const ch = new ChildClass();
console.log(ch.toString());
ch.increment();
console.log(ch.toString());
console.log(ch instanceof ParentClass);
console.log(ch instanceof ChildClass);
