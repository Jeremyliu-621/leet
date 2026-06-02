import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-network-rank',
  title: 'Maximal Network Rank',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `There is an infrastructure of \`n\` cities with some number of \`roads\`. You are given an integer \`n\` and a 2D integer array \`roads\` where \`roads[i] = [ai, bi]\` indicates that there is a **bidirectional** road between cities \`ai\` and \`bi\`.

The **network rank** of two different cities is defined as the total of roads that are **directly** connected to **either** of the two cities. If a road is directly connected to both cities, it is only counted **once**.

The **maximal network rank** of the infrastructure is the **maximum network rank** of all pairs of different cities.

Given the integer \`n\` and the array \`roads\`, return the **maximal network rank** of the entire infrastructure.

**Example 1:**
\`\`\`
Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
Output: 4
\`\`\`

**Example 2:**
\`\`\`
Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
Output: 5
\`\`\`

**Constraints:**
- \`2 <= n <= 100\`
- \`0 <= roads.length <= n * (n - 1) / 2\`
- \`roads[i].length == 2\`
- \`0 <= ai, bi <= n-1\`
- \`ai != bi\`
- Each pair of cities has at most one road connecting them.`,
  constraints: [
    '2 <= n <= 100',
    '0 <= roads.length <= n * (n - 1) / 2',
  ],
  examples: [
    { input: 'n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]', output: '4' },
    { input: 'n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]', output: '5' },
  ],
  hints: [
    'Compute degree[i] = number of roads connected to city i.',
    'Build a Set of road pairs to check if two cities are directly connected.',
    'For each pair (i, j), network rank = degree[i] + degree[j] - (1 if directly connected else 0). Take the maximum.',
  ],
  functionName: 'maximalNetworkRank',
  params: ['n', 'roads'],
  starterCode: {
    javascript: `function maximalNetworkRank(n, roads) {
  const deg = new Array(n).fill(0);
  const connected = new Set();
  for (const [a, b] of roads) {
    deg[a]++; deg[b]++;
    connected.add(a < b ? a * 200 + b : b * 200 + a);
  }
  let best = 0;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const rank = deg[i] + deg[j] - (connected.has(i * 200 + j) ? 1 : 0);
      best = Math.max(best, rank);
    }
  return best;
}`,
    typescript: `function maximalNetworkRank(n: number, roads: number[][]): number {
  const deg = new Array<number>(n).fill(0);
  const connected = new Set<number>();
  for (const edge of roads) {
    const a = edge[0]!, b = edge[1]!;
    deg[a]!++; deg[b]!++;
    connected.add(a < b ? a * 200 + b : b * 200 + a);
  }
  let best = 0;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const rank = deg[i]! + deg[j]! - (connected.has(i * 200 + j) ? 1 : 0);
      best = Math.max(best, rank);
    }
  return best;
}`,
    python: `def maximalNetworkRank(n, roads):
    if hasattr(roads, 'to_py'): roads = roads.to_py()
    roads = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in roads]
    deg = [0] * n
    connected = set()
    for a, b in roads:
        deg[a] += 1; deg[b] += 1
        connected.add((min(a,b), max(a,b)))
    best = 0
    for i in range(n):
        for j in range(i + 1, n):
            rank = deg[i] + deg[j] - (1 if (i, j) in connected else 0)
            best = max(best, rank)
    return best`,
  },
  visibleTests: [
    { args: [4, [[0,1],[0,3],[1,2],[1,3]]], expected: 4 },
    { args: [5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]], expected: 5 },
    { args: [8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [2, [[0,1]]], expected: 1 },
    { args: [3, []], expected: 0 },
    { args: [3, [[0,1],[1,2],[2,0]]], expected: 3 },
    { args: [6, [[0,1],[0,2],[0,3],[0,4],[0,5]]], expected: 5 },
  ],
};
