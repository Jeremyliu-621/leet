import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-fuel-cost-to-report-to-the-capital',
  title: 'Minimum Fuel Cost to Report to the Capital',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of \`n\` cities numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` roads. The capital city is city \`0\`. You are given a 2D integer array \`roads\` where \`roads[i] = [ai, bi]\` denotes that there exists a **bidirectional road** connecting cities \`ai\` and \`bi\`.

There is a representative in each city. The task is for every representative to travel to the capital city.

Roads are only traversable in vehicles, and all vehicles start empty. The **fuel cost** of traveling between cities equals the number of roads traversed. Vehicles can hold **at most \`seats\`** representatives.

Return *the **minimum number of liters of fuel** to move every representative to the capital*.`,
  constraints: [
    '1 <= n <= 10^5',
    'roads.length == n - 1',
    'roads[i].length == 2',
    '0 <= ai, bi < n',
    'ai != bi',
    '1 <= seats <= 10^5',
    'The input is generated such that roads forms a tree.',
  ],
  examples: [
    {
      input: 'roads = [[3,1],[3,2],[1,0],[0,4]], seats = 2',
      output: '5',
      explanation: 'Tree: 0-1-3-{2}, 0-4. Rep at 4: 1 car, 1 liter. Rep at 2→3 (1 liter). At 3: 2 reps, 1 car to 1 (1 liter). At 1: 3 reps, 2 cars to 0 (2 liters). Total=5.',
    },
    {
      input: 'roads = [[1,0],[1,2],[1,3]], seats = 5',
      output: '3',
      explanation: 'Nodes 2 and 3 each travel to 1 (1 liter each). At node 1: 3 reps fit in 1 car to 0 (1 liter). Total=3.',
    },
    {
      input: 'roads = [], seats = 1',
      output: '0',
      explanation: 'Only the capital exists; no travel needed.',
    },
  ],
  hints: [
    'Level 1: Root the tree at node 0. For each edge from child to parent, all representatives in the child subtree must pass through that edge.',
    'Level 2: The number of representatives crossing edge (child→parent) equals the subtree size of child. Fuel for that edge = ceil(subtree_size / seats).',
    'Level 3: DFS from root: dfs(node, parent) returns subtree count. For each non-root node, add ceil(count / seats) to the total fuel. O(n) time.',
  ],
  functionName: 'minimumFuelCost',
  params: ['roads', 'seats'],
  starterCode: {
    javascript: `function minimumFuelCost(roads, seats) {
  const n = roads.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of roads) { adj[u].push(v); adj[v].push(u); }
  let fuel = 0;
  function dfs(node, parent) {
    let count = 1;
    for (const next of adj[node]) {
      if (next === parent) continue;
      count += dfs(next, node);
    }
    if (node !== 0) fuel += Math.ceil(count / seats);
    return count;
  }
  dfs(0, -1);
  return fuel;
}`,
    typescript: `function minimumFuelCost(roads: number[][], seats: number): number {
  const n = roads.length + 1;
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of roads) { adj[u!]!.push(v!); adj[v!]!.push(u!); }
  let fuel = 0;
  function dfs(node: number, parent: number): number {
    let count = 1;
    for (const next of adj[node]!) {
      if (next === parent) continue;
      count += dfs(next, node);
    }
    if (node !== 0) fuel += Math.ceil(count / seats);
    return count;
  }
  dfs(0, -1);
  return fuel;
}`,
    python: `def minimumFuelCost(roads, seats):
    import math
    roads = [list(r) for r in roads]
    n = len(roads) + 1
    adj = [[] for _ in range(n)]
    for u, v in roads:
        adj[u].append(v)
        adj[v].append(u)
    fuel = [0]
    def dfs(node, parent):
        count = 1
        for nxt in adj[node]:
            if nxt == parent:
                continue
            count += dfs(nxt, node)
        if node != 0:
            fuel[0] += math.ceil(count / seats)
        return count
    dfs(0, -1)
    return fuel[0]`,
  },
  visibleTests: [
    { args: [[[3, 1], [3, 2], [1, 0], [0, 4]], 2], expected: 5 },
    { args: [[[1, 0], [1, 2], [1, 3]], 5], expected: 3 },
    { args: [[], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 1], [0, 2], [0, 3]], 3], expected: 3 },
    { args: [[[0, 1], [1, 2], [2, 3]], 2], expected: 4 },
    { args: [[[0, 1]], 1], expected: 1 },
    { args: [[[0, 1], [0, 2]], 2], expected: 2 },
    { args: [[[0, 1], [1, 2], [2, 3], [3, 4]], 3], expected: 5 },
  ],
};
