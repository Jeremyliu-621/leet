import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difficulty-of-job-schedule',
  title: 'Minimum Difficulty of a Job Schedule',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You want to schedule a list of jobs in \`d\` days. Jobs are dependent and must be done **in order** — you must do at least one job per day.

The **difficulty** of a job schedule is the sum of the **maximum difficulty** of each day's jobs.

Given a list \`jobDifficulty\` and an integer \`d\`, return the **minimum difficulty** of a job schedule. Return \`-1\` if it is not possible to schedule all jobs.

**DP approach:** Let \`dp[day][i]\` = min difficulty to schedule \`jobDifficulty[0..i]\` in \`day\` days. Transition: \`dp[day][i] = min over j < i of (dp[day-1][j] + max(jobDifficulty[j+1..i]))\`.`,
  constraints: [
    '1 <= jobDifficulty.length <= 300',
    '0 <= jobDifficulty[i] <= 1000',
    '1 <= d <= 10',
  ],
  examples: [
    {
      input: 'jobDifficulty = [6,5,4,3,2,1], d = 2',
      output: '7',
      explanation: 'Day 1: [6,5,4,3,2] max=6. Day 2: [1] max=1. Total=7.',
    },
    {
      input: 'jobDifficulty = [9,9,9], d = 4',
      output: '-1',
      explanation: 'Cannot schedule 3 jobs in 4 days (need at least 1 job per day).',
    },
    {
      input: 'jobDifficulty = [1,1,1], d = 3',
      output: '3',
      explanation: 'Each day gets one job. Total = 1+1+1 = 3.',
    },
  ],
  hints: [
    'If jobDifficulty.length < d, return -1 (impossible to have at least 1 job per day).',
    'Define dp[i][j] = min difficulty to schedule jobs[0..j] in i days. Base case: dp[1][j] = max(jobs[0..j]).',
    'Transition: dp[i][j] = min over prev from (i-1) to (j-1) of (dp[i-1][prev] + max(jobs[prev+1..j])). Optimize the max with a running maximum from right to left.',
  ],
  functionName: 'minDifficulty',
  params: ['jobDifficulty', 'd'],
  starterCode: {
    javascript: 'function minDifficulty(jobDifficulty, d) {\n\n}\n',
    python: 'def minDifficulty(jobDifficulty: list, d: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[6,5,4,3,2,1], 2], expected: 7 },
    { args: [[9,9,9], 4], expected: -1 },
    { args: [[1,1,1], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[7,1,7,1,7,1], 3], expected: 15 },
    { args: [[1], 1], expected: 1 },
    { args: [[1,2,3], 2], expected: 4 },
    { args: [[5,5,5], 1], expected: 5 },
  ],
};
