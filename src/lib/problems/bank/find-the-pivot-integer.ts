import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-pivot-integer',
  title: 'Find the Pivot Integer',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, find the **pivot integer** \`x\` such that:

- The sum of all elements between \`1\` and \`x\` inclusively equals the sum of all elements between \`x\` and \`n\` inclusively.

Return the **pivot integer** \`x\`. If no such integer exists, return \`-1\`. It is guaranteed that there will be at most one pivot index for the given input.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 8',
      output: '6',
      explanation: '1+2+3+4+5+6 = 21 = 6+7+8. So x=6.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: '1 = 1. So x=1.',
    },
    {
      input: 'n = 4',
      output: '-1',
      explanation: 'No integer x satisfies the condition.',
    },
  ],
  hints: [
    'The sum from 1 to x is x*(x+1)/2. The sum from x to n is n*(n+1)/2 - x*(x-1)/2. Setting these equal gives x² = n*(n+1)/2.',
    'So x = sqrt(n*(n+1)/2). If x is a positive integer ≤ n, return it; otherwise return -1.',
    `\`\`\`js
function pivotInteger(n) {
  // x*(x+1)/2 = total - x*(x-1)/2  =>  x^2 = n*(n+1)/2
  const total = n*(n+1)/2;
  const x = Math.round(Math.sqrt(total));
  return x*x === total ? x : -1;
}\`\`\``,
  ],
  functionName: 'pivotInteger',
  params: ['n'],
  starterCode: {
    javascript: 'function pivotInteger(n) {\n  \n}\n',
    python: 'def pivotInteger(n):\n    pass\n',
  },
  visibleTests: [
    { args: [8], expected: 6 },
    { args: [1], expected: 1 },
    { args: [4], expected: -1 },
  ],
  hiddenTests: [
    { args: [2], expected: -1 },
    { args: [3], expected: -1 },
    { args: [49], expected: 35 },
    { args: [100], expected: -1 },
    { args: [1000], expected: -1 },
  ],
};
