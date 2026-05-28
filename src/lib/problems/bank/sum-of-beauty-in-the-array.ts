import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-beauty-in-the-array',
  title: 'Sum of Beauty in the Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`. For each index \`i\` (\`1 <= i <= nums.length - 2\`), the **beauty** of \`nums[i]\` equals:

- **2**, if \`nums[j] < nums[i] < nums[k]\` for all \`0 <= j < i\` and \`i < k <= nums.length - 1\`.
- **1**, if \`nums[i - 1] < nums[i]\` and \`nums[i] < nums[i + 1]\`.
- **0**, otherwise.

Return the **sum of beauty** of all \`nums[i]\` where \`1 <= i <= nums.length - 2\`.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '2',
      explanation: 'Index 1: all left elements < 2 < all right elements → beauty = 2. Sum = 2.',
    },
    {
      input: 'nums = [2,4,6,4]',
      output: '1',
      explanation: 'Index 1: all left < 4 but not all right > 4 (6>4 but 4=4). beauty=1 (4>2 and 4<6). Index 2: 6 > 4 (next) → beauty=0. Sum=1.',
    },
    {
      input: 'nums = [3,2,1]',
      output: '0',
      explanation: 'Index 1: nums[0]=3 > nums[1]=2, so not beauty 1 or 2. Beauty=0.',
    },
  ],
  hints: [
    'Precompute prefix max (max of nums[0..i-1]) and suffix min (min of nums[i+1..n-1]).',
    'For each index i: if prefMax[i] < nums[i] < sufMin[i], beauty is 2.',
    'Otherwise if nums[i-1] < nums[i] < nums[i+1], beauty is 1.',
  ],
  functionName: 'sumOfBeauties',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfBeauties(nums) {

}`,
    typescript: "function sumOfBeauties(nums: number[]): number {\n\n}",

    python: `def sumOfBeauties(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[2, 4, 6, 4]], expected: 1 },
    { args: [[3, 2, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 0 },
    { args: [[1, 3, 2, 4, 5]], expected: 2 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
};
