import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-of-cutting-a-pizza',
  title: 'Number of Ways of Cutting a Pizza',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a rectangular pizza represented as a \`rows x cols\` matrix containing the following characters: \`'A'\` (an apple) and \`'.'\` (empty cell) and given the integer \`k\`. You have to cut the pizza into \`k\` pieces using \`k - 1\` cuts.

For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut horizontally, give the upper part to a person. Give the last piece of pizza to the last person.

**The constraint is:** Each piece contains **at least one apple**.

Return the number of ways of cutting the pizza such that each piece contains at least one apple. Since the answer can be a huge number, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= rows, cols <= 50`',
    '`rows == pizza.length`',
    '`cols == pizza[i].length`',
    '`1 <= k <= 10`',
    '`pizza` consists of only `\'A\'` and `\'.\'`.',
  ],
  examples: [
    {
      input: 'pizza = ["A..","AAA","..."], k = 3',
      output: '3',
      explanation: 'There are 3 ways to cut the pizza into 3 pieces with at least one apple each.',
    },
    {
      input: 'pizza = ["A..","AA.","..."], k = 3',
      output: '1',
      explanation: 'There is only 1 way.',
    },
    {
      input: 'pizza = ["A","A","A"], k = 1',
      output: '1',
      explanation: 'No cuts needed; the whole pizza is one piece.',
    },
  ],
  hints: [
    'Build a 2D prefix sum to count apples in any sub-rectangle in O(1).',
    'Use memoized DP: `dp(r, c, k)` = number of ways to cut pizza[r..][c..] into k pieces.',
    'Base case: if k == 1, return 1 if there is at least one apple in pizza[r..][c..], else 0.',
    'For each horizontal cut at row `nr` (r < nr < rows): if the top part has an apple, add `dp(nr, c, k-1)`.',
    'For each vertical cut at col `nc` (c < nc < cols): if the left part has an apple, add `dp(r, nc, k-1)`.',
  ],
  functionName: 'ways',
  params: ['pizza', 'k'],
  starterCode: {
    javascript: `function ways(pizza, k) {

}`,
    python: `def ways(pizza: list[str], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['A..', 'AAA', '...'], 3], expected: 3 },
    { args: [['A..', 'AA.', '...'], 3], expected: 1 },
    { args: [['A', 'A', 'A'], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [['A'], 1], expected: 1 },
    { args: [['AA', 'AA'], 2], expected: 2 },
  ],
};
