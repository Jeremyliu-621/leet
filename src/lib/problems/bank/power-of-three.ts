import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-three',
  title: 'Power of Three',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`n\`, return \`true\` if it is a power of three. Otherwise, return \`false\`.

An integer \`n\` is a power of three if there exists an integer \`x\` such that \`n == 3^x\`.`,
  constraints: [
    '`-2^31 <= n <= 2^31 - 1`',
  ],
  examples: [
    { input: 'n = 27', output: 'true', explanation: '27 = 3^3' },
    { input: 'n = 0', output: 'false', explanation: 'No integer x exists such that 3^x = 0.' },
    { input: 'n = -1', output: 'false', explanation: 'No integer x exists such that 3^x = -1.' },
  ],
  hints: [
    'Loop: repeatedly divide `n` by 3 while `n % 3 === 0`. After the loop, check if `n === 1`.',
    'Alternatively, use logarithms: `n > 0 && Number.isInteger(Math.log(n) / Math.log(3))` — but floating-point precision makes the loop approach safer.',
    `\`\`\`js
function isPowerOfThree(n) {
  if(n<=0) return false;
  while(n%3===0) n/=3;
  return n===1;
}
// Or: n>0 && 1162261467%n===0 (1162261467 = 3^19, largest power of 3 in 32-bit int)\`\`\``,
  ],
  functionName: 'isPowerOfThree',
  params: ['n'],
  starterCode: {
    javascript: `function isPowerOfThree(n) {

}`,
    typescript: "function isPowerOfThree(n: number): boolean {\n\n}",

    python: `def isPowerOfThree(n):
    pass`,
  },
  visibleTests: [
    { args: [27], expected: true },
    { args: [0], expected: false },
    { args: [-1], expected: false },
  ],
  hiddenTests: [
    { args: [1], expected: true },
    { args: [9], expected: true },
    { args: [45], expected: false },
    { args: [243], expected: true },
    { args: [2147483647], expected: false },
  ],
};
