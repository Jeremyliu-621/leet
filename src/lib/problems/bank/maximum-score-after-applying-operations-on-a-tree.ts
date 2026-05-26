import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-after-applying-operations-on-a-tree',
  title: 'Maximum Score After Applying Operations on a Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `There is an undirected tree with \`n\` nodes labeled from \`0\` to \`n - 1\`, rooted at node \`0\`. You are given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\`, and an integer array \`values\` of length \`n\` where \`values[i]\` is the value of node \`i\`.

You can apply **operations** on the tree. In a single operation, you pick a node and set its value to \`0\`. The **score** of an operation is the node's value before it was set to zero.

A tree is called **healthy** if every root-to-leaf path contains at least one node with a value that is **not** zero.

Return the **maximum total score** you can get by applying operations while keeping the tree **healthy**.`,
  constraints: [
    '2 <= n <= 2 * 10^4',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= a_i, b_i <= n - 1',
    'values.length == n',
    '1 <= values[i] <= 10^9',
    'The input is generated such that edges represents a valid tree.',
  ],
  examples: [
    {
      input: 'edges = [[0,1],[0,2]], values = [1,2,3]',
      output: '5',
      explanation: 'Paths: 0→1 and 0→2. Keep node 0 (value 1) to cover both paths. Operate on nodes 1 (score 2) and 2 (score 3). Total score = 5.',
    },
    {
      input: 'edges = [[0,1],[1,2],[1,3]], values = [4,1,3,2]',
      output: '9',
      explanation: 'Paths: 0→1→2 and 0→1→3. Keep node 1 (minimum value on shared prefix, value 1). Operate on 0 (4), 2 (3), 3 (2). Score = 9.',
    },
  ],
  hints: [
    'This is a tree DP problem. For each subtree rooted at node v, compute two states: the minimum cost to "protect" all root-to-leaf paths through v assuming v\'s ancestor will NOT protect this subtree (so we must protect it internally), and the minimum cost assuming an ancestor is already protecting (so we don\'t need to protect from v).',
    'Let dp[v][0] = minimum sum of values of nodes NOT operated in subtree of v, assuming no ancestor is protecting (so v\'s subtree must have at least one non-zero per path). Let dp[v][1] = same but an ancestor is protecting (so v\'s subtree can be fully zeroed).',
    'Answer = sum(values) - dp[0][0].',
    'For a leaf: dp[v][0] = values[v] (must keep v), dp[v][1] = 0 (ancestor protects, zero v out).',
    'For internal node v: dp[v][1] = 0 (ancestor protects). dp[v][0]: either keep v (values[v] + sum of dp[child][1] for all children) or don\'t keep v (sum of dp[child][0] for all children). Take the minimum.',
  ],
  functionName: 'maximumScoreAfterOperations',
  params: ['edges', 'values'],
  starterCode: {
    javascript: `function maximumScoreAfterOperations(edges, values) {

}`,
    python: `def maximumScoreAfterOperations(edges, values):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [0, 2]], [1, 2, 3]], expected: 5 },
    { args: [[[0, 1], [1, 2], [1, 3]], [4, 1, 3, 2]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[[0, 1]], [1, 2]], expected: 2 },
    { args: [[[0, 1], [0, 2]], [10, 3, 4]], expected: 10 },
    { args: [[[0, 1], [1, 2], [2, 3]], [1, 2, 3, 4]], expected: 9 },
    { args: [[[0, 1], [0, 2], [1, 3], [1, 4]], [6, 2, 3, 5, 4]], expected: 15 },
  ],
};
