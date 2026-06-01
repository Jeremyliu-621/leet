import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flipping-an-image',
  title: 'Flipping an Image',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an \`n x n\` binary matrix \`image\`, flip the image **horizontally**, then invert it, and return the resulting image.

To flip horizontally means to reverse each row: \`[1, 1, 0]\` becomes \`[0, 1, 1]\`.

To invert means to replace each \`0\` with \`1\` and each \`1\` with \`0\`: \`[0, 1, 1]\` becomes \`[1, 0, 0]\`.`,
  constraints: [
    'n == image.length == image[i].length',
    '1 <= n <= 20',
    'images[i][j] is either 0 or 1.',
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
    'Level 1: For each row, reverse it, then XOR each element with 1.',
    'Level 2: Reversing and inverting can be combined: use two-pointer and XOR with 1.',
    'Level 3: return image.map(row=>row.slice().reverse().map(x=>x^1));',
  ],
  functionName: 'flipAndInvertImage',
  params: ['image'],
  starterCode: {
    javascript: `function flipAndInvertImage(image) {
  return image.map(row => row.slice().reverse().map(x => x ^ 1));
}`,
    typescript: `function flipAndInvertImage(image: number[][]): number[][] {
  return image.map(row => row.slice().reverse().map(x => x ^ 1));
}`,
    python: `def flipAndInvertImage(image):
    image = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in (image.to_py() if hasattr(image, 'to_py') else image)]
    return [list(reversed([x ^ 1 for x in row])) for row in image]`,
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
