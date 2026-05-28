import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-bit-flips',
  title: 'Minimum Bit Flips to Convert Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `A **bit flip** of a number \`x\` is choosing a bit in the binary representation of \`x\` and **flipping** it from either \`0\` to \`1\` or \`1\` to \`0\`.

Given two integers \`start\` and \`goal\`, return the **minimum** number of bit flips to convert \`start\` to \`goal\`.`,
  constraints: ['0 <= start, goal <= 10^9'],
  examples: [
    { input: 'start = 10, goal = 7', output: '3', explanation: '10 = 1010, 7 = 0111. We need to flip bits at positions 0, 1, 3. 3 flips.' },
    { input: 'start = 3, goal = 4', output: '3', explanation: '3 = 011, 4 = 100. Need 3 flips.' },
  ],
  hints: [
    'Level 1: XOR start and goal. The number of 1 bits in the result equals the number of differing positions.',
    'Level 2: Count the number of set bits in start XOR goal (popcount).',
    'Level 3: let x=start^goal,c=0;while(x){c+=x&1;x>>>=1;}return c;',
  ],
  functionName: 'minBitFlips',
  params: ['start', 'goal'],
  starterCode: {
    javascript: 'function minBitFlips(start, goal) {\n  // your code here\n}\n',
    python: 'def minBitFlips(start, goal):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [10, 7], expected: 3 },
    { args: [3, 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [0, 1], expected: 1 },
    { args: [255, 0], expected: 8 },
    { args: [1, 2], expected: 2 },
    { args: [5, 3], expected: 2 },
  ],
};
