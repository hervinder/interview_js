// bind polyfill


let name = {
    firstname: "Hervinder",
    lastname: "Singh"
}

function printName(hometown, state) {
    console.log("name of the person", this.firstname + ' ' + this.lastname + '  ' + hometown + ' ' + state);

}

Function.prototype.myBind = function (...args) {

    var obj = this;
    var bindinfObj = args[0];
    var params = args.slice(1);
    return function (...args1) {


        obj.apply(bindinfObj, [...params, ...args1]);

    }

}



// let fullname = printName.bind(name);
let fullname = printName.myBind(name, "chandimandir");
fullname("haryana");



// call polyfill

const obj = {
    name: "Ankur Anand"
};

Function.prototype.mycall = function (obj) {
    // const args = [];
    // // arguments are saved in strings, using args
    // for (var i = 1, len = arguments.length; i < len; i++) {
    //     args.push("arguments[" + i + "]");
    // }

    // obj.fnName = this;



    // obj['fnName'](" + args + ")
    obj = obj;
    let uniqueID = "00" + Math.random();

    obj[uniqueID] = this;

    const args = [];

    obj[uniqueID].apply(this,arguments);
    // arguments are saved in strings, using args3
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("arguments[" + i + "]");
    }

    // strings are reparsed into statements in the eval method
    // Here args automatically calls the Array.toString() method.
    console.log(eval(" " + args + ""))

    var result = eval("obj[uniqueID](" + args + ")");
    delete obj[uniqueID];
    return result;




}

function showProfileMessage(message, xyz) {
    console.log(message, this.name);
}

showProfileMessage.mycall(obj, "welcome", "hello");
// showProfileMessage.call(obj, "welcome ");




///////////////////Object.create polyfill

function createAndLinkObject(o) {
	function F(){}
    F.prototype = o;
    var f = new F();
	return f;
}

var anotherObject = {
	a: 2
};

var myObject = createAndLinkObject( anotherObject );

myObject.a; // 2




///////////////// Map

Array.prototype.Map = function(fn){

    let values='';
    let ValArray=[];
    for(let i=0; i< this.length; i++){

        values = fn(this[i]);
        ValArray.push(values);

    }

    return ValArray;

}



let arr =[3,4,5,6,7]
let maps = arr.map(function(value){ return value -1});
console.log(maps);


////
//// debounce
function  debounce(fn,time){

    let timer='';
       return function (...args){
       
           let obj= this
           let funcCall = function (){
               fn.apply(this,arguments)
           }
          clearTimeout(timer);
          timer= setTimeout( funcCall,time)
   
       }
   }
   
   window.addEventListener('keyup', debounce(() => {
       console.log("ehllo");
     }, 1000));




     //implement setinterval using settimeout

     function setIntervalCustom(fn,timer){
       
        return setTimeout(function(){
             
            if(typeof fn == "function"){
               fn();
               setIntervalCustom(fn,timer);
            }
            else{
                console.log("passing function is not a function");
            }
        },timer) 
     } 

   function hello(){
       console.log("hello");  
     }

     setIntervalCustom(hello,3000);
      