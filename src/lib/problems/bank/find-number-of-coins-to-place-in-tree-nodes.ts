import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-number-of-coins-to-place-in-tree-nodes',
  title: 'Find Number of Coins to Place in Tree Nodes',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming', 'arrays'],
  description: `There is an undirected tree with \`n\` nodes labeled \`0\` to \`n - 1\`, rooted at node \`0\`. You are given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[i] = [a_i, b_i]\` denotes an edge between nodes \`a_i\` and \`b_i\`, and a **0-indexed** integer array \`cost\` of length \`n\` where \`cost[i]\` is the cost of node \`i\`.

Place coins on each node according to the following rules:
- If the subtree rooted at node \`v\` has **fewer than 3 nodes**, place **0** coins on node \`v\`.
- Otherwise, place the **maximum** product of the costs of **exactly 3 nodes** from the subtree on node \`v\`. If this maximum product is **negative**, place **0** coins instead.

Return an array \`ans\` where \`ans[i]\` is the number of coins placed on node \`i\`.`,
  constraints: [
    '3 <= n <= 10^5',
    'edges.length == n - 1',
    '0 <= edges[i][0], edges[i][1] <= n - 1',
    '-10^4 <= cost[i] <= 10^4',
    'The input is guaranteed to be a valid tree.',
  ],
  examples: [
    {
      input: 'edges = [[0,1],[0,2],[0,3],[0,4],[0,5]], cost = [1,2,3,4,5,6]',
      output: '[120,0,0,0,0,0]',
      explanation:
        'Node 0 is the root; its subtree contains all 6 nodes. Max product of 3 values from {1,2,3,4,5,6} is 4×5×6=120. All other nodes are leaves with subtrees of size 1 < 3, so they get 0 coins.',
    },
    {
      input: 'edges = [[0,1],[0,2],[1,3],[1,4],[1,5]], cost = [10,2,5,1,3,4]',
      output: '[200,24,0,0,0,0]',
      explanation:
        'Node 0 subtree: all 6 nodes {10,2,5,1,3,4}. Max product = 5×8×10... sorted=[1,2,3,4,5,10], top3=4×5×10=200. Node 1 subtree: nodes 1,3,4,5 → {2,1,3,4}. Sorted=[1,2,3,4], top3=2×3×4=24. Nodes 2-5 have subtrees of size ≤1.',
    },
    {
      input: 'edges = [[0,1],[1,2]], cost = [1,2,3]',
      output: '[6,0,0]',
      explanation:
        'Node 0 subtree has all 3 nodes {1,2,3}. Product = 1×2×3=6. Node 1 subtree has 2 nodes — fewer than 3, so 0 coins. Node 2 is a leaf.',
    },
  ],
  hints: [
    'Level 1: Use DFS from the root. For each node, collect the cost values of all nodes in its subtree. If the subtree has ≥ 3 nodes, compute the maximum product of any 3 values.',
    'Level 2: The maximum product of 3 values comes from either (a) the top 3 values (all positive or two negatives cancel) or (b) the bottom 2 values (most negative) multiplied by the top value. Check both candidates.',
    'Level 3: You do not need to track ALL subtree values. For each subtree, only the top-3 largest and bottom-2 smallest values can ever appear in the optimal product. Return at most 5 values per subtree to the parent — this keeps the DFS O(n log n).',
  ],
  functionName: 'placedCoins',
  params: ['edges', 'cost'],
  starterCode: {
    javascript: `function placedCoins(edges, cost) {
  const n = cost.length;
  const adj = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
  const ans = new Array(n).fill(0);
  function dfs(node, par) {
    let vals = [cost[node]];
    for (const child of adj[node]) {
      if (child === par) continue;
      vals = [...vals, ...dfs(child, node)];
    }
    vals.sort((a, b) => a - b);
    const len = vals.length;
    if (len >= 3) {
      const c1 = vals[len-1] * vals[len-2] * vals[len-3];
      const c2 = vals[0] * vals[1] * vals[len-1];
      ans[node] = Math.max(0, c1, c2);
    }
    return len <= 5 ? vals : [vals[0], vals[1], vals[len-3], vals[len-2], vals[len-1]];
  }
  dfs(0, -1);
  return ans;
}`,
    typescript: `function placedCoins(edges: number[][], cost: number[]): number[] {
  const n = cost.length;
  const adj: number[][] = Array.from({length: n}, () => []);
  for (const e of edges) { adj[e[0]!].push(e[1]!); adj[e[1]!].push(e[0]!); }
  const ans: number[] = new Array(n).fill(0);
  function dfs(node: number, par: number): number[] {
    let vals = [cost[node]!];
    for (const child of adj[node]!) {
      if (child === par) continue;
      vals = [...vals, ...dfs(child, node)];
    }
    vals.sort((a, b) => a - b);
    const len = vals.length;
    if (len >= 3) {
      const c1 = vals[len-1]! * vals[len-2]! * vals[len-3]!;
      const c2 = vals[0]! * vals[1]! * vals[len-1]!;
      ans[node] = Math.max(0, c1, c2);
    }
    return len <= 5 ? vals : [vals[0]!, vals[1]!, vals[len-3]!, vals[len-2]!, vals[len-1]!];
  }
  dfs(0, -1);
  return ans;
}`,
    python: `def placedCoins(edges, cost):
    n = len(cost)
    adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u)
    ans = [0] * n
    def dfs(node, par):
        vals = [cost[node]]
        for child in adj[node]:
            if child == par: continue
            vals += dfs(child, node)
        vals.sort()
        l = len(vals)
        if l >= 3:
            c1 = vals[-1] * vals[-2] * vals[-3]
            c2 = vals[0] * vals[1] * vals[-1]
            ans[node] = max(0, c1, c2)
        return vals if l <= 5 else [vals[0], vals[1], vals[-3], vals[-2], vals[-1]]
    dfs(0, -1)
    return ans`,
  },
  visibleTests: [
    {
      args: [[[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]], [1, 2, 3, 4, 5, 6]],
      expected: [120, 0, 0, 0, 0, 0],
    },
    {
      args: [[[0, 1], [0, 2], [1, 3], [1, 4], [1, 5]], [10, 2, 5, 1, 3, 4]],
      expected: [200, 24, 0, 0, 0, 0],
    },
    {
      args: [[[0, 1], [1, 2]], [1, 2, 3]],
      expected: [6, 0, 0],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 1], [0, 2], [0, 3]], [-1, -2, -3, 4]],
      expected: [24, 0, 0, 0],
    },
    {
      args: [[[0, 1], [0, 2], [0, 3]], [-1, -2, -3, -4]],
      expected: [0, 0, 0, 0],
    },
    {
      args: [[[0, 1], [1, 2], [2, 3], [3, 4]], [1, 2, 3, 4, 5]],
      expected: [60, 60, 60, 0, 0],
    },
    {
      args: [[[0, 1], [0, 2], [0, 3], [1, 4], [1, 5]], [1, 2, 3, 4, 5, 6]],
      expected: [120, 60, 0, 0, 0, 0],
    },
    {
      args: [[[0, 1], [0, 2], [0, 3], [0, 4]], [5, 3, 2, 7, 1]],
      expected: [105, 0, 0, 0, 0],
    },
    {
      args: [[[0, 1], [0, 2], [0, 3]], [1, 2, 3, 4]],
      expected: [24, 0, 0, 0],
    },
  ],
};
