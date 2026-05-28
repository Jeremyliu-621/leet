import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-profit-job-scheduling',
  title: 'Maximum Profit in Job Scheduling',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search', 'arrays'],
  description: `We have \`n\` jobs, where every job is scheduled to be done during the time interval \`(startTime[i], endTime[i])\`, obtaining a profit of \`profit[i]\`.

You're given the \`startTime\`, \`endTime\`, and \`profit\` arrays, return the maximum profit you can take such that there are no two jobs in the subset with **overlapping** time range.

If you choose a job that ends at time \`X\` you will be able to start another job that starts at time \`X\`.`,
  constraints: [
    '`1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4`',
    '`1 <= startTime[i] < endTime[i] <= 10^9`',
    '`1 <= profit[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
      output: '120',
      explanation: 'The subset chosen is the first and fourth job. Time range [1-3]+[3-6] with profit 50+70=120.',
    },
    {
      input: 'startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]',
      output: '150',
      explanation: 'The subset chosen is the first, fourth, and fifth jobs. Profit 20+70+60=150.',
    },
    {
      input: 'startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]',
      output: '6',
    },
  ],
  hints: [
    'Sort jobs by end time. Let dp[i] = max profit considering first i jobs.',
    'For each job i: either skip it (dp[i] = dp[i-1]) or take it (dp[i] = profit[i] + dp[j] where j is the last job that ends ≤ start[i]).',
    'Use binary search to efficiently find dp[j] — the latest non-overlapping job.',
  ],
  functionName: 'jobScheduling',
  params: ['startTime', 'endTime', 'profit'],
  starterCode: {
    javascript: 'function jobScheduling(startTime, endTime, profit) {\n  \n}\n',
    typescript: "function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {\n  \n}",

    python: 'def jobScheduling(startTime, endTime, profit):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,3],[3,4,5,6],[50,10,40,70]], expected: 120 },
    { args: [[1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60]], expected: 150 },
    { args: [[1,1,1],[2,3,4],[5,6,4]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1],[2],[5]], expected: 5 },
    { args: [[1,2],[3,4],[1,2]], expected: 2 },
    { args: [[1,2,3],[3,4,5],[10,10,10]], expected: 20 },
    { args: [[6,15,7,11,1,3,16,2],[19,18,19,16,10,8,19,8],[2,9,1,19,5,7,3,19]], expected: 41 },
  ],
};
