import type { Problem } from '../types';

export const problem: Problem = {
  id: 'plates-between-candles',
  title: 'Plates Between Candles',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string \`s\` consisting of characters \`'*'\` and \`'|'\` only, where \`'*'\` represents a plate and \`'|'\` represents a candle.

You are also given a 0-indexed 2D integer array \`queries\` where \`queries[i] = [left_i, right_i]\` denotes the **substring** \`s[left_i...right_i]\` (**inclusive**). For each query, you need to find the **number of plates** that are **between candles** in the substring. A plate is considered **between candles** if there is at least one candle to its left and at least one candle to its right in the substring.

Return an integer array \`answer\` where \`answer[i]\` is the answer to the \`i\`th query.`,
  constraints: [
    '3 <= s.length <= 10^5',
    's consists of \'*\' and \'|\'.',
    '1 <= queries.length <= 10^5',
    'queries[i].length == 2',
    '0 <= left_i <= right_i < s.length',
  ],
  examples: [
    {
      input: 's = "**|**|***|", queries = [[2,5],[5,9]]',
      output: '[2,3]',
      explanation: '[2,5] = "|**|": 2 plates between candles. [5,9] = "|***|": 3 plates.',
    },
    {
      input: 's = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]',
      output: '[9,0,0,0,0]',
    },
  ],
  hints: [
    'Precompute prefix counts of plates, and for each position the nearest candle to the left and right.',
    'For query [l, r]: find the rightmost candle ≤ r and leftmost candle ≥ l.',
    'If both exist and left candle < right candle, answer is prefix[right_candle] - prefix[left_candle].',
  ],
  functionName: 'platesBetweenCandles',
  params: ['s', 'queries'],
  starterCode: {
    javascript: 'function platesBetweenCandles(s, queries) {\n\n}\n',
    typescript: "function platesBetweenCandles(s: string, queries: number[][]): number[] {\n\n}",

    python: 'def platesBetweenCandles(s, queries):\n    pass\n',
  },
  visibleTests: [
    { args: ['**|**|***|', [[2,5],[5,9]]], expected: [2,3] },
    { args: ['***|**|*****|**||**|*', [[1,17],[4,5],[14,17],[5,11],[15,16]]], expected: [9,0,0,0,0] },
  ],
  hiddenTests: [
    { args: ['|*|', [[0,2]]], expected: [1] },
    { args: ['*|*|*', [[0,4],[1,3]]], expected: [1,1] },
    { args: ['||||', [[0,3]]], expected: [0] },
    { args: ['****', [[0,3]]], expected: [0] },
  ],
};
