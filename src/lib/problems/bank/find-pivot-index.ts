import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-pivot-index',
  title: 'Find Pivot Index',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, calculate the **pivot index** of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.

If the index is on the left edge of the array, then the left sum is \`0\` (no elements). If the index is on the right edge, the right sum is \`0\`. Return the **leftmost** pivot index. If no such index exists, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,7,3,6,5,6]',
      output: '3',
      explanation: 'The pivot index is 3. Left sum = 1+7+3 = 11, right sum = 5+6 = 11.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '-1',
      explanation: 'No pivot index exists.',
    },
    {
      input: 'nums = [2,1,-1]',
      output: '0',
      explanation: 'Left sum = 0, right sum = 1+(-1) = 0.',
    },
  ],
  hints: [
    'Compute the total sum, then iterate left to right maintaining a running left sum.',
    'At each index, the right sum = total - leftSum - nums[i]. Check if leftSum equals rightSum.',
  ],
  functionName: 'pivotIndex',
  params: ['nums'],
  starterCode: {
    javascript: 'function pivotIndex(nums) {\n  \n}\n',
    python: 'def pivotIndex(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 7, 3, 6, 5, 6]], expected: 3 },
    { args: [[1, 2, 3]], expected: -1 },
    { args: [[2, 1, -1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[-1, -1, -1, 0, 1, 1]], expected: 0 },
    { args: [[1, 0]], expected: 0 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2]], expected: -1 },
  ],
};
