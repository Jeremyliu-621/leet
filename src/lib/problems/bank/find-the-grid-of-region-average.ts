import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-grid-of-region-average',
  title: 'Find the Grid of Region Average',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given \`m x n\` grid \`image\` which represents a grayscale image where \`image[i][j]\` represents the pixel value of the image. You are also given a non-negative integer \`threshold\`.

A **region** is a \`3 x 3\` subgrid where the **absolute difference** between any two adjacent pixels is **less than or equal to** \`threshold\`. Two pixels are adjacent if they share an edge.

**Note:** A region can overlap with another region.

You need to calculate a resulting grid \`result\`, where \`result[i][j]\` is:

- The **average** of all the pixels in the regions it belongs to, if it belongs to at least one region.
- \`image[i][j]\`, otherwise.

Return the resulting grid \`result\`.`,
  constraints: [
    '3 <= n, m <= 500',
    '0 <= image[i][j] <= 255',
    '0 <= threshold <= 255',
  ],
  examples: [
    {
      input: 'image = [[2,3,4],[3,4,5],[4,5,6]], threshold = 4',
      output: '[[4,4,4],[4,4,4],[4,4,4]]',
      explanation: 'The single 3x3 region has max difference = |6-2|=4 ≤ 4. Average = floor(33/9) = 4 (wait: 2+3+4+3+4+5+4+5+6=36, 36/9=4). All cells become 4.',
    },
    {
      input: 'image = [[1,1,1,100],[1,1,1,100],[1,1,1,100],[1,1,1,100]], threshold = 0',
      output: '[[1,1,1,100],[1,1,1,100],[1,1,1,100],[1,1,1,100]]',
      explanation: 'The left 3x3 regions (starting at col 0) are all-1s with threshold=0. The right 3x3 regions include 100s (diff=99>0). Left 3 columns get avg=1; rightmost column never in a qualifying region, stays 100.',
    },
  ],
  hints: [
    'For each possible top-left corner (r, c) of a 3x3 region, check if max-min of the 9 pixels is ≤ threshold.',
    'If a region qualifies, add its floor average to all 9 cells and increment their count.',
    'Final result: if a cell was covered by at least one region, use floor(sum/count). Otherwise keep the original pixel.',
  ],
  functionName: 'resultGrid',
  params: ['image', 'threshold'],
  starterCode: {
    javascript: 'function resultGrid(image, threshold) {\n  \n}\n',
    typescript: 'function resultGrid(image: number[][], threshold: number): number[][] {\n  \n}',
    python: 'def resultGrid(image, threshold):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[2, 3, 4], [3, 4, 5], [4, 5, 6]], 4],
      expected: [[4, 4, 4], [4, 4, 4], [4, 4, 4]],
    },
    {
      args: [[[1, 1, 1, 100], [1, 1, 1, 100], [1, 1, 1, 100], [1, 1, 1, 100]], 0],
      expected: [[1, 1, 1, 100], [1, 1, 1, 100], [1, 1, 1, 100], [1, 1, 1, 100]],
    },
  ],
  hiddenTests: [
    {
      args: [[[5, 5, 5], [5, 5, 5], [5, 5, 5]], 0],
      expected: [[5, 5, 5], [5, 5, 5], [5, 5, 5]],
    },
    {
      args: [[[2, 3, 4], [3, 4, 5], [4, 5, 6]], 0],
      expected: [[2, 3, 4], [3, 4, 5], [4, 5, 6]],
    },
    {
      args: [[[9, 9, 9, 9], [9, 9, 9, 9], [9, 9, 9, 9]], 0],
      expected: [[9, 9, 9, 9], [9, 9, 9, 9], [9, 9, 9, 9]],
    },
  ],
};
