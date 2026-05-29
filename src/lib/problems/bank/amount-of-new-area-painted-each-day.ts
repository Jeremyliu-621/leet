import type { Problem } from '../types';

export const problem: Problem = {
  id: 'amount-of-new-area-painted-each-day',
  title: 'Amount of New Area Painted Each Day',
  difficulty: 'hard',
  tags: ['arrays', 'simulation'],
  description: `There is a long and thin painting that can be thought of as a number line. You are given a **0-indexed** 2D integer array \`paint\` of length \`n\`, where \`paint[i] = [start_i, end_i]\`. This means that on day \`i\` you need to paint the area **between** \`start_i\` and \`end_i\`.

Painting the same area multiple times will create the same painting as painting it once.

Return an integer array \`worklog\` of length \`n\`, where \`worklog[i]\` is the amount of **new** area painted on day \`i\`.`,
  constraints: [
    '1 <= paint.length <= 10^5',
    'paint[i].length == 2',
    '0 <= start_i < end_i <= 5 * 10^4',
  ],
  examples: [
    {
      input: 'paint = [[1,4],[4,7],[5,8]]',
      output: '[3,3,1]',
      explanation: 'Day 0: paint [1,4) — 3 new. Day 1: paint [4,7) — 3 new. Day 2: paint [5,8) — only 7 is new (5,6 already done).',
    },
    {
      input: 'paint = [[1,5],[5,8],[2,6]]',
      output: '[4,3,0]',
      explanation: 'Day 0: 4 new. Day 1: 3 new. Day 2: [2,6) entirely painted.',
    },
  ],
  hints: [
    'Use a "next unpainted" union-find: next[i] = first unpainted position >= i.',
    'To paint [l, r): start at pos = find(l); while pos < r: count++, set next[pos] = pos+1, pos = find(pos+1).',
    'Path compression makes find() amortised near-constant, giving O(n log n) overall.',
  ],
  functionName: 'amountPainted',
  params: ['paint'],
  starterCode: {
    javascript: `function amountPainted(paint) {
  // Union-find "next unpainted position" approach
}`,
    typescript: `function amountPainted(paint: number[][]): number[] {
  // Union-find "next unpainted position" approach
}`,
    python: `def amountPainted(paint):
    # Union-find "next unpainted position" approach
    pass`,
  },
  visibleTests: [
    { args: [[[1, 4], [4, 7], [5, 8]]], expected: [3, 3, 1] },
    { args: [[[1, 5], [5, 8], [2, 6]]], expected: [4, 3, 0] },
  ],
  hiddenTests: [
    { args: [[[0, 10]]], expected: [10] },
    { args: [[[0, 5], [3, 8], [6, 12]]], expected: [5, 3, 4] },
    { args: [[[0, 1], [0, 1], [0, 1]]], expected: [1, 0, 0] },
    { args: [[[0, 3], [1, 4], [2, 5], [3, 6]]], expected: [3, 1, 1, 1] },
    { args: [[[0, 5], [0, 3], [2, 7]]], expected: [5, 0, 2] },
    { args: [[[0, 10], [5, 15], [10, 20]]], expected: [10, 5, 5] },
  ],
};
