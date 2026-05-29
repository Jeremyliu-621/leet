import type { Problem } from '../types';

export const problem: Problem = {
  id: 'take-gifts-from-the-richest-pile',
  title: 'Take Gifts From the Richest Pile',
  difficulty: 'easy',
  tags: ['arrays', 'heap', 'simulation'],
  description: `You are given an integer array \`gifts\` denoting the number of gifts in various piles. Every second, you do the following:

- Choose the pile with the maximum number of gifts.
- If there is more than one pile with the maximum number of gifts, choose any.
- Leave behind the **floor of the square root** of the number of gifts in the chosen pile and take the rest.

Return the **number of gifts remaining** after \`k\` seconds.`,
  constraints: [
    '`1 <= gifts.length <= 10^3`',
    '`1 <= gifts[i] <= 10^9`',
    '`1 <= k <= 10^3`',
  ],
  examples: [
    {
      input: 'gifts = [25,64,9,4,100], k = 4',
      output: '29',
      explanation: 'After 4 seconds: 100→10, 64→8, 25→5, 10→3. Sum = 5+8+9+4+3 = 29.',
    },
    {
      input: 'gifts = [1,1,1,1], k = 4',
      output: '4',
      explanation: 'Max is 1, floor(sqrt(1))=1, so no change.',
    },
  ],
  hints: [
    'Use a max-heap to efficiently find and update the maximum pile.',
    'Each second: pop the max, push floor(sqrt(max)).',
    'After k seconds, sum all remaining values.',
  ],
  functionName: 'pickGifts',
  params: ['gifts', 'k'],
  starterCode: {
    javascript: `function pickGifts(gifts, k) {

}`,
    typescript: `function pickGifts(gifts: number[], k: number): number {

}`,
    python: `def pickGifts(gifts, k):
    pass`,
  },
  visibleTests: [
    { args: [[25, 64, 9, 4, 100], 4], expected: 29 },
    { args: [[1, 1, 1, 1], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[9], 1], expected: 3 },
    { args: [[4, 16], 2], expected: 6 },
    { args: [[100], 2], expected: 3 },
    { args: [[5, 4, 3], 3], expected: 5 },
  ],
};
