// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello from a Promise!");
//   }, 2000);

//   setTimeout(() => {
//     resolve("Hello from a Promise!");
//   }, 3000);
// });

// promise.then((value) => console.log(value));

// import { Observable } from 'rxjs';
// import { func } from 'prop-types';

// const observable = new Observable(observer => {
//   setTimeout(() => {
//     observer.next('Hello from a Observable!');
//   }, 2000);
// });

// observable.subscribe(value => console.log(value));

// observable implementation

class SafeObserver {
  constructor(dest) {
    this.destination = dest;
    this.isUnsubscribed = false;
  }

  next(value) {
    const destination = this.destination;
    if (destination.next && !this.isUnsubscribed) {
      destination.next(value);
    }
  }

  complete() {
    const destination = this.destination;
    if (destination.complete && !this.isUnsubscribed) {
      destination.complete && destination.complete();
      this.unsubscribe();
    }
  }

  error(value) {
    const destination = this.destination;
    if (destination.error && !this.isUnsubscribed) {
      destination.error && destination.error(value);
      this.unsubscribe();
    }
  }
  unsubscribe() {
    this.isUnsubscribed = true;
    this._unsubscribe && this._unsubscribe();
  }
}
class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(observer) {
    const safeObserver = new SafeObserver(observer);
    safeObserver._unsubscribe = this._subscribe(safeObserver);
    return () => {
      safeObserver.unsubscribe();
    };
  }
}

const myObservable = new Observable((observer) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < 10) {
      observer.next(i++);
    } else {
      observer.complete();
    }
  }, 100);

  return () => {
    console.log("unsubscribe");
    clearInterval(interval);
  };
});

const observer = {
  next: function (value) {
    console.log("next", value);
  },
  error: function (value) {
    console.log("error", value);
  },
  complete: function () {
    console.log("complete");
  },
};
const unsub = myObservable.subscribe(observer);

setTimeout(() => {
  unsub();
  console.log("dffd");
}, 500);
