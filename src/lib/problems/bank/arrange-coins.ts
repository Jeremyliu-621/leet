import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arrange-coins',
  title: 'Arranging Coins',
  difficulty: 'easy',
  tags: ['math', 'binary-search'],
  description: `You have \`n\` coins and you want to build a staircase with these coins. The staircase consists of \`k\` rows where the \`i\`th row has exactly \`i\` coins. The last row of the staircase **may be** incomplete.

Given the integer \`n\`, return the **number of complete rows** of the staircase you will build.`,
  constraints: ['1 <= n <= 2^31 - 1'],
  examples: [
    { input: 'n = 5', output: '2', explanation: 'Rows of 1 and 2 are complete (3 coins). The 3rd row has 2 of 3 coins but is incomplete.' },
    { input: 'n = 8', output: '3', explanation: 'Rows 1,2,3 complete (6 coins). Row 4 has 2 of 4 coins.' },
  ],
  hints: [
    'Level 1: Row k requires k*(k+1)/2 coins total. Find the largest k such that k*(k+1)/2 <= n.',
    'Level 2: Use binary search on k, or solve the quadratic k^2+k-2n=0 directly with the formula k=floor((-1+sqrt(1+8n))/2).',
    'Level 3: return Math.floor((-1+Math.sqrt(1+8*n))/2);',
  ],
  functionName: 'arrangeCoins',
  params: ['n'],
  starterCode: {
    javascript: 'function arrangeCoins(n) {\n  // your code here\n}\n',
    python: 'def arrangeCoins(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [5], expected: 2 },
    { args: [8], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [3], expected: 2 },
    { args: [6], expected: 3 },
    { args: [10], expected: 4 },
    { args: [1804289383], expected: 60070 },
  ],
};
