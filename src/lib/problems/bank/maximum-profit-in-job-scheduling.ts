import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-profit-in-job-scheduling',
  title: 'Maximum Profit in Job Scheduling',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search', 'arrays'],
  description: `You have \`n\` jobs. \`startTime[i]\`, \`endTime[i]\`, \`profit[i]\` describe job \`i\`. Select a non-overlapping subset of jobs to maximize total profit. Jobs with the same start time can both be chosen only if they don't overlap.

**DP + Binary Search:** Sort jobs by end time. \`dp[i]\` = max profit from first \`i\` jobs. For job \`i\`: either skip it (\`dp[i-1]\`) or take it (find the last job that ends ≤ startTime[i] using binary search, add \`profit[i]\`).`,
  constraints: [
    '1 <= n <= 5 * 10^4',
    '1 <= startTime[i] < endTime[i] <= 10^9',
    '1 <= profit[i] <= 10^4',
  ],
  examples: [
    {
      input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
      output: '120',
      explanation: 'Take jobs 0 and 3: profit=50+70=120.',
    },
    {
      input: 'startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]',
      output: '150',
      explanation: 'Take jobs 0, 3, 4: profit=20+70+60=150.',
    },
    {
      input: 'startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]',
      output: '6',
      explanation: 'Take job 1 with profit 6.',
    },
  ],
  hints: [
    'Sort jobs by end time. dp[i] = max profit considering first i jobs (sorted by end).',
    'For job i: skip (dp[i-1]) or take it. Binary search for last job ending <= startTime[i].',
    'dp[i] = max(dp[i-1], dp[found] + profit[i]).',
  ],
  functionName: 'jobScheduling',
  params: ['startTime', 'endTime', 'profit'],
  starterCode: {
    javascript: 'function jobScheduling(startTime, endTime, profit) {\n\n}\n',
    typescript: "function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {\n\n}",

    python: 'def jobScheduling(startTime: list, endTime: list, profit: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]], expected: 120 },
    { args: [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]], expected: 150 },
    { args: [[1, 1, 1], [2, 3, 4], [5, 6, 4]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], [2], [100]], expected: 100 },
    { args: [[1, 2, 3], [3, 4, 5], [5, 6, 7]], expected: 12 },
    { args: [[1, 2, 3, 4], [2, 3, 4, 5], [3, 5, 7, 9]], expected: 24 },
  ],
};
