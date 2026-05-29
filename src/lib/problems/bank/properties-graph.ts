import type { Problem } from '../types';

export const problem: Problem = {
  id: 'properties-graph',
  title: 'Properties Graph',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `You are given a 2D integer array \`properties\` where \`properties[i]\` is an array of distinct integers representing the properties of the \`i\`-th node in a graph.

Two nodes \`i\` and \`j\` are connected by an **undirected edge** if they share **at least one common property value** in \`properties[i]\` and \`properties[j]\`.

Return the **number of connected components** in this graph.`,
  constraints: [
    '`1 <= properties.length <= 100`',
    '`1 <= properties[i].length <= 100`',
    '`1 <= properties[i][j] <= 100`',
    'All values within each `properties[i]` are distinct.',
  ],
  examples: [
    {
      input: 'properties = [[1,2],[1,3]]',
      output: '1',
      explanation: 'Nodes 0 and 1 share property 1, so they are connected — one component.',
    },
    {
      input: 'properties = [[1,2],[3,4]]',
      output: '2',
      explanation: 'No shared properties between nodes 0 and 1 — two separate components.',
    },
    {
      input: 'properties = [[1,2],[2,3],[3,4]]',
      output: '1',
      explanation: 'Node 0 connects to node 1 (share 2), node 1 connects to node 2 (share 3). All in one component.',
    },
  ],
  hints: [
    'Build an adjacency or union-find structure. Two nodes should be in the same component if they share at least one property value.',
    'Use Union-Find: for each property value, collect all nodes that have it. Union those nodes together — any two nodes sharing a value belong to the same component.',
    'After processing all property values, count the number of distinct roots in the Union-Find structure to get the answer.',
  ],
  functionName: 'numberOfComponents',
  params: ['properties'],
  starterCode: {
    javascript: `function numberOfComponents(properties) {

}`,
    typescript: `function numberOfComponents(properties: number[][]): number {

}`,
    python: `def numberOfComponents(properties):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [1, 3]]], expected: 1 },
    { args: [[[1, 2], [3, 4]]], expected: 2 },
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1], [2], [3]]], expected: 3 },
    { args: [[[1, 2, 3], [4, 5, 6], [3, 4]]], expected: 1 },
    { args: [[[1, 2], [3, 4], [5, 6], [7, 8]]], expected: 4 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 3 },
    { args: [[[10, 20], [20, 30], [40, 50], [30, 40]]], expected: 1 },
    { args: [[[1, 2], [3, 4], [2, 3]]], expected: 1 },
    { args: [[[100]]], expected: 1 },
  ],
};
