import type { Problem } from '../types';

export const problem: Problem = {
  id: 'take-gifts-from-the-richest-pile',
  title: 'Take Gifts From the Richest Pile',
  difficulty: 'easy',
  tags: ['heap'],
  description: `You are given an integer array \`gifts\` denoting the number of gifts in various piles. Every second, you perform the following operation: choose the pile with the maximum number of gifts, and leave \`floor(sqrt(k))\` gifts behind (where \`k\` is the number of gifts in that pile).

After \`k\` seconds, return the **total number of gifts remaining**.`,
  constraints: [
    '1 <= gifts.length <= 10^3',
    '1 <= gifts[i] <= 10^9',
    '1 <= k <= 10^3',
  ],
  examples: [
    {
      input: 'gifts = [25,64,9,4,100], k = 4',
      output: '29',
      explanation: 'k=1: 100→10. k=2: 64→8. k=3: 25→5. k=4: 10→3. Remaining: [5,8,9,4,3]. Sum=29.',
    },
    {
      input: 'gifts = [1,1,1,1], k = 4',
      output: '4',
      explanation: 'floor(sqrt(1))=1, so every operation leaves 1. Total stays 4.',
    },
  ],
  hints: [
    'Use a max-heap (simulate with sorting or a priority queue).',
    'Each step: pop the max, push floor(sqrt(max)) back.',
    'After k steps, sum the heap.',
  ],
  functionName: 'pickGifts',
  params: ['gifts', 'k'],
  starterCode: {
    javascript: 'function pickGifts(gifts, k) {\n\n}\n',
    typescript: "function pickGifts(gifts: number[], k: number): number {\n\n}",

    python: 'def pickGifts(gifts, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[25,64,9,4,100], 4], expected: 29 },
    { args: [[1,1,1,1], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[5], 3], expected: 1 },
    { args: [[4,9], 2], expected: 5 },
    { args: [[100], 1], expected: 10 },
    { args: [[2,3,5,7], 2], expected: 9 },
  ],
};
