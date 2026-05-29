import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-square',
  title: 'Valid Square',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given the coordinates of four points in 2D space, \`p1\`, \`p2\`, \`p3\`, and \`p4\`, return \`true\` if the four points construct a **valid square**.

A **valid square** has four equal sides with positive length and four equal angles (90-degree angles).

**Note:** The input points may not be in a specific order.`,
  constraints: [
    'p1.length == p2.length == p3.length == p4.length == 2',
    '-10^4 <= xi, yi <= 10^4',
  ],
  examples: [
    {
      input: 'p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]',
      output: 'true',
      explanation: 'Unit square with vertices at (0,0), (1,0), (1,1), (0,1).',
    },
    {
      input: 'p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]',
      output: 'false',
      explanation: 'The four points do not form a square.',
    },
    {
      input: 'p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]',
      output: 'true',
      explanation: 'Rotated square (diamond orientation).',
    },
  ],
  hints: [
    'Compute all 6 pairwise squared distances between the 4 points.',
    'A valid square has exactly 2 distinct distance values: 4 equal sides and 2 equal diagonals.',
    'The diagonal squared distance must equal exactly 2× the side squared distance.',
  ],
  functionName: 'validSquare',
  params: ['p1', 'p2', 'p3', 'p4'],
  starterCode: {
    javascript: `function validSquare(p1, p2, p3, p4) {
  // your code here
}`,
    typescript: `function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  // your code here
}`,
    python: `def validSquare(p1, p2, p3, p4):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[0,0],[1,1],[1,0],[0,1]], expected: true },
    { args: [[0,0],[1,1],[1,0],[0,12]], expected: false },
    { args: [[1,0],[-1,0],[0,1],[0,-1]], expected: true },
    { args: [[0,0],[0,0],[0,0],[0,0]], expected: false },
    { args: [[0,0],[2,2],[2,0],[0,2]], expected: true },
  ],
  hiddenTests: [
    { args: [[0,0],[4,0],[4,4],[0,4]], expected: true },
    { args: [[0,0],[1,2],[2,1],[3,3]], expected: false },
    { args: [[0,0],[1,0],[1,1],[0,2]], expected: false },
    { args: [[1,1],[-1,1],[1,-1],[-1,-1]], expected: true },
    { args: [[0,0],[2,1],[3,-1],[1,-2]], expected: true },
    { args: [[0,0],[0,1],[1,1],[1,0]], expected: true },
    { args: [[0,0],[0,2],[1,1],[2,2]], expected: false },
    { args: [[-1000,-1000],[1000,-1000],[1000,1000],[-1000,1000]], expected: true },
    { args: [[0,0],[1,1],[2,0],[1,2]], expected: false },
    { args: [[0,0],[3,0],[3,3],[0,3]], expected: true },
  ],
};
