import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-accomplish-all-tasks',
  title: 'Minimum Time to Accomplish All Tasks',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `There is a computer that can run an unlimited number of tasks **simultaneously**. You are given a 2D integer array \`tasks\` where \`tasks[i] = [start_i, end_i, duration_i]\` indicates that the \`i\`-th task should run for \`duration_i\` seconds (not necessarily contiguous) during the closed interval \`[start_i, end_i]\`.

The complexity of a computer is the number of tasks running on it at a given second. Return the **minimum** time during which the computer should be turned on to accomplish all the tasks.`,
  constraints: [
    '1 <= tasks.length <= 2000',
    'tasks[i].length == 3',
    '1 <= start_i, end_i <= 2000',
    '1 <= duration_i <= end_i - start_i + 1',
  ],
  examples: [
    {
      input: 'tasks = [[2,3,1],[4,5,1],[1,5,2]]',
      output: '2',
      explanation: 'Run at seconds 3 and 5. Task 0 [2,3]: covered by second 3 (1 sec). Task 1 [4,5]: covered by second 5 (1 sec). Task 2 [1,5]: covered by seconds 3 and 5 (2 sec). Total 2 seconds.',
    },
    {
      input: 'tasks = [[1,3,2],[2,5,3],[5,6,2]]',
      output: '4',
      explanation: 'Run at seconds 2,3,5,6. Task 0 gets 2,3; task 1 gets 2,3,5; task 2 gets 5,6.',
    },
  ],
  hints: [
    'Sort tasks by end time. For each task, count how many seconds in [start, end] are already running.',
    'If the already-running count is less than duration, greedily add the latest possible seconds within [start, end] (this maximizes potential reuse by other tasks with later end times).',
    'Use a difference array or BIT to efficiently query "how many seconds in range [s, e] are already running" and update.',
  ],
  functionName: 'findMinimumTime',
  params: ['tasks'],
  starterCode: {
    javascript: `function findMinimumTime(tasks) {

}`,
    typescript: 'function findMinimumTime(tasks: number[][]): number {\n\n}',
    python: `def findMinimumTime(tasks):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 3, 1], [4, 5, 1], [1, 5, 2]]], expected: 2 },
    { args: [[[1, 3, 2], [2, 5, 3], [5, 6, 2]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 5, 1]]], expected: 1 },
    { args: [[[1, 2, 2]]], expected: 2 },
    { args: [[[1, 2, 1], [2, 3, 1]]], expected: 1 },
    { args: [[[1, 4, 2], [3, 6, 2]]], expected: 2 },
    { args: [[[1, 3, 1], [2, 4, 1], [3, 5, 1]]], expected: 1 },
    { args: [[[1, 4, 4], [2, 5, 3], [4, 6, 3]]], expected: 6 },
    { args: [[[1, 3, 3], [2, 4, 3]]], expected: 4 },
    { args: [[[1, 5, 3], [2, 6, 3], [3, 7, 3]]], expected: 3 },
  ],
};
