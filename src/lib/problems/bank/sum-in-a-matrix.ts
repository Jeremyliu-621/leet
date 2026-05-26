import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-in-a-matrix',
  title: 'Sum in a Matrix',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** 2D integer array \`nums\`. Initially, your score is \`0\`. You must do the following until the matrix becomes empty:

1. From each row in the matrix, select the **largest** number and remove it. If multiple entries have the same largest number, select any.
2. Identify the **highest** number amongst all selected elements. Add that highest number to your score.

Return *the final score*.`,
  constraints: [
    '`1 <= nums.length <= 300`',
    '`1 <= nums[i].length <= 500`',
    '`0 <= nums[i][j] <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]',
      output: '15',
      explanation: 'Sort each row descending: [7,2,1],[6,4,2],[6,5,3],[3,2,1]. Round 1: pick max from each row → [7,6,6,3], score += 7. Round 2: pick next max → [2,4,5,2], score += 5. Round 3: pick last → [1,2,3,1], score += 3. Total = 15.',
    },
    {
      input: 'nums = [[1]]',
      output: '1',
      explanation: 'Only one element. Pick it, score = 1.',
    },
  ],
  hints: [
    'Sort each row in descending order. Then, for column j, take the max across all rows.',
    'The answer is the sum of column maxima (after sorting rows descending): sum over j of max(nums[i][j] for all i).',
  ],
  functionName: 'matrixSum',
  params: ['nums'],
  starterCode: {
    javascript: `function matrixSum(nums) {

}`,
    python: `def matrixSum(nums):
    pass`,
  },
  visibleTests: [
    { args: [[[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]], expected: 15 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 7 },
    { args: [[[5, 1], [2, 3]]], expected: 7 },
    { args: [[[3, 3], [3, 3]]], expected: 6 },
    { args: [[[10, 0], [0, 10]]], expected: 10 },
    { args: [[[1, 2, 3]]], expected: 6 },
    { args: [[[5], [4], [3]]], expected: 5 },
  ],
};
