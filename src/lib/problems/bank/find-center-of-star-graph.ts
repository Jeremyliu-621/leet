import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-center-of-star-graph',
  title: 'Find Center of Star Graph',
  difficulty: 'easy',
  tags: ['graph'],
  description: `There is an undirected **star** graph consisting of \`n\` nodes labeled from \`1\` to \`n\`. A star graph is a graph where there is one **center** node and exactly \`n - 1\` edges that connect the center node with every other node.

You are given a 2D integer array \`edges\` where each \`edges[i] = [u_i, v_i]\` indicates that there is an edge between the nodes \`u_i\` and \`v_i\`. Return the center of the given star graph.`,
  constraints: [
    '3 <= n <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '1 <= u_i, v_i <= n',
    'u_i != v_i',
    'The given edges represent a valid star graph.',
  ],
  examples: [
    {
      input: 'edges = [[1,2],[2,3],[4,2]]',
      output: '2',
      explanation: 'Node 2 appears in all edges — it is the center.',
    },
    {
      input: 'edges = [[1,2],[5,1],[1,3],[1,4]]',
      output: '1',
      explanation: 'Node 1 appears in all edges — it is the center.',
    },
  ],
  hints: [
    'Level 1: The center node appears in every edge. It must appear in both the first and second edge.',
    'Level 2: Check if edges[0][0] appears in edges[1]. If yes, it is the center. Otherwise edges[0][1] is.',
    'Level 3: `const [a,b]=edges[0],[c,d]=edges[1]; return a===c||a===d?a:b;`',
  ],
  functionName: 'findCenter',
  params: ['edges'],
  starterCode: {
    javascript: 'function findCenter(edges) {\n  // your code here\n}\n',
    typescript: 'function findCenter(edges: number[][]): number {\n  // your code here\n}\n',
    python: 'def findCenter(edges):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1,2],[2,3],[4,2]]],
      expected: 2,
    },
    {
      args: [[[1,2],[5,1],[1,3],[1,4]]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[[2,1],[3,1]]],
      expected: 1,
    },
    {
      args: [[[3,4],[4,5],[4,1],[4,2]]],
      expected: 4,
    },
    {
      args: [[[5,2],[5,3],[5,1]]],
      expected: 5,
    },
    {
      args: [[[1,3],[2,3]]],
      expected: 3,
    },
  ],
};
