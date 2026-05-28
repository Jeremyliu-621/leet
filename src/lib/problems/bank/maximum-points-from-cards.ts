import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-points-from-cards',
  title: 'Maximum Points You Can Obtain from Cards',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array \`cardPoints\`.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly \`k\` cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array \`cardPoints\` and the integer \`k\`, return the **maximum score** you can obtain.`,
  constraints: [
    '1 <= cardPoints.length <= 10^5',
    '1 <= cardPoints[i] <= 10^4',
    '1 <= k <= cardPoints.length',
  ],
  examples: [
    { input: 'cardPoints = [1,2,3,4,5,6,1], k = 3', output: '12', explanation: 'Take the three cards from the right: 1 + 6 + 5 = 12.' },
    { input: 'cardPoints = [2,2,2], k = 2', output: '4' },
    { input: 'cardPoints = [9,7,7,9,7,7,9], k = 7', output: '55', explanation: 'Take all cards.' },
  ],
  hints: [
    'Taking k cards from the ends is equivalent to leaving a contiguous subarray of length n-k in the middle.',
    'The answer is total_sum minus the minimum sum of any subarray of length n-k.',
    'Use a sliding window of size n-k to find the minimum middle subarray sum.',
  ],
  functionName: 'maxScore',
  params: ['cardPoints', 'k'],
  starterCode: {
    javascript: 'function maxScore(cardPoints, k) {\n\n}\n',
    typescript: "function maxScore(cardPoints: number[], k: number): number {\n\n}",

    python: 'def maxScore(cardPoints, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 1], 3], expected: 12 },
    { args: [[2, 2, 2], 2], expected: 4 },
    { args: [[9, 7, 7, 9, 7, 7, 9], 7], expected: 55 },
  ],
  hiddenTests: [
    { args: [[100], 1], expected: 100 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 12 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
    { args: [[1, 79, 80, 1, 1, 1, 200, 1], 3], expected: 202 },
  ],
};
