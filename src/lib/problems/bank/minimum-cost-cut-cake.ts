import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-cut-cake',
  title: 'Minimum Cost to Cut a Stick',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given a wooden stick of length \`n\` units. The stick is labelled from 0 to \`n\`. You are given an integer array \`cuts\` where \`cuts[i]\` denotes a position you should perform a cut at.

The **cost** of one cut is the length of the stick to be cut. When you cut a stick, it will be split into two smaller sticks (the sum of their lengths is the length of the stick before cutting).

Return the **minimum total cost** of all the cuts.`,
  constraints: [
    '2 <= n <= 10^6',
    '1 <= cuts.length <= min(n - 1, 100)',
    '1 <= cuts[i] <= n - 1',
    'All the integers in cuts are distinct',
  ],
  examples: [
    {
      input: 'n = 7, cuts = [1,3,4,5]',
      output: '16',
      explanation: 'Using cuts in order 1,3,4,5: cost = 7+6+4+2 = 19. Better order: cut at 3 (cost 7), cut at 1 (cost 3), cut at 4 (cost 4), cut at 5 (cost 2) = 16.',
    },
    { input: 'n = 9, cuts = [5,6,1,4,2]', output: '22' },
  ],
  hints: [
    'This is an interval DP problem. Sort the cuts and add 0 and n as sentinels.',
    'dp[i][j] = minimum cost to make all cuts between positions cuts[i] and cuts[j].',
    'Try each cut k between i and j: dp[i][j] = min over all k of (dp[i][k] + dp[k][j] + cuts[j] - cuts[i]).',
  ],
  functionName: 'minCostCutCake',
  params: ['n', 'cuts'],
  starterCode: {
    javascript: 'function minCostCutCake(n, cuts) {\n\n}\n',
    python: 'def minCostCutCake(n, cuts):\n    pass\n',
  },
  visibleTests: [
    { args: [7, [1, 3, 4, 5]], expected: 16 },
    { args: [9, [5, 6, 1, 4, 2]], expected: 22 },
  ],
  hiddenTests: [
    { args: [10, [5]], expected: 10 },
    { args: [100, [25, 50, 75]], expected: 200 },
    { args: [5, [2, 3]], expected: 8 },
  ],
};
