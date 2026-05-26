import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-points-you-can-obtain-from-cards',
  title: 'Maximum Points You Can Obtain from Cards',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `There are several cards arranged in a row. The point values are given in the integer array \`cardPoints\`.

In one step, you can take one card from the beginning or from the end of the row. You take exactly \`k\` cards.

Return the **maximum** score you can obtain.`,
  constraints: [
    '1 <= cardPoints.length <= 10^5',
    '1 <= cardPoints[i] <= 10^4',
    '1 <= k <= cardPoints.length',
  ],
  examples: [
    {
      input: 'cardPoints = [1,2,3,4,5,6,1], k = 3',
      output: '12',
      explanation: 'Take the three cards on the right: 6+5+1 = 12.',
    },
    {
      input: 'cardPoints = [2,2,2], k = 2',
      output: '4',
      explanation: 'Take any two cards; all combinations give 4.',
    },
    {
      input: 'cardPoints = [9,7,7,9,7,7,9], k = 7',
      output: '55',
      explanation: 'Take all cards.',
    },
  ],
  hints: [
    'Taking k cards from the ends leaves a contiguous subarray of n-k cards in the middle untouched.',
    'Minimize the sum of the middle window of size n-k, then total_sum - min_window is your answer.',
    'Use a sliding window of size n-k to find the minimum subarray sum.',
  ],
  functionName: 'maxScore',
  params: ['cardPoints', 'k'],
  starterCode: {
    javascript: `function maxScore(cardPoints, k) {

}`,
    python: `def maxScore(cardPoints, k):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 1], 3], expected: 12 },
    { args: [[2, 2, 2], 2], expected: 4 },
    { args: [[9, 7, 7, 9, 7, 7, 9], 7], expected: 55 },
  ],
  hiddenTests: [
    { args: [[1, 79, 80, 1, 1, 1, 200, 1], 3], expected: 202 },
    { args: [[100, 40, 17, 9, 73, 75], 3], expected: 248 },
    { args: [[1], 1], expected: 1 },
    { args: [[5, 3, 1], 1], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
  ],
};
