import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-employee-that-worked-on-the-longest-task',
  title: 'The Employee That Worked on the Longest Task',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `There are \`n\` employees, each with a unique ID from \`0\` to \`n - 1\`.

You are given a 2D integer array \`logs\` where \`logs[i] = [id_i, leaveTime_i]\`:
- \`id_i\` is the ID of the employee who worked on the \`i\`th task.
- \`leaveTime_i\` is the time at which the employee finished the \`i\`th task. All values \`leaveTime_i\` are **unique**.

Note that the \`i\`th task starts the moment right after the \`(i - 1)\`th task ends, and the \`0\`th task starts at time \`0\`.

Return the ID of the employee that worked the **longest task**. If there is a tie, return the employee with the **smallest** ID.`,
  constraints: [
    '2 <= n <= 500',
    '1 <= logs.length <= 500',
    'logs[i].length == 2',
    '1 <= logs[i][0] <= n - 1',
    '1 <= logs[i][1] <= 500',
    'All values logs[i][1] are unique.',
    'logs is sorted in a non-decreasing order of logs[i][1].',
  ],
  examples: [
    {
      input: 'n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]',
      output: '1',
      explanation: 'Employee 0 worked for 3+4=7 minutes. Employee 2 worked for 2. Employee 1 worked for 6 minutes. Employee 1 has the longest single task (6 minutes on task index 3).',
    },
    {
      input: 'n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]',
      output: '3',
      explanation: 'Task 0 took 1 min (emp 1), task 1 took 6 min (emp 3), task 2 took 5 min (emp 2), task 3 took 5 min (emp 7). Emp 3 has the longest single task.',
    },
    {
      input: 'n = 2, logs = [[0,10],[1,20]]',
      output: '0',
      explanation: 'Both tasks take 10 minutes. Employee 0 has the smaller ID.',
    },
  ],
  hints: [
    'Track the duration of each task: logs[0][1] for the first, and logs[i][1] - logs[i-1][1] for subsequent ones.',
    'Keep a running "previous leave time" to compute each task\'s duration.',
    'Update the best (longest duration, then smallest ID on tie) as you iterate through logs.',
  ],
  functionName: 'hardestWorker',
  params: ['n', 'logs'],
  starterCode: {
    javascript: `function hardestWorker(n, logs) {

}`,
    typescript: `function hardestWorker(n: number, logs: number[][]): number {

}`,
    python: `def hardestWorker(n, logs):
    pass`,
  },
  visibleTests: [
    { args: [10, [[0,3],[2,5],[0,9],[1,15]]], expected: 1 },
    { args: [26, [[1,1],[3,7],[2,12],[7,17]]], expected: 3 },
    { args: [2, [[0,10],[1,20]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [5, [[0,5],[2,5],[3,10]]], expected: 0 },
    { args: [3, [[0,1],[1,2],[2,3]]], expected: 0 },
    { args: [4, [[3,3],[1,6],[2,9]]], expected: 1 },
    { args: [2, [[1,5],[0,10]]], expected: 0 },
  ],
};
