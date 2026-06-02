import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cuts-to-divide-a-circle',
  title: 'Minimum Cuts to Divide a Circle',
  difficulty: 'easy',
  tags: ['math'],
  description: `A valid cut in a circle can be:

- A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
- A cut that is represented by a straight line that touches one point on the edge of the circle and its center.

Some valid cuts are shown in the figures below.

Given the integer \`n\`, return the **minimum** number of cuts needed to divide a circle into \`n\` equal slices.`,
  constraints: [
    '`1 <= n <= 100`',
  ],
  examples: [
    {
      input: 'n = 4',
      output: '2',
      explanation: 'Two diameter cuts (at 0° and 90°) divide the circle into 4 equal slices.',
    },
    {
      input: 'n = 3',
      output: '3',
      explanation: 'Three cuts at 120° apart from the center divide the circle into 3 equal slices.',
    },
  ],
  hints: [
    'If n = 1, no cuts are needed — the circle is already one slice.',
    'If n is even, you can use diameters (lines through the center touching both edges). Each diameter creates 2 slices, so n/2 diameters give n equal slices.',
    'If n is odd, you cannot use diameters (they would create an even number of slices). Instead, you need n radius cuts from the center, one for each slice boundary.',
  ],
  functionName: 'numberOfCuts',
  params: ['n'],
  starterCode: {
    javascript: `function numberOfCuts(n) {
  if (n === 1) return 0;
  return n % 2 === 0 ? n / 2 : n;
}`,
    typescript: `function numberOfCuts(n: number): number {
  if (n === 1) return 0;
  return n % 2 === 0 ? n / 2 : n;
}`,
    python: `def numberOfCuts(n):
    if n == 1: return 0
    return n // 2 if n % 2 == 0 else n`,
  },
  visibleTests: [
    { args: [4], expected: 2 },
    { args: [3], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
    { args: [5], expected: 5 },
    { args: [6], expected: 3 },
    { args: [7], expected: 7 },
    { args: [10], expected: 5 },
    { args: [100], expected: 50 },
  ],
};
