import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-cut-stick',
  title: 'Minimum Cost to Cut a Stick',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given a wooden stick of length \`n\` units. The stick is labelled from \`0\` to \`n\`. You are given an integer array \`cuts\` where \`cuts[i]\` denotes a position you should perform a cut at.

You should perform the cuts in order, you can change the order of the cuts as you wish.

The **cost** of one cut is the length of the stick to be cut; the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (the sum of their lengths is the length of the current stick). Please refer to the first example for a better explanation.

Return the **minimum total cost** of the cuts.`,
  constraints: [
    '2 <= n <= 10^6',
    '1 <= cuts.length <= min(n - 1, 100)',
    '1 <= cuts[i] <= n - 1',
    'All the integers in cuts array are distinct.',
  ],
  examples: [
    {
      input: 'n = 7, cuts = [1,3,4,5]',
      output: '16',
      explanation: 'Best order: cut at 3 (cost 7), then 5 (cost 4), then 1 (cost 3), then 4 (cost 2) = 16.',
    },
    {
      input: 'n = 9, cuts = [5,6,1,4,2]',
      output: '22',
    },
  ],
  hints: [
    'Add 0 and n to the cuts array and sort it to represent segment boundaries.',
    'dp[i][j] = min cost to cut all positions between cuts[i] and cuts[j].',
    'For each segment [i, j], try every cut point k between them: dp[i][j] = min(dp[i][k] + dp[k][j]) + cuts[j] - cuts[i].',
    'Fill dp by increasing segment length (bottom-up interval DP).',
  ],
  functionName: 'minCost',
  params: ['n', 'cuts'],
  starterCode: {
    javascript: `function minCost(n, cuts) {

}`,
    python: `def minCost(n, cuts):
    pass`,
  },
  visibleTests: [
    { args: [7, [1, 3, 4, 5]], expected: 16 },
    { args: [9, [5, 6, 1, 4, 2]], expected: 22 },
  ],
  hiddenTests: [
    { args: [10, [1]], expected: 10 },
    { args: [10, [5]], expected: 10 },
    { args: [10, [1, 9]], expected: 19 },
    { args: [25, [1, 5, 11, 13, 14, 17, 20, 22, 23]], expected: 80 },
  ],
};
