import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-complement',
  title: 'Number Complement',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`num\`, output its **complement number**. The complement strategy is to flip the bits of its binary representation.`,
  constraints: [
    '1 <= num < 2^31',
  ],
  examples: [
    { input: 'num = 5', output: '2', explanation: 'The binary representation of 5 is 101 (no leading zeros). Its complement is 010, which is 2.' },
    { input: 'num = 1', output: '0', explanation: 'Binary 1, complement is 0.' },
  ],
  hints: [
    'Find the highest set bit in num to build a mask of all 1s the same length, then XOR num with that mask.',
    'For example, 5 = 101, mask = 111 = 7. 5 XOR 7 = 010 = 2.',
    `\`\`\`js
function findComplement(num) {
  let mask = 1;
  while (mask <= num) mask <<= 1;
  return (mask-1) ^ num;
}\`\`\``,
  ],
  functionName: 'findComplement',
  params: ['num'],
  starterCode: {
    javascript: 'function findComplement(num) {\n  \n}\n',
    typescript: "function findComplement(num: number): number {\n  \n}",

    python: 'def findComplement(num):\n    pass\n',
  },
  visibleTests: [
    { args: [5], expected: 2 },
    { args: [1], expected: 0 },
    { args: [7], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 0 },
    { args: [4], expected: 3 },
    { args: [8], expected: 7 },
    { args: [100], expected: 27 },
  ],
};
