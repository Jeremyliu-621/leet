import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-connect-all-points',
  title: 'Minimum Cost to Connect All Points',
  difficulty: 'medium',
  tags: ['graph', 'arrays', 'union-find'],
  description: `You are given an array \`points\` representing integer coordinates of some points on a 2D-plane, where \`points[i] = [xi, yi]\`.

The cost of connecting two points \`[xi, yi]\` and \`[xj, yj]\` is the **Manhattan distance** between them: \`|xi - xj| + |yi - yj|\`.

Return the minimum cost to make all points connected.`,
  constraints: [
    '1 <= points.length <= 1000',
    '-10^6 <= xi, yi <= 10^6',
    'All pairs (xi, yi) are distinct',
  ],
  examples: [
    {
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'The minimum spanning tree costs 4+3+4+9=20.',
    },
    {
      input: 'points = [[3,12],[-2,5],[-4,1]]',
      output: '18',
      explanation: 'Connect (-4,1)↔(-2,5) (cost 6) then (-2,5)↔(3,12) (cost 12). Total 18.',
    },
  ],
  hints: [
    'This is a minimum spanning tree problem. Use Prim\'s algorithm: maintain a `minCost` array of the cheapest edge from any visited node to each unvisited node.',
    'Start from any node. Greedily pick the unvisited node with the smallest `minCost`, mark it visited, then update `minCost` for all remaining unvisited nodes based on the Manhattan distance to the newly added node.',
    'Prim\'s runs in O(n²) which is efficient for n ≤ 1000. Alternatively use Kruskal\'s with union-find after sorting all O(n²) edges.',
  ],
  functionName: 'minCostConnectPoints',
  params: ['points'],
  starterCode: {
    javascript: 'function minCostConnectPoints(points) {\n  \n}\n',
    typescript: 'function minCostConnectPoints(points: number[][]): number {\n  \n}\n',
    python: 'def minCostConnectPoints(points):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]], expected: 20 },
    { args: [[[3, 12], [-2, 5], [-4, 1]]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 0 },
    { args: [[[0, 0], [1, 1]]], expected: 2 },
    { args: [[[0, 0], [1, 0], [0, 1], [1, 1]]], expected: 3 },
    { args: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]], expected: 20 },
    { args: [[[-1000000, -1000000], [1000000, 1000000]]], expected: 4000000 },
    { args: [[[0, 0], [0, 5], [0, 10], [5, 0], [5, 5]]], expected: 20 },
  ],
};
