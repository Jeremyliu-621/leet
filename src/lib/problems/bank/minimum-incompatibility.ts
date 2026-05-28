import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-incompatibility',
  title: 'Minimum Incompatibility',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Partition \`nums\` into exactly \`k\` subsets of equal size \`n/k\` such that each subset has **distinct elements**. The incompatibility of a subset is \`max(subset) - min(subset)\`. Return the minimum total incompatibility, or \`-1\` if impossible.

**Bitmask DP:** Precompute the cost of each valid subset mask of size \`n/k\` (all distinct elements). Then \`dp[mask]\` = min incompatibility for the set of indices in \`mask\`. Transition: extend \`dp[mask]\` by adding any valid subset of the unselected indices.`,
  constraints: [
    '1 <= k <= n <= 16',
    '1 <= nums[i] <= n',
    'n is divisible by k',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,4], k = 2',
      output: '4',
      explanation: 'Partition [1,4] and [1,2]: incompatibility = (4-1)+(2-1) = 3+1 = 4.',
    },
    {
      input: 'nums = [6,3,8,1,3,1,2,2], k = 4',
      output: '6',
    },
    {
      input: 'nums = [5,3,3,6,3,3], k = 3',
      output: '-1',
      explanation: '3 appears 4 times but k=3, so impossible to make distinct subsets.',
    },
  ],
  hints: [
    'If any value appears more than k times, return -1 immediately.',
    'Precompute the cost of each valid bitmask of size n/k: elements must all be distinct, cost = max - min.',
    'dp[mask] = min incompatibility for the subset of indices in mask. Build up by adding valid subsets of the complement.',
  ],
  functionName: 'minimumIncompatibility',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minimumIncompatibility(nums, k) {\n\n}\n',
    typescript: "function minimumIncompatibility(nums: number[], k: number): number {\n\n}",

    python: 'def minimumIncompatibility(nums: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1, 4], 2], expected: 4 },
    { args: [[6, 3, 8, 1, 3, 1, 2, 2], 4], expected: 6 },
    { args: [[5, 3, 3, 6, 3, 3], 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 2], expected: 2 },
    { args: [[1, 1, 2, 2], 2], expected: 2 },
    { args: [[1, 3, 3, 2], 2], expected: 3 },
    { args: [[2, 3, 5, 4], 2], expected: 2 },
  ],
};
