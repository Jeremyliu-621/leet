import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-time-to-finish-all-jobs-ii',
  title: 'Find Minimum Time to Finish All Jobs II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given two integer arrays \`jobs\` and \`workers\` of equal length \`n\`, where \`jobs[i]\` is the amount of work required for job \`i\`, and \`workers[j]\` is the speed (units of work per time unit) of worker \`j\`.

Assign each job to a **unique** worker. The time for worker \`j\` to finish job \`i\` is \`⌈jobs[i] / workers[j]⌉\` (ceiling of jobs[i] divided by workers[j]).

Return the **minimum** possible value of the **maximum** completion time across all workers.`,
  constraints: [
    'n == jobs.length == workers.length',
    '1 <= n <= 10^5',
    '1 <= jobs[i], workers[j] <= 10^7',
  ],
  examples: [
    {
      input: 'jobs = [3,5,7], workers = [2,3,4]',
      output: '2',
      explanation: 'Sort both descending: jobs=[7,5,3], workers=[4,3,2]. Times: ceil(7/4)=2, ceil(5/3)=2, ceil(3/2)=2. Maximum=2.',
    },
    {
      input: 'jobs = [1,1], workers = [1,1]',
      output: '1',
      explanation: 'Both jobs take 1 unit of time.',
    },
  ],
  hints: [
    'Think about which worker should get which job. The fastest worker should handle the heaviest job.',
    'Sort both arrays in descending order and pair the i-th largest job with the i-th fastest worker.',
    'This greedy pairing minimizes the maximum completion time. Return max(ceil(jobs[i] / workers[i])) for all i.',
  ],
  functionName: 'minimumTimeII',
  params: ['jobs', 'workers'],
  starterCode: {
    javascript: 'function minimumTimeII(jobs, workers) {\n  \n}\n',
    typescript: 'function minimumTimeII(jobs: number[], workers: number[]): number {\n  \n}',
    python: 'def minimumTimeII(jobs, workers):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5, 7], [2, 3, 4]], expected: 2 },
    { args: [[1, 1], [1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 2, 3], [1, 2, 3]], expected: 2 },
    { args: [[5, 4, 3], [1, 2, 3]], expected: 3 },
    { args: [[6, 4], [2, 3]], expected: 2 },
    { args: [[10], [3]], expected: 4 },
  ],
};
