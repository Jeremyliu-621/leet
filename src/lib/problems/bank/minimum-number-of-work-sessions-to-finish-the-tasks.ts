import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-work-sessions-to-finish-the-tasks',
  title: 'Minimum Number of Work Sessions to Finish the Tasks',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'bit-manipulation'],
  description: `There are \`n\` tasks assigned to you. The task times are given in the integer array \`tasks\`, where \`tasks[i]\` is the time taken to complete the i-th task in hours.

A **work session** is a contiguous time period during which you work without stopping. Each work session has a maximum duration of \`sessionTime\` hours.

You can place tasks in different sessions, as long as the **sum of task times** in a single session does not exceed \`sessionTime\`. Tasks in the same session can be in any order.

Return the **minimum number of work sessions** needed to finish all the tasks.`,
  constraints: [
    'n == tasks.length',
    '1 <= n <= 14',
    '1 <= tasks[i] <= 10',
    'max(tasks[i]) <= sessionTime <= 15',
  ],
  examples: [
    {
      input: 'tasks = [1,2,3], sessionTime = 3',
      output: '2',
      explanation: 'Session 1: [1,2] (sum=3), Session 2: [3] (sum=3).',
    },
    {
      input: 'tasks = [3,1,3,1,1], sessionTime = 8',
      output: '2',
      explanation: 'Session 1: [3,3,1,1]=8, Session 2: [1]. Or [3,1,1,1]=6 and [3]. Either way, 2 sessions.',
    },
    {
      input: 'tasks = [1,2,3,4,5], sessionTime = 15',
      output: '1',
      explanation: 'Total sum = 15 = sessionTime, so all tasks fit in one session.',
    },
  ],
  hints: [
    'Level 1: Use bitmask DP. Each bitmask represents a subset of tasks. dp[mask] = minimum sessions to complete all tasks in mask.',
    'Level 2: Precompute sum[mask] for all subsets. For each mask, try all non-empty submasks sub: if sum[sub] <= sessionTime, dp[mask] = min(dp[mask ^ sub] + 1).',
    'Level 3: This is O(3^n) due to submask enumeration, which is fine for n ≤ 14 (3^14 ≈ 4.8M). Initialize dp[0]=0, all others = Infinity.',
  ],
  functionName: 'minSessions',
  params: ['tasks', 'sessionTime'],
  starterCode: {
    javascript: `function minSessions(tasks, sessionTime) {
  const n = tasks.length;
  const full = (1 << n) - 1;
  // Precompute sum of each subset
  const sum = new Array(full + 1).fill(0);
  for (let mask = 1; mask <= full; mask++) {
    const bit = (mask & -mask).toString(2).length - 1;
    sum[mask] = sum[mask ^ (1 << bit)] + tasks[bit];
  }
  // dp[mask] = min sessions to complete exactly the tasks in mask
  const dp = new Array(full + 1).fill(Infinity);
  dp[0] = 0;
  for (let mask = 1; mask <= full; mask++) {
    for (let sub = mask; sub > 0; sub = (sub - 1) & mask) {
      if (sum[sub] <= sessionTime && dp[mask ^ sub] < Infinity) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ sub] + 1);
      }
    }
  }
  return dp[full];
}`,
    typescript: `function minSessions(tasks: number[], sessionTime: number): number {
  const n = tasks.length;
  const full = (1 << n) - 1;
  const sum = new Array(full + 1).fill(0);
  for (let mask = 1; mask <= full; mask++) {
    const bit = (mask & -mask).toString(2).length - 1;
    sum[mask] = sum[mask ^ (1 << bit)] + tasks[bit];
  }
  const dp = new Array(full + 1).fill(Infinity);
  dp[0] = 0;
  for (let mask = 1; mask <= full; mask++) {
    for (let sub = mask; sub > 0; sub = (sub - 1) & mask) {
      if (sum[sub] <= sessionTime && dp[mask ^ sub] < Infinity) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ sub] + 1);
      }
    }
  }
  return dp[full];
}`,
    python: `def minSessions(tasks, sessionTime):
    n = len(tasks)
    full = (1 << n) - 1
    total = [0] * (full + 1)
    for mask in range(1, full + 1):
        lsb = mask & (-mask)
        bit = lsb.bit_length() - 1
        total[mask] = total[mask ^ lsb] + tasks[bit]
    dp = [float('inf')] * (full + 1)
    dp[0] = 0
    for mask in range(1, full + 1):
        sub = mask
        while sub > 0:
            if total[sub] <= sessionTime and dp[mask ^ sub] < float('inf'):
                dp[mask] = min(dp[mask], dp[mask ^ sub] + 1)
            sub = (sub - 1) & mask
    return dp[full]`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[3, 1, 3, 1, 1], 8], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 15], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 2, 2], 3], expected: 3 },
    { args: [[1, 1, 1, 1], 2], expected: 2 },
    { args: [[5, 5, 5], 5], expected: 3 },
    { args: [[1], 10], expected: 1 },
    { args: [[3, 3, 3, 3], 6], expected: 2 },
    { args: [[5, 2, 3, 5, 3], 9], expected: 3 },
    { args: [[2, 3, 3, 4, 4, 4], 4], expected: 6 },
  ],
};
