import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sorting-three-groups',
  title: 'Sorting Three Groups',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` containing only the integers \`1\`, \`2\`, and \`3\`.

In one operation, you can replace any element with any of \`1\`, \`2\`, or \`3\`.

Return the **minimum number** of operations needed to make \`nums\` a **non-decreasing** array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 3',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,2,1,3]',
      output: '3',
      explanation: 'One optimal solution: replace nums[1]=1 with 2, nums[4]=1 with 2, nums[5]=3 with 3. Wait — [2,2,3,3,2,3]? That still has 3→2. Another solution: replace indices 1,3,4 → [2,2,3,3,3,3], 3 ops.',
    },
    {
      input: 'nums = [1,3,2,1,3,3]',
      output: '2',
      explanation: 'The longest non-decreasing subsequence is [1,2,3,3] (indices 0,2,4,5). Replace the 2 elements not in it: change index 1 (3→2) and index 3 (1→2) → [1,2,2,2,3,3]. 2 operations.',
    },
    {
      input: 'nums = [2,2,2,2,3,3]',
      output: '0',
      explanation: 'Already non-decreasing.',
    },
  ],
  hints: [
    'The minimum number of changes equals n minus the length of the longest non-decreasing subsequence (using only {1,2,3}).',
    'Use DP: dp[v] = length of longest non-decreasing subsequence ending with value v (v = 1, 2, 3).',
    'For each nums[i] = x, update dp[x] = max(dp[1..x]) + 1. The answer is n - max(dp[1], dp[2], dp[3]).',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {

}`,
    typescript: `function minimumOperations(nums: number[]): number {

}`,
    python: `def minimumOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2,1,3,2,1,3]], expected: 3 },
    { args: [[1,3,2,1,3,3]], expected: 2 },
    { args: [[2,2,2,2,3,3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3,2,1]], expected: 2 },
    { args: [[1,2,3]], expected: 0 },
    { args: [[1,1,1]], expected: 0 },
    { args: [[3,3,3]], expected: 0 },
    { args: [[3,1,2]], expected: 1 },
  ],
};
