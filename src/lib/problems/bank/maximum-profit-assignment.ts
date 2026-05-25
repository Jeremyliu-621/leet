import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-profit-assignment',
  title: 'Maximum Profit in Job Scheduling',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `We have \`n\` jobs, where every job is scheduled to be done from \`startTime[i]\` to \`endTime[i]\`, obtaining a profit of \`profit[i]\`.

You're given the \`startTime\`, \`endTime\` and \`profit\` arrays, and you need to output the maximum profit you can take such that there are no two jobs in the subset with **overlapping** time range.

If you choose a job that ends at time \`X\` you will be able to start another job that starts at time \`X\`.

**Note:** This is a *job assignment* problem, not a *scheduling* problem — each worker can only take one job, but the same job may be taken by multiple workers. Given \`difficulty[]\`, \`profit[]\`, and \`worker[]\`, each worker may attempt the most profitable job within their ability. Return the total profit.`,
  constraints: [
    '1 <= difficulty.length == profit.length <= 10^4',
    '1 <= worker.length <= 10^4',
    '1 <= difficulty[i], profit[i] <= 10^5',
    '1 <= worker[i] <= 10^5',
  ],
  examples: [
    {
      input: 'difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]',
      output: '100',
      explanation: 'Workers: 4→20, 5→20, 6→30, 7→30. Total = 100.',
    },
    {
      input: 'difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]',
      output: '0',
      explanation: 'No worker is able to do any job.',
    },
  ],
  hints: [
    'Sort jobs by difficulty. Sort workers.',
    'Walk through workers in ascending order, advancing a pointer to add newly reachable jobs.',
    'Maintain the best profit seen so far among reachable jobs.',
  ],
  functionName: 'maxProfitAssignment',
  params: ['difficulty', 'profit', 'worker'],
  starterCode: {
    javascript: 'function maxProfitAssignment(difficulty, profit, worker) {\n\n}\n',
    python: 'def maxProfitAssignment(difficulty, profit, worker):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]], expected: 100 },
    { args: [[85, 47, 57], [24, 66, 99], [40, 25, 25]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [5], [1]], expected: 5 },
    { args: [[1, 2], [3, 5], [1]], expected: 3 },
    { args: [[1, 2, 3], [1, 2, 3], [3, 1, 2]], expected: 6 },
    { args: [[2, 4], [5, 10], [3, 5]], expected: 15 },
  ],
};
