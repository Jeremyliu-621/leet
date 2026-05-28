import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-connect-two-groups',
  title: 'Minimum Cost to Connect Two Groups of Points',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You have two groups of points. Group 1 has \`size1\` points and Group 2 has \`size2\` points. You are given a \`cost\` matrix where \`cost[i][j]\` is the cost to connect point \`i\` from Group 1 to point \`j\` from Group 2.

You must connect the groups such that:
- Every point in Group 1 is connected to **at least one** point in Group 2.
- Every point in Group 2 is connected to **at least one** point in Group 1.

A single point may have multiple connections. Return the **minimum total cost** to connect all points.`,
  constraints: [
    'size1 == cost.length',
    'size2 == cost[0].length',
    '1 ≤ size1, size2 ≤ 12',
    '1 ≤ cost[i][j] ≤ 100',
  ],
  examples: [
    {
      input: 'cost = [[1]]',
      output: '1',
      explanation: 'Must connect the only pair. Cost = 1.',
    },
    {
      input: 'cost = [[1,2]]',
      output: '3',
      explanation: 'Group 1 has 1 point, Group 2 has 2. The one group1 point must reach both group2 points: 1 + 2 = 3.',
    },
    {
      input: 'cost = [[2,3],[1,4]]',
      output: '4',
      explanation: 'Optimal: group1[0]→group2[1] (cost 3) and group1[1]→group2[0] (cost 1). Total = 4.',
    },
  ],
  hints: [
    'Since size2 ≤ 12, use a bitmask DP: dp[mask] = minimum cost with the group2 coverage state encoded as a bitmask.',
    'For each group1 point i, iterate over all current dp states and try connecting i to each group2 point j: dp_new[mask|(1<<j)] = dp[mask] + cost[i][j].',
    'After all group1 points, any uncovered group2 point k can be retroactively covered at the minimum cost over all group1 points. Add min(cost[i][k]) for each missing k, then take the global minimum.',
  ],
  functionName: 'minCostConnectGroups',
  params: ['cost'],
  starterCode: {
    javascript: `function minCostConnectGroups(cost) {

}`,
    typescript: `function minCostConnectGroups(cost: number[][]): number {

}`,
    python: `def minCostConnectGroups(cost):
    pass`,
  },
  visibleTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1,2]]], expected: 3 },
    { args: [[[2,3],[1,4]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1,2,3]]], expected: 6 },
    { args: [[[1,5,5],[5,5,1],[5,1,5]]], expected: 3 },
    { args: [[[1,1],[1,1]]], expected: 2 },
    { args: [[[10,1],[2,10]]], expected: 3 },
    { args: [[[3,2,1],[2,3,4]]], expected: 5 },
    { args: [[[1,3,5],[4,1,1],[1,5,3]]], expected: 4 },
    { args: [[[15,96],[36,2]]], expected: 17 },
  ],
};
