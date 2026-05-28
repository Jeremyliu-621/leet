import type { Problem } from '../types';

export const problem: Problem = {
  id: 'node-with-highest-edge-score',
  title: 'Node With Highest Edge Score',
  difficulty: 'easy',
  tags: ['graph', 'hash-map'],
  description: `You are given a directed graph with \`n\` nodes labeled from \`0\` to \`n - 1\`, where each node has **exactly one** outgoing edge.

The graph is represented with a given **0-indexed** integer array \`edges\` of length \`n\`, where \`edges[i]\` indicates that there is a **directed** edge from node \`i\` to node \`edges[i]\`.

The **edge score** of a node \`i\` is defined as the sum of the **labels** of all the nodes that have an edge pointing to \`i\`.

Return *the node with the **highest** edge score. If multiple nodes have the same **edge score**, return the node with the **smallest** index.*`,
  constraints: [
    'n == edges.length',
    '2 <= n <= 10^5',
    '0 <= edges[i] < n',
    'edges[i] != i',
  ],
  examples: [
    {
      input: 'edges = [1,0,0,0,0,7,7,5]',
      output: '7',
      explanation: 'Node 7 receives edges from nodes 5 and 6, giving score 5+6=11. Node 0 receives edges from nodes 1,2,3,4 with score 1+2+3+4=10. Node 7 has the highest score.',
    },
    {
      input: 'edges = [2,0,0,2]',
      output: '0',
      explanation: 'Node 0 receives edges from nodes 1 and 2, score=1+2=3. Node 2 receives edges from nodes 0 and 3, score=0+3=3. Both have score 3; return the smaller index 0.',
    },
  ],
  hints: [
    'Use an array (or map) to accumulate the edge score for each destination node.',
    'For each node i, add i to scores[edges[i]].',
    'Return the index with the maximum score (smallest index on tie).',
  ],
  functionName: 'edgeScore',
  params: ['edges'],
  starterCode: {
    javascript: 'function edgeScore(edges) {\n\n}',
    python: 'def edgeScore(edges):\n    pass',
  },
  visibleTests: [
    { args: [[1, 0, 0, 0, 0, 7, 7, 5]], expected: 7 },
    { args: [[2, 0, 0, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 0 },
    { args: [[1, 2, 0]], expected: 0 },
    { args: [[1, 0, 0, 0]], expected: 0 },
    { args: [[1, 0, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 0]], expected: 0 },
  ],
};
