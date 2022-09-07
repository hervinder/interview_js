class SafeObserver {
  constructor(dest) {
    this.destination = dest;
    this.unsub = false;
  }

  next(value) {
    if (this.destination.next && !this.unsub) {
      this.destination.next(value);
    }
  }

  complete(value) {
    if (this.destination.complete && !this.unsub) {
      this.destination.complete(value);
      this.unsubscribe();
    }
  }

  error(value) {
    if (this.destination.error && !this.unsub) {
      this.destination.error(value);
      this.unsubscribe();
    }
  }
  unsubscribe() {
    this.unsub = true;
    this._unsubscribe && this._unsubscribe();
  }
}

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(observer) {
    const newSafeObserver = new SafeObserver(observer);
    newSafeObserver._unsubscribe = this._subscribe(newSafeObserver);

    return () => {
      newSafeObserver.unsubscribe && newSafeObserver.unsubscribe();
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
