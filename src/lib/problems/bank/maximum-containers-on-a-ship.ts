import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-containers-on-a-ship',
  title: 'Maximum Containers on a Ship',
  difficulty: 'easy',
  tags: ['math'],
  description: `A ship has a maximum weight capacity of \`n * n\`.

There are containers placed at piers numbered \`1\` through \`∞\`, where the container at pier \`i\` weighs exactly \`i\`. You want to load the **maximum** number of containers onto the ship by always choosing the **lightest available** containers (starting from pier 1), without exceeding the ship's capacity.

Return the **maximum** number of containers you can load.`,
  constraints: [
    '`1 <= n <= 10^5`',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '3',
      explanation: 'The ship holds 9. Containers weigh 1+2+3=6 ≤ 9, but 1+2+3+4=10 > 9. Maximum is 3.',
    },
    {
      input: 'n = 4',
      output: '5',
      explanation: 'The ship holds 16. 1+2+3+4+5=15 ≤ 16, but 1+2+3+4+5+6=21 > 16. Maximum is 5.',
    },
  ],
  hints: [
    'Taking the k lightest containers means total weight = 1 + 2 + ... + k = k*(k+1)/2.',
    'Find the largest k such that k*(k+1)/2 ≤ n*n.',
    'Use the quadratic formula: k = floor((-1 + sqrt(1 + 8*n*n)) / 2).',
  ],
  functionName: 'maxContainers',
  params: ['n'],
  starterCode: {
    javascript: `function maxContainers(n) {

}`,
    typescript: `function maxContainers(n: number): number {

}`,
    python: `def maxContainers(n):
    pass`,
  },
  visibleTests: [
    { args: [3], expected: 3 },
    { args: [4], expected: 5 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [5], expected: 6 },
    { args: [10], expected: 13 },
    { args: [100], expected: 140 },
    { args: [1000], expected: 1413 },
    { args: [100000], expected: 141420 },
  ],
};
