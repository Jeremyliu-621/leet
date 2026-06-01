import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-walk-in-weighted-graph',
  title: 'Minimum Cost Walk in Weighted Graph',
  difficulty: 'hard',
  tags: ['graph', 'union-find', 'bit-manipulation'],
  description: `There is an undirected weighted graph with \`n\` vertices labeled from \`0\` to \`n - 1\`.

You are given the integer \`n\` and an array \`edges\`, where \`edges[i] = [ui, vi, wi]\` indicates that there is an edge between vertices \`ui\` and \`vi\` with a weight of \`wi\`.

A walk on a graph is a sequence of vertices and edges. The walk starts and ends with a vertex, and each edge connects the i-th and (i+1)-th vertex in the sequence. The weight of the walk is defined as the **bitwise AND** of all edges it uses.

You are also given a 2D array \`query\`, where \`query[i] = [si, ti]\`. For each query, you need to find the **minimum cost** of the walk starting at vertex \`si\` and ending at vertex \`ti\`. If there is no path from \`si\` to \`ti\`, return \`-1\`.

Return an array \`answer\`, where \`answer[i]\` denotes the **minimum cost** of a walk for query \`i\`.`,
  constraints: [
    '2 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    'edges[i].length == 3',
    '0 <= ui, vi <= n - 1',
    'ui != vi',
    '0 <= wi <= 10^5',
    '1 <= query.length <= 10^5',
    'query[i].length == 2',
    '0 <= si, ti <= n - 1',
    'si != ti',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]',
      output: '[1,-1]',
      explanation: 'Nodes 0,1,2,3 are connected. AND of all edges in component = 7&7&1=1. Nodes 3 and 4 are in different components, return -1.',
    },
    {
      input: 'n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], query = [[1,2]]',
      output: '[0]',
      explanation: 'All nodes connected. AND of all edges = 7&15&6&1=0.',
    },
  ],
  hints: [
    'The minimum AND walk cost between u and v equals the AND of ALL edge weights in their connected component (walk more edges only makes AND smaller or equal).',
    'Use a Disjoint Set Union (DSU) to group nodes into components, tracking the AND of all edges in each component.',
    'For each query, if nodes are in different components return -1. Otherwise return the component\'s AND value.',
  ],
  functionName: 'minimumCostWalk',
  params: ['n', 'edges', 'query'],
  starterCode: {
    javascript: 'function minimumCostWalk(n, edges, query) {\n  \n}\n',
    typescript: 'function minimumCostWalk(n: number, edges: number[][], query: number[][]): number[] {\n  \n}',
    python: 'def minimumCostWalk(n, edges, query):\n    pass\n',
  },
  visibleTests: [
    { args: [5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]]], expected: [1, -1] },
    { args: [3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]]], expected: [0] },
  ],
  hiddenTests: [
    { args: [2, [[0, 1, 5]], [[0, 1]]], expected: [5] },
    { args: [3, [], [[0, 1], [0, 2]]], expected: [-1, -1] },
    { args: [4, [[0, 1, 3], [1, 2, 1], [2, 3, 7]], [[0, 3], [0, 1]]], expected: [1, 1] },
  ],
};
