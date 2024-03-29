let transactions = [
  {
    id: 25,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -850,
    category: "groceries",
    time: "2018-04-20T18:51:31.000Z",
  },
  {
    id: 16,
    sourceAccount: "company_x",
    targetAccount: "my_account",
    amount: 10000,
    category: "salary",
    time: "2018-03-25T08:10:00.000Z",
  },
  {
    id: 7,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -160,
    category: "groceries",
    time: "2018-03-02T13:14:00.000Z",
  },
  {
    id: 30,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-05-07T09:54:21.000Z",
  },
  {
    id: 17,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1870,
    category: "groceries",
    time: "2018-04-05T10:24:30.000Z",
  },
  {
    id: 24,
    sourceAccount: "my_account",
    targetAccount: "fitness_club",
    amount: -610,
    category: "other",
    time: "2018-04-22T11:54:10.000Z",
  },
  {
    id: 35,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-05-07T09:58:06.000Z",
  },
  {
    id: 26,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -450,
    category: "other",
    time: "2018-04-23T19:13:10.000Z",
  },
  {
    id: 10,
    sourceAccount: "my_account",
    targetAccount: "fitness_club",
    amount: -560,
    category: "other",
    time: "2018-03-04T12:54:10.000Z",
  },
  {
    id: 101,
    sourceAccount: "company_x",
    targetAccount: "my_account",
    amount: 240,
    category: "salary",
    time: "2018-02-25T08:00:30.000Z",
  },
  {
    id: 11,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1540,
    category: "groceries",
    time: "2018-03-05T16:24:31.000Z",
  },
  {
    id: 102,
    sourceAccount: "my_account",
    targetAccount: "internet_shop",
    amount: -250,
    category: "other",
    time: "2018-03-01T22:16:50.000Z",
  },
  {
    id: 19,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-04-07T09:54:21.000Z",
  },
  {
    id: 2,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-01T12:34:00.000Z",
  },
  {
    id: 23,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -70,
    category: "eating_out",
    time: "2018-04-15T09:12:20.000Z",
  },
  {
    id: 5,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-02T09:25:20.000Z",
  },
  {
    id: 28,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1870,
    category: "groceries",
    time: "2018-05-05T10:24:30.000Z",
  },
  {
    id: 1,
    sourceAccount: "company_x",
    targetAccount: "my_account",
    amount: 10000,
    category: "salary",
    time: "2018-02-25T08:00:00.000Z",
  },
  {
    id: 4,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -330,
    category: "other",
    time: "2018-03-01T20:10:15.000Z",
  },
  {
    id: 22,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -970,
    category: "eating_out",
    time: "2018-04-17T19:52:46.000Z",
  },
  {
    id: 21,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1690,
    category: "groceries",
    time: "2018-04-10T18:14:10.000Z",
  },
  {
    id: 6,
    sourceAccount: "my_account",
    targetAccount: "internet_shop",
    amount: -250,
    category: "other",
    time: "2018-03-01T22:16:40.000Z",
  },
  {
    id: 20,
    sourceAccount: "my_account",
    targetAccount: "internet_shop",
    amount: -1650,
    category: "other",
    time: "2018-04-08T21:36:41.000Z",
  },
  {
    id: 3,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1000,
    category: "groceries",
    time: "2018-03-01T17:28:32.000Z",
  },
  {
    id: 32,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-05-07T09:56:09.000Z",
  },
  {
    id: 39,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -70,
    category: "eating_out",
    time: "2018-05-15T09:12:20.000Z",
  },
  {
    id: 37,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -1690,
    category: "groceries",
    time: "2018-05-10T18:14:10.000Z",
  },
  {
    id: 31,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-05-07T09:55:10.000Z",
  },
  {
    id: 14,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-04-01T10:24:40.000Z",
  },
  {
    id: 33,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -90,
    category: "eating_out",
    time: "2018-05-07T09:57:05.000Z",
  },
  {
    id: 8,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -670,
    category: "eating_out",
    time: "2018-03-02T18:54:45.000Z",
  },
  {
    id: 41,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -850,
    category: "groceries",
    time: "2018-05-20T18:51:31.000Z",
  },
  {
    id: 201,
    sourceAccount: "company_x",
    targetAccount: "my_account",
    amount: 10000,
    category: "pension_benefits",
    time: "2018-02-25T08:00:00.000Z",
  },
  {
    id: 42,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -450,
    category: "other",
    time: "2018-05-23T19:13:10.000Z",
  },
  {
    id: 15,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-04-01T10:25:10.000Z",
  },
  {
    id: 12,
    sourceAccount: "my_account",
    targetAccount: "bowling_place",
    amount: -600,
    category: "other",
    time: "2018-03-05T21:12:10.000Z",
  },
  {
    id: 18,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -580,
    category: "other",
    time: "2018-04-05T20:01:18.000Z",
  },
  {
    id: 29,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -580,
    category: "other",
    time: "2018-05-05T20:01:18.000Z",
  },
  {
    id: 36,
    sourceAccount: "my_account",
    targetAccount: "internet_shop",
    amount: -1650,
    category: "other",
    time: "2018-05-08T21:36:41.000Z",
  },
  {
    id: 9,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-03-04T07:14:20.000Z",
  },
  {
    id: 40,
    sourceAccount: "my_account",
    targetAccount: "fitness_club",
    amount: -610,
    category: "other",
    time: "2018-05-22T11:54:10.000Z",
  },
  {
    id: 27,
    sourceAccount: "company_x",
    targetAccount: "my_account",
    amount: 10000,
    category: "salary",
    time: "2018-04-25T08:00:00.000Z",
  },
  {
    id: 13,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -50,
    category: "eating_out",
    time: "2018-04-01T10:24:00.000Z",
  },
  {
    id: 38,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -970,
    category: "eating_out",
    time: "2018-05-17T19:52:46.000Z",
  },
];
let output = [
  [
    {
      id: 6,
      sourceAccount: "my_account",
      targetAccount: "internet_shop",
      amount: -250,
      category: "other",
      time: "2018-03-01T22:16:40.000Z",
    },
    {
      id: 102,
      sourceAccount: "my_account",
      targetAccount: "internet_shop",
      amount: -250,
      category: "other",
      time: "2018-03-01T22:16:50.000Z",
    },
  ],
  [
    {
      id: 13,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -50,
      category: "eating_out",
      time: "2018-04-01T10:24:00.000Z",
    },
    {
      id: 14,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -50,
      category: "eating_out",
      time: "2018-04-01T10:24:40.000Z",
    },
    {
      id: 15,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -50,
      category: "eating_out",
      time: "2018-04-01T10:25:10.000Z",
    },
  ],
  [
    {
      id: 30,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -90,
      category: "eating_out",
      time: "2018-05-07T09:54:21.000Z",
    },
    {
      id: 31,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -90,
      category: "eating_out",
      time: "2018-05-07T09:55:10.000Z",
    },
    {
      id: 32,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -90,
      category: "eating_out",
      time: "2018-05-07T09:56:09.000Z",
    },
    {
      id: 33,
      sourceAccount: "my_account",
      targetAccount: "coffee_shop",
      amount: -90,
      category: "eating_out",
      time: "2018-05-07T09:57:05.000Z",
    },
  ],
];

