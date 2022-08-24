var flat = [];
function flattern(arr) {
  if (arr.length === 0) {
    return;
  }

  if (Array.isArray(arr[0])) {
    flattern(arr[0]);
    flattern(arr.splice(1));
  } else {
    flat.push(arr[0]);
    flattern(arr.splice(1));
  }
}

let arr = [];
function flat(arr) {
  if (arr.length === 1) {
    return;
  }

  if (Array.isArray(arr[0])) {
    flat(arr[0]);
    flat(arr.splice(1));
  } else {
    arr.push(arr[0]);
    flat(arr.splice(1));
  }
}

flattern([[1], [2, 3], [4], 5]);

var arrFlat = [];
function flat(arr) {
  if (arr.length === 1) {
    return;
  }

  if (typeof Array.isArray(arr[0])) {
    flat(arr[0]);
    flat(arr.splice(1));
  } else {
    arrFlat.push(arr[0]);
    flat(arr.splice(1));
  }
}

function flattern(arr) {
  let newArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      let obj = flattern(element);
      newArray.push(...obj);
    } else {
      newArray.push(element);
    }
  });

  return newArray;
}

function flattern(arr) {
  let newArray = [];
  arr.forEach(function (element) {
    if (Array.isArray(element)) {
      let obj = flattern(element);
      newArray.push(...obj);
    } else {
      newArray.push(element);
    }
  });
}

flattern([[1], [2, 3], [4], 5]);
