import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-path-between-two-cities',
  title: 'Minimum Score of a Path Between Two Cities',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a positive integer \`n\` representing n cities numbered from \`1\` to \`n\`. You are also given a 2D integer array \`roads\` where \`roads[i] = [ai, bi, distancei]\` indicates a bidirectional road between cities \`ai\` and \`bi\` with distance \`distancei\`.

The **score** of a path between cities \`1\` and \`n\` is the **minimum distance** of any road on that path. You can visit cities and roads **multiple times**.

Return the **minimum score** of a path from city \`1\` to city \`n\`.`,
  constraints: [
    '2 <= n <= 10^5',
    '1 <= roads.length <= 10^5',
    'roads[i].length == 3',
    '1 <= ai, bi <= n',
    'ai != bi',
    '1 <= distancei <= 10^4',
    'There is at least one path between 1 and n.',
  ],
  examples: [
    {
      input: 'n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]',
      output: '5',
      explanation: 'The path 1→2→4 has minimum edge 5. No path has a smaller minimum.',
    },
    {
      input: 'n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]',
      output: '2',
      explanation: 'Path 1→2 is reachable (even though 2 is not directly connected to 4, cycles are allowed). The edge (1,2) with weight 2 is the minimum reachable.',
    },
  ],
  hints: [
    'You can use cycles in the path. This means the minimum score is the minimum edge weight in the connected component containing both city 1 and city n.',
    'BFS/DFS from city 1 to find all reachable cities. Track the minimum edge weight encountered.',
    'Since you can revisit edges and nodes, the minimum edge weight in the entire connected component of city 1 is the answer.',
  ],
  functionName: 'minScore',
  params: ['n', 'roads'],
  starterCode: {
    javascript: `function minScore(n, roads) {

}`,
    typescript: "function minScore(n: number, roads: number[][]): number {\n\n}",

    python: `def minScore(n, roads):
    pass
`,
  },
  visibleTests: [
    { args: [4, [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]], expected: 5 },
    { args: [4, [[1,2,2],[1,3,4],[3,4,7]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [2, [[1,2,5]]], expected: 5 },
    { args: [3, [[1,2,3],[2,3,1]]], expected: 1 },
    { args: [5, [[1,2,3],[2,3,2],[3,4,1],[4,5,4]]], expected: 1 },
    { args: [3, [[1,2,10],[2,3,1],[1,3,5]]], expected: 1 },
    { args: [4, [[1,4,1],[1,2,4],[2,4,6],[3,4,2],[1,3,3]]], expected: 1 },
    { args: [2, [[1,2,100]]], expected: 100 },
  ],
};
