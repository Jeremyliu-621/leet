import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flip-and-invert-image',
  title: 'Flipping an Image',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays', 'simulation'],
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
      explanation: 'Flip rows: [[0,1,1],[1,0,1],[0,0,0]]. Invert: [[1,0,0],[0,1,0],[1,1,1]].',
    },
    {
      input: 'image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]',
      output: '[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]',
      explanation: 'Flip rows: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]. Invert: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]].',
    },
  ],
  hints: [
    'Process each row independently: reverse it, then XOR each element with 1 to invert.',
    'You can combine the two steps: iterate from both ends of the row toward the center. For each symmetric pair (i, n-1-i), XOR with 1 and swap.',
    'Shortcut: if pair[i] == pair[j], after flip+invert both become the same (swap then XOR → 1-x); if pair[i] != pair[j], after flip+invert both stay {0,1} (swap then XOR → each becomes the other\'s XOR, which is itself).',
  ],
  functionName: 'flipAndInvertImage',
  params: ['image'],
  starterCode: {
    javascript: `function flipAndInvertImage(image) {
  return image.map(row => [...row].reverse().map(v => v ^ 1));
}`,
    typescript: `function flipAndInvertImage(image: number[][]): number[][] {
  return image.map(row => [...row].reverse().map(v => v ^ 1));
}`,
    python: `def flipAndInvertImage(image):
    return [[v ^ 1 for v in row[::-1]] for row in image]`,
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
    { args: [[[1, 1, 1], [0, 0, 0], [1, 0, 1]]], expected: [[0, 0, 0], [1, 1, 1], [0, 1, 0]] },
  ],
};
