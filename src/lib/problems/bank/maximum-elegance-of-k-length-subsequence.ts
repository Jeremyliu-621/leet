import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-elegance-of-k-length-subsequence',
  title: 'Maximum Elegance of a K-Length Subsequence',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given a 0-indexed 2D integer array \`items\` where \`items[i] = [profit_i, category_i]\`. A subsequence of length \`k\` has **total_profit** = sum of profits and **distinct_categories** = number of distinct category values.

The **elegance** of a subsequence is \`total_profit + distinct_categories^2\`.

Return the maximum elegance of any subsequence of length \`k\`.

**Greedy:** Sort by profit descending. Greedily take top \`k\` items. For each remaining item (lower profit): if it introduces a new category, swap it with the lowest-profit duplicate in the current set (only if a duplicate exists). Track the maximum elegance throughout.`,
  constraints: [
    '1 <= items.length <= 10^5',
    '1 <= k <= items.length',
    '1 <= profit_i <= 10^9',
    '1 <= category_i <= 10^9',
  ],
  examples: [
    {
      input: 'items = [[3,2],[5,1],[10,1],[10,2],[5,3]], k = 3',
      output: '34',
      explanation: 'Select [10,2],[10,1],[5,3]: total_profit=25, distinct=3, elegance=25+9=34.',
    },
    {
      input: 'items = [[1,1],[1,1],[1,1]], k = 3',
      output: '4',
      explanation: 'Only one option: total_profit=3, distinct=1, elegance=3+1=4.',
    },
  ],
  hints: [
    'Sort by profit descending. Take top k items. Track a stack of duplicate-category profits.',
    'For each remaining item with a new category: swap with the lowest-profit duplicate (pop from stack).',
    'Since we process items in profit-descending order, the stack pops give the smallest replaceable profit.',
  ],
  functionName: 'findMaximumElegance',
  params: ['items', 'k'],
  starterCode: {
    javascript: 'function findMaximumElegance(items, k) {\n\n}\n',
    typescript: "function findMaximumElegance(items: number[][], k: number): number {\n\n}",

    python: 'def findMaximumElegance(items: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[3, 2], [5, 1], [10, 1], [10, 2], [5, 3]], 3], expected: 34 },
    { args: [[[1, 1], [1, 1], [1, 1]], 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[3, 1], [3, 2], [2, 1]], 2], expected: 10 },
    { args: [[[1, 2], [2, 1], [3, 2]], 2], expected: 9 },
    { args: [[[10, 1], [5, 2], [3, 1]], 2], expected: 19 },
    { args: [[[1, 1], [1, 1]], 1], expected: 2 },
  ],
};
