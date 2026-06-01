import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-highest-altitude',
  title: 'Find the Highest Altitude',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There is a biker going on a road trip. The road trip consists of \`n + 1\` points at different altitudes. The biker starts at point \`0\` with altitude equal to \`0\`.

You are given an integer array \`gain\` of length \`n\` where \`gain[i]\` is the **net gain in altitude** between points \`i\` and \`i + 1\` for all (\`0 <= i < n\`). Return the **highest altitude** of a point.`,
  constraints: [
    'n == gain.length',
    '1 <= n <= 100',
    '-100 <= gain[i] <= 100',
  ],
  examples: [
    {
      input: 'gain = [-5,1,5,0,-7]',
      output: '1',
      explanation: 'The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.',
    },
    {
      input: 'gain = [-4,-3,-2,-1,4,3,2]',
      output: '0',
      explanation: 'The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.',
    },
  ],
  hints: [
    'Level 1: Compute prefix sums starting from altitude 0.',
    'Level 2: Track the running altitude and record the maximum seen.',
    'Level 3: let alt=0,max=0;for(const g of gain){alt+=g;if(alt>max)max=alt;}return max;',
  ],
  functionName: 'largestAltitude',
  params: ['gain'],
  starterCode: {
    javascript: `function largestAltitude(gain) {
  let alt = 0, max = 0;
  for (const g of gain) {
    alt += g;
    if (alt > max) max = alt;
  }
  return max;
}`,
    typescript: `function largestAltitude(gain: number[]): number {
  let alt = 0, max = 0;
  for (const g of gain) {
    alt += g;
    if (alt > max) max = alt;
  }
  return max;
}`,
    python: `def largestAltitude(gain):
    gain = list(gain.to_py()) if hasattr(gain, 'to_py') else list(gain)
    alt = mx = 0
    for g in gain:
        alt += g
        if alt > mx: mx = alt
    return mx`,
  },
  visibleTests: [
    { args: [[-5, 1, 5, 0, -7]], expected: 1 },
    { args: [[-4, -3, -2, -1, 4, 3, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[5, 3, 2]], expected: 10 },
    { args: [[-1, -2, -3]], expected: 0 },
    { args: [[3, -3, 3, -3]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[-5, 10, -3]], expected: 5 },
  ],
};
