import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-walk-weighted-graph',
  title: 'Minimum Cost Walk in Weighted Graph',
  difficulty: 'hard',
  tags: ['graph', 'union-find'],
  description: `There is an undirected weighted graph with \`n\` vertices labeled from \`0\` to \`n - 1\`.

You are given the integer \`n\` and an array \`edges\`, where \`edges[i] = [u_i, v_i, w_i]\` indicates that there is an edge between vertices \`u_i\` and \`v_i\` with weight \`w_i\`.

A **walk** on the graph is a sequence of vertices and edges. The walk starts and ends at a vertex, and each consecutive pair of vertices in the walk must be connected by an edge. A walk is allowed to revisit the same edge or vertex multiple times.

The **cost** of a walk starting at node \`u\` and ending at node \`v\` is defined as the **bitwise AND** of the weights of the edges traversed during the walk. In other words, if the sequence of edge weights encountered during the walk is \`w_0, w_1, w_2, ..., w_k\`, then the cost is \`w_0 & w_1 & w_2 & ... & w_k\`.

You are also given a 2D array \`query\`, where \`query[i] = [s_i, t_i]\`. For each query, find the **minimum cost** of the walk starting at vertex \`s_i\` and ending at vertex \`t_i\`. If there is no path from \`s_i\` to \`t_i\`, return \`-1\`.

Return the array \`answer\`, where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '`2 <= n <= 10^5`',
    '`0 <= edges.length <= 10^5`',
    '`edges[i].length == 3`',
    '`0 <= u_i, v_i <= n - 1`',
    '`u_i != v_i`',
    '`0 <= w_i <= 10^5`',
    '`1 <= query.length <= 10^5`',
    '`query[i].length == 2`',
    '`0 <= s_i, t_i <= n - 1`',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]',
      output: '[1,-1]',
      explanation: 'Nodes 0,1,2,3 are connected. The AND of all edge weights in the component is 7&7&1=1. Nodes 3 and 4 are in different components, so cost is -1.',
    },
    {
      input: 'n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], query = [[1,2]]',
      output: '[0]',
      explanation: 'All nodes are connected. The AND of all edge weights is 7&15&6&1=0.',
    },
    {
      input: 'n = 3, edges = [], query = [[0,1],[1,2]]',
      output: '[-1,-1]',
      explanation: 'No edges exist, so all nodes are in separate components.',
    },
  ],
  hints: [
    'Key insight: since you can revisit edges, the minimum cost path between two nodes in the same connected component is the bitwise AND of ALL edge weights in that component (because traversing an edge can only decrease the AND).',
    'Use Union-Find to group nodes into components. For each component, maintain the AND of all edge weights (initialize to all-ones / 0x3FFFFFFF). When merging two components via edge weight w, update: compAnd[root] = compAnd[rootA] & compAnd[rootB] & w.',
    '```js\nfunction minimumCost(n, edges, query) {\n  const parent = Array.from({length: n}, (_, i) => i);\n  const compAnd = new Array(n).fill(0x3FFFFFFF);\n  function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }\n  for (const [u, v, w] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru === rv) { compAnd[ru] &= w; }\n    else { compAnd[rv] = compAnd[ru] & compAnd[rv] & w; parent[ru] = rv; }\n  }\n  return query.map(([s, t]) => {\n    if (s === t) return 0;\n    const rs = find(s), rt = find(t);\n    return rs === rt ? compAnd[rt] : -1;\n  });\n}\n```',
  ],
  functionName: 'minimumCost',
  params: ['n', 'edges', 'query'],
  starterCode: {
    javascript: `function minimumCost(n, edges, query) {

}`,
    typescript: `function minimumCost(n: number, edges: number[][], query: number[][]): number[] {

}`,
    python: `def minimumCost(n: int, edges: list[list[int]], query: list[list[int]]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]]], expected: [1, -1] },
    { args: [3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]]], expected: [0] },
    { args: [3, [], [[0, 1], [1, 2]]], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [1, [], [[0, 0]]], expected: [0] },
    { args: [2, [[0, 1, 5]], [[0, 1], [1, 0]]], expected: [5, 5] },
    { args: [4, [[0, 1, 3], [1, 2, 5], [0, 2, 1]], [[0, 2], [1, 3]]], expected: [1, -1] },
    { args: [3, [[0, 1, 12], [0, 1, 8]], [[0, 1]]], expected: [8] },
  ],
};
