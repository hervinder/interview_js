// constructor design pattern

function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function(){
    return this.model + " has done " + this.miles + " miles";
}

// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
console.log( civic.toString() );
console.log( mondeo.toString() );



/// The Module Pattern


var testModule = (function () {
 
    var counter = 0;
   
    return {
   
      incrementCounter: function () {
        return counter++;
      },
   
      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }
    };
   
  })();
   
  // Usage:
   
  // Increment our counter
  testModule.incrementCounter();
   
  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  testModule.resetCounter();



  /// Singleton Design Pattern


  var SingletonDesign = (function(){
     var instances;
      
      var init = function(){
        var privateNumber = 2;

        return{
            public:function(){
            console.log("new public number");
            },
            getNumber:function(){
                return privateNumber;
            }
        }
      }

    return {
        getInstance: function(){
          if(!instances){
              instances = init();
          }
          return instances;
        }
    }

  })()