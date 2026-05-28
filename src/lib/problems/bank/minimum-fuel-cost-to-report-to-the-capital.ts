import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-fuel-cost-to-report-to-the-capital',
  title: 'Minimum Fuel Cost to Report to the Capital',
  difficulty: 'medium',
  tags: ['tree', 'graph', 'dynamic-programming'],
  description: `There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of \`n\` cities numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` roads. City \`0\` is the capital. The roads are given as a 2D integer array \`roads\` where \`roads[i] = [a_i, b_i]\` denotes a bidirectional road between city \`a_i\` and \`b_i\`.

There is a representative for each city. They all must travel to the capital city \`0\` for a meeting. Each representative travels by car. Each car can carry at most \`seats\` people (**including the driver**). Cars drive directly between two adjacent cities, and the cost of fuel to drive from one city to an adjacent city is 1 liter.

Return the **minimum number of liters of fuel** to move all the representatives to the capital.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`roads.length == n - 1`',
    '`roads[i].length == 2`',
    '`0 <= a_i, b_i <= n - 1`',
    '`a_i != b_i`',
    '`1 <= seats <= 10^5`',
    'The input is generated such that the roads form a tree.',
  ],
  examples: [
    {
      input: 'roads = [[0,1],[0,2],[0,3]], seats = 5',
      output: '3',
      explanation: 'Each of the 3 representatives travels directly to city 0. Each needs their own car for 1 liter each. Total = 3.',
    },
    {
      input: 'roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2',
      output: '7',
      explanation:
        'Node 6 (1 person) → 4: ceil(1/2)=1 liter. Node 3 (2 people from nodes 2+3) → 1: ceil(2/2)=1 liter. Node 1 (3 people from 1+3+2) → 0: ceil(3/2)=2 liters. Node 4 (2 people from 4+6) → 0: 1 liter. Node 5 → 0: 1 liter. Total = 7.',
    },
    {
      input: 'roads = [], seats = 1',
      output: '0',
      explanation: 'Only one city (the capital), no travel needed.',
    },
  ],
  hints: [
    'Root the tree at node 0. For each subtree, compute `subtreeSize` (number of nodes in the subtree, equal to number of representatives who will pass through the subtree root edge). The fuel cost for that edge is `ceil(subtreeSize / seats)`.',
    'Use a post-order DFS (or iterative stack): accumulate subtree sizes bottom-up. When processing node `u` with parent `par`, add `ceil(size[u] / seats)` to the total fuel.',
    '```js\nfunction minimumFuelCost(roads, seats) {\n  const n = roads.length + 1;\n  const adj = Array.from({length: n}, () => []);\n  for (const [u, v] of roads) { adj[u].push(v); adj[v].push(u); }\n  let fuel = 0n;\n  const size = new Array(n).fill(1);\n  const vis = new Array(n).fill(false); vis[0] = true;\n  const stack = [[0, -1, false]];\n  while (stack.length) {\n    const [u, par, done] = stack.pop();\n    if (done) {\n      if (par !== -1) {\n        size[par] += size[u];\n        fuel += BigInt(Math.ceil(size[u] / seats));\n      }\n    } else {\n      stack.push([u, par, true]);\n      for (const v of adj[u])\n        if (!vis[v]) { vis[v] = true; stack.push([v, u, false]); }\n    }\n  }\n  return Number(fuel);\n}\n```',
  ],
  functionName: 'minimumFuelCost',
  params: ['roads', 'seats'],
  starterCode: {
    javascript: `function minimumFuelCost(roads, seats) {

}`,
    typescript: "function minimumFuelCost(roads: number[][], seats: number): number {\n\n}",

    python: `def minimumFuelCost(roads: list[list[int]], seats: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [0, 2], [0, 3]], 5], expected: 3 },
    { args: [[[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], 2], expected: 7 },
    { args: [[], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 1], [1, 2]], 2], expected: 2 },
    { args: [[[0, 1], [0, 2], [1, 3], [1, 4]], 3], expected: 4 },
    { args: [[[0, 1], [1, 2], [2, 3], [3, 4]], 4], expected: 4 },
    { args: [[[0, 1]], 1], expected: 1 },
  ],
};
