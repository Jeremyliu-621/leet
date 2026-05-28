import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-pivot-integer',
  title: 'Find the Pivot Integer',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, find the **pivot integer** \`x\` such that:

- The sum of all elements between \`1\` and \`x\` inclusively equals the sum of all elements between \`x\` and \`n\` inclusively.

Return the pivot integer \`x\`. If no such integer exists, return \`-1\`. It is guaranteed that there will be at most one pivot index for the given input.`,
  constraints: [
    '`1 <= n <= 1000`',
  ],
  examples: [
    {
      input: 'n = 8',
      output: '6',
      explanation: '6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 21 and 6 + 7 + 8 = 21.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: '1 is the pivot integer since: sum(1..1) = 1 = sum(1..1).',
    },
    {
      input: 'n = 4',
      output: '-1',
      explanation: 'No pivot integer exists for n = 4.',
    },
  ],
  hints: [
    'The sum from 1 to n is n*(n+1)/2.',
    'If x is the pivot, then x*(x+1)/2 = sum(x..n). The total sum S = n*(n+1)/2, and sum(x..n) = S - x*(x-1)/2. Setting these equal gives x^2 = S, so x = sqrt(S).',
    'Check if sqrt(S) is a perfect integer square.',
  ],
  functionName: 'findPivot',
  params: ['n'],
  starterCode: {
    javascript: `function findPivot(n) {

}`,
    typescript: "function findPivot(n: number): number {\n\n}",

    python: `def findPivot(n):
    pass`,
  },
  visibleTests: [
    { args: [8], expected: 6 },
    { args: [1], expected: 1 },
    { args: [4], expected: -1 },
  ],
  hiddenTests: [
    { args: [2], expected: -1 },
    { args: [9], expected: -1 },
    { args: [3], expected: -1 },
    { args: [5], expected: -1 },
    { args: [6], expected: -1 },
  ],
};
