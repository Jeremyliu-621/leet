import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-profitable-path-in-a-tree',
  title: 'Most Profitable Path in a Tree',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `There is an undirected tree with \`n\` nodes labeled \`0\` to \`n - 1\`, rooted at node \`0\`. You are given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[i] = [ai, bi]\` indicates that there is an edge between nodes \`ai\` and \`bi\` in the tree, and an integer array \`amount\` of length \`n\` where \`amount[i]\` is the **net income** Alice collects when she reaches node \`i\` (which may be negative).

Alice starts at node \`0\` and moves toward some leaf node. Bob starts at node \`bob\` and moves toward node \`0\`. They both move at the **same speed** of one node per second.

When Alice and Bob arrive at a node **simultaneously**, the income is split equally. If either arrives at a node that the other has **already passed**, the income is **0** for the latecomer.

Return the **maximum net income** Alice can have if she travels optimally.`,
  constraints: [
    '`2 <= n <= 10^5`',
    '`edges.length == n - 1`',
    '`0 <= ai, bi < n`',
    '`amount.length == n`',
    '`-10^4 <= amount[i] <= 10^4`',
    '`0 <= bob < n`',
    '`bob != 0`',
  ],
  examples: [
    {
      input: 'edges = [[0,1],[1,2],[1,3],[3,4]], bob = 3, amount = [-2,4,2,-4,6]',
      output: '6',
      explanation: 'Alice moves 0→1→3→4 and Bob moves 3→1→0. At t=0 Alice is at 0 (collects -2), at t=1 both reach 1 simultaneously (each collects 4/2=2), at t=2 Alice reaches 3 (Bob already passed, she collects 0), at t=3 Alice reaches leaf 4 (collects 6). Total: -2+2+0+6=6.',
    },
    {
      input: 'edges = [[0,1]], bob = 1, amount = [-7280,2350]',
      output: '-7280',
      explanation: 'Alice has only one path: 0→1. Both arrive at 1 simultaneously so Alice collects 2350/2=1175. But she must also pass through 0 (collects -7280). Net: -7280+1175=-6105... wait, Alice starts at 0 so she collects amount[0]=-7280 and then moves to leaf 1. At t=0 Alice is at 0 and Bob is at 1 (Bob already at 0 at t=1). At t=1 Alice is at leaf 1; Bob already left so Alice collects 0. Net: -7280.',
    },
  ],
  hints: [
    'First, find the path Bob takes from `bob` to `0` using DFS, recording the time Bob arrives at each node.',
    'Then DFS from node 0 for Alice. At each node, compare Alice\'s time with Bob\'s time at that node to determine if Alice collects the full amount, half, or nothing.',
    '```js\nfunction mostProfitablePath(edges, bob, amount) {\n  const n = amount.length;\n  const adj = Array.from({length: n}, () => []);\n  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const bobTime = new Map();\n  function findBob(node, parent, t) {\n    bobTime.set(node, t);\n    if (node === 0) return true;\n    for (const nb of adj[node]) {\n      if (nb !== parent && findBob(nb, node, t + 1)) return true;\n    }\n    bobTime.delete(node);\n    return false;\n  }\n  findBob(bob, -1, 0);\n  let maxIncome = -Infinity;\n  function dfs(node, parent, t, income) {\n    const bt = bobTime.get(node);\n    let gain = (bt === undefined || t < bt) ? amount[node] : (t === bt ? amount[node] / 2 : 0);\n    income += gain;\n    let isLeaf = true;\n    for (const nb of adj[node]) {\n      if (nb !== parent) { isLeaf = false; dfs(nb, node, t + 1, income); }\n    }\n    if (isLeaf) maxIncome = Math.max(maxIncome, income);\n  }\n  dfs(0, -1, 0, 0);\n  return maxIncome;\n}\n```',
  ],
  functionName: 'mostProfitablePath',
  params: ['edges', 'bob', 'amount'],
  starterCode: {
    javascript: `function mostProfitablePath(edges, bob, amount) {

}`,
    typescript: `function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {

}`,
    python: `def mostProfitablePath(edges, bob, amount):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 2], [1, 3], [3, 4]], 3, [-2, 4, 2, -4, 6]], expected: 6 },
    { args: [[[0, 1]], 1, [-7280, 2350]], expected: -7280 },
  ],
  hiddenTests: [
    { args: [[[0, 1], [0, 2], [0, 3]], 2, [10, -3, 5, 8]], expected: 18 },
    { args: [[[0, 1], [1, 2], [2, 3]], 3, [2, 4, 6, 8]], expected: 6 },
    { args: [[[0, 1], [0, 2]], 1, [0, 5, 3]], expected: 3 },
  ],
};
