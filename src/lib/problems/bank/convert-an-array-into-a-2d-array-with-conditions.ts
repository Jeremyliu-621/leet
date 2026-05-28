import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-an-array-into-a-2d-array-with-conditions',
  title: 'Convert an Array Into a 2D Array With Conditions',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`. You need to create a 2D array from \`nums\` satisfying the following conditions:

- The 2D array should contain **only** the elements of the array \`nums\`.
- Each row in the 2D array contains **distinct** integers.
- The number of rows in the 2D array should be **minimal**.

Return *the resulting array*. If there are multiple answers, return any of them.

**Note** that the 2D array can have a different number of elements on each row.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,1,2,3,1]',
      output: '[[1,3,4,2],[1,3],[1]]',
      explanation: 'We can create a 2D array that contains the following rows:\n- 1st row: [1,3,4,2]\n- 2nd row: [1,3]\n- 3rd row: [1]\nAll conditions are satisfied.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '[[1,2,3,4]]',
      explanation: 'All elements are distinct so they can all fit in the first row.',
    },
  ],
  hints: [
    'Process nums left to right. For each element, track how many times it has been seen so far.',
    'The k-th occurrence of a value must go in row k (0-indexed). Since all values in a row must be distinct, the first occurrence goes to row 0, the second to row 1, etc.',
    'Use a frequency map to track occurrence counts. Add new rows to result as needed.',
  ],
  functionName: 'findMatrix',
  params: ['nums'],
  starterCode: {
    javascript: `function findMatrix(nums) {\n\n}`,
    python: `def findMatrix(nums):\n    pass`,
    typescript: `function findMatrix(nums: number[]): number[][] {\n\n}`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 1, 2, 3, 1]], expected: [[1, 3, 4, 2], [1, 3], [1]] },
    { args: [[1, 2, 3, 4]], expected: [[1, 2, 3, 4]] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [[1]] },
    { args: [[1, 1]], expected: [[1], [1]] },
    { args: [[1, 1, 1]], expected: [[1], [1], [1]] },
    { args: [[2, 1, 2, 1, 2]], expected: [[2, 1], [2, 1], [2]] },
    { args: [[1, 2, 1, 3, 2, 1]], expected: [[1, 2, 3], [1, 2], [1]] },
  ],
};
