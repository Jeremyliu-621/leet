import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-steps-to-reduce-a-number-in-binary-representation',
  title: 'Number of Steps to Reduce a Number in Binary Representation to One',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'strings', 'simulation'],
  description: `Given the binary representation of an integer as a string \`s\`, return the number of steps to reduce it to \`1\` under the following rules:

- If the current number is **even**, you have to **divide** it by \`2\`.
- If the current number is **odd**, you have to **add** \`1\` to it.

It is guaranteed that you can always reach one for all test cases.`,
  constraints: [
    '`1 <= s.length <= 500`',
    '`s[i]` is either `\'0\'` or `\'1\'`.',
    '`s[0] == \'1\'`',
  ],
  examples: [
    {
      input: 's = "1101"',
      output: '6',
      explanation: '13 is odd, +1 → 14 (step 1). 14 is even, /2 → 7 (step 2). 7 is odd, +1 → 8 (step 3). 8, /2 → 4 (step 4). 4, /2 → 2 (step 5). 2, /2 → 1 (step 6).',
    },
    {
      input: 's = "10"',
      output: '1',
      explanation: '2 is even, /2 → 1. One step.',
    },
    {
      input: 's = "1"',
      output: '0',
      explanation: 'Already 1.',
    },
  ],
  hints: [
    'Process bits from right to left (LSB to MSB), tracking a carry bit.',
    'For each bit (plus carry): if it\'s 0 → just divide (1 step, carry stays 0); if it\'s 1 → add 1 then divide (2 steps, carry becomes 1, since 1+1=10 propagates).',
    'At the end, if there is still a carry it takes one more step (the carry propagated past s[0]).',
  ],
  functionName: 'numSteps',
  params: ['s'],
  starterCode: {
    javascript: `function numSteps(s) {

}`,
    typescript: 'function numSteps(s: string): number {\n\n}',
    python: `def numSteps(s):
    pass`,
  },
  visibleTests: [
    { args: ['1101'], expected: 6 },
    { args: ['10'], expected: 1 },
    { args: ['1'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['111'], expected: 4 },
    { args: ['1000'], expected: 3 },
    { args: ['1010'], expected: 6 },
    { args: ['111111'], expected: 7 },
    { args: ['100000000'], expected: 8 },
  ],
};
