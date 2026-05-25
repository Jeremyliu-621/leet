import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flipping-an-image',
  title: 'Flipping an Image',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an \`n x n\` binary matrix \`image\`, flip the image **horizontally**, then invert it, and return *the resulting image*.

To flip an image horizontally means that each row of the image is reversed.

To invert an image means that each \`0\` is replaced by \`1\`, and each \`1\` is replaced by \`0\`.

For example, with \`[1,1,0]\`: first reverse it to get \`[0,1,1]\`, then invert it to get \`[1,0,0]\`.`,
  constraints: [
    'n == image.length',
    'n == image[i].length',
    '1 <= n <= 20',
    'image[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'image = [[1,1,0],[1,0,1],[0,0,0]]',
      output: '[[1,0,0],[0,1,0],[1,1,1]]',
      explanation: 'Flip: [[0,1,1],[1,0,1],[0,0,0]]. Invert: [[1,0,0],[0,1,0],[1,1,1]].',
    },
    {
      input: 'image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]',
      output: '[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]',
    },
  ],
  hints: [
    'For each row, reverse it then flip each bit (XOR with 1).',
    'The flip-and-reverse can be done in a single pass: process symmetrical pairs and XOR each with 1.',
  ],
  functionName: 'flipAndInvertImage',
  params: ['image'],
  starterCode: {
    javascript: `function flipAndInvertImage(image) {

}`,
    python: `def flipAndInvertImage(image):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1, 0], [1, 0, 1], [0, 0, 0]]], expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]] },
    { args: [[[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]], expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[0]] },
    { args: [[[0, 1], [1, 0]]], expected: [[0, 1], [1, 0]] },
    { args: [[[1, 0, 1], [0, 1, 0], [1, 1, 0]]], expected: [[0, 1, 0], [1, 0, 1], [1, 0, 0]] },
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: [[1, 1, 1], [1, 1, 1]] },
  ],
};
