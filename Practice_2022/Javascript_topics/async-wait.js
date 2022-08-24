const async = (generator) => {
  const g = generator();
  (function next(value) {
    const n = g.next(value);
    // console.log(n);
    if (n.done) return;
    n.value.then(next);
  })();
};

async(function* () {
  const response = yield fetch("https://gorest.co.in/public/v2/users");
  const data = yield response.json();
  console.log(data);
});

//practice

// function async(generator) {
//   const g = generator();

//   (function next(value) {
//     const next = g.next(value);
//     if (next.done) {
//       return;
//     }
//     next.value.then(next);
//   })();
// }

// async(function* () {
//   const response = yield fetch("https://gorest.co.in/public/v2/users");
//   const data = yield response.json();
//   console.log(data);
// });
