import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-value-of-rearranged-number',
  title: 'Smallest Value of the Rearranged Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given an integer \`num\`. **Rearrange** the digits of \`num\` such that its value is **minimized** and it does not contain **any leading zeros**.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging, and the leading digit of a negative number comes after the negative sign.`,
  constraints: [
    '-10^15 <= num <= 10^15',
  ],
  examples: [
    {
      input: 'num = 310',
      output: '103',
      explanation: 'Digits: 0,1,3. Sorted ascending without leading zero: 103.',
    },
    {
      input: 'num = -7605',
      output: '-7650',
      explanation: 'Negative: sort descending for max absolute value: 7650. Result: -7650.',
    },
  ],
  hints: [
    'For positive num: sort digits ascending, move the smallest non-zero digit to the front.',
    'For negative num: sort digits descending to maximize the absolute value.',
    'num = 0 is a special case.',
  ],
  functionName: 'smallestNumber',
  params: ['num'],
  starterCode: {
    javascript: `function smallestNumber(num) {

}`,
    typescript: "function smallestNumber(num: number): number {\n\n}",

    python: `def smallestNumber(num):
    pass`,
  },
  visibleTests: [
    { args: [310], expected: 103 },
    { args: [-7605], expected: -7650 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [230], expected: 203 },
    { args: [-6089], expected: -9860 },
    { args: [1], expected: 1 },
  ],
};
