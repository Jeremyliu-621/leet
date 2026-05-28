import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-even-numbers-after-queries',
  title: 'Sum of Even Numbers After Queries',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You have an integer array \`nums\` and an array \`queries\` where \`queries[i] = [val, index]\`.

For each query \`i\`, apply \`nums[queries[i][1]] += queries[i][0]\`, then return the **sum of the even values** of \`nums\`.

Return an integer array \`answer\` where \`answer[i]\` is the answer to the \`ith\` query.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= queries.length <= 10^4',
    '-10^4 <= val <= 10^4',
    '0 <= index < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]',
      output: '[8,6,2,4]',
    },
    {
      input: 'nums = [1], queries = [[4,0]]',
      output: '[0]',
    },
  ],
  hints: [
    'Pre-compute the initial sum of all even numbers.',
    'For each query `[val, idx]`: if `nums[idx]` is currently even, subtract it from the sum; add `val` to `nums[idx]`; if `nums[idx]` is now even, add it to the sum.',
    'This is O(Q) after the O(N) initialization.',
  ],
  functionName: 'sumEvenAfterQueries',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function sumEvenAfterQueries(nums, queries) {\n\n}\n',
    python: 'def sumEvenAfterQueries(nums, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]], expected: [8,6,2,4] },
    { args: [[1], [[4,0]]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[2,4,6], [[0,0]]], expected: [12] },
    { args: [[2,4,6], [[1,0]]], expected: [10] },
    { args: [[1,3,5], [[2,0]]], expected: [0] },
    { args: [[0,0,0], [[1,0],[-1,0]]], expected: [0,0] },
  ],
};
