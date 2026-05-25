import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-visiting-all-nodes',
  title: 'Shortest Path Visiting All Nodes',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming'],
  description: `You have an undirected, connected graph of \`n\` nodes labeled from \`0\` to \`n-1\`. You are given an array \`graph\` where \`graph[i]\` is a list of all the nodes connected with node \`i\` by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.`,
  constraints: [
    '`n == graph.length`',
    '`1 <= n <= 12`',
    '`0 <= graph[i].length < n`',
    '`graph[i]` does not contain `i`',
    'If `graph[a]` contains `b`, then `graph[b]` contains `a`',
    'The input graph is always connected',
  ],
  examples: [
    {
      input: 'graph = [[1,2,3],[0],[0],[0]]',
      output: '4',
      explanation: 'One possible path: [1,0,2,0,3]',
    },
    {
      input: 'graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]',
      output: '4',
    },
  ],
  hints: [
    'Use BFS with state (current_node, visited_bitmask). Start from all nodes simultaneously with their bit set.',
    'State space: n nodes × 2^n masks. The answer is the shortest path to any state with all bits set.',
    'BFS guarantees shortest path. Use a 2D visited array to avoid revisiting (node, mask) states.',
  ],
  functionName: 'shortestPathLength',
  params: ['graph'],
  starterCode: {
    javascript: `function shortestPathLength(graph) {

}`,
    python: `def shortestPathLength(graph):
    pass`,
  },
  visibleTests: [
    { args: [[[1,2,3],[0],[0],[0]]], expected: 4 },
    { args: [[[1],[0,2,4],[1,3,4],[2],[1,2]]], expected: 4 },
    { args: [[[1,2],[0],[0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1],[0]]], expected: 1 },
    { args: [[[1],[0,2],[1]]], expected: 2 },
    { args: [[[1,2,3],[0,2],[0,1,3],[0,2]]], expected: 3 },
    { args: [[[0]]], expected: 0 },
  ],
};
