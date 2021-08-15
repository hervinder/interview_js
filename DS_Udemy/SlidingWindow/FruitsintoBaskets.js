/*
Problem Statement 
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both the baskets.
Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
'''

*/

function fruitBasket(string, target) {
  let distinctObj = {};
  let start = 0;
  let maxLength = Number.MIN_VALUE;

  for (let end = 0; end < string.length; end++) {
    let strValue = string[end];
    distinctObj[strValue] = (distinctObj[strValue] || 0) + 1;

    while (Object.keys(distinctObj).length > target && start < end) {
      if (distinctObj[string[start]] === 1) {
        delete distinctObj[string[start]];
      } else {
        distinctObj[string[start]] = distinctObj[string[start]] - 1;
      }
      start++;
    }
  }
  for (const key in distinctObj) {
    if (distinctObj.hasOwnProperty(key)) {
      maxLength = maxLength + distinctObj[key];
    }
  }
  return maxLength;
  console.log(distinctObj);
}

function fruitBasket1(string, target) {
  let start = 0;
  let end = 0;
  let distinctObj = {};
  for (let index = 0; index < string.length; index++) {
    distinctObj = (distinctObj[string[index]] || 0) + 1;

    while (Object.keys(distinctObj).length > target && start < end) {
      if (distinctObj[string[start]] === 1) {
        delete distinctObj[string[start]];
      } else {
        distinctObj[string[start]] = distinctObj[string[start]] - 1;
      }
      start++;
    }
  }

  for (const key in distinctObj) {
    if (distinctObj.hasOwnProperty(key)) {
      maxLength = maxLength + distinctObj[key];
    }
  }
}

fruitBasket(["A", "B", "C", "B", "B", "C"], 2);
// Time Complexity: O(N) where NN is the length of tree.
// Space Complexity: O(N)
