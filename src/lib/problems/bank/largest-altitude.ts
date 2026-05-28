import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-altitude',
  title: 'Find the Highest Altitude',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There is a biker going on a road trip. The road trip consists of \`n + 1\` points at different altitudes. The biker starts his trip on point \`0\` with altitude \`0\`.

You are given an integer array \`gain\` of length \`n\` where \`gain[i]\` is the **net gain in altitude** between points \`i\` and \`i + 1\` for all (\`0 <= i < n\`). Return the **highest altitude** of a point.`,
  constraints: [
    'n == gain.length',
    '1 <= n <= 100',
    '-100 <= gain[i] <= 100',
  ],
  examples: [
    { input: 'gain = [-5,1,5,0,-7]', output: '1', explanation: 'Altitudes: [0, -5, -4, 1, 1, -6]. Highest is 1.' },
    { input: 'gain = [-4,-3,-2,-1,4,3,2]', output: '0', explanation: 'Altitudes: [0,-4,-7,-9,-10,-6,-3,-1]. Highest is 0.' },
  ],
  hints: [
    'Build the running altitude from gain, tracking the maximum at each step.',
    "Start with altitude=0 and max=0. For each gain value, add it to altitude and update max if altitude is higher.",
    'let a=0,m=0;for(const g of gain){a+=g;if(a>m)m=a;}return m;',
  ],
  functionName: 'largestAltitude',
  params: ['gain'],
  starterCode: {
    javascript: 'function largestAltitude(gain) {\n  \n}\n',
    typescript: "function largestAltitude(gain: number[]): number {\n  \n}",

    python: 'def largestAltitude(gain):\n    pass\n',
  },
  visibleTests: [
    { args: [[-5, 1, 5, 0, -7]], expected: 1 },
    { args: [[-4, -3, -2, -1, 4, 3, 2]], expected: 0 },
    { args: [[1, 2, 3]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[-1, -2, -3]], expected: 0 },
    { args: [[5]], expected: 5 },
    { args: [[1, -1, 1, -1]], expected: 1 },
    { args: [[-10, 20, -5]], expected: 10 },
  ],
};
