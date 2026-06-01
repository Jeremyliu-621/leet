import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-absolute-difference-between-elements-with-constraint',
  title: 'Minimum Absolute Difference Between Elements With Constraint',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`x\`.

Find the **minimum absolute difference** between two elements \`nums[i]\` and \`nums[j]\` where \`|i - j| >= x\`.

Return an integer denoting the **minimum absolute difference** between two elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= x <= nums.length - 1',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,4], x = 2',
      output: '0',
      explanation: 'nums[0]=4 and nums[3]=4. |0-3|=3 ≥ 2. |4-4|=0.',
    },
    {
      input: 'nums = [5,3,2,10,15], x = 1',
      output: '1',
      explanation: 'nums[1]=3 and nums[2]=2. |1-2|=1 ≥ 1. |3-2|=1.',
    },
  ],
  hints: [
    'For each index i, you want the closest value to nums[i] among nums[0..i-x].',
    'Maintain a sorted data structure (or sorted insertion array) of elements seen so far with index ≤ i-x.',
    'For each i from x to n-1, add nums[i-x] to the sorted structure, then binary search for nums[i].',
  ],
  functionName: 'minAbsoluteDifference',
  params: ['nums', 'x'],
  starterCode: {
    javascript: 'function minAbsoluteDifference(nums, x) {\n  \n}\n',
    typescript: 'function minAbsoluteDifference(nums: number[], x: number): number {\n  \n}',
    python: 'def minAbsoluteDifference(nums, x):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 3, 2, 4], 2], expected: 0 },
    { args: [[5, 3, 2, 10, 15], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 3], expected: 3 },
    { args: [[1, 1, 1, 1], 1], expected: 0 },
    { args: [[10, 5, 3], 1], expected: 2 },
    { args: [[1, 2, 5], 1], expected: 1 },
  ],
};
