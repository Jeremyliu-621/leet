import type { Problem } from '../types';

export const problem: Problem = {
  id: 'redundant-connection-ii',
  title: 'Redundant Connection II',
  difficulty: 'hard',
  tags: ['union-find', 'graph'],
  description: `In this problem, a **rooted tree** is a **directed** graph such that there is exactly one node (the root) for which there is no parent, and all other nodes have exactly one parent. The root has no parent.

You are given a directed graph of \`n\` nodes labeled \`1\` to \`n\`, represented as \`edges[i] = [u_i, v_i]\` meaning there is a directed edge from \`u_i\` to \`v_i\`.

The graph was formed by starting with a rooted tree and adding one additional directed edge. This extra edge may:
1. Give some node **two parents** (in-degree 2),
2. Create a **directed cycle** (with no node having two parents), or
3. Both — give a node two parents AND form a cycle.

Return the **edge that should be removed** to restore the tree. If multiple answers exist, return the edge that occurs last in the input.`,
  constraints: [
    'n == edges.length',
    '3 <= n <= 1000',
    'edges[i].length == 2',
    '1 <= u_i, v_i <= n',
    'u_i != v_i',
  ],
  examples: [
    {
      input: 'edges = [[1,2],[1,3],[2,3]]',
      output: '[2,3]',
      explanation: 'Node 3 has two parents (1 and 2). Removing [2,3] leaves a valid rooted tree.',
    },
    {
      input: 'edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]',
      output: '[4,1]',
      explanation: 'No node has two parents, but [4,1] creates a directed cycle 1→2→3→4→1.',
    },
  ],
  hints: [
    'Identify if any node has two incoming edges (two parents). If so, one of those two edges is the answer. If not, use Union-Find on the undirected version to find the cycle edge.',
    'If a double-parent node exists, temporarily remove the *second* offending edge and run Union-Find. If a cycle is found, the *first* offending edge is the answer; otherwise the second is.',
    '```js\nfunction findRedundantDirectedConnection(edges) {\n  const n = edges.length;\n  const parent = new Array(n+1).fill(0);\n  let cand1 = null, cand2 = null;\n  for (const [u,v] of edges) {\n    if (!parent[v]) parent[v] = u;\n    else { cand1 = [parent[v], v]; cand2 = [u, v]; }\n  }\n  const uf = Array.from({length: n+1}, (_,i) => i);\n  const find = x => uf[x] === x ? x : (uf[x] = find(uf[x]));\n  for (const [u,v] of edges) {\n    if (cand2 && u===cand2[0] && v===cand2[1]) continue;\n    if (find(u) === find(v)) return cand1 ?? [u,v];\n    uf[find(u)] = find(v);\n  }\n  return cand2;\n}\n```',
  ],
  functionName: 'findRedundantDirectedConnection',
  params: ['edges'],
  starterCode: {
    javascript: 'function findRedundantDirectedConnection(edges) {\n  \n}\n',
    typescript: "function findRedundantDirectedConnection(edges: number[][]): number[] {\n  \n}",

    python: 'def findRedundantDirectedConnection(edges):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]], expected: [4, 1] },
  ],
  hiddenTests: [
    { args: [[[2, 1], [3, 1], [4, 2], [1, 4]]], expected: [2, 1] },
    { args: [[[1, 2], [2, 3], [3, 1]]], expected: [3, 1] },
    { args: [[[1, 2], [2, 3], [3, 1], [1, 4]]], expected: [3, 1] },
    { args: [[[3, 1], [1, 4], [2, 1], [4, 2]]], expected: [2, 1] },
  ],
};
