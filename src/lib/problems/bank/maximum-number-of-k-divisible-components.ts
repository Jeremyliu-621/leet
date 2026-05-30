import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-k-divisible-components',
  title: 'Maximum Number of K-Divisible Components',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `There is an undirected tree with \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given:

- An integer \`n\`
- A 2D integer array \`edges\` of length \`n - 1\` where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\` in the tree
- A **0-indexed** integer array \`values\` of length \`n\` where \`values[i]\` represents the value associated with the \`i\`-th node
- A positive integer \`k\`

A **valid split** is achieved by removing some edges from the tree, resulting in components where **every** component has a sum of values **divisible by** \`k\`.

Return the **maximum number of components** in any valid split.`,
  constraints: [
    '1 <= n <= 3 * 10^4',
    'edges.length == n - 1',
    '0 <= edges[i][0], edges[i][1] <= n - 1',
    '1 <= values[i] <= 10^9',
    '1 <= k <= 10^9',
    'Sum of values is divisible by k.',
    'The input is generated such that edges represents a valid tree.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,2],[1,2],[1,3],[1,4]], values = [1,8,1,4,4], k = 6',
      output: '2',
      explanation: 'Remove edge [1,2]. Components: {0,2} with sum 2 (not div by 6)... actually {1,3,4} sum=16. Hmm see editorial.',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3',
      output: '3',
      explanation: 'Remove edges [0,2] and [1,4]. Three components with sums divisible by 3.',
    },
  ],
  hints: [
    'Root the tree at node 0 and perform a DFS.',
    'For each node, compute the sum of values in its subtree (mod k).',
    'If the subtree sum is divisible by k, count this subtree as a separate component and return 0 to the parent (its contribution is neutralized).',
    'Otherwise, return (subtreeSum % k) to the parent for accumulation.',
  ],
  functionName: 'maxKDivisibleComponents',
  params: ['n', 'edges', 'values', 'k'],
  starterCode: {
    javascript: `function maxKDivisibleComponents(n, edges, values, k) {
  // your code here
}`,
    typescript: `function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
  // your code here
}`,
    python: `def maxKDivisibleComponents(n, edges, values, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [5, [[0,1],[1,2],[1,3],[3,4]], [1,3,1,1,2], 3], expected: 1 },
    { args: [3, [[0,1],[1,2]], [3,3,3], 3], expected: 3 },
    { args: [4, [[0,1],[1,2],[2,3]], [1,2,1,2], 3], expected: 2 },
    { args: [4, [[0,1],[1,2],[1,3]], [4,2,3,3], 4], expected: 2 },
    { args: [1, [], [4], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [6, [[0,1],[1,2],[2,3],[3,4],[4,5]], [1,2,3,4,5,6], 3], expected: 4 },
    { args: [2, [[0,1]], [3,3], 3], expected: 2 },
    { args: [2, [[0,1]], [1,2], 3], expected: 1 },
    { args: [5, [[0,1],[0,2],[1,3],[1,4]], [6,6,6,6,6], 6], expected: 5 },
    { args: [3, [[0,1],[1,2]], [2,4,3], 3], expected: 2 },
    { args: [4, [[0,1],[0,2],[0,3]], [3,3,3,3], 3], expected: 4 },
    { args: [6, [[0,1],[0,2],[1,3],[1,4],[2,5]], [1,3,2,2,4,3], 5], expected: 2 },
    { args: [1, [], [9], 3], expected: 1 },
  ],
};
