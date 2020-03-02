function foo(name){
    this.name = name
}

foo.prototype.myName = function(){

    return "foo return" `${this.name}`; 
}

function bar(name,label){
       foo.call(this,name);
       this.label = label;
} 

bar.prototype = Object.create(foo.prototype);

bar.prototype.myLabel = function(){
    return "foo return" `${this.label}`; 
}

var a = new bar();
a.myName();
a.myLabel();