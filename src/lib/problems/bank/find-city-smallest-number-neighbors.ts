import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-city-smallest-number-neighbors',
  title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` cities numbered from \`0\` to \`n-1\`. Given the array \`edges\` where \`edges[i] = [from_i, to_i, weight_i]\` represents a bidirectional and weighted edge between cities \`from_i\` and \`to_i\`, and given the integer \`distanceThreshold\`.

Return the city with the smallest number of cities that are reachable through some path and whose distance is **at most** \`distanceThreshold\`. If there are multiple such cities, return the city with the **greatest** number.`,
  constraints: [
    '2 <= n <= 100',
    '1 <= edges.length <= n * (n - 1) / 2',
    'edges[i].length == 3',
    '0 <= from_i < to_i < n',
    '1 <= weight_i, distanceThreshold <= 10^4',
    'All pairs (from_i, to_i) are distinct.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4',
      output: '3',
      explanation: 'City 3 has 2 reachable cities within distance 4 (city 1 and city 2). City 0 also has 2, but city 3 has the greatest number.',
    },
    {
      input: 'n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2',
      output: '0',
      explanation: 'City 0 has 1 reachable city within distance 2. No other city has fewer.',
    },
  ],
  hints: [
    'Level 1: Use Floyd-Warshall to compute shortest paths between all pairs of cities. Then for each city, count how many cities are within distanceThreshold.',
    'Level 2: Initialize dist[i][j] = weight of edge (i,j) or Infinity. dist[i][i] = 0. Run three nested loops for Floyd-Warshall. Then iterate cities to find the one with fewest reachable neighbors (prefer greatest index on tie).',
    'Level 3: Build dist matrix, run Floyd-Warshall (k,i,j loops), then for each city count neighbors ≤ threshold; return city with min count (largest index on tie).',
  ],
  functionName: 'findTheCity',
  params: ['n', 'edges', 'distanceThreshold'],
  starterCode: {
    javascript: 'function findTheCity(n, edges, distanceThreshold) {\n  // your code here\n}\n',
    python: 'def findTheCity(n, edges, distanceThreshold):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], 4], expected: 3 },
    { args: [5, [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [2, [[0, 1, 1]], 1], expected: 1 },
    { args: [3, [[0, 1, 1], [1, 2, 1]], 1], expected: 2 },
    { args: [3, [[0, 1, 5], [1, 2, 5]], 4], expected: 2 },
    { args: [4, [[0, 1, 1], [0, 2, 1], [0, 3, 1]], 1], expected: 3 },
  ],
};
