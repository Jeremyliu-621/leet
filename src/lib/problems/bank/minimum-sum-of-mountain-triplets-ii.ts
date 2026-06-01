import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-mountain-triplets-ii',
  title: 'Minimum Sum of Mountain Triplets II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of integers.

A triplet of indices \`(i, j, k)\` is a **mountain** if:
- \`i < j < k\`
- \`nums[i] < nums[j]\` and \`nums[k] < nums[j]\`

Return the **minimum possible sum** \`nums[i] + nums[j] + nums[k]\` for a mountain triplet. If no mountain triplet exists, return \`-1\`.

**Note:** \`nums\` can be up to 10^5 long — an O(n²) or O(n³) approach will time out. Use prefix and suffix minimum arrays.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^8',
  ],
  examples: [
    {
      input: 'nums = [8,6,1,5,3]',
      output: '9',
      explanation: 'The only valid mountain triplet is (2,3,4): 1+5+3 = 9.',
    },
    {
      input: 'nums = [5,4,8,7,10,2]',
      output: '13',
      explanation: 'Optimal triplet (1,3,5): 4+7+2 = 13.',
    },
    {
      input: 'nums = [6,5,4,3,4,5]',
      output: '-1',
      explanation: 'No valid mountain triplet exists.',
    },
  ],
  hints: [
    'For each potential peak j, you want the minimum valid left element (< nums[j]) and minimum valid right element (< nums[j]).',
    'Build prefix_min[i] = min(nums[0..i]) and suffix_min[i] = min(nums[i..n-1]) in O(n).',
    'For each j from 1 to n-2: if prefix_min[j-1] < nums[j] and suffix_min[j+1] < nums[j], candidate sum = prefix_min[j-1] + nums[j] + suffix_min[j+1].',
  ],
  functionName: 'minimumSumOfMountainTripletsII',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSumOfMountainTripletsII(nums) {

}`,
    typescript: `function minimumSumOfMountainTripletsII(nums: number[]): number {

}`,
    python: `def minimumSumOfMountainTripletsII(nums):
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
    { args: [[1, 50, 2, 3, 4]], expected: 53 },
    { args: [[50, 50, 50]], expected: -1 },
  ],
};
