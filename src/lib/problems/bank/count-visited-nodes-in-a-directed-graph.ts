import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-visited-nodes-in-a-directed-graph',
  title: 'Count Visited Nodes in a Directed Graph',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming'],
  description: `There is a **directed** graph with \`n\` nodes labeled from \`0\` to \`n - 1\`, where each node has **exactly one** outgoing edge.

The graph is represented with a given **0-indexed** integer array \`edges\` of length \`n\`, where \`edges[i]\` indicates that there is an edge from node \`i\` to node \`edges[i]\`.

Return an integer array \`answer\` of length \`n\` where \`answer[i]\` is the number of nodes visited when starting from node \`i\` until you reach a node you have already visited.`,
  constraints: [
    '`n == edges.length`',
    '`2 <= n <= 10^5`',
    '`0 <= edges[i] <= n - 1`',
    '`edges[i] != i`',
  ],
  examples: [
    {
      input: 'edges = [1,2,0,0]',
      output: '[3,3,3,4]',
      explanation: 'Nodes 0→1→2→0 form a cycle of length 3. Node 3→0→1→2→0 visits 4 nodes before revisiting.',
    },
    {
      input: 'edges = [1,2,3,4,0]',
      output: '[5,5,5,5,5]',
      explanation: 'All 5 nodes form a single cycle. Each node visits all 5.',
    },
    {
      input: 'edges = [2,0,0]',
      output: '[2,3,2]',
      explanation: 'Node 0→2→0: 2 nodes. Node 1→0→2→0: 3 nodes. Node 2→0→2: 2 nodes.',
    },
  ],
  hints: [
    'Each weakly connected component contains exactly one cycle (since each node has exactly one outgoing edge). Nodes on the cycle have answer = cycle length. Nodes leading into the cycle have answer = (distance to cycle) + cycle length.',
    'To find cycles: use a "coloring" DFS/BFS. During traversal, once you hit a node already seen in the current path, you have identified the cycle.',
    'After finding cycle lengths, do a second pass: for each non-cycle node, answer[i] = 1 + answer[edges[i]]. Process in reverse topological order (leaves first) using the cycle nodes as base cases.',
  ],
  functionName: 'countVisitedNodes',
  params: ['edges'],
  starterCode: {
    javascript: `function countVisitedNodes(edges) {

}`,
    typescript: 'function countVisitedNodes(edges: number[]): number[] {\n\n}',
    python: `def countVisitedNodes(edges):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 0, 0]], expected: [3, 3, 3, 4] },
    { args: [[1, 2, 3, 4, 0]], expected: [5, 5, 5, 5, 5] },
    { args: [[2, 0, 0]], expected: [2, 3, 2] },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: [2, 2] },
    { args: [[1, 2, 1]], expected: [3, 2, 2] },
    { args: [[2, 3, 1, 0]], expected: [4, 4, 4, 4] },
    { args: [[1, 2, 3, 1]], expected: [4, 3, 3, 3] },
    { args: [[2, 0, 1]], expected: [3, 3, 3] },
    { args: [[1, 0, 3, 2]], expected: [2, 2, 2, 2] },
    { args: [[1, 2, 0, 4, 3]], expected: [3, 3, 3, 2, 2] },
    { args: [[1, 2, 3, 0, 5, 4]], expected: [4, 4, 4, 4, 2, 2] },
  ],
};
