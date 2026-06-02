import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shift-distance-between-two-strings',
  title: 'Shift Distance Between Two Strings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given two strings \`s\` and \`t\` of the same length, and two integer arrays \`nextCost\` and \`previousCost\`, each of length 26.

Shifting a character \`c\` **forward** by one step means replacing it with the next character in the alphabet (wrapping from \`'z'\` back to \`'a'\`). The cost of one such step starting from character at index \`i\` (0-indexed, \`'a'\` = 0) is \`nextCost[i]\`.

Shifting a character \`c\` **backward** by one step means replacing it with the previous character (wrapping from \`'a'\` back to \`'z'\`). The cost of one such step starting from character at index \`i\` is \`previousCost[i]\`.

The **shift distance** is the minimum total cost to transform \`s\` into \`t\` by independently shifting each character at its position forward or backward any number of steps.

Return the **minimum total cost** to transform \`s\` into \`t\`.`,
  constraints: [
    '1 <= s.length == t.length <= 10^5',
    's and t consist only of lowercase English letters',
    'nextCost.length == previousCost.length == 26',
    '0 <= nextCost[i], previousCost[i] <= 10^9',
  ],
  examples: [
    {
      input: 's = "abc", t = "bca", nextCost = [1,1,1,...,1] (all 1), previousCost = [1,1,...,1] (all 1)',
      output: '4',
      explanation:
        'a→b: forward 1 step costs 1 (backward 25 steps costs 25). b→c: forward 1 step costs 1. c→a: forward 24 steps costs 24; backward 2 steps costs 2 — choose backward. Total = 1+1+2 = 4.',
    },
    {
      input: 's = "a", t = "a", nextCost = [1,...,1], previousCost = [1,...,1]',
      output: '0',
      explanation: 'No shift needed; both characters are already the same.',
    },
    {
      input: 's = "a", t = "z", nextCost = [10,...,10] (all 10), previousCost = [2,...,2] (all 2)',
      output: '2',
      explanation:
        'Forward a→b→...→z costs 25×10 = 250. Backward a→z costs 1 step with previousCost[0] = 2. Minimum = 2.',
    },
  ],
  hints: [
    "Level 1: For each position i, independently decide whether to shift s[i] forward or backward to reach t[i]. The total cost is the sum of per-position minimums.",
    "Level 2: Forward shift from character a to b (a ≤ b in alphabet index) costs sum(nextCost[a..b-1]). Backward shift costs previousCost[a] + previousCost[a-1] + ... wrapping around. Both cases can be expressed as range sums on the 26-element cost arrays.",
    "Level 3: Build prefix sums over nextCost and previousCost. For each pair (a, b): if a ≤ b, fwd = prefNext[b] − prefNext[a] and bwd = prefPrev[a+1] + (prefPrev[26] − prefPrev[b+1]). If a > b, fwd = (prefNext[26] − prefNext[a]) + prefNext[b] and bwd = prefPrev[a+1] − prefPrev[b+1]. Answer = Σ min(fwd, bwd). O(n + 26).",
  ],
  functionName: 'shiftDistance',
  params: ['s', 't', 'nextCost', 'previousCost'],
  starterCode: {
    javascript: `function shiftDistance(s, t, nextCost, previousCost) {

}`,
    typescript: `function shiftDistance(s: string, t: string, nextCost: number[], previousCost: number[]): number {

}`,
    python: `def shiftDistance(s, t, nextCost, previousCost):
    pass`,
  },
  visibleTests: [
    {
      args: ['abc', 'bca', new Array(26).fill(1), new Array(26).fill(1)],
      expected: 4,
    },
    {
      args: ['a', 'a', new Array(26).fill(1), new Array(26).fill(1)],
      expected: 0,
    },
    {
      args: ['a', 'z', new Array(26).fill(10), new Array(26).fill(2)],
      expected: 2,
    },
  ],
  hiddenTests: [
    { args: ['ab', 'ba', new Array(26).fill(1), new Array(26).fill(0)], expected: 0 },
    { args: ['az', 'za', new Array(26).fill(1), new Array(26).fill(1)], expected: 2 },
    { args: ['zz', 'aa', new Array(26).fill(0), new Array(26).fill(1)], expected: 0 },
    { args: ['a', 'n', new Array(26).fill(1), new Array(26).fill(1)], expected: 13 },
    { args: ['z', 'a', new Array(26).fill(1), new Array(26).fill(1)], expected: 1 },
  ],
};
