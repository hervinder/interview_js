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
  const response = yield fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=90813&APPID=5dd3e57156e6ebba767abb71509b53a0"
  );
  const data = yield response.json();
  console.log(data);
});
