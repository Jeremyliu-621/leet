import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distance-to-a-cycle-in-undirected-graph',
  title: 'Distance to a Cycle in Undirected Graph',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a positive integer \`n\` representing the number of nodes in a **connected undirected graph** with **exactly one** cycle. The nodes are numbered from \`0\` to \`n - 1\` (inclusive).

You are also given a 2D integer array \`edges\`, where \`edges[i] = [node1i, node2i]\` denotes that there is a **bidirectional** edge between \`node1i\` and \`node2i\` in the given graph.

Return an integer array \`answer\` of size \`n\`, where \`answer[i]\` is the minimum distance from the \`i\`th node to **any** node in the cycle.`,
  constraints: [
    '3 <= n <= 10^5',
    'edges.length == n',
    '1 <= node1i, node2i <= n - 1',
    'node1i != node2i',
    'The graph is connected.',
    'The graph has exactly one cycle.',
    'There is at most one edge between any pair of vertices.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[1,2],[0,2],[0,3]]',
      output: '[0,0,0,1]',
      explanation: 'The cycle is 0-1-2-0. Node 3 is at distance 1 from the cycle (via edge to node 0).',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2],[2,0]]',
      output: '[0,0,0]',
      explanation: 'All nodes form the cycle.',
    },
  ],
  hints: [
    'Level 1: Find which nodes are on the cycle by repeatedly removing leaf nodes (degree 1). This is like topological sort; after removal, the remaining nodes form the cycle.',
    'Level 2: Initialize all cycle nodes with distance 0. Then do multi-source BFS from all cycle nodes simultaneously.',
    'Level 3: The BFS naturally assigns each non-cycle node its minimum distance to the nearest cycle node.',
  ],
  functionName: 'distanceToCycle',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function distanceToCycle(n, edges) {
  const adj = Array.from({length: n}, () => []);
  const deg = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v); adj[v].push(u);
    deg[u]++; deg[v]++;
  }
  const inCycle = new Array(n).fill(true);
  const queue = [];
  for (let i = 0; i < n; i++) if (deg[i] === 1) queue.push(i);
  let qi = 0;
  while (qi < queue.length) {
    const node = queue[qi++];
    inCycle[node] = false;
    for (const nb of adj[node]) {
      if (inCycle[nb]) { deg[nb]--; if (deg[nb] === 1) queue.push(nb); }
    }
  }
  const dist = new Array(n).fill(-1);
  const bfs = [];
  for (let i = 0; i < n; i++) if (inCycle[i]) { dist[i] = 0; bfs.push(i); }
  let head = 0;
  while (head < bfs.length) {
    const node = bfs[head++];
    for (const nb of adj[node]) {
      if (dist[nb] === -1) { dist[nb] = dist[node] + 1; bfs.push(nb); }
    }
  }
  return dist;
}`,
    typescript: `function distanceToCycle(n: number, edges: number[][]): number[] {
  const adj: number[][] = Array.from({length: n}, () => []);
  const deg = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u]!.push(v!); adj[v!]!.push(u!);
    deg[u!]!++; deg[v!]!++;
  }
  const inCycle = new Array(n).fill(true);
  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (deg[i] === 1) queue.push(i);
  let qi = 0;
  while (qi < queue.length) {
    const node = queue[qi++]!;
    inCycle[node] = false;
    for (const nb of adj[node]!) {
      if (inCycle[nb]) { deg[nb]!--; if (deg[nb] === 1) queue.push(nb); }
    }
  }
  const dist = new Array(n).fill(-1);
  const bfs: number[] = [];
  for (let i = 0; i < n; i++) if (inCycle[i]) { dist[i] = 0; bfs.push(i); }
  let head = 0;
  while (head < bfs.length) {
    const node = bfs[head++]!;
    for (const nb of adj[node]!) {
      if (dist[nb] === -1) { dist[nb] = dist[node]! + 1; bfs.push(nb); }
    }
  }
  return dist;
}`,
    python: `def distanceToCycle(n, edges):
    edges = [list(e.to_py() if hasattr(e, 'to_py') else e) for e in (edges.to_py() if hasattr(edges, 'to_py') else edges)]
    n = int(n)
    from collections import deque
    adj = [[] for _ in range(n)]
    deg = [0] * n
    for u, v in edges:
        adj[u].append(v); adj[v].append(u)
        deg[u] += 1; deg[v] += 1
    in_cycle = [True] * n
    q = deque(i for i in range(n) if deg[i] == 1)
    while q:
        node = q.popleft()
        in_cycle[node] = False
        for nb in adj[node]:
            if in_cycle[nb]:
                deg[nb] -= 1
                if deg[nb] == 1:
                    q.append(nb)
    dist = [-1] * n
    bfs = deque()
    for i in range(n):
        if in_cycle[i]:
            dist[i] = 0
            bfs.append(i)
    while bfs:
        node = bfs.popleft()
        for nb in adj[node]:
            if dist[nb] == -1:
                dist[nb] = dist[node] + 1
                bfs.append(nb)
    return dist`,
  },
  visibleTests: [
    { args: [4, [[0, 1], [1, 2], [0, 2], [0, 3]]], expected: [0, 0, 0, 1] },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [0, 0, 0] },
  ],
  hiddenTests: [
    { args: [5, [[0, 1], [1, 2], [0, 2], [3, 4], [4, 0]]], expected: [0, 0, 0, 2, 1] },
    { args: [6, [[0, 1], [1, 2], [2, 0], [3, 0], [4, 3], [5, 4]]], expected: [0, 0, 0, 1, 2, 3] },
  ],
};
