import type { Problem } from '../types';

export const problem: Problem = {
  id: 'spiral-matrix-ii',
  title: 'Spiral Matrix II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a positive integer \`n\`, generate an \`n x n\` matrix filled with elements from 1 to \`n^2\` in **spiral order**.`,
  constraints: [
    '1 <= n <= 20',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '[[1,2,3],[8,9,4],[7,6,5]]',
    },
    {
      input: 'n = 1',
      output: '[[1]]',
    },
  ],
  hints: [
    'Use four boundaries: top, bottom, left, right. Fill elements in spiral order: right → down → left → up.',
    'After filling each direction, shrink the corresponding boundary (top++, right--, bottom--, left++).',
    'Continue until top > bottom or left > right.',
  ],
  functionName: 'generateMatrix',
  params: ['n'],
  starterCode: {
    javascript: `function generateMatrix(n) {
  // Return n x n matrix filled 1..n^2 in spiral order
}`,
    python: `def generateMatrix(n):
    # Return n x n matrix filled 1..n^2 in spiral order
    pass`,
  },
  visibleTests: [
    { args: [3], expected: [[1,2,3],[8,9,4],[7,6,5]] },
    { args: [1], expected: [[1]] },
    { args: [2], expected: [[1,2],[4,3]] },
  ],
  hiddenTests: [
    { args: [4], expected: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]] },
    { args: [1], expected: [[1]] },
    { args: [2], expected: [[1,2],[4,3]] },
    { args: [3], expected: [[1,2,3],[8,9,4],[7,6,5]] },
  ],
};
