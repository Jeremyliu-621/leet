import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unreachable-pairs-of-nodes-in-an-undirected-graph',
  title: 'Count Unreachable Pairs of Nodes in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `You are given an integer \`n\`. There is an **undirected** graph with \`n\` nodes, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an **undirected** edge connecting nodes \`a_i\` and \`b_i\`.

Return the number of **pairs** of different nodes that are **unreachable** from each other.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`0 <= edges.length <= 2 * 10^5`',
    '`edges[i].length == 2`',
    '`0 <= a_i, b_i < n`',
    '`a_i != b_i`',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[0,2],[1,2]]',
      output: '0',
      explanation: 'All nodes are connected.',
    },
    {
      input: 'n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]',
      output: '14',
      explanation: 'Components: {0,2,4,5} (size 4), {1,6} (size 2), {3} (size 1). Unreachable pairs: 4×2 + 4×1 + 2×1 = 8 + 4 + 2 = 14.',
    },
  ],
  hints: [
    'Find connected components using Union-Find or BFS/DFS. For each component, record its size.',
    'For each pair of components with sizes s1 and s2, all s1 × s2 node pairs across them are unreachable from each other.',
    'Efficiently compute the sum: sort/iterate component sizes cumulatively — for each new component of size s, add cumulative_sum × s, then increment cumulative_sum by s.',
  ],
  functionName: 'countPairs',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countPairs(n, edges) {

}`,
    typescript: 'function countPairs(n: number, edges: number[][]): number {\n\n}',
    python: `def countPairs(n, edges):
    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: 0 },
    { args: [7, [[0, 2], [0, 5], [2, 4], [1, 6], [5, 4]]], expected: 14 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 0 },
    { args: [2, []], expected: 1 },
    { args: [4, [[0, 1], [2, 3]]], expected: 4 },
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: 0 },
    { args: [5, [[0, 1]]], expected: 9 },
  ],
};
