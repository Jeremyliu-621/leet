import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-paths-from-source-lead-to-destination',
  title: 'All Paths from Source Lead to Destination',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given the edges of a directed graph where \`edges[i] = [a_i, b_i]\` means there is an edge between node \`a_i\` and node \`b_i\`, and two nodes \`source\` and \`destination\` of this graph, determine whether or not all paths starting from \`source\` eventually end at \`destination\`, that is:

- At least one path exists from the \`source\` node to the \`destination\` node.
- If a path exists from the \`source\` to some terminal node, it must be the \`destination\`.
- All non-terminal nodes have at least one outgoing edge.`,
  constraints: [
    '`1 <= n <= 10^4`',
    '`0 <= edges.length <= 10^4`',
    '`edges.length == 2`',
    '`0 <= a_i, b_i <= n - 1`',
    '`0 <= source <= n - 1`',
    '`0 <= destination <= n - 1`',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2',
      output: 'false',
      explanation: 'Path 0→1 is a dead end that doesn\'t reach destination.',
    },
    {
      input: 'n = 4, edges = [[1,2],[1,3],[2,3]], source = 1, destination = 3',
      output: 'true',
      explanation: 'All paths lead to node 3: 1→2→3 and 1→3.',
    },
    {
      input: 'n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3',
      output: 'false',
      explanation: 'Cycle between nodes 1 and 2 means some paths never reach destination.',
    },
  ],
  hints: [
    'The destination must have no outgoing edges (it\'s the only valid terminal). Check this first.',
    'DFS from source with cycle detection. If you reach a terminal node that\'s not destination → false. If you find a back edge (cycle) → false.',
    'Use 3-color DFS: 0=unvisited, 1=visiting (in current DFS path), 2=fully visited+valid. Return false for any node colored 1 (cycle detected).',
  ],
  functionName: 'leadsToDestination',
  params: ['n', 'edges', 'source', 'destination'],
  starterCode: {
    javascript: `function leadsToDestination(n, edges, source, destination) {

}`,
    python: `def leadsToDestination(n, edges, source, destination):
    pass`,
  },
  visibleTests: [
    { args: [3, [[0,1],[0,2]], 0, 2], expected: false },
    { args: [4, [[1,2],[1,3],[2,3]], 1, 3], expected: true },
    { args: [4, [[0,1],[0,3],[1,2],[2,1]], 0, 3], expected: false },
  ],
  hiddenTests: [
    { args: [2, [[0,1]], 0, 1], expected: true },
    { args: [3, [[0,1],[1,2]], 0, 2], expected: true },
    { args: [4, [[0,1],[0,2],[1,3],[2,3]], 0, 3], expected: true },
    { args: [3, [[0,1],[1,1],[1,2]], 0, 2], expected: false },
  ],
};
