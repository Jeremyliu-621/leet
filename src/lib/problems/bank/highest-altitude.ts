import type { Problem } from '../types';

export const problem: Problem = {
  id: 'highest-altitude',
  title: 'Find the Highest Altitude',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There is a biker going on a road trip. The road trip consists of \`n + 1\` points at different altitudes. The biker starts his trip on point \`0\` with altitude equal \`0\`.

You are given an integer array \`gain\` of length \`n\` where \`gain[i]\` is the **net gain in altitude** between points \`i\` and \`i + 1\` for all (\`0 <= i < n\`). Return the **highest altitude** of a point.`,
  constraints: [
    '`n == gain.length`',
    '`1 <= n <= 100`',
    '`-100 <= gain[i] <= 100`',
  ],
  examples: [
    {
      input: 'gain = [-5,1,5,0,-7]',
      output: '1',
      explanation: 'Altitudes: [0,-5,-4,1,1,-6]. The highest is 1.',
    },
    {
      input: 'gain = [-4,-3,-2,-1,4,3,2]',
      output: '0',
    },
  ],
  hints: [
    'Compute the prefix sums of gain (starting from 0). Return the maximum.',
  ],
  functionName: 'largestAltitude',
  params: ['gain'],
  starterCode: {
    javascript: `function largestAltitude(gain) {

}`,
    python: `def largestAltitude(gain):
    pass`,
  },
  visibleTests: [
    { args: [[-5, 1, 5, 0, -7]], expected: 1 },
    { args: [[-4, -3, -2, -1, 4, 3, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[5, 5, 5]], expected: 15 },
    { args: [[-1, -2, -3]], expected: 0 },
    { args: [[3, -2, 5, -1]], expected: 6 },
    { args: [[1, -1, 1, -1]], expected: 1 },
  ],
};
