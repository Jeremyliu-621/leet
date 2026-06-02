import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-after-removals-on-a-tree',
  title: 'Minimum Score After Removals on a Tree',
  difficulty: 'hard',
  tags: ['tree', 'bit-manipulation'],
  description: `There is an undirected connected tree with \`n\` nodes labeled from \`0\` to \`n - 1\` and \`n - 1\` edges.

You are given a **0-indexed** integer array \`nums\` of length \`n\` where \`nums[i]\` represents the value of the \`i\`th node. You are also given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[j] = [a_j, b_j]\` indicates that there is an edge between nodes \`a_j\` and \`b_j\` in the tree.

Remove two distinct edges of the tree to form three connected components. For a pair of removed edges, the following steps are performed:
1. Get the XOR of all the values of the nodes for each of the three components respectively.
2. The **score** is the difference between the largest XOR value and the smallest XOR value amongst the three components.

Return the **minimum** score of any valid pair of edge removals on the given tree.`,
  constraints: [
    'n == nums.length',
    '3 <= n <= 1000',
    '1 <= nums[i] <= 10^8',
    'edges.length == n - 1',
    'edges[j].length == 2',
    '0 <= a_j, b_j <= n - 1',
    'a_j != b_j',
    'edges represents a valid tree',
  ],
  examples: [
    {
      input: 'nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]',
      output: '9',
      explanation: 'Remove edges (1,3) and (3,4). Components have XOR values: node 4 = 11, node 3 = 4, rest = 1^5^5 = 1. Score = max(11,4,1) - min(11,4,1) = 11 - 1 = 10. Another removal gives score 9.',
    },
    {
      input: 'nums = [5,5,2,4,4,2], edges = [[0,1],[1,2],[5,2],[4,3],[1,3]]',
      output: '0',
      explanation: 'Remove edges (1,2) and (1,3). Components: {0,1} XOR=0, {2,5} XOR=0, {3,4} XOR=0. Score = 0.',
    },
  ],
  hints: [
    'Level 1: Root the tree and compute the XOR of each subtree. When you remove an edge, you split a subtree from the rest. Removing two edges means you get the subtree XOR, the sub-subtree XOR (for the nested case), and the remainder.',
    'Level 2: Do DFS to compute subtree XOR for every node. For each pair of edges (u,v) where u is ancestor of v: component values are xor[v], xor[u]^xor[v], xorAll^xor[u]. For non-ancestor pairs: xor[u], xor[v], xorAll^xor[u]^xor[v].',
    'Level 3: Precompute in[]/out[] (DFS entry/exit times) to check ancestor relation: u is ancestor of v iff in[u] <= in[v] <= out[v] <= out[u]. O(n²) over all edge pairs is O(n²) which is fine for n≤1000.',
  ],
  functionName: 'minimumScore',
  params: ['nums', 'edges'],
  starterCode: {
    javascript: `function minimumScore(nums, edges) {

}`,
    typescript: `function minimumScore(nums: number[], edges: number[][]): number {

}`,
    python: `def minimumScore(nums, edges):
    pass`,
  },
  visibleTests: [
    { args: [[1, 5, 5, 4, 11], [[0, 1], [1, 2], [1, 3], [3, 4]]], expected: 9 },
    { args: [[5, 5, 2, 4, 4, 2], [[0, 1], [1, 2], [5, 2], [4, 3], [1, 3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [[0, 1], [1, 2]]], expected: 2 },
    { args: [[2, 2, 2], [[0, 1], [1, 2]]], expected: 0 },
    { args: [[4, 6, 1, 7, 2, 3], [[0, 1], [0, 2], [2, 3], [2, 4], [4, 5]]], expected: 2 },
  ],
};
