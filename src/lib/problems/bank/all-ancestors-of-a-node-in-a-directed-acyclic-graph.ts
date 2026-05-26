import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-ancestors-of-a-node-in-a-directed-acyclic-graph',
  title: 'All Ancestors of a Node in a Directed Acyclic Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a positive integer \`n\` representing the number of nodes of a **Directed Acyclic Graph** (DAG). The nodes are numbered from \`0\` to \`n - 1\` (**inclusive**).

You are also given a 2D integer array \`edges\`, where \`edges[i] = [fromi, toi]\` denotes that there is a **unidirectional** edge from \`fromi\` to \`toi\` in the graph.

Return a list \`answer\`, where \`answer[i]\` is the **list of ancestors** of the \`i\`th node, **sorted in ascending order**.

A node \`u\` is an **ancestor** of another node \`v\` if \`u\` can reach \`v\` via a set of edges.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= edges.length <= min(2000, n * (n - 1) / 2)',
    'edges[i].length == 2',
    '0 <= fromi, toi <= n - 1',
    'fromi != toi',
    'There are no duplicate edges.',
    'The graph is a DAG.',
  ],
  examples: [
    {
      input: 'n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]',
      output: '[[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]',
    },
    {
      input: 'n = 5, edges = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]',
      output: '[[],[0],[0,1],[0,1,2],[0,1,2,3]]',
    },
  ],
  hints: [
    'Build a reverse graph (child → parent edges). For each node, DFS/BFS the reverse graph to collect all reachable nodes (ancestors).',
    'Alternatively, process nodes in topological order. For each node, its ancestors = union of ancestors of all its parents, plus the parents themselves.',
    'Use a sorted set per node for dedup and ordering, or sort at the end.',
  ],
  functionName: 'getAncestors',
  params: ['n', 'edges'],
  starterCode: {
    javascript: 'function getAncestors(n, edges) {\n  \n}\n',
    python: 'def getAncestors(n, edges):\n    pass\n',
  },
  visibleTests: [
    {
      args: [8, [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]],
      expected: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]],
    },
    {
      args: [5, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]],
      expected: [[],[0],[0,1],[0,1,2],[0,1,2,3]],
    },
  ],
  hiddenTests: [
    { args: [3, []], expected: [[], [], []] },
    { args: [3, [[0,1],[1,2]]], expected: [[], [0], [0,1]] },
    { args: [4, [[0,2],[0,3],[1,2]]], expected: [[], [], [0,1], [0]] },
  ],
};
