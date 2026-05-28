import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-cut-stick',
  title: 'Minimum Cost to Cut a Stick',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given a wooden stick of length \`n\` units. The stick has some marks on it; the i-th mark is at position \`cuts[i]\`.

You should perform all the cuts (in any order). The **cost** of a single cut is the **length** of the stick being cut at that time.

Return the **minimum total cost** of all the cuts.`,
  constraints: [
    '2 <= n <= 10^6',
    '1 <= cuts.length <= min(n-1, 100)',
    '1 <= cuts[i] <= n-1',
    'All cuts are distinct',
  ],
  examples: [
    {
      input: 'n = 7, cuts = [1,3,4,5]',
      output: '16',
      explanation:
        'Cut at 1 (cost 7), then 3 (cost 6), then 4 (cost 4), then 5 (cost 3): total 20. Or cut at 3 (cost 7), then 1 (cost 3), then 5 (cost 4), then 4 (cost 2): total 16.',
    },
    {
      input: 'n = 9, cuts = [5,6,1,4,2]',
      output: '22',
    },
  ],
  hints: [
    'After adding sentinels 0 and n, sort the cuts array. Use interval DP: dp[i][j] = minimum cost to make all cuts between cuts[i] and cuts[j].',
    'dp[i][j] = min over all k in (i, j) of dp[i][k] + dp[k][j] + cuts[j] - cuts[i]. The cost of splitting [i, j] at position k equals the current stick length: cuts[j] - cuts[i].',
    'Fill the DP for increasing interval lengths. Base case: adjacent positions in the sorted cut array (no cuts between them) have cost 0.',
  ],
  functionName: 'minCost',
  params: ['n', 'cuts'],
  starterCode: {
    javascript: `function minCost(n, cuts) {\n\n}`,
    typescript: "function minCost(n: number, cuts: number[]): number {\n\n}",

    python: `def minCost(n, cuts):\n    pass`,
  },
  visibleTests: [
    { args: [7, [1, 3, 4, 5]], expected: 16 },
    { args: [9, [5, 6, 1, 4, 2]], expected: 22 },
  ],
  hiddenTests: [
    { args: [5, [2]], expected: 5 },
    { args: [10, [2, 4, 7]], expected: 20 },
    { args: [100, [50]], expected: 100 },
  ],
};
