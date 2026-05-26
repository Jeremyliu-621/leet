import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-complete-all-tasks',
  title: 'Minimum Time to Complete All Tasks',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `There is a computer that can run an unlimited number of tasks **at the same time**. You are given a 2D integer array \`tasks\` where \`tasks[i] = [start_i, end_i, duration_i]\` indicates that the \`i\`-th task should run for a total of \`duration_i\` seconds (not necessarily continuous) within the **inclusive** time range \`[start_i, end_i]\`.

For each second \`t\` where \`start_i <= t <= end_i\`, the computer can choose to run or not run task \`i\`. The computer runs each task for the required duration if possible.

Return the **minimum** time the computer should be turned on to complete all tasks.`,
  constraints: [
    '`1 <= tasks.length <= 2000`',
    '`tasks[i].length == 3`',
    '`1 <= start_i, end_i <= 2000`',
    '`1 <= duration_i <= end_i - start_i + 1`',
  ],
  examples: [
    {
      input: 'tasks = [[2,3,1],[4,5,1],[1,5,2]]',
      output: '2',
      explanation:
        'Turn on the computer at times 2 and 4 (total: 2 seconds). Task 1 runs at t=2, task 2 at t=4, and task 3 at both t=2 and t=4.',
    },
    {
      input: 'tasks = [[1,3,2],[2,5,3],[5,6,2]]',
      output: '4',
      explanation:
        'Turn on at t=2,3,5,6. Task 1 uses t=2,3; task 2 uses t=2,3,5; task 3 uses t=5,6.',
    },
  ],
  hints: [
    'Sort tasks by their end time. Process them in that order.',
    'Use a boolean array `run[1..2000]` tracking which seconds are already scheduled. For each task, count how many seconds in `[start, end]` are already on.',
    'If already-on seconds < duration, greedily mark the remaining needed seconds from **right to left** within `[start, end]`. This is optimal because later seconds benefit more future tasks.',
  ],
  functionName: 'findMinimumTime',
  params: ['tasks'],
  starterCode: {
    javascript: `function findMinimumTime(tasks) {

}`,
    python: `def findMinimumTime(tasks):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 3, 1], [4, 5, 1], [1, 5, 2]]], expected: 2 },
    { args: [[[1, 3, 2], [2, 5, 3], [5, 6, 2]]], expected: 4 },
    { args: [[[1, 2, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 2]]], expected: 2 },
    { args: [[[1, 4, 2], [3, 6, 2]]], expected: 2 },
    { args: [[[1, 5, 2], [2, 5, 2], [3, 5, 2]]], expected: 2 },
    { args: [[[1, 10, 3], [5, 8, 2]]], expected: 3 },
    { args: [[[1, 2, 2], [3, 4, 2]]], expected: 4 },
    { args: [[[1, 5, 3], [2, 5, 2]]], expected: 3 },
    { args: [[[1, 2, 1], [3, 4, 1], [5, 6, 1]]], expected: 3 },
    { args: [[[1, 6, 2], [1, 6, 4]]], expected: 4 },
  ],
};
