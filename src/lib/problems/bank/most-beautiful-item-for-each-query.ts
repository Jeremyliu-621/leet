import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-beautiful-item-for-each-query',
  title: 'Most Beautiful Item for Each Query',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`items\` where \`items[i] = [price_i, beauty_i]\` denotes the **price** and **beauty** of an item.

You are also given a **0-indexed** integer array \`queries\`. For each \`queries[j]\`, find the **maximum beauty** of an item whose price is **less than or equal to** \`queries[j]\`. If no such item exists, the answer to this query is \`0\`.

Return an array \`answer\` of the same length as \`queries\` where \`answer[j]\` is the answer to the \`j\`-th query.`,
  constraints: [
    '1 <= items.length, queries.length <= 10^5',
    'items[i].length == 2',
    '1 <= price_i, beauty_i <= 10^9',
    '1 <= queries[j] <= 10^9',
  ],
  examples: [
    {
      input: 'items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]',
      output: '[2,4,5,5,6,6]',
      explanation: 'Sort by price; build prefix-max beauties [2,4,4,5,6]; binary search per query.',
    },
    {
      input: 'items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]',
      output: '[4]',
      explanation: 'All items have price 1 ≤ query 1; max beauty is 4.',
    },
  ],
  hints: [
    'Sort items by price, then build a prefix-maximum beauty array so beauty[i] = max beauty for any item with price ≤ items[i].price.',
    'For each query, binary search for the rightmost item with price ≤ query.',
    'The answer is the prefix-max beauty at that position, or 0 if no item qualifies.',
  ],
  functionName: 'maximumBeauty',
  params: ['items', 'queries'],
  starterCode: {
    javascript: `function maximumBeauty(items, queries) {

}`,
    python: `def maximumBeauty(items, queries):
    pass`,
  },
  visibleTests: [
    { args: [[[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6]], expected: [2,4,5,5,6,6] },
    { args: [[[1,2],[1,2],[1,3],[1,4]], [1]], expected: [4] },
  ],
  hiddenTests: [
    { args: [[[10,5]], [5]], expected: [0] },
    { args: [[[1,3],[2,2],[3,1]], [1,2,3,4]], expected: [3,3,3,3] },
    { args: [[[1,1],[2,2],[3,3]], [2]], expected: [2] },
  ],
};
