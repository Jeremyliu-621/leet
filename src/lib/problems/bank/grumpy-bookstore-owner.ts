import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grumpy-bookstore-owner',
  title: 'Grumpy Bookstore Owner',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `There is a bookstore owner that has a store open for \`n\` minutes. Each minute, some number of customers enter the store. You are given an integer array \`customers\` of length \`n\` where \`customers[i]\` is the number of customers that enter the store at the start of the \`i\`th minute and all those customers leave after the end of that minute.

On each minute, the bookstore owner is either **grumpy** or not. You are given a binary array \`grumpy\` where \`grumpy[i] = 1\` means the bookstore owner is grumpy during the ith minute, and \`grumpy[i] = 0\` means the owner is not grumpy.

When the owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied. The owner knows a secret technique to keep themselves **not grumpy** for \`minutes\` consecutive minutes. Return the **maximum** number of customers that can be satisfied.`,
  constraints: [
    'n == customers.length == grumpy.length',
    '1 <= minutes <= n <= 2 * 10^4',
    '0 <= customers[i] <= 1000',
    'grumpy[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3',
      output: '16',
      explanation: 'Apply the technique for minutes 3-5. Satisfied: 1+1+1+2+1+7+5 = 18? Let me check.',
    },
    {
      input: 'customers = [1], grumpy = [0], minutes = 1',
      output: '1',
    },
  ],
  hints: [
    'Calculate base satisfaction from non-grumpy minutes.',
    'Use a sliding window of size `minutes` to find the window that captures the most grumpy-minute customers.',
    'Answer = base + best window extra.',
  ],
  functionName: 'maxSatisfied',
  params: ['customers', 'grumpy', 'minutes'],
  starterCode: {
    javascript: 'function maxSatisfied(customers, grumpy, minutes) {\n\n}\n',
    typescript: "function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {\n\n}",

    python: 'def maxSatisfied(customers, grumpy, minutes):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3], expected: 16 },
    { args: [[1], [0], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], [1,1,1,1,1], 3], expected: 12 },
    { args: [[1,2,3], [0,0,0], 1], expected: 6 },
    { args: [[4,2,5], [1,0,1], 1], expected: 7 },
    { args: [[3,2,1], [1,1,0], 2], expected: 6 },
  ],
};