let filterDuplicate = [];

function slice(object, keys) {
  return Object.keys(object)
    .filter(function (key) {
      return keys.indexOf(key) >= 0;
    })
    .reduce(function (acc, key) {
      acc[key] = object[key];
      return acc;
    }, {});
}

function compareDuplicateTransaction(item, transaction) {
  let filterKeys = slice(item, [
    "amount",
    "category",
    "sourceAccount",
    "targetAccount",
  ]);

  let duplicate = true;
  for (let key in filterKeys) {
    if (item[key] !== transaction[key]) {
      duplicate = false;
    }
  }
  return duplicate;
}

function findDuplicateTransaction(transaction) {
  let duplicateIndex = -1;
  for (let duplicate in filterDuplicate) {
    for (let item of filterDuplicate[duplicate]) {
      if (compareDuplicateTransaction(item, transaction)) {
        duplicateIndex = duplicate;
      }
    }
  }
  //   console.log("transaction", transaction, duplicateIndex);
  return duplicateIndex;
}
function sortingTransactionsAsc(transactions) {
  let sorted = [...transactions];

  return sorted.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.time) - new Date(b.time);
  });
}

function filterTime(items) {
  let newArray = [];

  for (let i = 0; i < items.length; i++) {
    let currentIndex = i;
    let nextIndex = i + 1;

    if (nextIndex < items.length) {
      let differenceInTimeStamp =
        (new Date(items[nextIndex].time) - new Date(items[currentIndex].time)) /
        1000;

      if (differenceInTimeStamp <= 60) {
        if (!newArray.includes(items[currentIndex])) {
          newArray.push(items[currentIndex]);
        }
        if (!newArray.includes(items[nextIndex])) {
          newArray.push(items[nextIndex]);
        }
      }
    }
  }

  return newArray;
}
function findDuplicateTransactions(transactions = []) {
  let filterTransactionSortedPerTimeRange = [];
  if (transactions.length === 0) return [];


  transactions.map((transaction) => {
    if (filterDuplicate.length === 0) {
      filterDuplicate.push([transaction]);
    } else {
      let duplicateTransactionIndex = findDuplicateTransaction(transaction);
      if (duplicateTransactionIndex >= 0) {
        filterDuplicate[duplicateTransactionIndex].push(transaction);
      } else {
        filterDuplicate.push([transaction]);
      }
    }
  });

  for (const trans in filterDuplicate) {
    let sortedTransactions = sortingTransactionsAsc(filterDuplicate[trans]);

    let timeRange = filterTime(sortedTransactions);

    if (timeRange.length !== 0) {
      filterTransactionSortedPerTimeRange.push(timeRange);
    }
  }

  filterTransactionSortedPerTimeRange.sort((a, b) => {
    console.log(b[0], a[0]);

    return new Date(a[0].time) - new Date(b[0].time);
  });

  return filterTransactionSortedPerTimeRange;

  // add your code here
}

findDuplicateTransactions(transactions);
