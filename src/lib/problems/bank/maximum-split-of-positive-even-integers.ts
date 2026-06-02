import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-split-of-positive-even-integers',
  title: 'Maximum Split of Positive Even Integers',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer \`finalSum\`. Split it into a maximum number of **unique** positive even integers.

- Each component must be **positive** and **even**.
- All components must be **distinct** (no repeated values).
- Their sum must equal \`finalSum\`.

Return a list of integers that represent a valid split with the **maximum** number of components. If no valid split exists, return an empty list. The test cases guarantee the answer is unique.`,
  constraints: [
    '1 <= finalSum <= 10^10',
  ],
  examples: [
    {
      input: 'finalSum = 12',
      output: '[2,4,6]',
      explanation: '2 + 4 + 6 = 12. Three distinct even numbers — the maximum possible.',
    },
    {
      input: 'finalSum = 7',
      output: '[]',
      explanation: 'No combination of positive even integers sums to 7 (odd).',
    },
    {
      input: 'finalSum = 28',
      output: '[2,4,6,16]',
      explanation: '2 + 4 + 6 + 16 = 28. All four are distinct and even. Maximum length is 4.',
    },
  ],
  hints: [
    'Level 1: If finalSum is odd, return [] immediately. The sum of even numbers is always even.',
    'Level 2: Greedily include the smallest even numbers: 2, 4, 6, 8, ... as long as the remaining sum is still >= the next even number you\'d need.',
    'Level 3: When you can\'t add the next even number (say 2k) without exceeding finalSum, add the remaining balance to the *last* number you included. Since the balance < 2k and the last number is 2(k-1), the new last value is 2(k-1)+balance which is still even and larger than all previous values — so distinctness is preserved.',
  ],
  functionName: 'maximumEvenSplit',
  params: ['finalSum'],
  starterCode: {
    javascript: `function maximumEvenSplit(finalSum) {

}`,
    typescript: `function maximumEvenSplit(finalSum: number): number[] {

}`,
    python: `def maximumEvenSplit(finalSum):
    pass`,
  },
  visibleTests: [
    { args: [12], expected: [2, 4, 6] },
    { args: [7], expected: [] },
    { args: [28], expected: [2, 4, 6, 16] },
  ],
  hiddenTests: [
    { args: [2], expected: [2] },
    { args: [4], expected: [4] },
    { args: [6], expected: [2, 4] },
    { args: [8], expected: [2, 6] },
    { args: [10], expected: [2, 8] },
    { args: [24], expected: [2, 4, 6, 12] },
    { args: [1], expected: [] },
    { args: [100], expected: [2, 4, 6, 8, 10, 12, 14, 16, 28] },
  ],
};
