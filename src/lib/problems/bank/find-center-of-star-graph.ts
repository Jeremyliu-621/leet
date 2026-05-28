import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-center-of-star-graph',
  title: 'Find Center of Star Graph',
  difficulty: 'easy',
  tags: ['graph'],
  description: `There is an undirected **star** graph consisting of \`n\` nodes labeled from \`1\` to \`n\`. A star graph is a graph where there is one **center** node and exactly \`n - 1\` edges that connect the center node with every other node.

You are given a 2D integer array \`edges\` where each \`edges[i] = [ui, vi]\` indicates that there is an edge between the nodes \`ui\` and \`vi\`. Return the center of the given star graph.`,
  constraints: [
    '3 <= n <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '1 <= ui, vi <= n',
    'ui != vi',
    'The given edges represent a valid star graph.',
  ],
  examples: [
    {
      input: 'edges = [[1,2],[2,3],[4,2]]',
      output: '2',
      explanation: 'Node 2 is connected to every other node, so 2 is the center.',
    },
    {
      input: 'edges = [[1,2],[5,1],[1,3],[1,4]]',
      output: '1',
    },
  ],
  hints: [
    'The center appears in every edge.',
    'Just check the first two edges: the center is the common node between them.',
    `\`\`\`js
function findCenter(edges) {
  // center appears in both edges[0] and edges[1]
  return edges[0].find(v => edges[1].includes(v));
}\`\`\``,
  ],
  functionName: 'findCenter',
  params: ['edges'],
  starterCode: {
    javascript: `function findCenter(edges) {

}`,
    typescript: "function findCenter(edges: number[][]): number {\n\n}",

    python: `def findCenter(edges):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [4, 2]]], expected: 2 },
    { args: [[[1, 2], [5, 1], [1, 3], [1, 4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[3, 1], [2, 1]]], expected: 1 },
    { args: [[[5, 2], [5, 3], [5, 4], [5, 1]]], expected: 5 },
    { args: [[[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]]], expected: 7 },
  ],
};
