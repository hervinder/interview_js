function debounce(callbackFn, wait) {
  return function (...args) {
    clearTimeout(timeout);
    var timeout = setTimeout(() => {
      callbackFn(...args);
    }, wait);
  };
}

let keyStoke = debounce(function (arg, r) {
  console.log("debounce", arg, r);
}, 1300);

keyStoke();

function throttle(callbackFn, wait) {
  let isThrottle = true;
  return function (...args) {
    const context = this;
    if (isThrottle) {
      callbackFn.apply(context, args);
      isThrottle = false;
      setTimeout(() => {
        isThrottle = true;
      }, wait);
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => {
    console.log("resize");
  }, 1000)
);
