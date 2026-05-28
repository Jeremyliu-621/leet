import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-threaded-cpu',
  title: 'Single-Threaded CPU',
  difficulty: 'medium',
  tags: ['heap', 'simulation'],
  description: `You are given \`n\` tasks labeled from \`0\` to \`n - 1\` represented by a 2D integer array \`tasks\`, where \`tasks[i] = [enqueueTime_i, processingTime_i]\`.

A single-threaded CPU processes tasks according to these rules:
- If the CPU is idle and no tasks are available, the CPU remains idle.
- If the CPU is idle and tasks are available, the CPU picks the task with the **smallest processing time**. If multiple tasks have the same processing time, pick the one with the **smallest index**.
- Once a task starts, the CPU finishes it before starting another.

Return the order in which the CPU processes the tasks (by original task index).`,
  examples: [
    {
      input: 'tasks = [[1,2],[2,4],[3,2],[4,1]]',
      output: '[0,2,3,1]',
      explanation:
        't=1: task 0 starts. Finishes t=3. t=3: tasks 1,2 available — task 2 wins (pt 2 < 4). Finishes t=5. t=5: tasks 1,3 available — task 3 wins (pt 1 < 4). Finishes t=6. t=6: task 1 starts.',
    },
    {
      input: 'tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]',
      output: '[4,3,2,0,1]',
      explanation:
        'All enqueue at t=7. Sorted by processing time: task 4 (2), task 3 (4), task 2 (5), task 0 (10), task 1 (12).',
    },
    {
      input: 'tasks = [[0,1],[1,2]]',
      output: '[0,1]',
      explanation:
        'Task 0 starts at t=0, finishes t=1. Task 1 enqueues at t=1 and starts immediately.',
    },
  ],
  constraints: [
    'tasks.length == n',
    '1 <= n <= 10^5',
    '1 <= enqueueTime_i, processingTime_i <= 10^9',
  ],
  hints: [
    'Attach original indices before sorting so you can sort by enqueue time without losing which task is which.',
    'Use a min-heap keyed by [processingTime, originalIndex] to always pick the best available task.',
    'When the CPU is idle but no task has arrived yet, jump the clock to the next task\'s enqueue time rather than simulating every millisecond.',
    'After finishing each task, enqueue all tasks whose enqueueTime ≤ current clock time into the heap before popping the next.',
  ],
  functionName: 'getOrder',
  params: ['tasks'],
  starterCode: {
    javascript: 'function getOrder(tasks) {\n  \n}\n',
    typescript: "function getOrder(tasks: number[][]): number[] {\n  \n}",

    python: 'def getOrder(tasks):\n    ',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 4], [3, 2], [4, 1]]], expected: [0, 2, 3, 1] },
    { args: [[[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]]], expected: [4, 3, 2, 0, 1] },
    { args: [[[0, 1], [1, 2]]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: [0, 1, 2] },
    { args: [[[5, 2], [5, 4], [5, 2], [5, 1]]], expected: [3, 0, 2, 1] },
    { args: [[[1, 4], [2, 1], [3, 1]]], expected: [0, 1, 2] },
    { args: [[[2, 3], [1, 1], [1, 2]]], expected: [1, 2, 0] },
    { args: [[[0, 3], [0, 1], [0, 2]]], expected: [1, 2, 0] },
    { args: [[[3, 1], [2, 5], [1, 10]]], expected: [2, 0, 1] },
    { args: [[[1, 100], [100, 1]]], expected: [0, 1] },
    { args: [[[1, 2], [2, 4], [3, 2], [4, 1], [5, 3], [6, 2]]], expected: [0, 2, 3, 5, 4, 1] },
  ],
};
