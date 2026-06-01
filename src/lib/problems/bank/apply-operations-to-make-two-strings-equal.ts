import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-make-two-strings-equal',
  title: 'Apply Operations to Make Two Strings Equal',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given two **0-indexed** binary strings \`s1\` and \`s2\`, both of length \`n\`, and a positive integer \`x\`.

You can perform the following operations on the string \`s1\` any number of times:

- **Operation 1:** Choose two indices \`i\` and \`j\`, and flip both \`s1[i]\` and \`s1[j]\`. The cost of this operation is **1**.
  *(Restriction: \`|i - j| = 1\`, i.e., the indices are adjacent.)*
- **Operation 2:** Choose an index \`i\` and flip \`s1[i]\`. The cost of this operation is \`x\`.

Return *the **minimum** cost needed to make the strings equal*, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= x <= 500',
    '2 <= n <= 500',
    's1.length == s2.length == n',
    's1 and s2 consist of "0" and "1".',
  ],
  examples: [
    {
      input: 's1 = "1110000", s2 = "0001111", x = 4',
      output: '7',
      explanation: 'Collect all 7 mismatches at consecutive positions. Pair 3 adjacent pairs at cost 1 each = 3; the 7th mismatch requires op2 at cost 4. Total = 7.',
    },
    {
      input: 's1 = "10", s2 = "01", x = 5',
      output: '1',
      explanation: 'Mismatches at positions 0 and 1. One op1 (adjacent flip) at cost 1 fixes both. Cheaper than two op2s (cost 10).',
    },
  ],
  hints: [
    'Find all positions where s1 and s2 differ — call this list diffs[].',
    'If |diffs| is odd and x is large, we may need one op2; otherwise every pair is cheaper as adjacent flips (cost = distance) vs. two op2s.',
    'DP: dp[i] = min cost to resolve first i diffs. Either fix diff[i] alone (cost x) or pair diff[i] and diff[i+1] (cost min(diff[i+1]-diff[i], 2x)).',
  ],
  functionName: 'minOperations',
  params: ['s1', 's2', 'x'],
  starterCode: {
    javascript: 'function minOperations(s1, s2, x) {\n\n}\n',
    typescript: 'function minOperations(s1: string, s2: string, x: number): number {\n\n}\n',
    python: 'def minOperations(s1, s2, x):\n    pass\n',
  },
  visibleTests: [
    { args: ['1110000', '0001111', 4], expected: 7 },
    { args: ['10', '01', 5], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0', '1', 3], expected: 3 },
    { args: ['00', '11', 3], expected: 1 },
    { args: ['111', '000', 1], expected: 2 },
    { args: ['01', '01', 5], expected: 0 },
    { args: ['0110', '1001', 2], expected: 2 },
    { args: ['1010', '0110', 4], expected: 1 },
    { args: ['1111', '0000', 4], expected: 2 },
  ],
};
