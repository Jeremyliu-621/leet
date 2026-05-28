import type { Problem } from '../types';

export const problem: Problem = {
  id: 'russian-doll-envelopes',
  title: 'Russian Doll Envelopes',
  difficulty: 'hard',
  tags: ['binary-search', 'dynamic-programming', 'arrays'],
  description: `You are given a 2D array of integers \`envelopes\` where \`envelopes[i] = [w_i, h_i]\` represents the width and the height of an envelope.

One envelope can fit into another if and only if **both** the width and height of one envelope are strictly greater than the other.

Return the **maximum number** of envelopes you can Russian doll (put one inside the other).

**Example:** \`[[5,4],[6,4],[6,7],[2,3]]\` → sort by width asc, height desc for ties → \`[[2,3],[5,4],[6,7],[6,4]]\`. LIS on heights = \`[3,4,7]\` = 3.

**Key insight:** Sort by width ascending; for same width, sort by height **descending** so two same-width envelopes can never both be in the LIS. Then find LIS on heights using binary search (patience sorting) for O(n log n) total.`,
  constraints: [
    '1 <= envelopes.length <= 100000',
    'envelopes[i].length == 2',
    '1 <= w_i, h_i <= 100000',
  ],
  examples: [
    {
      input: 'envelopes = [[5,4],[6,4],[6,7],[2,3]]',
      output: '3',
      explanation: 'Doll [2,3] into [5,4] into [6,7].',
    },
    {
      input: 'envelopes = [[1,1],[1,1],[1,1]]',
      output: '1',
    },
  ],
  hints: [
    'Sort by width ascending, breaking ties by height descending. This ensures two envelopes with the same width can never both appear in the increasing subsequence on heights.',
    'After sorting, the problem reduces to Longest Increasing Subsequence (LIS) on the height values.',
    'Use patience sort (binary search on a `tails` array) to find LIS in O(n log n): for each height, binary-search for its position in `tails` and either append or replace.',
  ],
  functionName: 'maxEnvelopes',
  params: ['envelopes'],
  starterCode: {
    javascript:
      'function maxEnvelopes(envelopes) {\n\n}\n',
    typescript: "function maxEnvelopes(envelopes: number[][]): number {\n\n}",

    python:
      'def maxEnvelopes(envelopes: list[list[int]]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[5,4],[6,4],[6,7],[2,3]]], expected: 3 },
    { args: [[[1,1],[1,1],[1,1]]], expected: 1 },
    { args: [[[1,2]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]]], expected: 5 },
    { args: [[[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]], expected: 3 },
    { args: [[[1,1],[2,2],[3,3],[4,4],[5,5]]], expected: 5 },
    { args: [[[5,5],[6,4],[7,3],[8,2],[9,1]]], expected: 1 },
    { args: [[[1,3],[3,5],[2,4],[4,6]]], expected: 4 },
  ],
};
