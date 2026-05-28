import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-pair-chain',
  title: 'Maximum Length of Pair Chain',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array of \`n\` pairs \`pairs\` where \`pairs[i] = [left_i, right_i]\` and \`left_i < right_i\`.

A pair \`p2 = [c, d]\` **follows** a pair \`p1 = [a, b]\` if \`b < c\`. A **chain** of pairs can be formed in this fashion.

Return the **length of the longest chain** which can be formed.

You do not need to use every pair. You can select pairs in any order.`,
  constraints: [
    'n == pairs.length',
    '1 <= n <= 1000',
    '-1000 <= left_i < right_i <= 1000',
  ],
  examples: [
    {
      input: 'pairs = [[1,2],[2,3],[3,4]]',
      output: '2',
      explanation: 'The longest chain is [1,2] -> [3,4].',
    },
    {
      input: 'pairs = [[1,2],[7,8],[4,5]]',
      output: '3',
      explanation: 'The longest chain is [1,2] -> [4,5] -> [7,8].',
    },
  ],
  hints: [
    'Sort pairs by their right endpoint.',
    'Greedily pick each pair if its left endpoint is greater than the right endpoint of the last picked pair.',
    'This greedy approach gives the optimal result — similar to the activity selection problem.',
  ],
  functionName: 'findLongestChain',
  params: ['pairs'],
  starterCode: {
    javascript: 'function findLongestChain(pairs) {\n\n}\n',
    typescript: "function findLongestChain(pairs: number[][]): number {\n\n}",

    python: 'def findLongestChain(pairs):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: 2 },
    { args: [[[1, 2], [7, 8], [4, 5]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, 10], [2, 3]]], expected: 1 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 4 },
    { args: [[[-10, -5], [-3, 0], [1, 4], [3, 6], [7, 10]]], expected: 4 },
  ],
};
