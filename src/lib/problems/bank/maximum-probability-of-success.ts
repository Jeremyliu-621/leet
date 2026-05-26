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

}`,
    python: `def maxProbability(n: int, edges: list[list[int]], succProb: list[float], start: int, end: int) -> float:
    pass`,
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
