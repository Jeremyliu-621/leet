import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-even-multiple',
  title: 'Smallest Even Multiple',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a **positive** integer \`n\`, return the smallest positive integer that is a multiple of **both** \`2\` and \`n\`.`,
  constraints: ['1 <= n <= 150'],
  examples: [
    { input: 'n = 5', output: '10', explanation: 'The smallest multiple of both 2 and 5 is 10.' },
    { input: 'n = 6', output: '6', explanation: '6 is already even, so 6 itself is the answer.' },
  ],
  hints: [
    'Level 1: If n is even, return n. If n is odd, return 2*n.',
    'Level 2: The LCM of 2 and n. If n is even, LCM(2,n)=n. If n is odd, LCM(2,n)=2n.',
    'Level 3: return n%2===0?n:2*n;',
  ],
  functionName: 'smallestEvenMultiple',
  params: ['n'],
  starterCode: {
    javascript: 'function smallestEvenMultiple(n) {\n  // your code here\n}\n',
    typescript: "function smallestEvenMultiple(n: number): number {\n  // your code here\n}",

    python: 'def smallestEvenMultiple(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [5], expected: 10 },
    { args: [6], expected: 6 },
  ],
  hiddenTests: [
    { args: [1], expected: 2 },
    { args: [2], expected: 2 },
    { args: [3], expected: 6 },
    { args: [4], expected: 4 },
    { args: [150], expected: 150 },
    { args: [149], expected: 298 },
  ],
};
