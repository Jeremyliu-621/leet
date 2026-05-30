import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-special-triplets',
  title: 'Count Number of Special Triplets',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return the number of **special triplets**.

A **special triplet** is a triplet of indices \`(i, j, k)\` such that \`i < j < k\` and \`nums[j] == nums[i] + nums[k]\`.`,
  constraints: [
    '3 <= nums.length <= 500',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '1',
      explanation: 'The only triplet is (0,1,2): nums[1]=2 = nums[0]+nums[2] = 1+1.',
    },
    {
      input: 'nums = [2,1,3,1,2]',
      output: '2',
      explanation: 'Triplets: (0,2,3) → 3=2+1, and (1,2,4) → 3=1+2.',
    },
  ],
  hints: [
    'Fix the middle index j and count valid (i, k) pairs where i < j < k.',
    'Use a prefix frequency map (values before j) and iterate over values after j.',
    'For each value kVal after j, check if nums[j] - kVal appears in the prefix map.',
  ],
  functionName: 'countSpecialTriplets',
  params: ['nums'],
  starterCode: {
    javascript: `function countSpecialTriplets(nums) {
  // your code here
}`,
    typescript: `function countSpecialTriplets(nums: number[]): number {
  // your code here
}`,
    python: `def countSpecialTriplets(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[2, 1, 3, 1, 2]], expected: 2 },
    { args: [[1, 1, 2, 1, 1]], expected: 4 },
    { args: [[3, 3, 3, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1, 2, 3]], expected: 1 },
    { args: [[2, 4, 6]], expected: 0 },
    { args: [[1, 3, 2, 2, 3]], expected: 2 },
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[4, 2, 2, 4, 4]], expected: 0 },
  ],
};
