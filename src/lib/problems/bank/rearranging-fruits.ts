import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearranging-fruits',
  title: 'Rearranging Fruits',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You have two fruit baskets containing \`n\` fruits each. The fruits in basket 1 are given by the array \`fruits1\` and the fruits in basket 2 are given by \`fruits2\`.

In one **swap operation** you can pick one fruit from each basket and swap them. The **cost** of a swap is the **minimum** of the values of the two fruits being swapped.

You want to make both baskets contain **exactly the same multiset** of fruits. Return the **minimum cost** to do so, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= fruits1[i], fruits2[i] <= 10^9',
    'fruits1.length == fruits2.length == n',
  ],
  examples: [
    {
      input: 'fruits1 = [3,6], fruits2 = [6,3]',
      output: '0',
      explanation:
        'Both baskets already contain the same multiset {3, 6}. No swaps are needed.',
    },
    {
      input: 'fruits1 = [2,2], fruits2 = [4,4]',
      output: '2',
      explanation:
        'Swap one fruit of value 2 from basket 1 with one fruit of value 4 from basket 2. Cost = min(2, 4) = 2. Each basket now contains {2, 4}.',
    },
    {
      input: 'fruits1 = [1,2], fruits2 = [3,4]',
      output: '-1',
      explanation:
        'Fruit values 1, 2, 3, 4 each appear exactly once across both baskets. An odd total count makes it impossible to distribute them equally.',
    },
  ],
  hints: [
    'Level 1: For both baskets to become equal, every fruit value must appear an even total number of times across both baskets combined. If any value appears an odd total count, return -1.',
    'Level 2: Compute the excess of each fruit type in basket 1 (positive = basket 1 has more; negative = basket 2 has more). These excesses must all be even. For each unit of excess, pair it with a unit of deficit; the cost per swap is min(excess_value, deficit_value).',
    'Level 3: Optimization — let globalMin be the smallest fruit value in either basket. For a swap between values a and b where min(a, b) > 2 * globalMin, it can be cheaper to do two indirect swaps through globalMin (cost 2 * globalMin) instead of one direct swap (cost min(a, b)). Always take the minimum of the two options.',
  ],
  functionName: 'minCost',
  params: ['fruits1', 'fruits2'],
  starterCode: {
    javascript: `function minCost(fruits1, fruits2) {

}`,
    typescript: `function minCost(fruits1: number[], fruits2: number[]): number {

}`,
    python: `def minCost(fruits1, fruits2):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6], [6, 3]], expected: 0 },
    { args: [[2, 2], [4, 4]], expected: 2 },
    { args: [[1, 2], [3, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [1, 2, 3]], expected: 0 },
    { args: [[4, 4], [2, 2]], expected: 2 },
    { args: [[2, 2, 6, 6], [4, 4, 8, 8]], expected: 6 },
    { args: [[1, 10, 10, 1], [3, 3, 3, 3]], expected: 3 },
    { args: [[5, 5], [7, 7]], expected: 5 },
    { args: [[3, 5, 7], [7, 5, 3]], expected: 0 },
    { args: [[1, 3], [2, 2]], expected: -1 },
    { args: [[2, 4, 4, 2], [4, 2, 2, 4]], expected: 0 },
  ],
};
