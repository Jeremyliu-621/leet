import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-mountain-triplets',
  title: 'Minimum Sum of Mountain Triplets',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 0-indexed array \`nums\` of integers.

A triplet of indices \`(i, j, k)\` is a **mountain** if:
- \`i < j < k\`
- \`nums[i] < nums[j]\` and \`nums[k] < nums[j]\`

Return the **minimum possible sum** \`nums[i] + nums[j] + nums[k]\` for a mountain triplet. If no such triplet exists, return \`-1\`.`,
  constraints: [
    '`3 <= nums.length <= 50`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [8,6,1,5,3]',
      output: '9',
      explanation: 'Triplet (2, 3, 4) gives 1 + 5 + 3 = 9 which is the minimum.',
    },
    {
      input: 'nums = [5,4,8,7,10,2]',
      output: '13',
      explanation: 'Triplet (1, 3, 5) gives 4 + 7 + 2 = 13 which is the minimum.',
    },
    {
      input: 'nums = [6,5,4,3,4,5]',
      output: '-1',
      explanation: 'No mountain triplet exists.',
    },
  ],
  hints: [
    'Since n ≤ 50, try all O(n³) triplets.',
    'For each valid mountain triplet (i, j, k), track the minimum sum.',
    'Alternatively, precompute leftMin[j] = min(nums[0..j-1]) and rightMin[j] = min(nums[j+1..n-1]), then scan j in the middle.',
  ],
  functionName: 'minimumSum',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSum(nums) {
  // Find minimum sum of mountain triplet (i < j < k, nums[i] < nums[j], nums[k] < nums[j])
  // Return -1 if no such triplet exists
}`,
    typescript: `function minimumSum(nums: number[]): number {
  // Find minimum sum of mountain triplet (i < j < k, nums[i] < nums[j], nums[k] < nums[j])
  // Return -1 if no such triplet exists
}`,
    python: `def minimumSum(nums):
    # Find minimum sum of mountain triplet (i < j < k, nums[i] < nums[j], nums[k] < nums[j])
    # Return -1 if no such triplet exists
    pass`,
  },
  visibleTests: [
    { args: [[8, 6, 1, 5, 3]], expected: 9 },
    { args: [[5, 4, 8, 7, 10, 2]], expected: 13 },
    { args: [[6, 5, 4, 3, 4, 5]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 4 },
    { args: [[1, 3, 1]], expected: 5 },
    { args: [[2, 2, 2]], expected: -1 },
    { args: [[1, 5, 1, 5, 1]], expected: 7 },
    { args: [[50, 1, 50, 1, 50]], expected: 52 },
    { args: [[3, 1, 2]], expected: -1 },
    { args: [[1, 2, 3]], expected: -1 },
    { args: [[3, 2, 1]], expected: -1 },
    { args: [[1, 3, 2, 4, 1]], expected: 4 },
    { args: [[10, 1, 2, 1, 10]], expected: 4 },
  ],
};
