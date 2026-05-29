import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bitwise-and-of-numbers-range',
  title: 'Bitwise AND of Numbers Range',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'math'],
  description: `Given two integers \`left\` and \`right\` that represent a range \`[left, right]\`, return the **bitwise AND** of all numbers in this range, inclusive.`,
  constraints: [
    '0 <= left <= right <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'left = 5, right = 7',
      output: '4',
      explanation: '5 & 6 & 7 = 4.',
    },
    {
      input: 'left = 0, right = 0',
      output: '0',
    },
    {
      input: 'left = 1, right = 2147483647',
      output: '0',
    },
  ],
  hints: [
    'Level 1: The AND of a range keeps only the common prefix bits. Any bit that differs across numbers in the range becomes 0. Find the common prefix of `left` and `right`.',
    'Level 2: Repeatedly right-shift both `left` and `right` (tracking shift count) until they are equal. The common prefix is `left << shift`. Equivalently, clear the lowest set bit of `right` until `right <= left`.',
    'Level 3: `let shift=0; while(left!==right){left>>=1;right>>=1;shift++;} return left<<shift;`',
  ],
  functionName: 'rangeBitwiseAnd',
  params: ['left', 'right'],
  starterCode: {
    javascript: 'function rangeBitwiseAnd(left, right) {\n  // your code here\n}\n',
    typescript: "function rangeBitwiseAnd(left: number, right: number): number {\n  // your code here\n}",

    python: 'def rangeBitwiseAnd(left, right):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [5, 7], expected: 4 },
    { args: [0, 0], expected: 0 },
    { args: [1, 2147483647], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [3, 4], expected: 0 },
    { args: [6, 7], expected: 6 },
    { args: [4, 7], expected: 4 },
    { args: [8, 15], expected: 8 },
    { args: [12, 15], expected: 12 },
  ],
};
