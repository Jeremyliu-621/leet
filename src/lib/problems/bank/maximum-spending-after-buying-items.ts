import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-spending-after-buying-items',
  title: 'Maximum Spending After Buying Items',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given a 0-indexed \`m x n\` integer matrix \`values\` representing item values across \`m\` shops. In each shop the items are sorted in **non-increasing** order of value (values[i][0] ≥ values[i][1] ≥ … ≥ values[i][n-1]).

Each day you must buy **exactly one item**. When buying from shop \`i\`, you must always purchase the **cheapest remaining item** in that shop first (i.e. items are bought right-to-left within each shop).

On day \`d\` (1-indexed), purchasing an item with value \`v\` costs \`d * v\`.

You must buy every item across all shops. Return the **maximum** total spending possible.`,
  constraints: [
    '`1 <= m == values.length <= 10`',
    '`1 <= n == values[i].length <= 10^4`',
    '`1 <= values[i][j] <= 10^6`',
    '`values[i]` is sorted in non-increasing order',
  ],
  examples: [
    {
      input: 'values = [[8,5,2],[6,4,1],[9,7,3]]',
      output: '285',
      explanation: 'Buy items in ascending value order: 1,2,3,4,5,6,7,8,9 on days 1-9. Total = 1+4+9+16+25+36+49+64+81 = 285.',
    },
    {
      input: 'values = [[1]]',
      output: '1',
      explanation: 'Only one item; bought on day 1 for 1 × 1 = 1.',
    },
    {
      input: 'values = [[4,3],[2,1]]',
      output: '30',
      explanation: 'Sorted items by value: 1,2,3,4. Spending: 1×1+2×2+3×3+4×4 = 30.',
    },
  ],
  hints: [
    'To maximise spending, assign larger day multipliers to more expensive items. So buy the globally cheapest available item each day.',
    'Use a min-heap initialised with the cheapest item from each shop (the rightmost element). After buying an item from shop i at position j, push the next item (position j-1) into the heap if it exists.',
    'The shop ordering constraint (must buy cheapest first within each shop) is automatically satisfied by the heap: you only unlock a more expensive item after its cheaper neighbour has been purchased.',
    'Alternatively, collect all items, sort ascending, and compute sum(items[d-1] × d) for d = 1..m*n. The shop constraint guarantees the sorted order respects dependencies.',
  ],
  functionName: 'maxSpending',
  params: ['values'],
  starterCode: {
    javascript: `function maxSpending(values) {

}`,
    python: `def maxSpending(values: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[8, 5, 2], [6, 4, 1], [9, 7, 3]]], expected: 285 },
    { args: [[[1]]], expected: 1 },
    { args: [[[4, 3], [2, 1]]], expected: 30 },
  ],
  hiddenTests: [
    { args: [[[10, 1]]], expected: 21 },
    { args: [[[5, 4, 3], [6, 3, 1]]], expected: 93 },
    { args: [[[2, 1], [3, 1]]], expected: 21 },
    { args: [[[1, 1, 1]]], expected: 6 },
  ],
};
