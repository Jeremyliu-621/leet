import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-garden-perimeter',
  title: 'Minimum Garden Perimeter to Collect Enough Apples',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `In a garden represented as an infinite 2D grid, there is an apple tree planted at **every** integer coordinate. The apple tree planted at an integer coordinate \`(i, j)\` has \`|i| + |j|\` apples.

You will buy a square plot of land that is centered at \`(0, 0)\` and has a half-length of \`n\`. In other words, the plot covers the region \`[-n, n] × [-n, n]\` and its perimeter has length \`8n\`.

Return the **minimum perimeter** of a plot such that **at least** \`neededApples\` apples are inside or on the perimeter.`,
  constraints: [
    '1 <= neededApples <= 10^15',
  ],
  examples: [
    {
      input: 'neededApples = 1',
      output: '8',
      explanation: 'A 1×1 half-length square (perimeter=8) contains 12 apples at the corners and edges.',
    },
    {
      input: 'neededApples = 13',
      output: '16',
      explanation: 'Half-length 1 gives 12 apples, not enough. Half-length 2 gives 48 apples.',
    },
    {
      input: 'neededApples = 1000000000',
      output: '5040',
      explanation: 'A large enough square is needed.',
    },
  ],
  hints: [
    'The total apples in a square of half-length n is 2*n*(n+1)*(2*n+1).',
    'Binary search for the minimum n such that 2*n*(n+1)*(2*n+1)/3 >= neededApples.',
    'The perimeter is 8*n.',
  ],
  functionName: 'minimumPerimeter',
  params: ['neededApples'],
  starterCode: {
    javascript: `function minimumPerimeter(neededApples) {

}`,
    typescript: "function minimumPerimeter(neededApples: number): number {\n\n}",

    python: `def minimumPerimeter(neededApples):
    pass`,
  },
  visibleTests: [
    { args: [1], expected: 8 },
    { args: [13], expected: 16 },
    { args: [1000000000], expected: 5040 },
  ],
  hiddenTests: [
    { args: [12], expected: 8 },
    { args: [48], expected: 16 },
    { args: [100], expected: 24 },
  ],
};
