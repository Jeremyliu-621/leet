import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-of-nodes',
  title: 'Count Pairs of Nodes',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given an undirected graph defined by an integer \`n\`, the number of nodes, and a 2D integer array \`edges\` where \`edges[i] = [ui, vi]\` indicates an edge between nodes \`ui\` and \`vi\`. Note that the graph may contain **multi-edges** (duplicate edges).

You are given a **0-indexed** integer array \`queries\`.

The answer to the \`j\`th query is the number of pairs of nodes \`(a, b)\` with \`a < b\` such that the total number of **incident edges** of \`a\` and \`b\` is strictly greater than \`queries[j]\`.

The number of incident edges of a pair is defined as: \`cnt(a, b) = degree(a) + degree(b) - (number of edges between a and b)\`.

Return an array \`answers\` such that \`answers[j]\` is the answer to the \`j\`th query.`,
  constraints: [
    '2 <= n <= 2 * 10^4',
    '1 <= edges.length <= 10^5',
    '1 <= ui, vi <= n',
    'ui != vi',
    '1 <= queries.length <= 20',
    '0 <= queries[j] < 2 * edges.length',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[1,2],[2,4],[1,3],[2,3]], queries = [2,3]',
      output: '[6,2]',
      explanation: 'For query 2: all 6 pairs satisfy cnt>2. For query 3: pairs (1,2) and (2,3) have cnt=4>3.',
    },
    {
      input: 'n = 3, edges = [[1,2],[1,2],[1,3]], queries = [2,3]',
      output: '[3,0]',
      explanation: 'Edge (1,2) appears twice. cnt(1,2)=3+2-2=3, cnt(1,3)=3+1-1=3, cnt(2,3)=2+1=3. All >2, none >3.',
    },
  ],
  hints: [
    'Sort degree array. For each query, use two pointers to count pairs where degree[a]+degree[b] > q.',
    'The two-pointer overcounts pairs connected by multiple edges whose actual cnt drops to ≤ q.',
    'For each unique edge (u,v) with multiplicity c: if deg[u]+deg[v] > q but deg[u]+deg[v]-c ≤ q, subtract 1 from the count.',
  ],
  functionName: 'countPairs',
  params: ['n', 'edges', 'queries'],
  starterCode: {
    javascript: 'function countPairs(n, edges, queries) {\n  \n}\n',
    typescript: 'function countPairs(n: number, edges: number[][], queries: number[]): number[] {\n  \n}',
    python: 'def countPairs(n, edges, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[1, 2], [2, 4], [1, 3], [2, 3]], [2, 3]], expected: [6, 2] },
    { args: [3, [[1, 2], [1, 2], [1, 3]], [2, 3]], expected: [3, 0] },
  ],
  hiddenTests: [
    { args: [2, [[1, 2]], [0]], expected: [1] },
    { args: [2, [[1, 2]], [1]], expected: [0] },
    { args: [2, [[1, 2]], [2]], expected: [0] },
    { args: [4, [[1, 2], [1, 3], [2, 3], [3, 4]], [3]], expected: [2] },
  ],
};
