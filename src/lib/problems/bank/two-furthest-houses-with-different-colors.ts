import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-furthest-houses-with-different-colors',
  title: 'Two Furthest Houses With Different Colors',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` houses evenly lined up on the street, and each house is beautifully painted. You are given a **0-indexed** integer array \`colors\` of length \`n\`, where \`colors[i]\` represents the color of the \`i\`-th house.

Return the **maximum distance** between **two** houses with **different** colors.

The distance between the \`i\`-th and \`j\`-th houses is \`|i - j|\`.`,
  constraints: [
    '`n == colors.length`',
    '`2 <= n <= 100`',
    '`0 <= colors[i] <= 100`',
    'The test data is generated such that **at least** two houses have different colors.',
  ],
  examples: [
    {
      input: 'colors = [1,1,1,6,1,1,1]',
      output: '3',
      explanation: 'House 3 has color 6 and house 6 has color 1; distance = |3-6| = 3.',
    },
    {
      input: 'colors = [1,8,3,8,3]',
      output: '4',
      explanation: 'House 0 has color 1, house 4 has color 3; distance = |0-4| = 4.',
    },
    {
      input: 'colors = [0,1]',
      output: '1',
      explanation: 'Only two houses with different colors; distance = 1.',
    },
  ],
  hints: [
    'The maximum distance must involve either the first or last house.',
    'Scan from the right for the furthest index with a different color than colors[0].',
    'Scan from the left for the furthest index with a different color than colors[n-1]. Return the max of both.',
  ],
  functionName: 'maxDistance',
  params: ['colors'],
  starterCode: {
    javascript: `function maxDistance(colors) {

}`,
    typescript: `function maxDistance(colors: number[]): number {

}`,
    python: `def maxDistance(colors):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 1, 6, 1, 1, 1]], expected: 3 },
    { args: [[1, 8, 3, 8, 3]], expected: 4 },
    { args: [[0, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1, 2]], expected: 3 },
    { args: [[0, 0, 1]], expected: 2 },
    { args: [[1, 0, 0]], expected: 2 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 5 },
    { args: [[0, 1, 0, 1]], expected: 3 },
  ],
};
