function taskScheduler(task, k) {
  const frequency = {};
  for (let index = 0; index < task.length; index++) {
    const element = task[index];
    frequency[element] = (frequency[element] || 0) + 1;
  }

  const sortedFrequency = Object.keys(frequency).sort(function (a, b) {
    return frequency[b] - frequency[a];
  });

  const fmax = frequency[sortedFrequency[0]] - 1;

  let idealTime = fmax * k;

  delete frequency[sortedFrequency[0]];

  Object.keys(frequency).forEach((element) => {
    idealTime = idealTime - Math.min(frequency[element], fmax);
  });

  idealTime = idealTime < 0 ? 0 : idealTime;

  const total = task.length + idealTime;
  console.log("total", total);
}

taskScheduler(["A", "A", "A", "B", "B", "B"], 2);
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
