import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flipping-an-image',
  title: 'Flipping an Image',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an \`n x n\` binary matrix \`image\`, flip the image **horizontally**, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.
- For example, flipping \`[1,1,0]\` horizontally results in \`[0,1,1]\`.

To invert an image means that each \`0\` is replaced by \`1\`, and each \`1\` is replaced by \`0\`.
- For example, inverting \`[0,1,1]\` results in \`[1,0,0]\`.`,
  constraints: [
    '`n == image.length`',
    '`n == image[i].length`',
    '`1 <= n <= 20`',
    '`image[i][j]` is either `0` or `1`.',
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
    'Reverse each row, then flip each bit. Or do both in one pass using two pointers.',
  ],
  functionName: 'flipAndInvertImage',
  params: ['image'],
  starterCode: {
    javascript: 'function flipAndInvertImage(image) {\n  \n}\n',
    python: 'def flipAndInvertImage(image):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1, 0], [1, 0, 1], [0, 0, 0]]], expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]] },
    { args: [[[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]], expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[0]] },
    { args: [[[0]]], expected: [[1]] },
    { args: [[[1, 0], [0, 1]]], expected: [[1, 0], [0, 1]] },
    { args: [[[0, 0], [1, 1]]], expected: [[1, 1], [0, 0]] },
  ],
};
