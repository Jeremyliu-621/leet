import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-if-digit-game-can-be-won',
  title: 'Find if Digit Game Can Be Won',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array of positive integers \`nums\` where every element is between 1 and 99 inclusive.

Alice and Bob are playing a game. Alice picks either **all single-digit numbers** (1–9) or **all double-digit numbers** (10–99) from \`nums\`; Bob receives the rest. Alice wins if the sum of her numbers is **strictly greater** than the sum of Bob's numbers.

Return \`true\` if Alice can win, and \`false\` otherwise.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 99',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,10]',
      output: 'false',
      explanation: 'Single-digit sum = 10, double-digit sum = 10. Either choice gives a tie, not a strict win.',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
      explanation: 'All numbers are single-digit (sum = 6). Bob gets nothing (sum = 0). 6 > 0.',
    },
    {
      input: 'nums = [10,20,30]',
      output: 'true',
      explanation: 'All numbers are double-digit (sum = 60). Bob gets nothing (sum = 0). 60 > 0.',
    },
  ],
  hints: [
    'Compute S = sum of all single-digit elements, D = sum of all double-digit elements.',
    'Alice can win by picking singles if S > D, or by picking doubles if D > S.',
    'Alice wins if and only if S ≠ D.',
  ],
  functionName: 'canAliceWin',
  params: ['nums'],
  starterCode: {
    javascript: `function canAliceWin(nums) {

}`,
    python: `def canAliceWin(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 10]], expected: false },
    { args: [[1, 2, 3]], expected: true },
    { args: [[10, 20, 30]], expected: true },
  ],
  hiddenTests: [
    { args: [[5]], expected: true },
    { args: [[15]], expected: true },
    { args: [[1, 10]], expected: true },
    { args: [[12, 3, 9]], expected: false },
    { args: [[9, 9, 9, 10]], expected: true },
    { args: [[99, 1]], expected: true },
  ],
};
