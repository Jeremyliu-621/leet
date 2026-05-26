import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frog-position-after-t-seconds',
  title: 'Frog Position After T Seconds',
  difficulty: 'hard',
  tags: ['graph', 'tree', 'backtracking'],
  description: `Given an undirected tree with \`n\` nodes labeled \`1\` to \`n\`, an array \`edges\`, an integer \`t\`, and an integer \`target\`, a frog starts at node \`1\`.

Every second, the frog randomly jumps to one of the **unvisited** neighbors of its current node with **equal probability**. If the frog has no unvisited neighbors, it **stays** at the current node.

Return the probability that the frog is on node \`target\` after exactly \`t\` seconds.

Your answer will be accepted if it differs from the correct answer by at most **10^-5**.`,
  constraints: [
    '1 <= n <= 100',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '1 <= edges[i][0], edges[i][1] <= n',
    '1 <= t <= 50',
    '1 <= target <= n',
    'Each pair (edges[i][0], edges[i][1]) represents a unique edge',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4',
      output: '0.16667',
      explanation:
        'At t=1, frog moves from 1 to 2 with probability 1/3. At t=2, from 2 to 4 with probability 1/2. Total: (1/3)*(1/2) ≈ 0.16667.',
    },
    {
      input: 'n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7',
      output: '0.33333',
      explanation: 'At t=1, frog moves from 1 to 7 with probability 1/3.',
    },
  ],
  hints: [
    'Use DFS from node 1, tracking the current node, its parent (to avoid revisiting), the elapsed time, and the current probability.',
    'At each node, count the number of unvisited neighbors (i.e., all neighbors except parent). The frog jumps to each with probability 1 / (count of unvisited neighbors).',
    'If the current node equals target: the frog is here with the given probability if time == t, OR if time < t and there are no unvisited neighbors (frog is stuck here). If time > t, return without contributing.',
  ],
  functionName: 'frogPosition',
  params: ['n', 'edges', 't', 'target'],
  starterCode: {
    javascript: `function frogPosition(n, edges, t, target) {
  // Return probability of frog being at target after t seconds
}`,
    python: `def frogPosition(n: int, edges: list[list[int]], t: int, target: int) -> float:
    # Return probability of frog being at target after t seconds
    pass`,
  },
  visibleTests: [
    { args: [2, [[1, 2]], 1, 2], expected: 1 },
    { args: [3, [[1, 2], [1, 3]], 1, 2], expected: 0.5 },
    { args: [5, [[1, 2], [1, 3], [2, 4], [2, 5]], 2, 4], expected: 0.25 },
    { args: [4, [[1, 2], [2, 3], [2, 4]], 2, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [4, [[1, 2], [2, 3], [2, 4]], 2, 3], expected: 0.5 },
    { args: [4, [[1, 2], [2, 3], [2, 4]], 3, 4], expected: 0.5 },
    { args: [6, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6]], 2, 4], expected: 0.25 },
    { args: [6, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6]], 2, 6], expected: 0.5 },
    { args: [1, [], 1, 1], expected: 1 },
    { args: [3, [[1, 2], [1, 3]], 10, 2], expected: 0.5 },
  ],
};
