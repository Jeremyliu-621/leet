import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difficulty-of-a-job-schedule',
  title: 'Minimum Difficulty of a Job Schedule',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You want to schedule a list of jobs in \`d\` days. Jobs are dependent on each other, so you can only do them in order. In each day you must do **at least** one job.

The **difficulty** of a job schedule is the sum of the difficulties of each day. The difficulty of each day is the maximum difficulty among all jobs done that day.

Given an integer array \`jobDifficulty\` and an integer \`d\`, return the **minimum difficulty** of a job schedule. If you cannot find a schedule for the jobs, return \`-1\`.`,
  constraints: [
    '1 <= jobDifficulty.length <= 300',
    '0 <= jobDifficulty[i] <= 1000',
    '1 <= d <= 10',
  ],
  examples: [
    {
      input: 'jobDifficulty = [6,5,4,3,2,1], d = 2',
      output: '7',
      explanation: 'First day: [6,5,4,3,2] difficulty = 6. Second day: [1] difficulty = 1. Total = 7.',
    },
    {
      input: 'jobDifficulty = [9,9,9], d = 4',
      output: '-1',
      explanation: 'Cannot schedule 3 jobs in 4 days (need at least one job per day).',
    },
    {
      input: 'jobDifficulty = [1,1,1], d = 3',
      output: '3',
      explanation: 'Each day has exactly one job of difficulty 1.',
    },
  ],
  hints: [
    'If n < d, return -1 immediately.',
    'Let dp[i][j] = min difficulty to schedule first j jobs over i days.',
    'dp[day][j] = min over k from day to j of (dp[day-1][k-1] + max(jobs[k-1..j-1])).',
    'Inner loop: iterate k from j down to day, keeping a running max.',
  ],
  functionName: 'minDifficulty',
  params: ['jobDifficulty', 'd'],
  starterCode: {
    javascript: 'function minDifficulty(jobDifficulty, d) {\n  \n}\n',
    typescript: 'function minDifficulty(jobDifficulty: number[], d: number): number {\n  \n}\n',
    python: 'def minDifficulty(jobDifficulty, d):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 5, 4, 3, 2, 1], 2], expected: 7 },
    { args: [[9, 9, 9], 4], expected: -1 },
    { args: [[1, 1, 1], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[7, 1, 7, 1, 7, 1], 3], expected: 15 },
    { args: [[11, 111, 22, 222, 33, 333, 44, 444], 6], expected: 843 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
    { args: [[380, 302, 102, 681, 863, 676, 243, 671, 651, 612, 162, 561, 394, 909, 335, 701, 903, 820, 540, 560, 468, 781, 32, 838, 482, 644, 350, 944, 407, 981], 16], expected: 7914 },
  ],
};
