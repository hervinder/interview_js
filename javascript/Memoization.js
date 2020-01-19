//with two arguments


function sum(a, b) { return a + b }




function cache(func) { }

var csum = cache(sum);
csum(4, 3) - 7
csum(3, 5) - 8
csum(4, 3) - 7

function cache(fn) {
  let memo = {}

  return function (...args) {
    let key = args.join('');
    if (memo[key]) {
      console.log("memo", memo[key])
      return memo[key]
    } else {
      memo[key] = fn.apply(this, args);
      return memo[key];
    }

  }

}




/////// memotization of async function



function sum(a, b, cb) {

  // return a + b 
  setTimeout(() => cb(a + b), 100);
}


var csum = cache(sum);
csum(4, 3, (result) => console.log(result)) - 7
csum(3, 5, (result) => console.log(result)) - 8
csum(4, 3, (result) => console.log(result)) - 7

function cache(fn) {
  let memo = {}

  return function (...args) {

    let arg = args.slice(0, args.length - 1);
    let key = JSON.stringify(arg);
    let resultFn = args.slice(-1)[0];
    if (memo[key]) {
      resultFn(memo[key]);
    } else {

      fn.apply(this, [...arg, (result) => {
        memo[key] = result
        resultFn(result);
      }]);

    }

  }

}




// function cache(fn) {
//   let memo = {};
//   return function () {
//     let argu = arguments;
//     let key = Array.prototype.slice.call(argu).join('');

//     if (memo[key]) {
//       return memo[key]
//     }
//     else {

//       memo[key] = fn.apply(this, argu);
//       return memo[key]

//     }


//   }
// }



// with single arguments



// function cache(fn) {
//   let memo = {};
//   return function (argu) {

//     let key = argu;

//     if (memo[key]) {
//       return memo[key]
//     }
//     else {

//       memo[key] = fn.apply(this, argu);
//       return memo[key]

//     }


//   }
// }

