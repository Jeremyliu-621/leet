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

**Greedy approach:** Sort all (worker, bike) pairs by:
1. Manhattan distance (ascending)
2. Worker index (ascending), as a tiebreaker
3. Bike index (ascending), as a tiebreaker

Then assign greedily: for each pair in order, if neither the worker nor the bike has been assigned yet, make the assignment.`,
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
      output: '[1,0]',
      explanation: 'Worker 0 and bike 1 have distance |0-1|+|0-0|=1. Worker 1 and bike 0 have distance |1-2|+|1-0|=2, worker 1 and bike 1 have distance |1-1|+|1-0|=1. Sort by distance: (0, w0, b1)=1, (1, w1, b0)=1, ... Assign w0→b1, w1→b0.',
    },
    {
      input: 'workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]',
      output: '[0,1]',
    },
  ],
  hints: [
    'Enumerate every (worker, bike) pair and compute the Manhattan distance.',
    'Sort the pairs by (distance, workerIndex, bikeIndex).',
    'Iterate through sorted pairs; assign if both worker and bike are unassigned. Stop when all workers are assigned.',
  ],
  functionName: 'campusBikes',
  params: ['workers', 'bikes'],
  starterCode: {
    javascript: `function campusBikes(workers, bikes) {

}`,
    python: `def campusBikes(workers, bikes):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 0], [1, 1]], [[2, 0], [1, 0]]], expected: [1, 0] },
    { args: [[[0, 0], [2, 1]], [[1, 2], [3, 3]]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[[0, 0]], [[1, 1]]], expected: [0] },
    { args: [[[0, 0], [0, 1]], [[0, 2], [0, 3]]], expected: [0, 1] },
    { args: [[[1, 1]], [[0, 0], [2, 2]]], expected: [0] },
    { args: [[[0, 0], [1, 0], [2, 0]], [[3, 0], [0, 1], [1, 1]]], expected: [1, 2, 0] },
    { args: [[[0, 0], [0, 1]], [[1, 0], [0, 0], [0, 1]]], expected: [1, 2] },
  ],
};
