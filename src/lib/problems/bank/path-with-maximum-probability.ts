import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-with-maximum-probability',
  title: 'Path with Maximum Probability',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an undirected weighted graph of \`n\` nodes (0-indexed), represented by an edge list where \`edges[i] = [a, b]\` is an undirected edge connecting the nodes \`a\` and \`b\` with a probability of success of traversing that edge \`succProb[i]\`.

Given two nodes \`start\` and \`end\`, find the path with the maximum probability of success to go from \`start\` to \`end\` and return its success probability.

If there is no path from \`start\` to \`end\`, **return 0**. Your answer will be accepted if it differs from the correct answer by at most \`1e-5\`.`,
  constraints: [
    '2 <= n <= 10^4',
    '0 <= start, end < n',
    'start != end',
    '0 <= a, b < n',
    'a != b',
    '0 <= succProb.length == edges.length <= 2*10^4',
    '0 <= succProb[i] <= 1',
    'There is at most one edge between every two nodes.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2',
      output: '0.25',
      explanation: 'There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.25.',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2',
      output: '0.30000',
    },
    {
      input: 'n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2',
      output: '0.00000',
    },
  ],
  hints: [
    'Model this as a maximum-probability shortest path (instead of minimizing sum, maximize product).',
    'Use Bellman-Ford: relax edges repeatedly. `prob[v] = max(prob[v], prob[u] * p)` for each edge `(u,v,p)`. Repeat at most `n-1` times.',
    'Start with `prob[start] = 1`, all others 0. Return `prob[end]` after relaxation.',
  ],
  functionName: 'maxProbability',
  params: ['n', 'edges', 'succProb', 'start', 'end'],
  starterCode: {
    javascript: 'function maxProbability(n, edges, succProb, start, end) {\n\n}\n',
    typescript: "function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {\n\n}",

    python: 'def maxProbability(n, edges, succProb, start, end):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2], expected: 0.25 },
    { args: [3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.3], 0, 2], expected: 0.3 },
    { args: [3, [[0,1]], [0.5], 0, 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [2, [[1,0]], [0.5], 0, 1], expected: 0.5 },
    { args: [4, [[0,1],[1,2],[2,3],[0,3]], [0.5,0.5,0.5,0.9], 0, 3], expected: 0.9 },
    { args: [2, [], [], 0, 1], expected: 0 },
    { args: [3, [[0,1],[0,2],[1,2]], [0.1,0.9,0.9], 0, 2], expected: 0.9 },
  ],
};
