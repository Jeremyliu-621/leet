import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-1-bits',
  title: 'Number of 1 Bits',
  difficulty: 'easy',
  tags: ['math'],
  description: `Write a function that takes a positive integer and returns the number of set bits in its binary representation (also known as the **Hamming weight**).`,
  constraints: [
    '`1 <= n <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'n = 11',
      output: '3',
      explanation: '11 in binary is `1011`, which has 3 set bits.',
    },
    {
      input: 'n = 128',
      output: '1',
      explanation: '128 in binary is `10000000`, which has 1 set bit.',
    },
    {
      input: 'n = 2147483645',
      output: '30',
      explanation: 'Binary has 30 ones.',
    },
  ],
  hints: [
    'Check the lowest bit with `n & 1`, add it to the count, then shift right: `n >>>= 1`. Repeat until `n === 0`.',
    'Faster: `n & (n - 1)` clears the lowest set bit. Count how many times you can do this before `n` becomes 0.',
    `\`\`\`js
function hammingWeight(n) {
  let count = 0;
  while (n) { count += n&1; n >>>= 1; }
  return count;
}
// Or: n.toString(2).split("").filter(b=>b==="1").length\`\`\``,
  ],
  functionName: 'hammingWeight',
  params: ['n'],
  starterCode: {
    javascript: `function hammingWeight(n) {

}`,
    typescript: "function hammingWeight(n: number): number {\n\n}",

    python: `def hammingWeight(n):
    pass`,
  },
  visibleTests: [
    { args: [11], expected: 3 },
    { args: [128], expected: 1 },
    { args: [2147483645], expected: 30 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [7], expected: 3 },
    { args: [2147483646], expected: 30 },
    { args: [2147483647], expected: 31 },
  ],
};
