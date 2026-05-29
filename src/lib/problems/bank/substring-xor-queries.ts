import type { Problem } from '../types';

export const problem: Problem = {
  id: 'substring-xor-queries',
  title: 'Substring XOR Queries',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'strings', 'hash-map', 'binary-search'],
  description: `You are given a **binary string** \`s\`, and a **2D** integer array \`queries\` where \`queries[i] = [first_i, second_i]\`.

For the \`i\`-th query, find the **shortest** substring of \`s\` whose **decimal value**, \`val\`, yields \`second_i\` when **bitwise XORed** with \`first_i\`. In other words, \`val ^ first_i == second_i\`.

The answer to the \`i\`-th query is the indices \`[left, right]\` of the chosen substring. If multiple answers exist, return the one with the **minimum** \`left\` index, and if still tied, return the one with the **minimum** length.

Return an array \`ans\` where \`ans[i] = [left_i, right_i]\`. If no valid substring exists for the \`i\`-th query, \`ans[i] = [-1, -1]\`.

A **substring** is a contiguous non-empty sequence of characters within a string.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    '`s[i]` is either `\'0\'` or `\'1\'`',
    '`1 <= queries.length <= 10^5`',
    '`0 <= first_i, second_i <= 10^9`',
  ],
  examples: [
    {
      input: 's = "101101", queries = [[0,5],[2,6],[2,4]]',
      output: '[[0,2],[-1,-1],[2,4]]',
      explanation: 'Query 0: 0^5=5="101". Shortest "101" is at [0,2]. Query 1: 2^6=4="100". "100" does not appear. Query 2: 2^4=6="110". Shortest "110" is at [2,4].',
    },
    {
      input: 's = "0101", queries = [[0,1],[2,3]]',
      output: '[[1,1],[1,1]]',
      explanation: 'Both queries have target 1 (0^1=1, 2^3=1). Shortest "1" appears at [1,1].',
    },
  ],
  hints: [
    'The target value for query i is first_i XOR second_i.',
    'Pre-build a map from binary value → [left, right] of shortest occurrence in s.',
    'For each start position i, compute rolling binary values for increasing substring lengths.',
    'Limit substring length to 30 bits since all values ≤ 10^9 < 2^30.',
    'For each query, look up the target value in the map; return [-1,-1] if not found.',
  ],
  functionName: 'substringXorQueries',
  params: ['s', 'queries'],
  starterCode: {
    javascript: `function substringXorQueries(s, queries) {

}`,
    typescript: `function substringXorQueries(s: string, queries: number[][]): number[][] {

}`,
    python: `def substringXorQueries(s, queries):
    pass`,
  },
  visibleTests: [
    { args: ['101101', [[0, 5], [2, 6], [2, 4]]], expected: [[0, 2], [-1, -1], [2, 4]] },
    { args: ['0101', [[0, 1], [2, 3]]], expected: [[1, 1], [1, 1]] },
  ],
  hiddenTests: [
    { args: ['1', [[0, 1]]], expected: [[0, 0]] },
    { args: ['1', [[0, 2]]], expected: [[-1, -1]] },
    { args: ['0', [[0, 0]]], expected: [[0, 0]] },
    { args: ['0', [[0, 1]]], expected: [[-1, -1]] },
    { args: ['10', [[1, 0]]], expected: [[0, 0]] },
    { args: ['10', [[0, 2]]], expected: [[0, 1]] },
    { args: ['10', [[0, 3]]], expected: [[-1, -1]] },
    { args: ['11111', [[15, 0]]], expected: [[0, 3]] },
    { args: ['11010011010', [[3, 7]]], expected: [[3, 5]] },
  ],
};
