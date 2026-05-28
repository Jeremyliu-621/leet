import type { Problem } from '../types';

export const problem: Problem = {
  id: 'campus-bikes',
  title: 'Campus Bikes',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `On a campus represented as a 2D grid, there are \`n\` workers and \`m\` bikes, with \`n <= m\`.

You are given an array \`workers\` of length \`n\` where \`workers[i] = [xi, yi]\` is the position of the \`i\`-th worker. You are also given an array \`bikes\` of length \`m\` where \`bikes[j] = [xj, yj]\` is the position of the \`j\`-th bike. All worker and bike positions are **unique**.

Assign a bike to each worker such that the sum of **Manhattan distances** between each worker and their assigned bike is minimized.

Return an array \`answer\` of length \`n\`, where \`answer[i]\` is the index (0-indexed) of the bike assigned to the \`i\`-th worker.

The Manhattan distance between two points \`p1\` and \`p2\` is \`|p1.x - p2.x| + |p1.y - p2.y|\`.

**Goal:** Find the assignment that **minimizes the total sum** of Manhattan distances. When multiple assignments tie, workers are assigned in order (worker 0 first) and each worker takes the lowest-indexed available bike that minimizes total cost.`,
  constraints: [
    '`n == workers.length`',
    '`m == bikes.length`',
    '`1 <= n <= m <= 1000`',
    '`workers[i].length == bikes[j].length == 2`',
    '`0 <= xi, yi < 1000`',
    '`0 <= xj, yj < 1000`',
    'All worker and bike positions are unique.',
  ],
  examples: [
    {
      input: 'workers = [[0,0],[1,1]], bikes = [[2,0],[1,0]]',
      output: '[0,1]',
      explanation: 'Both assignments have total distance 3. Assign w0→b0 (distance 2) and w1→b1 (distance 1), total = 3. This minimizes the total distance.',
    },
    {
      input: 'workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]',
      output: '[1,0]',
      explanation: 'Distances: (w0,b0)=3, (w0,b1)=6, (w1,b0)=2, (w1,b1)=3. Sorted: (2,w1,b0),(3,w0,b0),(3,w1,b1),(6,w0,b1). Assign w1→b0 first, then w0→b1.',
    },
  ],
  hints: [
    'Use a minimum-cost assignment (Hungarian algorithm or bitmask DP) to find the assignment that minimizes total Manhattan distance.',
    'For small n (≤ 20), bitmask DP over which bikes have been assigned works well: dp[bikeMask] = minimum cost to assign workers 0..popcount(bikeMask)-1 to the bikes in bikeMask.',
    'Process workers in order (0, 1, ..., n-1). For each dp state, try assigning the next worker to each unassigned bike.',
  ],
  functionName: 'campusBikes',
  params: ['workers', 'bikes'],
  starterCode: {
    javascript: `function campusBikes(workers, bikes) {

}`,
    typescript: "function campusBikes(workers: number[][], bikes: number[][]): number[] {\n\n}",

    python: `def campusBikes(workers, bikes):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 0], [1, 1]], [[2, 0], [1, 0]]], expected: [1, 0] },
    { args: [[[0, 0], [2, 1]], [[1, 2], [3, 3]]], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: [[[0, 0]], [[1, 1]]], expected: [0] },
    { args: [[[0, 0], [0, 1]], [[0, 2], [0, 3]]], expected: [1, 0] },
    { args: [[[1, 1]], [[0, 0], [2, 2]]], expected: [0] },
    { args: [[[0, 0], [1, 0], [2, 0]], [[3, 0], [0, 1], [1, 1]]], expected: [1, 2, 0] },
    { args: [[[0, 0], [0, 1]], [[1, 0], [0, 0], [0, 1]]], expected: [1, 2] },
  ],
};
