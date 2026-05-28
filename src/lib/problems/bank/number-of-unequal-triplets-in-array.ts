import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-unequal-triplets-in-array',
  title: 'Number of Unequal Triplets in Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** array of positive integers \`nums\`, find the number of triplets \`(i, j, k)\` such that:
- \`0 <= i < j < k < nums.length\`
- \`nums[i]\`, \`nums[j]\`, and \`nums[k]\` are **pairwise distinct** (i.e., \`nums[i] != nums[j]\`, \`nums[i] != nums[k]\`, and \`nums[j] != nums[k]\`).

Return the number of such triplets.`,
  constraints: [
    '`3 <= nums.length <= 100`',
    '`1 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [4,4,2,4,3]',
      output: '3',
      explanation: 'The 3 triplets are: (0,2,4), (1,2,4), and (2,3,4) → values (4,2,3), (4,2,3), (2,4,3). All are pairwise distinct.',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '0',
      explanation: 'All elements are equal so no valid triplet exists.',
    },
  ],
  hints: [
    'Try all O(n³) combinations of indices (i, j, k) where i < j < k.',
    'For each triplet check three conditions: nums[i] ≠ nums[j], nums[j] ≠ nums[k], nums[i] ≠ nums[k].',
    '```js\nfunction unequalTriplets(nums) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++)\n    for (let j = i+1; j < nums.length; j++)\n      for (let k = j+1; k < nums.length; k++)\n        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k])\n          count++;\n  return count;\n}\n```',
  ],
  functionName: 'unequalTriplets',
  params: ['nums'],
  starterCode: {
    javascript: `function unequalTriplets(nums) {

}`,
    typescript: `function unequalTriplets(nums: number[]): number {

}`,
    python: `def unequalTriplets(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 4, 2, 4, 3]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[1, 1, 2, 3]], expected: 2 },
    { args: [[5, 5, 5, 1, 2]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 0 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 8 },
  ],
};
