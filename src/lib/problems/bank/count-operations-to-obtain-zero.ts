import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-operations-to-obtain-zero',
  title: 'Count Operations to Obtain Zero',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two non-negative integers \`num1\` and \`num2\`, perform the following operation repeatedly until one of them equals 0:

- If \`num1 >= num2\`, set \`num1 = num1 - num2\`.
- Otherwise, set \`num2 = num2 - num1\`.

Return *the number of operations performed* until either \`num1\` or \`num2\` becomes 0.`,
  constraints: [
    '0 <= num1, num2 <= 10^5',
  ],
  examples: [
    {
      input: 'num1 = 2, num2 = 3',
      output: '3',
      explanation: 'Step 1: num1 = 2, num2 = 3 → num1 < num2, so num2 = 3 - 2 = 1. Step 2: num1 = 2, num2 = 1 → num1 >= num2, so num1 = 2 - 1 = 1. Step 3: num1 = 1, num2 = 1 → num1 >= num2, so num1 = 1 - 1 = 0. 3 operations total.',
    },
    {
      input: 'num1 = 10, num2 = 10',
      output: '1',
      explanation: 'Step 1: num1 = 10, num2 = 10 → num1 >= num2, so num1 = 10 - 10 = 0. 1 operation total.',
    },
  ],
  hints: [
    'Simulate the subtraction process step by step.',
    'Use the condition: subtract the smaller from the larger until one reaches 0.',
    'Count each subtraction as one operation.',
  ],
  functionName: 'countOperations',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: `function countOperations(num1, num2) {
  let ops = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    ops++;
  }
  return ops;
}`,
    typescript: `function countOperations(num1: number, num2: number): number {
  let ops = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    ops++;
  }
  return ops;
}`,
    python: `def countOperations(num1: int, num2: int) -> int:
    ops = 0
    while num1 != 0 and num2 != 0:
        if num1 >= num2:
            num1 -= num2
        else:
            num2 -= num1
        ops += 1
    return ops`,
  },
  visibleTests: [
    { args: [2, 3], expected: 3 },
    { args: [10, 10], expected: 1 },
  ],
  hiddenTests: [
    { args: [0, 5], expected: 0 },
    { args: [1, 1], expected: 1 },
    { args: [3, 7], expected: 5 },
    { args: [100, 23], expected: 14 },
    { args: [2, 4], expected: 2 },
  ],
};
