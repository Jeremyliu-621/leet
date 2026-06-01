import type { Problem } from '../types';

export const problem: Problem = {
  id: 'take-gifts-from-richest-pile',
  title: 'Take Gifts From the Richest Pile',
  difficulty: 'easy',
  tags: ['arrays', 'heap'],
  description: `You are given an integer array \`gifts\` where \`gifts[i]\` is the number of gifts in the \`i\`-th pile. Every second, you do the following:
- Choose the pile with the **maximum** number of gifts. If there is more than one pile with the maximum, choose any.
- Leave behind the **floor of the square root** of that pile and take the rest.

Return the **number of gifts remaining** after \`k\` seconds.`,
  constraints: [
    '1 <= gifts.length <= 10^3',
    '1 <= gifts[i] <= 10^9',
    '1 <= k <= 10^3',
  ],
  examples: [
    {
      input: 'gifts = [25,64,9,4,100], k = 4',
      output: '29',
      explanation:
        'Operations: 100→10, 64→8, 25→5, 10→3. Remaining piles: [5,8,9,4,3]. Sum = 29.',
    },
    {
      input: 'gifts = [1,1,1,1], k = 4',
      output: '4',
      explanation:
        'Every pile has 1 gift; sqrt(1)=1 so nothing changes each step. Remaining = 4.',
    },
    {
      input: 'gifts = [9,4,1], k = 2',
      output: '6',
      explanation:
        'Step 1: 9→3. Piles: [3,4,1]. Step 2: 4→2. Piles: [3,2,1]. Sum = 6.',
    },
  ],
  hints: [
    'Level 1: Use a max-heap (priority queue). Each step: extract max, compute floor(sqrt), push back the result.',
    'Level 2: JavaScript/Python do not have built-in max-heaps. You can simulate by sorting the array each step (O(n log n) per step, acceptable for small n), or negate values for a min-heap.',
    'Level 3: After k steps, sum the heap. Note that once all values reach 1 (or close to it), subsequent steps make no difference — you can early-exit.',
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
    { args: [[9, 4, 1], 2], expected: 6 },
  ],
  hiddenTests: [
    { args: [[100], 3], expected: 1 },
    { args: [[1], 5], expected: 1 },
    { args: [[4, 9], 1], expected: 7 },
    { args: [[25], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5], expected: 21 },
    { args: [[4], 4], expected: 1 },
    { args: [[9, 4, 1], 5], expected: 3 },
    { args: [[36, 49, 64], 3], expected: 21 },
  ],
};
