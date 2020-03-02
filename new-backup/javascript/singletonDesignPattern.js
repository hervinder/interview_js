/* Lazy Instantiation skeleton for a singleton pattern */

var MyNameSpace = {};
MyNameSpace.Singleton = (function () {

    // Private attribute that holds the single instance
    var singletonInstance;

    // All of the normal code goes here
    function constructor() {
        // Private members
        var privateVar1 = "Nishant";
        var privateVar2 = [1, 2, 3, 4, 5];

        function privateMethod1() {
            // code stuff
        }

        function privateMethod1() {
            // code stuff
        }

        return {
            attribute1: "Nishant",
            publicMethod: function () {
                // alert("Nishant");// some code logic
            }
        }
    }

    return {
        // public method (Global access point to Singleton object)
        getInstance: function () {
            //instance already exist then return  
            if (!singletonInstance) {
                singletonInstance = constructor();
            }
            return singletonInstance;
        }
    }

})();

// getting access of publicMethod
console.log(MyNameSpace.Singleton.getInstance().publicMethod());



var singletonDesign = {};

singletonDesign.initialize = (function () {

    var singleInstance1;

    function constructorINit() {
        var name = "harry";

        var privateVar = "Nishant";
        var privateVar = [1, 2, 3, 4, 5];

        function privateMethod1() {
            // code stuff
        }

        function privateMethod1() {
            // code stuff
        }

        return {
            attribute1: "Harry",
            publicMethod: function () {
                // alert("Harry");// some code logic
            }
        }


    }


    return {
        constructorCall: function () {

            if (!singleInstance1) {
                singleInstance1 = constructorINit();
            }
            return singleInstance1;

        }
    }




})()