import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-integers-to-choose-from-a-range-i',
  title: 'Maximum Number of Integers to Choose From a Range I',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`banned\`, two integers \`n\` and \`maxSum\`. You are choosing some number of integers following the below rules:

- The chosen integers must be in the **inclusive** range \`[1, n]\`.
- Each integer can be chosen **at most once**.
- The chosen integers should **not** be in the array \`banned\`.
- The sum of the chosen integers should **not** exceed \`maxSum\`.

Return the **maximum** number of integers you can choose following the mentioned rules.`,
  constraints: [
    '1 <= banned.length <= 10^4',
    '1 <= banned[i] <= 10^4',
    '1 <= n <= 10^4',
    '1 <= maxSum <= 10^9',
  ],
  examples: [
    {
      input: 'banned = [1,6,5], n = 5, maxSum = 6',
      output: '2',
      explanation: 'You can choose 2 and 4. Sum = 6 ≤ maxSum.',
    },
    {
      input: 'banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1',
      output: '0',
      explanation: 'The only valid choice (8) exceeds maxSum.',
    },
    {
      input: 'banned = [11], n = 7, maxSum = 50',
      output: '7',
      explanation: 'Choose all integers 1–7. Sum = 28 ≤ 50.',
    },
  ],
  hints: [
    'Convert `banned` to a Set for O(1) lookups. Iterate integers from 1 to n in ascending order.',
    'Skip any integer in the banned set. For valid integers, greedily add them while the running sum stays ≤ maxSum.',
    'Adding in ascending order is always optimal — smaller numbers let you pick more integers total.',
  ],
  functionName: 'maxCount',
  params: ['banned', 'n', 'maxSum'],
  starterCode: {
    javascript: 'function maxCount(banned, n, maxSum) {\n  \n}\n',
    typescript: 'function maxCount(banned: number[], n: number, maxSum: number): number {\n  \n}\n',
    python: 'def maxCount(banned, n, maxSum):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 6, 5], 5, 6], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7], 8, 1], expected: 0 },
    { args: [[11], 7, 50], expected: 7 },
  ],
  hiddenTests: [
    { args: [[], 5, 15], expected: 5 },
    { args: [[1], 1, 1], expected: 0 },
    { args: [[2], 10, 1], expected: 1 },
    { args: [[5], 10, 55], expected: 9 },
    { args: [[1, 3, 5, 7, 9], 10, 30], expected: 5 },
    { args: [[1, 2], 3, 3], expected: 1 },
  ],
};
