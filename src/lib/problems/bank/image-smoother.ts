import type { Problem } from '../types';

export const problem: Problem = {
  id: 'image-smoother',
  title: 'Image Smoother',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `An **image smoother** is a filter of the size **3 x 3** that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells. If one or more of the surrounding cells is not present, do not include it in the average.

Return the smoothed image.

**Example 1:**
\`\`\`
Input: img = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[0,0,0],[0,0,0],[0,0,0]]
\`\`\`

**Example 2:**
\`\`\`
Input: img = [[100,200,100],[200,50,200],[100,200,100]]
Output: [[137,141,137],[141,138,141],[137,141,137]]
\`\`\``,
  examples: [
    {
      input: '[[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[0,0,0],[0,0,0],[0,0,0]]',
    },
    {
      input: '[[100,200,100],[200,50,200],[100,200,100]]',
      output: '[[137,141,137],[141,138,141],[137,141,137]]',
    },
  ],
  constraints: [
    'm == img.length',
    'n == img[i].length',
    '1 <= m, n <= 200',
    '0 <= img[i][j] <= 255',
  ],
  hints: [
    'Iterate every cell and sum all valid neighbors (including self) in a 3x3 window.',
    'Track count of valid cells and compute Math.floor(sum / count).',
    'Use the original grid for reads and write results to a new grid so smoothing one cell does not affect adjacent cells.',
  ],
  functionName: 'imageSmoother',
  params: ['img'],
  starterCode: {
    javascript: `function imageSmoother(img) {

}`,
    python: `def imageSmoother(img):
    `,
  },
  visibleTests: [
    { args: [[[1,1,1],[1,0,1],[1,1,1]]], expected: [[0,0,0],[0,0,0],[0,0,0]] },
    { args: [[[100,200,100],[200,50,200],[100,200,100]]], expected: [[137,141,137],[141,138,141],[137,141,137]] },
    { args: [[[0]]], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [[3,3,4],[4,5,5],[6,6,7]] },
    { args: [[[255,255],[255,255]]], expected: [[255,255],[255,255]] },
  ],
};
