import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-closest-marked-node',
  title: 'Find the Closest Marked Node',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path', 'arrays'],
  description: `You are given a positive integer \`n\`, which is the number of nodes in the graph, and a **0-indexed** array \`edges\` where \`edges[i] = [u, v, w]\` indicates a **directed** weighted edge from node \`u\` to node \`v\` with weight \`w\`.

You are also given a **0-indexed** integer array \`markedNodes\`.

Return an array \`answer\` of length \`n\`, where \`answer[i]\` is the **minimum** distance from node \`i\` to **any** node in \`markedNodes\`. If node \`i\` cannot reach any marked node, set \`answer[i] = -1\`.`,
  constraints: [
    '2 <= n <= 500',
    '1 <= edges.length <= 10^4',
    'edges[i].length == 3',
    '0 <= u, v < n',
    '1 <= w <= 10^6',
    '1 <= markedNodes.length <= n',
    '0 <= markedNodes[i] < n',
    'All values in markedNodes are distinct.',
  ],
  examples: [
    {
      input: 'n=4, edges=[[0,1,1],[0,2,3],[1,2,1],[2,3,4]], markedNodes=[2,3]',
      output: '[2,1,0,0]',
      explanation: 'Node 0: can reach node 2 in distance 2 (0→1→2) or node 3 in distance 6; min=2. Node 1: reaches 2 in 1; min=1. Node 2: already marked, dist=0. Node 3: already marked, dist=0.',
    },
    {
      input: 'n=3, edges=[[0,1,5],[1,2,2]], markedNodes=[2]',
      output: '[7,2,0]',
      explanation: 'Node 0 reaches node 2 via 0→1→2 with distance 7. Node 1 reaches node 2 with distance 2. Node 2 is marked.',
    },
  ],
  hints: [
    'Run Dijkstra\'s algorithm from each node to find shortest distances to all reachable nodes.',
    'For each source node i, the answer is the minimum distance from i to any node in markedNodes.',
    'Since n <= 500, running Dijkstra once per node is O(n * (n + E) log n) which is acceptable.',
    'Alternatively, reverse all edges and run Dijkstra once from a virtual source connected to all marked nodes with zero-weight edges.',
  ],
  functionName: 'closestMarkedNode',
  params: ['n', 'edges', 'markedNodes'],
  starterCode: {
    javascript: `function closestMarkedNode(n, edges, markedNodes) {
  // Build adjacency list
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const marked = new Set(markedNodes);
  const INF = Infinity;
  function dijkstra(src) {
    const dist = new Array(n).fill(INF);
    dist[src] = 0;
    // Min-heap: [cost, node]
    const heap = [[0, src]];
    while (heap.length) {
      heap.sort((a, b) => a[0] - b[0]);
      const [d, u] = heap.shift();
      if (d > dist[u]) continue;
      for (const [v, w] of adj[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          heap.push([dist[v], v]);
        }
      }
    }
    return dist;
  }
  const ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const dist = dijkstra(i);
    let best = INF;
    for (const m of marked) best = Math.min(best, dist[m]);
    ans[i] = best === INF ? -1 : best;
  }
  return ans;
}`,
    typescript: `function closestMarkedNode(n: number, edges: number[][], markedNodes: number[]): number[] {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) adj[u]!.push([v!, w!]);
  const marked = new Set(markedNodes);
  const INF = Infinity;
  function dijkstra(src: number): number[] {
    const dist = new Array<number>(n).fill(INF);
    dist[src] = 0;
    const heap: [number, number][] = [[0, src]];
    while (heap.length) {
      heap.sort((a, b) => a[0]! - b[0]!);
      const [d, u] = heap.shift()!;
      if (d > dist[u]!) continue;
      for (const [v, w] of adj[u]!) {
        if (dist[u]! + w < dist[v]!) {
          dist[v] = dist[u]! + w;
          heap.push([dist[v]!, v]);
        }
      }
    }
    return dist;
  }
  const ans = new Array<number>(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const dist = dijkstra(i);
    let best = INF;
    for (const m of marked) best = Math.min(best, dist[m]!);
    ans[i] = best === INF ? -1 : best;
  }
  return ans;
}`,
    python: `def closestMarkedNode(n: int, edges: list[list[int]], markedNodes: list[int]) -> list[int]:
    import heapq
    adj = [[] for _ in range(n)]
    for u, v, w in edges:
        adj[u].append((v, w))
    marked = set(markedNodes)
    INF = float('inf')
    def dijkstra(src):
        dist = [INF] * n
        dist[src] = 0
        heap = [(0, src)]
        while heap:
            d, u = heapq.heappop(heap)
            if d > dist[u]:
                continue
            for v, w in adj[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
                    heapq.heappush(heap, (dist[v], v))
        return dist
    ans = []
    for i in range(n):
        dist = dijkstra(i)
        best = min(dist[m] for m in marked)
        ans.append(-1 if best == INF else best)
    return ans`,
  },
  visibleTests: [
    {
      args: [4, [[0, 1, 1], [0, 2, 3], [1, 2, 1], [2, 3, 4]], [2, 3]],
      expected: [2, 1, 0, 0],
    },
    {
      args: [3, [[0, 1, 5], [1, 2, 2]], [2]],
      expected: [7, 2, 0],
    },
    {
      args: [2, [[0, 1, 10]], [0]],
      expected: [0, -1],
    },
  ],
  hiddenTests: [
    {
      args: [4, [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 0, 1]], [0]],
      expected: [0, 8, 5, 1],
    },
    {
      args: [4, [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 0, 1]], [1, 3]],
      expected: [2, 0, 4, 0],
    },
    {
      args: [5, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 0, 1]], [2]],
      expected: [2, 1, 0, 4, 3],
    },
    {
      args: [3, [[0, 1, 1], [0, 2, 1], [1, 2, 1]], [2]],
      expected: [1, 1, 0],
    },
    {
      args: [4, [[0, 1, 5], [2, 3, 5]], [1, 3]],
      expected: [5, 0, 5, 0],
    },
  ],
};
