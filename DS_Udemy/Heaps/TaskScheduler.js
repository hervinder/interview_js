/* 
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. 
Tasks could be done in any order. 
Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array),
that is that there must be at least n units of time between any two same tasks.

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.


Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
*/

// function taskScheduler(array, k) {
//   let frequency = {};
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     frequency[element] = (frequency[element] || 0) + 1;
//   }

//   const keysSorted = Object.keys(frequency).sort(function (a, b) {
//     return frequency[b] - frequency[a];
//   });
//   const fmax = frequency[keysSorted[0]];
//   let ideal_time = (fmax - 1) * k;
//   for (let index = 1; index < keysSorted.length && ideal_time >= 0; index++) {
//     const element = keysSorted[index];
//     ideal_time = ideal_time - Math.min(fmax - 1, frequency[element]);
//   }

//   console.log(array.length + ideal_time);
// }

function taskScheduler(array, k) {
  let frequency = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    frequency[element] = (frequency[element] || 0) + 1;
  }

  const keysSorted = Object.keys(frequency).sort(function (a, b) {
    return frequency[b] - frequency[a];
  });
  const fmax = frequency[keysSorted[0]] - 1;
  let ideal_time = fmax * k;

  delete frequency[keysSorted[0]];

  Object.keys(frequency).forEach((key) => {
    ideal_time = ideal_time - Math.min(frequency[key], fmax);
  });
  ideal_time = ideal_time < 0 ? 0 : ideal_time;
  const ideal = array.length + ideal_time;
  console.log(ideal);
}

taskScheduler(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);
// taskScheduler(["A", "A", "A", "B", "B", "B"], 0);
