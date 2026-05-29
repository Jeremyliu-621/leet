import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-points-you-can-obtain-from-cards',
  title: 'Maximum Points You Can Obtain from Cards',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `There are several cards **arranged in a row**, and each card has an associated number of points. The points are given in the integer array \`cardPoints\`.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly \`k\` cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array \`cardPoints\` and the integer \`k\`, return the **maximum** score you can obtain.`,
  constraints: [
    '1 <= cardPoints.length <= 10^5',
    '1 <= cardPoints[i] <= 10^4',
    '1 <= k <= cardPoints.length',
  ],
  examples: [
    {
      input: 'cardPoints = [1,2,3,4,5,6,1], k = 3',
      output: '12',
      explanation:
        'Optimal: take 1 (left), 6, 5 from the right. Sum = 1 + 5 + 6 = 12.',
    },
    {
      input: 'cardPoints = [2,2,2], k = 2',
      output: '4',
      explanation: 'Take any two cards; all combinations give sum 4.',
    },
    {
      input: 'cardPoints = [9,7,7,9,7,7,9], k = 7',
      output: '55',
      explanation: 'Take all 7 cards for the maximum score.',
    },
  ],
  hints: [
    'Taking k cards from ends is equivalent to leaving a contiguous subarray of n-k cards in the middle.',
    'Minimize the sum of the middle subarray of length n-k using a sliding window.',
    'Answer = total_sum - min_middle_sum.',
  ],
  functionName: 'maxScore',
  params: ['cardPoints', 'k'],
  starterCode: {
    javascript: `function maxScore(cardPoints, k) {

}`,
    typescript: `function maxScore(cardPoints: number[], k: number): number {

}`,
    python: `def maxScore(cardPoints, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 1], 3], expected: 12 },
    { args: [[2, 2, 2], 2], expected: 4 },
    { args: [[9, 7, 7, 9, 7, 7, 9], 7], expected: 55 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 79, 80, 1, 1, 1, 200, 1], 3], expected: 202 },
    { args: [[100, 40, 17, 9, 73, 75], 3], expected: 248 },
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[5, 5, 5, 5], 4], expected: 20 },
    { args: [[1, 1000, 1], 2], expected: 1001 },
  ],
};
