import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unreachable-pairs-of-nodes',
  title: 'Count Unreachable Pairs of Nodes in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an integer \`n\`. There is an **undirected graph** with \`n\` nodes, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [ai, bi]\` denotes that there exists an **undirected** edge connecting nodes \`ai\` and \`bi\`.

Return the number of **pairs of different nodes** that are **unreachable** from each other.

**Approach:** Find all connected components using BFS/DFS or Union-Find. If component sizes are s₁, s₂, …, sₖ, the answer is the sum of every sᵢ × (total − sᵢ already counted), or equivalently: \`total*(total-1)/2 - Σ(sᵢ*(sᵢ-1)/2)\`.`,
  constraints: [
    '1 <= n <= 100000',
    '0 <= edges.length <= 2 * 100000',
    'edges[i].length == 2',
    '0 <= ai, bi < n',
    'ai != bi',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[0,2],[1,2]]',
      output: '0',
      explanation: 'All three nodes are in the same component — no unreachable pairs.',
    },
    {
      input: 'n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]',
      output: '14',
      explanation: 'Component 1 has nodes {0,2,4,5} (size 4), component 2 has {1,6} (size 2), component 3 has {3} (size 1). Unreachable pairs: 4×2 + 4×1 + 2×1 = 14.',
    },
  ],
  hints: [
    'Find all connected components (BFS, DFS, or Union-Find). Record the size of each component.',
    'For each pair of components, every node in one is unreachable from every node in the other. Use: `answer = 0; remaining = n; for each component size s: answer += s × remaining; remaining -= s`.',
    'Equivalently: total pairs − reachable pairs = `n*(n-1)/2 − Σ(s*(s-1)/2)` summed over all component sizes `s`.',
  ],
  functionName: 'countPairs',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countPairs(n, edges) {

}`,
    python: `def countPairs(n: int, edges: list) -> int:
    pass
`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: 0 },
    { args: [7, [[0, 2], [0, 5], [2, 4], [1, 6], [5, 4]]], expected: 14 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 0 },
    { args: [2, []], expected: 1 },
    { args: [4, [[0, 1], [2, 3]]], expected: 4 },
    { args: [5, []], expected: 10 },
    { args: [6, [[0, 1], [1, 2], [3, 4]]], expected: 11 },
  ],
};
