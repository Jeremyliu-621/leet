import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nth-digit',
  title: 'Nth Digit',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the \`n\`th digit of the infinite integer sequence \`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]\`.`,
  constraints: ['`1 <= n <= 2^31 - 1`'],
  examples: [
    { input: 'n = 3', output: '3' },
    { input: 'n = 11', output: '0', explanation: 'The 11th digit is 0 (from "10").' },
  ],
  hints: [
    'Group digits by length: 1-digit (1-9, 9 numbers), 2-digit (10-99, 90 numbers), etc.',
    'Find which group n falls into, then find the exact number and digit within that number.',
    `\`\`\`js
function findNthDigit(n) {
  let digits=1, start=1, count=9;
  while (n>digits*count) { n-=digits*count; digits++; start*=10; count*=10; }
  const num = start + Math.floor((n-1)/digits);
  return Number(String(num)[((n-1)%digits)]);
}\`\`\``,
  ],
  functionName: 'findNthDigit',
  params: ['n'],
  starterCode: {
    javascript: 'function findNthDigit(n) {\n  \n}\n',
    typescript: "function findNthDigit(n: number): number {\n  \n}",

    python: 'def findNthDigit(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 3 },
    { args: [11], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 1 },
    { args: [12], expected: 1 },
    { args: [15], expected: 2 },
    { args: [100], expected: 5 },
    { args: [1000], expected: 3 },
  ],
};
