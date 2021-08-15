/*
Frequency Counter
this pattern uses objects or sets to collect values / frequencies of values
this can avoid the need for nested loops or o(n^2) operations with arrays / strings
*/

// Naive approach time comaplexity  o(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    //o(n)

    var currentIndex = arr2.indexOf(arr1[i] * arr1[i]); // o(n)
    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  return true;
}

same([1, 2, 3], [1, 4, 9]);
// Frequency Counter  approach time comaplexity  o(n)

function frequencyCounter(arr1, arr2) {
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for (let key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    console.log(key * key in frequencyCounter2);
    if (!(key * key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key * key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

frequencyCounter([1, 2, 3], [1, 9, 4]);
