import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-with-max-probability',
  title: 'Path with Maximum Probability',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path', 'heap'],
  description: `You are given an undirected weighted graph of \`n\` nodes (0-indexed), represented by an edge list where \`edges[i] = [a, b]\` is an undirected edge connecting nodes \`a\` and \`b\` with a probability of success of traversing that edge \`succProb[i]\`.

Given two nodes \`start\` and \`end\`, find the path with the **maximum probability** of success to go from \`start\` to \`end\` and return its probability.

If there is no path from \`start\` to \`end\`, **return 0**. Your answer will be accepted if it differs from the correct answer by at most **1e-5**.`,
  constraints: [
    '`2 <= n <= 10^4`',
    '`0 <= start, end < n`',
    '`start != end`',
    '`0 <= a, b < n`',
    '`a != b`',
    '`0 < succProb[i] <= 1`',
    'There is at most one edge between every two nodes',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2',
      output: '0.25000',
      explanation: 'There are two paths from 0 to 2: 0→2 with probability 0.2, and 0→1→2 with probability 0.5×0.5=0.25. Max is 0.25.',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2',
      output: '0.30000',
      explanation: 'Path 0→2 with probability 0.3 beats 0→1→2 with probability 0.25.',
    },
    {
      input: 'n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2',
      output: '0.00000',
      explanation: 'No path from 0 to 2.',
    },
  ],
  hints: [
    'Use a max-heap Dijkstra variant where the priority is the current maximum probability (multiply probabilities along the path). Start with probability 1.0 at `start`, and greedily explore the highest-probability frontier.',
    'Unlike standard Dijkstra (which sums costs and uses a min-heap), here probabilities multiply and you want the maximum — use a max-heap. Skip a node if the stored probability has already been surpassed by a better path.',
    '```js\nfunction maxProbability(n, edges, succProb, start, end) {\n  const adj = Array.from({length: n}, () => []);\n  for (let i = 0; i < edges.length; i++) {\n    const [a, b] = edges[i];\n    adj[a].push([b, succProb[i]]);\n    adj[b].push([a, succProb[i]]);\n  }\n  const prob = new Array(n).fill(0);\n  prob[start] = 1;\n  const heap = [[1, start]]; // max-heap by prob\n  while (heap.length) {\n    heap.sort((a, b) => b[0] - a[0]);\n    const [p, u] = heap.shift();\n    if (u === end) return p;\n    if (p < prob[u]) continue;\n    for (const [v, w] of adj[u]) {\n      if (p * w > prob[v]) {\n        prob[v] = p * w;\n        heap.push([prob[v], v]);\n      }\n    }\n  }\n  return 0;\n}\n```',
  ],
  functionName: 'maxProbability',
  params: ['n', 'edges', 'succProb', 'start_node', 'end_node'],
  starterCode: {
    javascript: `function maxProbability(n, edges, succProb, start_node, end_node) {

}`,
    typescript: `function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {

}`,
    python: `def maxProbability(n: int, edges: list[list[int]], succProb: list[float], start_node: int, end_node: int) -> float:
    pass`,
  },
  visibleTests: [
    {
      args: [3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.2], 0, 2],
      expected: 0.25,
    },
    {
      args: [3, [[0, 1], [1, 2], [0, 2]], [0.5, 0.5, 0.3], 0, 2],
      expected: 0.3,
    },
    {
      args: [3, [[0, 1]], [0.5], 0, 2],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [2, [[0, 1]], [0.5], 0, 1],
      expected: 0.5,
    },
    {
      args: [4, [[0, 1], [1, 2], [2, 3], [0, 3]], [0.5, 0.5, 0.5, 0.25], 0, 3],
      expected: 0.25,
    },
    {
      args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], [0.5, 0.5, 0.5, 0.5], 0, 4],
      expected: 0.0625,
    },
    {
      args: [3, [[0, 1], [0, 2]], [0.5, 0.25], 1, 2],
      expected: 0.125,
    },
  ],
};
