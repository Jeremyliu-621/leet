import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-city-with-smallest-number-of-neighbors-at-a-threshold-distance',
  title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `There are \`n\` cities numbered from \`0\` to \`n - 1\`. Given the array \`edges\` where \`edges[i] = [fromi, toi, weighti]\` represents a bidirectional and weighted edge between cities \`fromi\` and \`toi\`, and given the integer \`distanceThreshold\`.

Return the city with the smallest number of cities that are reachable through some path and whose distance is **at most** \`distanceThreshold\`. If there are multiple such cities, return the city with the **greatest** number.

A city \`a\` can be reached from city \`b\` if there exists a path with total distance ≤ \`distanceThreshold\`.`,
  constraints: [
    '2 <= n <= 100',
    '1 <= edges.length <= n * (n - 1) / 2',
    'edges[i].length == 3',
    '0 <= fromi < toi < n',
    '1 <= weighti, distanceThreshold <= 10^4',
    'All pairs (fromi, toi) are distinct.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4',
      output: '3',
      explanation: 'City 3 can reach cities {1,2} within distance 4. City 0 can reach {1,2,3}. City 3 has the fewest reachable (2) and is the greatest index among ties.',
    },
    {
      input: 'n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2',
      output: '0',
      explanation: 'Only city 0 can reach exactly 1 city (city 1) within distance 2.',
    },
  ],
  hints: [
    'Use Floyd-Warshall algorithm to compute shortest distances between all pairs of cities.',
    'Initialize dist[i][j] = Infinity for i != j, dist[i][i] = 0.',
    'For each edge (u, v, w), set dist[u][v] = dist[v][u] = min(dist[u][v], w).',
    'Run Floyd-Warshall: for k in 0..n-1, for i,j: dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j]).',
    'For each city, count reachable cities (dist[i][j] <= threshold, j != i). Return city with min count, breaking ties by largest index.',
  ],
  functionName: 'findTheCity',
  params: ['n', 'edges', 'distanceThreshold'],
  starterCode: {
    javascript: `function findTheCity(n, edges, distanceThreshold) {

}`,
    python: `def findTheCity(n, edges, distanceThreshold):
    pass`,
  },
  visibleTests: [
    { args: [4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4], expected: 3 },
    { args: [5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [2, [[0,1,1]], 1], expected: 1 },
    { args: [3, [[0,1,1],[1,2,1],[0,2,10]], 2], expected: 2 },
    { args: [4, [[0,1,1],[0,2,1],[0,3,1],[1,2,1],[1,3,1],[2,3,1]], 1], expected: 3 },
  ],
};
