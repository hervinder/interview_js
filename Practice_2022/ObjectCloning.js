function stringfyNumber(object) {
  let newObj = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] === "number") {
        newObj[key] = Number(object[key]).toString();
      } else if (
        typeof object[key] === "object" &&
        !Array.isArray(object[key])
      ) {
        newObj[key] = stringfyNumber(object[key]);
      } else {
        newObj[key] = object[key];
      }
    }
  }
  return newObj;
}

function deepCloning(object) {
  let newObj = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] === "object" && !Array.isArray(object[key])) {
        newObj[key] = stringfyNumber(object[key]);
      } else {
        newObj[key] = object[key];
      }
    }
  }

  return newObj;
}

function fetchJsonValueByPath(object, jsonPath) {
  const path = jsonPath.split(".");

  for (let index = 0; index < path.length; index++) {
    const element = path[index];
    if (
      typeof object[element] === "object" &&
      !Array.isArray(object[element])
    ) {
      object = object[element];
    } else {
      return object[element];
    }
  }
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
let obj1 = deepCloning(obj23);
stringfyNumber(obj1);
deepCloning(obj23);

console.log(fetchJsonValueByPath(obj23, "data.info.random"));
