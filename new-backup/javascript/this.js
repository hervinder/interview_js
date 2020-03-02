//function invocation


function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();   //undefined




//default binding


var myFunction = function () {
    console.log(this);
}

myFunction();    // Window 

////////////

var myFunction = function () {
    console.log(this.a);
}

var a = 5;
myFunction();    //5  


// 2- Implicit Binding:

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();  // 2 

///////

var john = {
    name: 'John',
    greet: function (person) {
        console.log("Hi " + person + ", my name is " + this.name);
    }
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;
fx("Mark");   // Hi Mark, my name is 




//3- Explicit Binding:


///call

function greet() {
    console.log(this.name);
}

var person = {
    name: 'Alex'
}

greet.call(person, arg1, arg2, arg3) // Alex


//////// apply
function greet() {
    console.log(this.name);
}

var person = {
    name: 'Alex'
}

greet.apply(person, [args]); // Alex



function greet() {
    console.log(this.name);
}

var person = {
    name: 'Alex'
};

var greetPerson = greet.bind(person);
greetPerson(); // Alex



///4- New Binding

function Foo() {
    /*
       1- create a new object using the object literal 
       var this = {};
   */

    // 2- add properties and methods 
    this.name = 'Osama';
    this.say = function () {
        return "I am " + this.name;
    };

    // 3- return this;
}

var name = 'Ahmed';
var result = new Foo();
console.log(result.name);  //3













function foo(name) {
    this.name = name;

}

foo.prototype.fullname = function () {
    return "foo" + this.name;
}

function bar(name, label) {

    foo.call(this, name);
    this.label = label;
}

bar.prototype = Object.create(foo.prototype);
bar.prototype.fullLabel = function () {
    return "bar" + this.label
}


var person = new bar("harry", "hello");