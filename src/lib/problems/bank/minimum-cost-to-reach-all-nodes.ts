import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-reach-all-nodes',
  title: 'Minimum Cost to Reach All Nodes',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph'],
  description: `There is a **directed weighted graph** of \`n\` nodes (labeled \`0\` to \`n-1\`). You start at node \`0\` and want to visit **every node at least once**.

You are given an array of \`edges\` where each \`edges[i] = [u, v, w]\` represents a directed edge from node \`u\` to node \`v\` with cost \`w\`.

Find the **minimum cost** to reach every node from node \`0\`. Return an array \`answer\` of length \`n\` where \`answer[i]\` is the minimum cost to reach node \`i\` from node \`0\`. If node \`i\` is unreachable, set \`answer[i] = -1\`.

Use Dijkstra's algorithm for efficiency.`,
  constraints: [
    '1 <= n <= 500',
    '0 <= edges.length <= 5000',
    'edges[i].length == 3',
    '0 <= u, v < n',
    '1 <= w <= 10^6',
    'No duplicate edges',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1,1],[0,2,4],[1,2,2],[2,3,1]]',
      output: '[0,1,3,4]',
      explanation: 'Shortest paths from 0: to 1=1, to 2=min(4, 1+2)=3, to 3=3+1=4.',
    },
    {
      input: 'n = 3, edges = [[0,1,2],[1,2,3]]',
      output: '[0,2,5]',
      explanation: '0→1 costs 2, 0→1→2 costs 5.',
    },
    {
      input: 'n = 3, edges = [[0,1,5],[1,0,5]]',
      output: '[0,5,-1]',
      explanation: 'Node 2 is unreachable from 0.',
    },
  ],
  hints: [
    'This is a standard single-source shortest-path problem from node 0. Use Dijkstra\'s algorithm with a min-heap.',
    'Build an adjacency list from the edges. Initialize dist[0]=0 and dist[i]=Infinity for all other i. Push (0, node=0) onto the min-heap.',
    'Pop the minimum-cost state. For each neighbor, if going through this node improves the neighbor\'s cost, update and push to the heap. Nodes that remain Infinity at the end are unreachable (output -1).',
  ],
  functionName: 'minCostReachAll',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function minCostReachAll(n, edges) {
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity); dist[0] = 0;
  const visited = new Array(n).fill(false);
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let v = 0; v < n; v++) if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    if (dist[u] === Infinity) break;
    visited[u] = true;
    for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
  }
  return dist.map(d => d === Infinity ? -1 : d);
}`,
    typescript: `function minCostReachAll(n: number, edges: number[][]): number[] {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) adj[u]!.push([v!, w!]);
  const dist = new Array<number>(n).fill(Infinity); dist[0] = 0;
  const visited = new Array<boolean>(n).fill(false);
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    for (let v = 0; v < n; v++) if (!visited[v] && (u === -1 || dist[v]! < dist[u]!)) u = v;
    if (dist[u]! === Infinity) break;
    visited[u] = true;
    for (const [v, w] of adj[u]!) if (dist[u]! + w < dist[v]!) dist[v] = dist[u]! + w;
  }
  return dist.map(d => d === Infinity ? -1 : d);
}`,
    python: `def minCostReachAll(n, edges):
    import heapq
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    adj = [[] for _ in range(n)]
    for u, v, w in edges: adj[u].append((v, w))
    dist = [float('inf')] * n; dist[0] = 0; heap = [(0, 0)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]: continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]: dist[v] = dist[u] + w; heapq.heappush(heap, (dist[v], v))
    return [-1 if d == float('inf') else d for d in dist]`,
  },
  visibleTests: [
    { args: [4, [[0, 1, 1], [0, 2, 4], [1, 2, 2], [2, 3, 1]]], expected: [0, 1, 3, 4] },
    { args: [3, [[0, 1, 2], [1, 2, 3]]], expected: [0, 2, 5] },
    { args: [3, [[0, 1, 5], [1, 0, 5]]], expected: [0, 5, -1] },
  ],
  hiddenTests: [
    { args: [1, []], expected: [0] },
    { args: [4, [[0, 1, 10], [0, 2, 3], [2, 1, 2], [1, 3, 1]]], expected: [0, 5, 3, 6] },
    { args: [5, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1]]], expected: [0, 1, 2, 3, 4] },
    { args: [3, []], expected: [0, -1, -1] },
    { args: [4, [[0, 1, 2], [0, 2, 6], [1, 3, 1], [2, 3, 3]]], expected: [0, 2, 6, 3] },
  ],
};
