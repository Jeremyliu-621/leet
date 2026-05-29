import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zero-array-transformation-iii',
  title: 'Zero Array Transformation III',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'binary-search'],
  description: `You are given an integer array \`nums\` of length \`n\` and a 2D array \`queries\` where \`queries[i] = [l_i, r_i]\`.

Each query operation allows you to decrement **all elements** in \`nums[l_i..r_i]\` by **at most 1**.

Return the **maximum** number of elements that can be **removed** from \`queries\`, such that the remaining queries are still sufficient to transform \`nums\` into an all-zeros array, or **-1** if it is not possible.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= l_i <= r_i < n',
  ],
  examples: [
    {
      input: 'nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]',
      output: '1',
      explanation:
        'We need 2 queries covering position 0 and 2. Queries [0,2] and [0,2] suffice. Query [1,1] can be removed.',
    },
    {
      input: 'nums = [1,1,1], queries = [[0,2]]',
      output: '0',
      explanation:
        'We need the single query to cover all positions. None can be removed.',
    },
  ],
  hints: [
    'Greedy: process positions left to right; when coverage falls below nums[i], greedily pick the available query with the largest right endpoint.',
    'Sort queries by left endpoint and maintain a max-heap of right endpoints for queries whose left endpoint ≤ current position.',
    'Use a difference array to efficiently track cumulative coverage as you move right.',
    'If the heap is empty but you still need more coverage, return -1.',
  ],
  functionName: 'maxRemoval',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function maxRemoval(nums, queries) {\n  \n}`,
    typescript: `function maxRemoval(nums: number[], queries: number[][]): number {\n  \n}`,
    python: `def maxRemoval(nums, queries):\n    `,
  },
  visibleTests: [
    { args: [[2, 0, 2], [[0, 2], [0, 2], [1, 1]]], expected: 1 },
    { args: [[1, 1, 1], [[0, 2]]], expected: 0 },
    { args: [[0, 0, 0], [[0, 2]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 0, 2], [[0, 2], [0, 2], [1, 1]]], expected: 1 },
    { args: [[1, 1, 1], [[0, 2]]], expected: 0 },
    { args: [[0, 0, 0], [[0, 2]]], expected: 1 },
    { args: [[1], [[0, 0]]], expected: 0 },
    { args: [[3, 3, 3], [[0, 2], [0, 2], [0, 2]]], expected: 0 },
    { args: [[1, 2, 3], [[0, 1], [1, 2], [0, 2], [1, 2], [0, 2]]], expected: 2 },
    { args: [[0, 1, 0], [[1, 1], [0, 2], [1, 1]]], expected: 2 },
    { args: [[1, 1], [[0, 0], [1, 1]]], expected: 0 },
  ],
};
