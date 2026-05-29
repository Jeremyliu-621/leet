import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-product-queries-of-powers',
  title: 'Range Product Queries of Powers',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `Given a positive integer \`n\`, build a 0-indexed array \`powers\` from its binary representation: for each set bit at position \`i\` (scanning from the lowest bit upwards), add \`2^i\` to \`powers\` in order.

You are also given a 2D integer array \`queries\` where \`queries[j] = [left, right]\`. For each query return the **product** of \`powers[left], powers[left+1], ..., powers[right]\` modulo \`10^9 + 7\`.

Return an integer array \`answers\` where \`answers[j]\` is the result of query \`j\`.`,
  constraints: [
    '1 <= n <= 10^9',
    '1 <= queries.length <= 500',
    '0 <= left <= right < popcount(n)',
  ],
  examples: [
    {
      input: 'n = 15, queries = [[0,1],[2,2],[0,3]]',
      output: '[2,4,64]',
      explanation:
        '15 = 0b1111 → powers = [1, 2, 4, 8]. [0,1]: 1×2 = 2. [2,2]: 4. [0,3]: 1×2×4×8 = 64.',
    },
    {
      input: 'n = 2, queries = [[0,0]]',
      output: '[2]',
      explanation: '2 = 0b10 → powers = [2]. [0,0]: 2.',
    },
    {
      input: 'n = 7, queries = [[0,0],[1,1],[0,1]]',
      output: '[1,2,2]',
      explanation:
        '7 = 0b111 → powers = [1, 2, 4]. [0,0]: 1. [1,1]: 2. [0,1]: 1×2 = 2.',
    },
  ],
  hints: [
    'Build `powers` by looping over bit positions 0 to 30. Whenever `(n >> i) & 1` is set, push `2 ** i` into the array.',
    'For each query `[left, right]`, multiply `powers[left]` through `powers[right]` together, taking modulo `10^9 + 7` after every multiplication to prevent overflow.',
    'With at most 30 set bits and at most 500 queries, a simple O(30 × queries.length) loop is well within limits.',
  ],
  functionName: 'productQueries',
  params: ['n', 'queries'],
  starterCode: {
    javascript: `function productQueries(n, queries) {
  // your code here
}`,
    typescript:
      'function productQueries(n: number, queries: number[][]): number[] {\n  // your code here\n}',
    python: `def productQueries(n, queries):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [15, [[0, 1], [2, 2], [0, 3]]], expected: [2, 4, 64] },
    { args: [2, [[0, 0]]], expected: [2] },
    { args: [7, [[0, 0], [1, 1], [0, 1]]], expected: [1, 2, 2] },
  ],
  hiddenTests: [
    { args: [1, [[0, 0]]], expected: [1] },
    { args: [8, [[0, 0]]], expected: [8] },
    { args: [12, [[0, 0], [1, 1], [0, 1]]], expected: [4, 8, 32] },
    { args: [31, [[0, 4], [1, 3]]], expected: [1024, 64] },
    { args: [6, [[0, 0], [1, 1], [0, 1]]], expected: [2, 4, 8] },
  ],
};
