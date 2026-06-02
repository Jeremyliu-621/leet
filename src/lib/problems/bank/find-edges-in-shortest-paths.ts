import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-edges-in-shortest-paths',
  title: 'Find Edges in Shortest Paths',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path'],
  description: `You are given a positive integer \`n\` representing the number of nodes in an undirected weighted connected graph. The nodes are labeled from \`0\` to \`n - 1\`.

You are also given a 2D integer array \`edges\`, where \`edges[i] = [u_i, v_i, w_i]\` denotes an edge between nodes \`u_i\` and \`v_i\` with weight \`w_i\`.

Return a boolean array \`answer\` of length \`m\` where \`answer[i]\` is \`true\` if the \`i\`-th edge is part of **at least one** shortest path from node \`0\` to node \`n - 1\`, and \`false\` otherwise.

**Note:** If node \`0\` and node \`n - 1\` are directly connected, this edge is always considered part of the shortest path.`,
  constraints: [
    '2 <= n <= 5 * 10^4',
    'm == edges.length',
    '1 <= m <= min(5 * 10^4, n * (n - 1) / 2)',
    '0 <= u_i, v_i < n',
    'u_i != v_i',
    '1 <= w_i <= 10^5',
    'The input is generated such that there are no repeated edges and the graph is connected.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1,4],[0,2,1],[1,3,2],[1,4,3],[2,3,1],[3,5,2],[4,5,2]]',
      output: '[false,true,false,false,true,true,false]',
      explanation: 'The only shortest path from 0 to 5 has cost 4: 0→2→3→5 (cost 1+1+2=4). Edges [0,2,1], [2,3,1], [3,5,2] (indices 1,4,5) are on this path.',
    },
    {
      input: 'n = 4, edges = [[2,0,1],[0,1,1],[0,3,4],[3,2,2]]',
      output: '[true,false,false,true]',
      explanation: 'Shortest path from 0 to 3: 0→2→3 (cost 1+2=3) beats direct 0→3 (cost 4). Edges [2,0,1] and [3,2,2] (indices 0,3) are on the shortest path.',
    },
  ],
  hints: [
    'Run Dijkstra from node 0 to get dist0[]. Run Dijkstra from node n-1 to get distN[].',
    'An edge (u, v, w) is on a shortest path iff dist0[u] + w + distN[v] == dist0[n-1] OR dist0[v] + w + distN[u] == dist0[n-1].',
    'The shortest path length is dist0[n-1].',
  ],
  functionName: 'findAnswer',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findAnswer(n, edges) {
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  function dijkstra(src) {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const pq = [[0, src]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift();
      if (d > dist[u]) continue;
      for (const [v, w] of adj[u]) {
        if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; pq.push([dist[v], v]); }
      }
    }
    return dist;
  }
  const d0 = dijkstra(0), dN = dijkstra(n - 1), sp = d0[n - 1];
  return edges.map(([u, v, w]) => d0[u] + w + dN[v] === sp || d0[v] + w + dN[u] === sp);
}`,
    typescript: `function findAnswer(n: number, edges: number[][]): boolean[] {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const e of edges) { adj[e[0]!].push([e[1]!, e[2]!]); adj[e[1]!].push([e[0]!, e[2]!]); }
  function dijkstra(src: number): number[] {
    const dist: number[] = new Array(n).fill(Infinity);
    dist[src] = 0;
    const pq: [number, number][] = [[0, src]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift()!;
      if (d > dist[u]!) continue;
      for (const [v, w] of adj[u]!) {
        if (dist[u]! + w < dist[v]!) { dist[v] = dist[u]! + w; pq.push([dist[v]!, v]); }
      }
    }
    return dist;
  }
  const d0 = dijkstra(0), dN = dijkstra(n - 1), sp = d0[n - 1]!;
  return edges.map(e => d0[e[0]!]! + e[2]! + dN[e[1]!]! === sp || d0[e[1]!]! + e[2]! + dN[e[0]!]! === sp);
}`,
    python: `def findAnswer(n, edges):
    import heapq
    adj = [[] for _ in range(n)]
    for u, v, w in edges: adj[u].append((v, w)); adj[v].append((u, w))
    def dijkstra(src):
        dist = [float('inf')] * n; dist[src] = 0
        pq = [(0, src)]
        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]: continue
            for v, w in adj[u]:
                if dist[u] + w < dist[v]: dist[v] = dist[u] + w; heapq.heappush(pq, (dist[v], v))
        return dist
    d0, dN = dijkstra(0), dijkstra(n - 1); sp = d0[n - 1]
    return [d0[u] + w + dN[v] == sp or d0[v] + w + dN[u] == sp for u, v, w in edges]`,
  },
  visibleTests: [
    {
      args: [6, [[0, 1, 4], [0, 2, 1], [1, 3, 2], [1, 4, 3], [2, 3, 1], [3, 5, 2], [4, 5, 2]]],
      expected: [false, true, false, false, true, true, false],
    },
    {
      args: [4, [[2, 0, 1], [0, 1, 1], [0, 3, 4], [3, 2, 2]]],
      expected: [true, false, false, true],
    },
  ],
  hiddenTests: [
    { args: [2, [[0, 1, 1]]], expected: [true] },
    { args: [3, [[0, 1, 1], [1, 2, 1], [0, 2, 3]]], expected: [true, true, false] },
    { args: [3, [[0, 1, 1], [1, 2, 1], [0, 2, 2]]], expected: [true, true, true] },
    { args: [4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 4]]], expected: [true, true, true, false] },
    { args: [4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 3]]], expected: [true, true, true, true] },
    { args: [3, [[0, 1, 2], [0, 2, 1], [1, 2, 1]]], expected: [false, true, false] },
    {
      args: [5, [[0, 1, 1], [0, 2, 2], [1, 3, 1], [2, 3, 1], [3, 4, 1]]],
      expected: [true, false, true, false, true],
    },
    {
      args: [4, [[0, 1, 5], [0, 2, 1], [1, 3, 1], [2, 3, 1]]],
      expected: [false, true, false, true],
    },
  ],
};
