import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-nodes-same-label',
  title: 'Number of Nodes in the Sub-Tree With the Same Label',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of \`n\` nodes numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` edges. The root of the tree is the node \`0\`, and each node of the tree has a label which is a lowercase character given in the string \`labels\` (i.e. The label of the \`i\`th node is \`labels[i]\`).

The \`edges\` array is given on the form \`edges[i] = [a_i, b_i]\`, which means there is an edge between nodes \`a_i\` and \`b_i\` in the tree.

Return an array of size \`n\` where \`ans[i]\` is the **number of nodes in the subtree of the \`i\`th node** which have the same label as node \`i\`.`,
  constraints: [
    '1 <= n <= 10^5',
    'edges.length == n - 1',
    '0 <= ai, bi < n',
    'labels.length == n',
    'labels is consisting of only of lowercase English letters',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"',
      output: '[2,1,1,1,1,1,1]',
      explanation: 'Node 0 (\'a\') subtree has nodes 0,1,2,3,4,5,6 with labels a,b,a,e,d,c,d. Two nodes with label \'a\'.',
    },
    { input: 'n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb"', output: '[4,2,1,1]' },
  ],
  hints: [
    'Build an adjacency list and do a DFS rooted at 0.',
    'Each DFS call returns a frequency array of 26 characters in its subtree.',
    'The answer for node i is the count of labels[i] in its subtree frequency array.',
  ],
  functionName: 'countSubTrees',
  params: ['n', 'edges', 'labels'],
  starterCode: {
    javascript: 'function countSubTrees(n, edges, labels) {\n\n}\n',
    typescript: "function countSubTrees(n: number, edges: number[][], labels: string): number[] {\n\n}",

    python: 'def countSubTrees(n, edges, labels):\n    pass\n',
  },
  visibleTests: [
    { args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], 'abaedcd'], expected: [2, 1, 1, 1, 1, 1, 1] },
    { args: [4, [[0, 1], [1, 2], [0, 3]], 'bbbb'], expected: [4, 2, 1, 1] },
  ],
  hiddenTests: [
    { args: [1, [], 'a'], expected: [1] },
    { args: [5, [[0, 1], [0, 2], [1, 3], [1, 4]], 'aabba'], expected: [3, 2, 1, 1, 1] },
    { args: [3, [[0, 1], [0, 2]], 'abc'], expected: [1, 1, 1] },
  ],
};
