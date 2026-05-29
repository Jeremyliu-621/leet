import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-addition-to-make-integer-beautiful',
  title: 'Minimum Addition to Make Integer Beautiful',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given two positive integers \`n\` and \`target\`.

An integer is considered **beautiful** if its digit sum is less than or equal to \`target\`.

Return the **minimum** non-negative integer \`x\` such that \`n + x\` is beautiful. The input will be generated such that it is always possible to make \`n\` beautiful.`,
  constraints: [
    '1 <= n <= 10^12',
    '1 <= target <= 150',
  ],
  examples: [
    {
      input: 'n = 16, target = 6',
      output: '4',
      explanation: 'n + 4 = 20. Digit sum of 20 is 2 <= 6.',
    },
    {
      input: 'n = 467, target = 6',
      output: '33',
      explanation: 'n + 33 = 500. Digit sum of 500 is 5 <= 6.',
    },
    {
      input: 'n = 1, target = 1',
      output: '0',
      explanation: 'Digit sum of 1 is 1 = target, so n is already beautiful.',
    },
  ],
  hints: [
    'Track the digit sum of n. If it already meets target, return 0.',
    'To reduce the digit sum, round up n to the next multiple of a power of 10.',
    'Repeatedly: find the rightmost non-zero digit of n (at position i), add enough to make it 0. Check if digit sum now meets target.',
  ],
  functionName: 'makeIntegerBeautiful',
  params: ['n', 'target'],
  starterCode: {
    javascript: `function makeIntegerBeautiful(n, target) {

}`,
    typescript: `function makeIntegerBeautiful(n: number, target: number): number {

}`,
    python: `def makeIntegerBeautiful(n, target):
    pass`,
  },
  visibleTests: [
    { args: [16, 6], expected: 4 },
    { args: [467, 6], expected: 33 },
    { args: [1, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 150], expected: 0 },
    { args: [19, 9], expected: 1 },
    { args: [100, 1], expected: 0 },
    { args: [200, 1], expected: 800 },
    { args: [999, 1], expected: 1 },
    { args: [999999999, 1], expected: 1 },
    { args: [999999999999, 1], expected: 1 },
    { args: [991, 1], expected: 9 },
  ],
};
