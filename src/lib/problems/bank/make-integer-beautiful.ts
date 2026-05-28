import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-integer-beautiful',
  title: 'Make Integer Beautiful',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given two positive integers \`n\` and \`target\`.

In one operation, you can choose any digit of \`n\` and increase it by \`1\`. If increasing a digit causes it to become \`10\`, the digit becomes \`0\` and you carry \`1\` to the next more significant digit (just like addition).

Return the **minimum number of operations** to make the digit sum of \`n\` less than or equal to \`target\`.`,
  constraints: [
    '1 <= n <= 10^12',
    '1 <= target <= 150',
    'The initial digit sum of n is greater than target.',
  ],
  examples: [
    {
      input: 'n = 16, target = 6',
      output: '4',
      explanation: 'Initially digit sum = 7. Add 4 to units digit: 16 → 20. Digit sum = 2 ≤ 6. Cost = 4.',
    },
    {
      input: 'n = 467, target = 6',
      output: '33',
      explanation: 'Add 3 to units: 467 → 470 (cost 3, digit sum 11). Add 30 to tens: 470 → 500 (cost 30, digit sum 5). Total = 33.',
    },
    {
      input: 'n = 1, target = 1',
      output: '0',
      explanation: 'Digit sum is already 1 ≤ 1.',
    },
  ],
  hints: [
    'Greedy approach: round up to the next multiple of 10, 100, 1000, etc., until digit sum ≤ target.',
    'At each step, rounding to the next multiple of 10^k costs (10^k - n % 10^k) operations.',
    'After rounding, the last k digits become 0, reducing the digit sum significantly.',
  ],
  functionName: 'makeIntegerBeautiful',
  params: ['n', 'target'],
  starterCode: {
    javascript: 'function makeIntegerBeautiful(n, target) {\n  \n}\n',
    python: 'def makeIntegerBeautiful(n, target):\n    pass\n',
  },
  visibleTests: [
    { args: [16, 6], expected: 4 },
    { args: [467, 6], expected: 33 },
    { args: [1, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [10, 1], expected: 0 },
    { args: [19, 1], expected: 81 },
    { args: [999, 1], expected: 1 },
    { args: [100, 1], expected: 0 },
    { args: [999999999999, 1], expected: 1 },
  ],
};
