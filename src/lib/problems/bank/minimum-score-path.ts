import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-path',
  title: 'Minimum Score of a Path Between Two Cities',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a positive integer \`n\` representing \`n\` cities numbered from \`1\` to \`n\`. You are also given a 2D array \`roads\` where \`roads[i] = [a_i, b_i, distance_i]\` indicates that there is a **bidirectional** road between cities \`a_i\` and \`b_i\` with a distance equal to \`distance_i\`.

The **score** of a path between two cities is defined as the **minimum** distance of a road in this path.

Return the **minimum** possible score of a path between cities \`1\` and \`n\`.

**Note:** A path may contain the same road/city multiple times. It is guaranteed that there is at least one path between cities 1 and n.`,
  constraints: [
    '2 <= n <= 10^5',
    '1 <= roads.length <= 10^5',
    'roads[i].length == 3',
    '1 <= ai, bi <= n',
    'ai != bi',
    '1 <= distancei <= 10^4',
    'There are no repeated edges',
    'There is at least one path between 1 and n',
  ],
  examples: [
    { input: 'n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]', output: '5', explanation: 'The path 1→2→4 has edge weights 9 and 5, min=5.' },
    { input: 'n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]', output: '2' },
  ],
  hints: [
    'Since paths can repeat edges, the answer is the minimum edge weight among all edges in the connected component containing both node 1 and node n.',
    'Use BFS/DFS from node 1 to find all reachable nodes. The answer is the minimum edge weight of any edge incident to these nodes.',
    'Since we can traverse edges multiple times, we just need the minimum edge weight in the same connected component as nodes 1 and n.',
  ],
  functionName: 'minScore',
  params: ['n', 'roads'],
  starterCode: {
    javascript: 'function minScore(n, roads) {\n\n}\n',
    python: 'def minScore(n, roads):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]], expected: 5 },
    { args: [4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [2, [[1, 2, 7]]], expected: 7 },
    { args: [5, [[1, 2, 3], [2, 3, 1], [3, 4, 2], [4, 5, 4], [1, 5, 10]]], expected: 1 },
    { args: [3, [[1, 3, 5], [1, 2, 8], [2, 3, 3]]], expected: 3 },
  ],
};
