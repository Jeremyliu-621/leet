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
    'Level 1: If n < d, it is impossible — return -1 immediately. Otherwise, define dp[day][j] = minimum total difficulty to schedule the first j jobs over exactly day days.',
    'Level 2: Transition: dp[day][j] = min over all k (day <= k < j) of dp[day-1][k-1] + max(jobDifficulty[k..j-1]). Iterate k from j-1 down to day-1, maintaining a running max to avoid O(n^3).',
    'Level 3: Base case: dp[1][j] = max(jobDifficulty[0..j-1]). Fill table for day 2..d. Answer is dp[d][n]. Use Infinity as initial values and only update when predecessor state is reachable.',
  ],
  functionName: 'minDifficulty',
  params: ['jobDifficulty', 'd'],
  starterCode: {
    javascript: `function minDifficulty(jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1;
  // dp[i][j] = min difficulty for first j jobs in i days
  const INF = Infinity;
  const dp = Array.from({ length: d + 1 }, () => new Array(n + 1).fill(INF));
  dp[0][0] = 0;
  for (let day = 1; day <= d; day++) {
    for (let j = day; j <= n; j++) {
      let maxD = 0;
      for (let k = j; k >= day; k--) {
        maxD = Math.max(maxD, jobDifficulty[k - 1]);
        if (dp[day - 1][k - 1] < INF) {
          dp[day][j] = Math.min(dp[day][j], dp[day - 1][k - 1] + maxD);
        }
      }
    }
  }
  return dp[d][n] === INF ? -1 : dp[d][n];
}`,
    typescript: `function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) return -1;
  const INF = Infinity;
  const dp: number[][] = Array.from({ length: d + 1 }, () => new Array(n + 1).fill(INF));
  dp[0][0] = 0;
  for (let day = 1; day <= d; day++) {
    for (let j = day; j <= n; j++) {
      let maxD = 0;
      for (let k = j; k >= day; k--) {
        maxD = Math.max(maxD, jobDifficulty[k - 1]);
        if (dp[day - 1][k - 1] < INF) {
          dp[day][j] = Math.min(dp[day][j], dp[day - 1][k - 1] + maxD);
        }
      }
    }
  }
  return dp[d][n] === INF ? -1 : dp[d][n];
}`,
    python: `def minDifficulty(jobDifficulty, d):
    n = len(jobDifficulty)
    if n < d:
        return -1
    INF = float('inf')
    # dp[i][j] = min difficulty for first j jobs in i days
    dp = [[INF] * (n + 1) for _ in range(d + 1)]
    dp[0][0] = 0
    for day in range(1, d + 1):
        for j in range(day, n + 1):
            max_d = 0
            for k in range(j, day - 1, -1):
                max_d = max(max_d, jobDifficulty[k - 1])
                if dp[day - 1][k - 1] < INF:
                    dp[day][j] = min(dp[day][j], dp[day - 1][k - 1] + max_d)
    return -1 if dp[d][n] == INF else dp[d][n]`,
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
    { args: [[5, 3, 1], 2], expected: 6 },
    { args: [[380, 302, 102, 681, 863, 676, 243, 671, 651, 612, 162, 561, 394, 909, 335, 701, 903, 820, 540, 560, 468, 781, 32, 838, 482, 644, 350, 944, 407, 981], 16], expected: 7914 },
  ],
};
