import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-hidden-sequences',
  title: 'Count Hidden Sequences',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array of \`n - 1\` integers \`differences\`, which describes the **consecutive differences** of an unknown hidden sequence of length \`n\`:

- \`differences[i] = hidden[i + 1] - hidden[i]\`

You are also given two integers \`lower\` and \`upper\` that describe the **inclusive** range \`[lower, upper]\` that every element of the hidden sequence must fall within.

Return the number of **possible** hidden sequences there are. If there are no possible sequences, return \`0\`.`,
  constraints: [
    'n == differences.length + 1',
    '1 <= n <= 10^5',
    '-10^5 <= differences[i] <= 10^5',
    '-10^5 <= lower <= upper <= 10^5',
  ],
  examples: [
    {
      input: 'differences = [1,-3,4], lower = 1, upper = 6',
      output: '2',
      explanation: 'The prefix sums (starting from 0) are [0, 1, -2, 2]. The hidden sequence must lie in [1,6]. Setting hidden[0] = h: hidden = [h, h+1, h-2, h+2]. Valid h values are 3 and 4, so the answer is 2.',
    },
    {
      input: 'differences = [3,-4,5,1,-2], lower = -6, upper = 5',
      output: '6',
      explanation: 'Prefix sums are [0,3,-1,4,5,3]. Min = -1, max = 5. Valid h range is [-5, 0], giving 6 sequences.',
    },
    {
      input: 'differences = [4,-7,2], lower = 3, upper = 6',
      output: '0',
      explanation: 'Prefix sums are [0,4,-3,-1]. The constraint min_h = 3-(-3) = 6, max_h = 6-4 = 2. Since 6 > 2, no valid starting value exists.',
    },
  ],
  hints: [
    'Build the prefix sum array starting with 0: prefix[0] = 0, prefix[i+1] = prefix[i] + differences[i].',
    'hidden[i] = hidden[0] + prefix[i]. We need lower ≤ hidden[0] + prefix[i] ≤ upper for every i.',
    'This gives lower - min(prefix) ≤ hidden[0] ≤ upper - max(prefix). Count integers in this inclusive range (or 0 if empty).',
  ],
  functionName: 'countHiddenSequences',
  params: ['differences', 'lower', 'upper'],
  starterCode: {
    javascript: `function countHiddenSequences(differences, lower, upper) {
  let prefix = 0, minP = 0, maxP = 0;
  for (const d of differences) {
    prefix += d;
    minP = Math.min(minP, prefix);
    maxP = Math.max(maxP, prefix);
  }
  return Math.max(0, (upper - maxP) - (lower - minP) + 1);
}`,
    typescript: `function countHiddenSequences(differences: number[], lower: number, upper: number): number {
  let prefix = 0, minP = 0, maxP = 0;
  for (const d of differences) {
    prefix += d;
    minP = Math.min(minP, prefix);
    maxP = Math.max(maxP, prefix);
  }
  return Math.max(0, (upper - maxP) - (lower - minP) + 1);
}`,
    python: `def countHiddenSequences(differences, lower, upper):
    prefix = min_p = max_p = 0
    for d in differences:
        prefix += d
        min_p = min(min_p, prefix)
        max_p = max(max_p, prefix)
    return max(0, (upper - max_p) - (lower - min_p) + 1)`,
  },
  visibleTests: [
    { args: [[1, -3, 4], 1, 6], expected: 2 },
    { args: [[3, -4, 5, 1, -2], -6, 5], expected: 6 },
    { args: [[4, -7, 2], 3, 6], expected: 0 },
  ],
  hiddenTests: [
    // empty differences → hidden has 1 element, count range width
    { args: [[], 2, 5], expected: 4 },
    // all zeros → sequence is constant, count range width
    { args: [[0, 0, 0], 1, 10], expected: 10 },
    // strictly increasing — sequence grows, needs large range
    { args: [[1, 1, 1, 1], 1, 4], expected: 0 },
    // strictly decreasing — sequence shrinks
    { args: [[-1, -1, -1, -1], 1, 100], expected: 96 },
    // oscillating differences
    { args: [[5, -5], 0, 10], expected: 6 },
    // large symmetric prefix — min=-2, max=0
    { args: [[-2, 2], 5, 10], expected: 4 },
    // single difference, large bounds
    { args: [[100000], -100000, 100000], expected: 100001 },
    // single difference — 3 valid starts: 0,1,2
    { args: [[3], 0, 5], expected: 3 },
    // range too small for the swing (50000-0=50000 > upper 49999)
    { args: [[50000, -50000], 0, 49999], expected: 0 },
    // prefix=[0,2,1,4], min=0, max=4 → exactly 2 valid starts
    { args: [[2, -1, 3], 0, 5], expected: 2 },
  ],
};
