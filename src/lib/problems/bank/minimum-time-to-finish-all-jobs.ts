import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-finish-all-jobs',
  title: 'Minimum Time to Finish All Jobs',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`jobs\`, where \`jobs[i]\` is the amount of time it takes to complete the \`i\`th job. There are \`k\` workers available. Every job should be assigned to exactly one worker. The **working time** of a worker is the sum of the time it takes to complete all jobs assigned to them. Return the minimum possible maximum working time of any assignment.`,
  constraints: [
    '1 <= k <= jobs.length <= 12',
    '1 <= jobs[i] <= 10^7',
  ],
  examples: [
    {
      input: 'jobs = [3,2,3], k = 3',
      output: '3',
      explanation: 'Assign each job to a separate worker. Max working time = 3.',
    },
    {
      input: 'jobs = [1,2,4,7,8], k = 2',
      output: '11',
      explanation: 'Worker 1: [1,2,8] = 11. Worker 2: [4,7] = 11. Max = 11.',
    },
  ],
  hints: [
    'Precompute subSum[mask] = total time for jobs in mask. Enumerate all subsets in O(2^n).',
    'DP with k rounds: dp[mask] = minimum max-load to assign jobs in mask using workers allocated so far.',
    'Each round: new_dp[mask] = min over all subsets s of mask: max(dp[mask ^ s], subSum[s]).',
    'Sort jobs descending to prune early. Answer is dp_k[(1<<n)-1].',
  ],
  functionName: 'minimumTimeRequired',
  params: ['jobs', 'k'],
  starterCode: {
    javascript: `function minimumTimeRequired(jobs, k) {
  // Bitmask DP: precompute subSums, iterate k workers
}`,
    typescript: `function minimumTimeRequired(jobs: number[], k: number): number {
  // Bitmask DP: precompute subSums, iterate k workers
}`,
    python: `def minimumTimeRequired(jobs, k):
    # Bitmask DP: precompute subSums, iterate k workers
    pass`,
  },
  visibleTests: [
    { args: [[3,2,3], 3], expected: 3 },
    { args: [[1,2,4,7,8], 2], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[5,5,5,5], 4], expected: 5 },
    { args: [[5,5,5,5], 2], expected: 10 },
    { args: [[2,3,5,7], 2], expected: 9 },
    { args: [[7,2,5,10,8], 3], expected: 12 },
  ],
};
