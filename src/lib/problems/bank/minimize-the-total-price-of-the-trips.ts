import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-the-total-price-of-the-trips',
  title: 'Minimize the Total Price of the Trips',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `There exists an undirected and unrooted tree with \`n\` nodes indexed from \`0\` to \`n - 1\`. You are given the integer \`n\` and a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\` in the tree.

Each node has an associated price. You are given an integer array \`price\`, where \`price[i]\` is the price of the \`i\`-th node.

The **price sum** of a given path is the sum of the prices of all nodes lying on that path.

You are also given a 2D integer array \`trips\`, where \`trips[j] = [start_j, end_j]\` indicates that you start the \`j\`-th trip from the node \`start_j\` and travel to the node \`end_j\` by any path.

Before performing your first trip, you can choose some **non-adjacent** nodes and **halve** their prices.

Return the **minimum** total price sum to perform all the given trips.`,
  constraints: [
    '1 <= n <= 50',
    'edges.length == n - 1',
    '0 <= edges[i][0], edges[i][1] <= n - 1',
    'edges represents a valid tree.',
    '1 <= price[i] <= 1000',
    '1 <= trips.length <= 100',
    '0 <= start_j, end_j <= n - 1',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[1,2],[1,3]], price = [2,2,10,6], trips = [[0,3],[2,1],[2,3]]',
      output: '23',
      explanation: 'Visit counts: node 0→1, node 1→3, node 2→2, node 3→2. Halve node 2 (price 10→5) and node 0 (price 2→1). Non-adjacent ✓. Total = 1+3*2+2*5+2*3 = 1+6+10+6 = 23.',
    },
    {
      input: 'n = 2, edges = [[0,1]], price = [2,2], trips = [[0,0]]',
      output: '1',
      explanation: 'Halve node 0 (price 2→1). Trip [0,0] costs 1.',
    },
  ],
  hints: [
    'First count how many times each node is visited across all trips using DFS path-finding.',
    'Then use tree DP: dp(node, parent, halved) = minimum cost of the subtree where halved=true means node\'s price is halved.',
    'For each node, you can halve it (then children cannot be halved) or keep it full (children may or may not be halved).',
    'The cost contribution of node i = count[i] * price[i] (if full) or count[i] * price[i] / 2 (if halved).',
  ],
  functionName: 'minimumTotalPrice',
  params: ['n', 'edges', 'price', 'trips'],
  starterCode: {
    javascript: `function minimumTotalPrice(n, edges, price, trips) {
  const adj = Array.from({length: n}, () => []);
  for (const [a, b] of edges) { adj[a].push(b); adj[b].push(a); }

  // Count visits per node
  const count = new Array(n).fill(0);
  const dfs = (node, parent, target, path) => {
    path.push(node);
    if (node === target) { for (const p of path) count[p]++; return true; }
    for (const nb of adj[node]) {
      if (nb !== parent && dfs(nb, node, target, path)) return true;
    }
    path.pop();
    return false;
  };
  for (const [s, e] of trips) dfs(s, -1, e, []);

  // Tree DP: returns [minCostIfFull, minCostIfHalved]
  const dp = (node, parent) => {
    const full = count[node] * price[node];
    const half = count[node] * Math.floor(price[node] / 2);
    let resF = full, resH = half;
    for (const nb of adj[node]) {
      if (nb === parent) continue;
      const [f, h] = dp(nb, node);
      resF += Math.min(f, h); // if node is full, child can be either
      resH += f;              // if node is halved, child must be full
    }
    return [resF, resH];
  };
  const [f, h] = dp(0, -1);
  return Math.min(f, h);
}`,
    typescript: `function minimumTotalPrice(n: number, edges: number[][], price: number[], trips: number[][]): number {
  const adj: number[][] = Array.from({length: n}, () => []);
  for (const [a, b] of edges) { adj[a]!.push(b!); adj[b]!.push(a!); }

  const count = new Array(n).fill(0);
  const dfs = (node: number, parent: number, target: number, path: number[]): boolean => {
    path.push(node);
    if (node === target) { for (const p of path) count[p]++; return true; }
    for (const nb of adj[node]!) {
      if (nb !== parent && dfs(nb, node, target, path)) return true;
    }
    path.pop();
    return false;
  };
  for (const [s, e] of trips) dfs(s!, -1, e!, []);

  const dp = (node: number, parent: number): [number, number] => {
    const full = count[node]! * price[node]!;
    const half = count[node]! * Math.floor(price[node]! / 2);
    let resF = full, resH = half;
    for (const nb of adj[node]!) {
      if (nb === parent) continue;
      const [f, h] = dp(nb, node);
      resF += Math.min(f, h);
      resH += f;
    }
    return [resF, resH];
  };
  const [f, h] = dp(0, -1);
  return Math.min(f, h);
}`,
    python: `def minimumTotalPrice(n, edges, price, trips):
    from math import inf
    adj = [[] for _ in range(n)]
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)

    count = [0] * n
    def dfs_path(node, parent, target, path):
        path.append(node)
        if node == target:
            for p in path:
                count[p] += 1
            return True
        for nb in adj[node]:
            if nb != parent and dfs_path(nb, node, target, path):
                return True
        path.pop()
        return False

    for s, e in trips:
        dfs_path(s, -1, e, [])

    def dp(node, parent):
        full = count[node] * price[node]
        half = count[node] * (price[node] // 2)
        res_f, res_h = full, half
        for nb in adj[node]:
            if nb == parent:
                continue
            f, h = dp(nb, node)
            res_f += min(f, h)
            res_h += f
        return res_f, res_h

    f, h = dp(0, -1)
    return min(f, h)`,
  },
  visibleTests: [
    { args: [4, [[0, 1], [1, 2], [1, 3]], [2, 2, 10, 6], [[0, 3], [2, 1], [2, 3]]], expected: 23 },
    { args: [2, [[0, 1]], [2, 2], [[0, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [], [10], [[0, 0]]], expected: 5 },
    { args: [3, [[0, 1], [1, 2]], [1, 1, 1], [[0, 2]]], expected: 1 },
    { args: [3, [[0, 1], [1, 2]], [4, 2, 4], [[0, 2], [0, 2]]], expected: 12 },
    { args: [4, [[0, 1], [1, 2], [1, 3]], [2, 2, 10, 6], [[0, 3]]], expected: 6 },
  ],
};
