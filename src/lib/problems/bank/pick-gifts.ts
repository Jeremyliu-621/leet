import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pick-gifts',
  title: 'Pick Gifts',
  difficulty: 'easy',
  tags: ['arrays', 'heap', 'math'],
  description: `You are given an integer array \`gifts\` denoting the number of gifts in various piles. Every second, you do the following:

- Choose the pile with the **maximum** number of gifts.
- If there is more than one pile with the maximum, choose any.
- Leave behind the **floor** of the square root of the number of gifts and take the rest.

Return the number of gifts remaining after \`k\` seconds.`,
  constraints: [
    '1 <= k <= 10^3',
    '1 <= gifts.length <= 10^3',
    '1 <= gifts[i] <= 10^9',
  ],
  examples: [
    {
      input: 'gifts = [25,64,9,4,100], k = 4',
      output: '29',
      explanation: 'After 4 rounds: 100→10, 64→8, 25→5, 10→3. Remaining: 3+8+9+4+5=29.',
    },
    {
      input: 'gifts = [1,1,1,1], k = 4',
      output: '4',
      explanation: 'Max is 1, floor(sqrt(1)) = 1. Nothing changes.',
    },
  ],
  hints: [
    'Use a max-heap. Each second, extract the max, replace it with floor(sqrt(max)), then re-insert.',
    'Repeat k times and return the sum of all elements.',
    'For small inputs (length <= 1000), sorting each iteration is also acceptable.',
  ],
  functionName: 'pickGifts',
  params: ['gifts', 'k'],
  starterCode: {
    javascript: `function pickGifts(gifts, k) {

}`,
    python: `def pickGifts(gifts, k):
    pass`,
  },
  visibleTests: [
    { args: [[25, 64, 9, 4, 100], 4], expected: 29 },
    { args: [[1, 1, 1, 1], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[4], 1], expected: 2 },
    { args: [[9, 16], 2], expected: 7 },
    { args: [[100], 3], expected: 1 },
    { args: [[2, 3, 4], 1], expected: 7 },
  ],
};
