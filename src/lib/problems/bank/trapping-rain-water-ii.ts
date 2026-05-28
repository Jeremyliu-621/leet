import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trapping-rain-water-ii',
  title: 'Trapping Rain Water II',
  difficulty: 'hard',
  tags: ['heap'],
  description: `Given an **m × n** integer matrix \`heightMap\` representing the height of each cell in a 2D elevation map, compute the **total volume of water** that can be trapped after it rains.

Water trapped at a cell is determined by the minimum height of the surrounding boundary that "closes off" that cell.

**Approach:** Use a min-heap (priority queue) initialized with all border cells. BFS inward — when visiting a neighbor, if its height is less than the current boundary height, it traps water equal to \`(boundary - height)\`. Push \`max(boundary, height)\` back into the heap.

**Example:**
\`\`\`
heightMap = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]
\`\`\`
Output: **4**`,
  constraints: [
    'm == heightMap.length',
    'n == heightMap[i].length',
    '1 <= m, n <= 200',
    '0 <= heightMap[i][j] <= 2 × 10^4',
  ],
  examples: [
    {
      input: 'heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]',
      output: '4',
      explanation: 'After raining, water is trapped in the lower-elevation interior cells totaling 4 units.',
    },
    {
      input: 'heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]',
      output: '10',
      explanation: 'The center cell at height 1 traps 2 units, and the ring of 2s each trap 1 unit. Total = 10.',
    },
    {
      input: 'heightMap = [[1,1],[1,1]]',
      output: '0',
      explanation: 'All cells are on the border, no interior cells to trap water.',
    },
  ],
  hints: [
    'Think of the border cells as the initial "walls." Water can only be trapped inside if the surrounding walls are taller. Push all border cells into a min-heap with their heights.',
    'BFS from the heap. For each cell popped (the minimum boundary height so far), check its unvisited neighbors. If a neighbor is shorter than the current boundary, it traps `boundary - neighbor.height` water. Push `max(boundary, neighbor.height)` into the heap.',
    'The key insight: once a cell is popped from the min-heap, we know the true water level above it — it equals the maximum boundary height seen on the path from the border to that cell, which the min-heap tracks automatically.',
  ],
  functionName: 'trapRainWaterII',
  params: ['heightMap'],
  starterCode: {
    javascript: 'function trapRainWaterII(heightMap) {\n  // your code here\n}\n',
    python: 'def trapRainWaterII(heightMap):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]],
      expected: 4,
    },
    {
      args: [[[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]],
      expected: 10,
    },
    {
      args: [[[1,1],[1,1]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[1,2,3],[4,5,6],[7,8,9]]],
      expected: 0,
    },
    {
      args: [[[5,5,5,5],[5,1,1,5],[5,1,1,5],[5,5,5,5]]],
      expected: 16,
    },
    {
      args: [[[2,2,2,2],[2,1,1,2],[2,2,2,2]]],
      expected: 2,
    },
    {
      args: [[[3,3,3,3],[3,1,2,3],[3,3,3,3]]],
      expected: 3,
    },
  ],
};
