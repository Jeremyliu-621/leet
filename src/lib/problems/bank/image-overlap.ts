import type { Problem } from '../types';

export const problem: Problem = {
  id: 'image-overlap',
  title: 'Image Overlap',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given two images, \`img1\` and \`img2\`, represented as binary, square matrices of size \`n × n\`. A binary matrix has only \`0\`s and \`1\`s as values.

We **translate** one image however we choose by sliding all the \`1\` bits left, right, up, or down any number of units. We then place it on top of the other image. We can then calculate the **overlap** by counting the number of positions that have \`1\` in **both** images.

Note also that a translation does **not** include any kind of rotation. Any translation outside the matrix bounds is ignored.

Return the **largest possible overlap**.`,
  constraints: [
    'n == img1.length == img1[i].length',
    'n == img2.length == img2[i].length',
    '1 <= n <= 30',
    'img1[i][j] is either 0 or 1.',
    'img2[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]',
      output: '3',
      explanation: 'Translate img1 by (1, 1) (shift 1 down and 1 right). The overlap has 3 ones.',
    },
    {
      input: 'img1 = [[1]], img2 = [[1]]',
      output: '1',
    },
    {
      input: 'img1 = [[0]], img2 = [[0]]',
      output: '0',
    },
  ],
  hints: [
    'For each possible translation (dr, dc) where -n < dr, dc < n, count the number of overlapping 1s.',
    'There are O(n^2) translations and each count takes O(n^2) time, giving O(n^4) total — acceptable for n <= 30.',
    'Alternatively, collect positions of all 1s in each image and use a hash map to count how many pairs share the same offset vector.',
  ],
  functionName: 'largestOverlap',
  params: ['img1', 'img2'],
  starterCode: {
    javascript: `function largestOverlap(img1, img2) {
  // Try every translation offset and count overlapping 1s
}`,
    typescript: `function largestOverlap(img1: number[][], img2: number[][]): number {
  // Try every translation offset and count overlapping 1s
}`,
    python: `def largestOverlap(img1, img2):
    # Try every translation offset and count overlapping 1s
    pass`,
  },
  visibleTests: [
    { args: [[[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]], expected: 3 },
    { args: [[[1]], [[1]]], expected: 1 },
    { args: [[[0]], [[0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1,0],[0,0]], [[0,0],[0,1]]], expected: 1 },
    { args: [[[1,1],[1,0]], [[0,1],[1,1]]], expected: 2 },
    { args: [[[0,0,0],[0,0,0],[0,0,0]], [[1,1,1],[1,1,1],[1,1,1]]], expected: 0 },
    { args: [[[1,1,1],[1,1,1],[1,1,1]], [[1,1,1],[1,1,1],[1,1,1]]], expected: 9 },
    { args: [[[1,0,0],[0,0,0],[0,0,0]], [[0,0,0],[0,0,0],[0,0,1]]], expected: 1 },
  ],
};
