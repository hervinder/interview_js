function stringifyNumber(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumber(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function deepCloning(obj) {
  var newObj1 = {};

  for (var key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj1[key] = deepCloning(obj[key]);
    } else {
      newObj1[key] = obj[key];
    }
  }

  return newObj1;
}

obj23 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

var clone = stringifyNumber(obj23);
console.log(clone);

var deep = deepCloning(obj23);
console.log(deep);

function fetchJsonValueByPath(obj, path) {
  var pathArray = path.split(".");

  for (var i = 0, n = pathArray.length; i < n; ++i) {
    var key = pathArray[i];
    if (key in obj) {
      obj = obj[key];
    } else {
      return;
    }
  }
  return obj;
}

function fetchJsonValueByPath(obj, path) {
  let path = path.split(".");

  for (let i = 0; i < path.length; i++) {
    var key = path[i];

    if (key in obj) {
      obj = obj[key];
    } else {
      return;
    }
  }

  return obj;
}

console.log(fetchJsonValueByPath(obj23, "data.val"));
