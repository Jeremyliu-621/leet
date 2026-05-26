import type { Problem } from '../types';

export const problem: Problem = {
  id: 'weighted-job-scheduling',
  title: 'Weighted Job Scheduling',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'binary-search', 'arrays'],
  description: `You have \`n\` jobs where each job \`i\` has a **start time** \`startTime[i]\`, an **end time** \`endTime[i]\`, and a **profit** \`profit[i]\`.

Return the **maximum profit** you can achieve by scheduling a subset of non-overlapping jobs. Two jobs overlap if one starts before the other ends (strictly: a job starting exactly when another ends is allowed).

Each job can be selected at most once.

**Example:**
- \`startTime = [1,2,3,3]\`, \`endTime = [3,4,5,6]\`, \`profit = [50,10,40,70]\`
- Best: pick job 0 (profit 50) and job 3 (profit 70) → total **120**`,
  constraints: [
    '1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4',
    '1 <= startTime[i] < endTime[i] <= 10^9',
    '1 <= profit[i] <= 10^4',
  ],
  examples: [
    {
      input: 'startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]',
      output: '120',
      explanation: 'Select jobs 0 and 3: profit 50 + 70 = 120.',
    },
    {
      input: 'startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]',
      output: '150',
      explanation: 'Select jobs 0, 3, and 4: profit 20 + 70 + 60 = 150.',
    },
    {
      input: 'startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]',
      output: '6',
      explanation: 'Select only job 1 (profit 6); all overlap with each other.',
    },
  ],
  hints: [
    'Sort jobs by end time. Define `dp[i]` = maximum profit achievable using jobs from the first `i` jobs (sorted by end time). For each job, decide: skip it (dp[i] = dp[i-1]) or take it.',
    'When taking job i, you need the last non-overlapping job: the rightmost job j where endTime[j] <= startTime[i]. Use binary search on the sorted end times to find j efficiently.',
    'Sort jobs by end time. Build a sorted end-time array for binary search. `dp[i] = max(dp[i-1], profit[i] + dp[j])` where j is found by binary searching for the largest end time <= start time of job i.',
  ],
  functionName: 'jobScheduling',
  params: ['startTime', 'endTime', 'profit'],
  starterCode: {
    javascript: `function jobScheduling(startTime, endTime, profit) {
  // Return maximum profit from non-overlapping job subset
}`,
    python: `def jobScheduling(startTime: list[int], endTime: list[int], profit: list[int]) -> int:
    # Return maximum profit from non-overlapping job subset
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]], expected: 120 },
    { args: [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]], expected: 150 },
    { args: [[1, 1, 1], [2, 3, 4], [5, 6, 4]], expected: 6 },
    { args: [[1], [2], [100]], expected: 100 },
  ],
  hiddenTests: [
    { args: [[1, 3], [3, 5], [10, 20]], expected: 30 },
    { args: [[1, 2], [2, 3], [10, 20]], expected: 30 },
    { args: [[1, 2], [3, 4], [10, 5]], expected: 15 },
    { args: [[6, 3, 1], [7, 8, 5], [1, 20, 30]], expected: 50 },
    { args: [[1, 2, 3], [4, 6, 5], [50, 30, 20]], expected: 50 },
    { args: [[1, 2, 3, 4], [3, 5, 10, 6], [20, 20, 100, 70]], expected: 120 },
  ],
};
