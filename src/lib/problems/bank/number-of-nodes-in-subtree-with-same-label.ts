import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-nodes-in-subtree-with-same-label',
  title: 'Number of Nodes in the Sub-Tree With the Same Label',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `You are given a tree (i.e., a connected, undirected graph with no cycles) consisting of \`n\` nodes numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` edges. The root of the tree is the node \`0\`, and each node of the tree has a label which is a lowercase character given in the character array \`labels\` (i.e., \`labels[i]\` is the label of the \`i\`-th node).

The \`edges\` array is given on the same format as usual in tree problems: \`edges[i] = [ai, bi]\`, which means there is an edge between nodes \`ai\` and \`bi\` in the tree.

Return *an array of size \`n\`* where \`ans[i]\` is the number of nodes in the subtree of the \`i\`-th node which have the same label as node \`i\`.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`edges.length == n - 1`',
    '`edges[i].length == 2`',
    '`0 <= ai, bi < n`',
    '`ai != bi`',
    '`labels.length == n`',
    '`labels` is consisting of only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"',
      output: '[2,1,1,1,1,1,1]',
      explanation: 'Node 0 has label "a". The subtree of 0 includes all 7 nodes; nodes 0 and 2 have label "a", so ans[0]=2. All other nodes have unique labels in their subtrees.',
    },
    {
      input: 'n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb"',
      output: '[4,2,1,1]',
      explanation: 'All nodes have label "b". Subtree of 0 = all 4 nodes (ans=4), subtree of 1 = nodes 1,2 (ans=2), etc.',
    },
  ],
  hints: [
    'Root the tree at node 0. Do a DFS. For each node, return a frequency count array (26 letters) of all labels in its subtree.',
    'ans[i] = the count of labels[i] in the frequency map returned for node i.',
    'Merge children frequency maps into the current node\'s count.',
  ],
  functionName: 'countSubTrees',
  params: ['n', 'edges', 'labels'],
  starterCode: {
    javascript: `function countSubTrees(n, edges, labels) {

}`,
    python: `def countSubTrees(n, edges, labels):
    pass`,
  },
  visibleTests: [
    {
      args: [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], 'abaedcd'],
      expected: [2, 1, 1, 1, 1, 1, 1],
    },
    {
      args: [4, [[0, 1], [1, 2], [0, 3]], 'bbbb'],
      expected: [4, 2, 1, 1],
    },
  ],
  hiddenTests: [
    { args: [1, [], 'a'], expected: [1] },
    {
      args: [3, [[0, 1], [0, 2]], 'aab'],
      expected: [2, 1, 1],
    },
    {
      args: [5, [[0, 1], [0, 2], [2, 3], [2, 4]], 'abcdd'],
      expected: [1, 1, 1, 1, 1],
    },
    {
      args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 'aaaaa'],
      expected: [5, 4, 3, 2, 1],
    },
  ],
};
