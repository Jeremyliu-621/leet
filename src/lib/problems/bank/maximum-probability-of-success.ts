import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-probability-of-success',
  title: 'Path with Maximum Probability',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph'],
  description: `You are given an undirected weighted graph of \`n\` nodes (0-indexed), represented by an edge list where \`edges[i] = [a, b]\` is an undirected edge connecting the nodes \`a\` and \`b\` with a probability of success of traversing that edge \`succProb[i]\`.

Given two nodes \`start\` and \`end\`, find the path with the **maximum probability** of success to go from \`start\` to \`end\` and return its success probability.

If there is no path from \`start\` to \`end\`, **return 0**. Your answer will be accepted if it differs from the correct answer by at most **1e-5**.`,
  constraints: [
    '`2 <= n <= 10^4`',
    '`0 <= start, end < n`',
    '`start != end`',
    '`0 <= a, b < n`',
    '`a != b`',
    '`0 <= succProb.length == edges.length <= 2 * 10^4`',
    '`0 <= succProb[i] <= 1`',
    'There is at most one edge between every two nodes.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2',
      output: '0.25000',
      explanation: 'Path 0→1→2 has probability 0.5*0.5=0.25; path 0→2 has probability 0.2. Maximum is 0.25.',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2',
      output: '0.30000',
      explanation: 'Direct path 0→2 has probability 0.3 which beats 0.5*0.5=0.25.',
    },
    {
      input: 'n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2',
      output: '0.00000',
      explanation: 'No path from 0 to 2.',
    },
  ],
  hints: [
    'Use a modified Dijkstra (max-probability Dijkstra). Initialize `dist[start] = 1.0`, all others `0`. Use a max-heap ordered by probability. For each edge `(u, v, p)`, relax `dist[v] = max(dist[v], dist[u] * p)`.',
    'Alternatively, use Bellman-Ford: relax all edges `n-1` times. Since probabilities are between 0 and 1, the product only decreases, which makes the algorithm converge.',
    '```js\nfunction maxProbability(n, edges, succProb, start, end) {\n  const adj = Array.from({length: n}, () => []);\n  for (let i = 0; i < edges.length; i++) {\n    const [u, v] = edges[i], p = succProb[i];\n    adj[u].push([v, p]); adj[v].push([u, p]);\n  }\n  const dist = new Array(n).fill(0);\n  dist[start] = 1;\n  const heap = [[1, start]];\n  while (heap.length) {\n    heap.sort((a, b) => b[0] - a[0]);\n    const [p, u] = heap.shift();\n    if (u === end) return p;\n    if (p < dist[u]) continue;\n    for (const [v, ep] of adj[u]) {\n      const np = p * ep;\n      if (np > dist[v]) { dist[v] = np; heap.push([np, v]); }\n    }\n  }\n  return 0;\n}\n```',
  ],
  functionName: 'maxProbability',
  params: ['n', 'edges', 'succProb', 'start', 'end'],
  starterCode: {
    javascript: `function maxProbability(n, edges, succProb, start, end) {
  const adj = Array.from({length: n}, () => []);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i], p = succProb[i];
    adj[u].push([v, p]); adj[v].push([u, p]);
  }
  const dist = new Array(n).fill(0);
  dist[start] = 1;
  const heap = [[1, start]];
  const siftUp = (i) => { while (i > 0) { const p = (i-1) >> 1; if (heap[p][0] >= heap[i][0]) break; [heap[p],heap[i]]=[heap[i],heap[p]]; i=p; } };
  const siftDown = (i) => { while (2*i+1 < heap.length) { let c = 2*i+1; if (c+1 < heap.length && heap[c+1][0] > heap[c][0]) c++; if (heap[i][0] >= heap[c][0]) break; [heap[i],heap[c]]=[heap[c],heap[i]]; i=c; } };
  while (heap.length) {
    const top = heap[0]; const last = heap.pop(); if (heap.length) { heap[0] = last; siftDown(0); }
    const [prob, u] = top;
    if (u === end) return prob;
    if (prob < dist[u]) continue;
    for (const [v, ep] of adj[u]) {
      const np = prob * ep;
      if (np > dist[v]) { dist[v] = np; heap.push([np, v]); siftUp(heap.length - 1); }
    }
  }
  return 0;
}`,
    typescript: `function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (let i = 0; i < edges.length; i++) {
    const u = edges[i]![0]!, v = edges[i]![1]!, p = succProb[i]!;
    adj[u]!.push([v, p]); adj[v]!.push([u, p]);
  }
  const dist = new Array<number>(n).fill(0);
  dist[start] = 1;
  const heap: [number, number][] = [[1, start]];
  const siftUp = (i: number) => { while (i > 0) { const p = (i-1) >> 1; if (heap[p]![0]! >= heap[i]![0]!) break; [heap[p],heap[i]]=[heap[i]!,heap[p]!]; i=p; } };
  const siftDown = (i: number) => { while (2*i+1 < heap.length) { let c = 2*i+1; if (c+1 < heap.length && heap[c+1]![0]! > heap[c]![0]!) c++; if (heap[i]![0]! >= heap[c]![0]!) break; [heap[i],heap[c]]=[heap[c]!,heap[i]!]; i=c; } };
  while (heap.length) {
    const top = heap[0]!; const last = heap.pop()!; if (heap.length) { heap[0] = last; siftDown(0); }
    const [prob, u] = top;
    if (u === end) return prob;
    if (prob < dist[u]!) continue;
    for (const [v, ep] of adj[u]!) {
      const np = prob * ep;
      if (np > dist[v]!) { dist[v] = np; heap.push([np, v]); siftUp(heap.length - 1); }
    }
  }
  return 0;
}`,
    python: `def maxProbability(n: int, edges: list[list[int]], succProb: list[float], start: int, end: int) -> float:
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    if hasattr(succProb, 'to_py'): succProb = list(succProb.to_py())
    import heapq
    adj = [[] for _ in range(n)]
    for (u, v), p in zip(edges, succProb): adj[u].append((v, p)); adj[v].append((u, p))
    dist = [0.0] * n
    dist[start] = 1.0
    heap = [(-1.0, start)]
    while heap:
        neg_prob, u = heapq.heappop(heap)
        prob = -neg_prob
        if u == end: return prob
        if prob < dist[u]: continue
        for v, ep in adj[u]:
            np = prob * ep
            if np > dist[v]: dist[v] = np; heapq.heappush(heap, (-np, v))
    return 0.0`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.2], 0, 2], expected: 0.25 },
    { args: [3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.3], 0, 2], expected: 0.3 },
    { args: [3, [[0, 1]], [0.5], 0, 2], expected: 0.0 },
  ],
  hiddenTests: [
    { args: [2, [[0, 1]], [1.0], 0, 1], expected: 1.0 },
    { args: [4, [[0, 1], [1, 2], [0, 2], [2, 3]], [0.8, 0.6, 0.4, 0.9], 0, 3], expected: 0.432 },
    { args: [3, [[0, 1], [1, 2]], [0.5, 0.5], 0, 2], expected: 0.25 },
    { args: [3, [[0, 1], [0, 2], [1, 2]], [0.9, 0.1, 0.7], 1, 2], expected: 0.7 },
  ],
};
