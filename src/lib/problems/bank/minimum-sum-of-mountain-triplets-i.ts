import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-mountain-triplets-i',
  title: 'Minimum Sum of Mountain Triplets I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of integers.

A triplet of indices \`(i, j, k)\` is a **mountain** if:
- \`i < j < k\`
- \`nums[i] < nums[j]\` and \`nums[k] < nums[j]\`

Return the **minimum possible sum** \`nums[i] + nums[j] + nums[k]\` for a mountain triplet. If no mountain triplet exists, return \`-1\`.`,
  constraints: [
    '3 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [8,6,1,5,3]',
      output: '9',
      explanation: 'The only valid mountain triplet is (2,3,4): nums[2]+nums[3]+nums[4] = 1+5+3 = 9.',
    },
    {
      input: 'nums = [5,4,8,7,10,2]',
      output: '13',
      explanation: 'Optimal triplet is (1,3,5): 4+7+2=13.',
    },
    {
      input: 'nums = [6,5,4,3,4,5]',
      output: '-1',
      explanation: 'No valid mountain triplet exists.',
    },
  ],
  hints: [
    'With n ≤ 50, an O(n³) triple loop over all (i,j,k) with i<j<k is fast enough.',
    'For each triplet, check if nums[i] < nums[j] and nums[k] < nums[j].',
    'Track the minimum sum across all valid mountain triplets; if none found, return -1.',
  ],
  functionName: 'minimumSumOfMountainTripletsI',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSumOfMountainTripletsI(nums) {

}`,
    python: `def minimumSumOfMountainTripletsI(nums):
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
    { args: [[2, 2, 4, 4, 2]], expected: 8 },
    { args: [[5, 10, 5]], expected: 20 },
    { args: [[50, 50, 50]], expected: -1 },
  ],
};
