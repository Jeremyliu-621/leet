import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-edge-reversals-so-every-node-is-reachable',
  title: 'Minimum Edge Reversals So Every Node Is Reachable',
  difficulty: 'hard',
  tags: ['graph'],
  description: `There is a **simple directed graph** with \`n\` nodes labeled \`0\` to \`n - 1\`. The graph would form a **tree** if its edges were bi-directional.

You are given an integer \`n\` and a 2D integer array \`edges\`, where \`edges[i] = [u_i, v_i]\` represents a **directed** edge going from node \`u_i\` to node \`v_i\`.

An **edge reversal** changes the direction of an edge, so a directed edge from node \`u\` becomes a directed edge from node \`v\` to node \`u\`.

For every node \`i\` in the range \`[0, n - 1]\`, independently calculate the **minimum** number of edge reversals required so it is possible to reach any other node starting from node \`i\`.

Return an integer array \`answer\` of size \`n\` where \`answer[i]\` is the minimum number of edge reversals required so it is possible to reach any other node starting from node \`i\`.`,
  constraints: [
    '2 <= n <= 10^5',
    'edges.length == n - 1',
    '0 <= edges[i][0], edges[i][1] <= n - 1',
    'The input forms a tree if all edges were made bi-directional.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[0,2],[1,3]]',
      output: '[0,1,1,2]',
      explanation: 'From node 0: 0→1→3 and 0→2, no reversals needed. From node 1: reverse 0→1; costs 1. From node 2: reverse 0→2; costs 1. From node 3: reverse both 0→1 and 1→3; costs 2.',
    },
    {
      input: 'n = 3, edges = [[1,0],[2,0]]',
      output: '[2,1,1]',
      explanation: 'From node 0: both edges point toward 0, need 2 reversals. From node 1 or 2: only need 1 reversal each.',
    },
  ],
  hints: [
    'Treat the directed graph as an undirected tree. Assign each edge a weight: 0 if traversing in the original direction (no reversal needed), 1 if traversing backward (reversal needed).',
    'DFS from node 0 to compute dp[0] = total reversals needed when node 0 is the root. Accumulate edge weights going away from the root.',
    'Use re-rooting DP: when shifting the root from a parent p to a child c along edge with original weight w, update dp[c] = dp[p] + 1 - 2*w. If w=0 (edge goes p→c), shifting root costs +1 more reversal; if w=1 (edge goes c→p), shifting root saves 1 reversal.',
  ],
  functionName: 'minEdgeReversals',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function minEdgeReversals(n, edges) {
  const adj = Array.from({length: n}, () => []);
  for (const [u, v] of edges) {
    adj[u].push([v, 0]); // forward: cost 0 (original direction)
    adj[v].push([u, 1]); // backward: cost 1 (reversal needed)
  }
  const dp = new Array(n).fill(0);
  // BFS from 0 to compute dp[0]
  const vis = new Uint8Array(n);
  vis[0] = 1;
  const q = [0]; let qi = 0;
  while (qi < q.length) {
    const node = q[qi++];
    for (const [next, cost] of adj[node]) {
      if (!vis[next]) { vis[next] = 1; dp[0] += cost; q.push(next); }
    }
  }
  // Re-root BFS
  vis.fill(0); vis[0] = 1;
  q.length = 0; q.push(0); qi = 0;
  while (qi < q.length) {
    const node = q[qi++];
    for (const [next, cost] of adj[node]) {
      if (!vis[next]) {
        vis[next] = 1;
        dp[next] = dp[node] + 1 - 2 * cost;
        q.push(next);
      }
    }
  }
  return dp;
}`,
    typescript: `function minEdgeReversals(n: number, edges: number[][]): number[] {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [u, v] of edges) {
    adj[u!]!.push([v!, 0]);
    adj[v!]!.push([u!, 1]);
  }
  const dp = new Array<number>(n).fill(0);
  const vis = new Uint8Array(n);
  vis[0] = 1;
  const q: number[] = [0]; let qi = 0;
  while (qi < q.length) {
    const node = q[qi++]!;
    for (const [next, cost] of adj[node]!) {
      if (!vis[next]) { vis[next] = 1; dp[0]! += cost; q.push(next); }
    }
  }
  vis.fill(0); vis[0] = 1;
  q.length = 0; q.push(0); qi = 0;
  while (qi < q.length) {
    const node = q[qi++]!;
    for (const [next, cost] of adj[node]!) {
      if (!vis[next]) {
        vis[next] = 1;
        dp[next] = dp[node]! + 1 - 2 * cost;
        q.push(next);
      }
    }
  }
  return dp;
}`,
    python: `def minEdgeReversals(n, edges):
    if hasattr(edges, 'to_py'): edges = edges.to_py()
    edges = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges]
    from collections import deque
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append((v, 0)); adj[v].append((u, 1))
    dp = [0]*n; vis = [False]*n; vis[0] = True
    q = deque([0])
    while q:
        node = q.popleft()
        for nxt, cost in adj[node]:
            if not vis[nxt]: vis[nxt]=True; dp[0]+=cost; q.append(nxt)
    vis = [False]*n; vis[0]=True; q=deque([0])
    while q:
        node = q.popleft()
        for nxt, cost in adj[node]:
            if not vis[nxt]:
                vis[nxt]=True; dp[nxt]=dp[node]+1-2*cost; q.append(nxt)
    return dp`,
  },
  visibleTests: [
    { args: [4, [[0, 1], [0, 2], [1, 3]]], expected: [0, 1, 1, 2] },
    { args: [3, [[0, 1], [0, 2]]], expected: [0, 1, 1] },
    { args: [2, [[0, 1]]], expected: [0, 1] },
    { args: [3, [[1, 0], [2, 0]]], expected: [2, 1, 1] },
    { args: [5, [[0, 1], [1, 3], [0, 2], [2, 4]]], expected: [0, 1, 1, 2, 2] },
  ],
  hiddenTests: [
    { args: [5, [[4, 3], [3, 2], [2, 1], [1, 0]]], expected: [4, 3, 2, 1, 0] },
    { args: [4, [[0, 1], [2, 0], [0, 3]]], expected: [1, 2, 0, 2] },
    { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]], expected: [0, 1, 2, 3, 4, 5] },
    { args: [6, [[5, 4], [4, 3], [3, 2], [2, 1], [1, 0]]], expected: [5, 4, 3, 2, 1, 0] },
    { args: [4, [[0, 1], [1, 2], [3, 2]]], expected: [1, 2, 3, 2] },
  ],
};
