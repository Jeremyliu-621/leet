import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-mountain-triplet-ii',
  title: 'Minimum Sum of Mountain Triplets II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** array \`nums\` of integers.

A triplet of indices \`(i, j, k)\` is a **mountain** if:
- \`i < j < k\`
- \`nums[i] < nums[j]\` and \`nums[k] < nums[j]\`

Return the **minimum possible sum** of a mountain triplet of \`nums\`. If no such triplet exists, return \`-1\`.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^8',
  ],
  examples: [
    {
      input: 'nums = [8,6,1,5,3]',
      output: '9',
      explanation: 'Triplet (2,3,4): nums[2]=1 < nums[3]=5 > nums[4]=3. Sum = 1+5+3 = 9.',
    },
    {
      input: 'nums = [5,4,8,7,10,2]',
      output: '13',
      explanation: 'Triplet (1,3,5): nums[1]=4 < nums[3]=7 > nums[5]=2. Sum = 4+7+2 = 13.',
    },
    {
      input: 'nums = [6,5,4,3,4,5]',
      output: '-1',
      explanation: 'No mountain triplet exists.',
    },
  ],
  hints: [
    'Pre-compute prefix minimums (minLeft[j] = min of nums[0..j-1]) and suffix minimums (minRight[j] = min of nums[j+1..n-1]).',
    'For each j as the peak, if minLeft[j] < nums[j] and minRight[j] < nums[j], consider triplet sum minLeft[j]+nums[j]+minRight[j].',
    'Return the minimum such sum.',
  ],
  functionName: 'minimumSumMountainTriplet',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSumMountainTriplet(nums) {

}`,
    python: `def minimumSumMountainTriplet(nums):
    pass`,
  },
  visibleTests: [
    { args: [[8, 6, 1, 5, 3]], expected: 9 },
    { args: [[5, 4, 8, 7, 10, 2]], expected: 13 },
    { args: [[6, 5, 4, 3, 4, 5]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 4 },
    { args: [[1, 5, 1, 5, 1]], expected: 7 },
    { args: [[3, 3, 3]], expected: -1 },
    { args: [[1, 2, 3, 2, 1]], expected: 4 },
  ],
};
