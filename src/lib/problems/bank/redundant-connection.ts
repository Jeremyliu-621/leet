import type { Problem } from '../types';

export const problem: Problem = {
  id: 'redundant-connection',
  title: 'Redundant Connection',
  difficulty: 'medium',
  tags: ['graph'],
  description: `In this problem, a tree is an **undirected graph** that is connected and has no cycles.

You are given a graph that started as a tree with \`n\` nodes labeled \`1\` to \`n\`, with one additional edge added. The added edge has two different vertices chosen from \`1\` to \`n\` and was not an edge that already existed.

The graph is represented as an array \`edges\` where \`edges[i] = [ai, bi]\` indicates there is an edge between nodes \`ai\` and \`bi\`.

Return an edge that can be removed so that the resulting graph is a tree. If there are multiple answers, return the edge that occurs **last** in the input.`,
  constraints: [
    'n == edges.length',
    '3 <= n <= 1000',
    '1 <= ai < bi <= n',
    'ai != bi',
    'There are no repeated edges',
    'The given graph is connected',
  ],
  examples: [
    {
      input: 'edges = [[1,2],[1,3],[2,3]]',
      output: '[2,3]',
      explanation: 'Edges [1,2] and [1,3] form a tree. Adding [2,3] creates a cycle.',
    },
    {
      input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]',
      output: '[1,4]',
      explanation: 'The edge [1,4] is the last edge that completes a cycle.',
    },
  ],
  hints: [
    'Use Union-Find (Disjoint Set Union). Process edges in order. For each edge, if both endpoints are already in the same component, it\'s redundant.',
    'Union-Find: maintain a `parent` array. `find(x)` returns the root of x\'s component (with path compression). `union(x, y)` merges the two components.',
    'Traverse the edges in order. For each `[u, v]`, call `find(u)` and `find(v)`. If they\'re equal, return `[u, v]` (this edge creates a cycle). Otherwise, union them.',
  ],
  functionName: 'findRedundantConnection',
  params: ['edges'],
  starterCode: {
    javascript: `function findRedundantConnection(edges) {
  // Return the edge that creates a cycle
}`,
    typescript: "function findRedundantConnection(edges: number[][]): number[] {\n  // Return the edge that creates a cycle\n}",

    python: `def findRedundantConnection(edges):
    # Return the edge that creates a cycle
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [1, 3], [2, 3]]], expected: [2, 3] },
    { args: [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]], expected: [1, 4] },
    { args: [[[1, 2], [2, 3], [1, 3]]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[[1, 2], [1, 3], [1, 4], [3, 4]]], expected: [3, 4] },
    { args: [[[1, 2], [2, 3], [3, 1]]], expected: [3, 1] },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5], [3, 5]]], expected: [3, 5] },
    { args: [[[2, 3], [1, 2], [1, 3]]], expected: [1, 3] },
  ],
};
