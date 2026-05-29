import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-score-numbers-in-ranges',
  title: 'Maximize Score of Numbers in Ranges',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an array of integers \`start\` and an integer \`d\`, representing \`n\` intervals \`[start[i], start[i] + d]\`.

You are required to choose **exactly one integer** from each interval. The **score** of the chosen integers is defined as the **minimum absolute difference** between any two chosen integers.

Return the **maximum** possible score.`,
  constraints: [
    '`2 <= start.length <= 10^5`',
    '`0 <= start[i] <= 10^9`',
    '`0 <= d <= 10^9`',
  ],
  examples: [
    {
      input: 'start = [6,0,3], d = 2',
      output: '4',
      explanation: 'Sort start: [0,3,6]. Pick 0 from [0,2], 4 from [3,5], 8 from [6,8]. Minimum difference is 4.',
    },
    {
      input: 'start = [2,6,13,13], d = 5',
      output: '5',
      explanation: 'Sort start: [2,6,13,13]. Pick 2 from [2,7], 7 from [6,11], 13 from [13,18], 18 from [13,18]. Min diff is 5.',
    },
  ],
  hints: [
    'Binary search on the answer (the minimum difference).',
    'To check if a minimum difference of `mid` is achievable, sort the intervals and greedily assign the smallest valid value to each interval.',
    'For each interval (in sorted order), pick the smallest value ≥ max(start[i], prev + mid).',
    'If at any interval this smallest valid value exceeds start[i] + d, the answer is not achievable.',
  ],
  functionName: 'maxScore',
  params: ['start', 'd'],
  starterCode: {
    javascript: `function maxScore(start, d) {

}`,
    typescript: `function maxScore(start: number[], d: number): number {

}`,
    python: `def maxScore(start, d):
    pass`,
  },
  visibleTests: [
    { args: [[6, 0, 3], 2], expected: 4 },
    { args: [[2, 6, 13, 13], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0, 100], 50], expected: 150 },
    { args: [[0, 0], 0], expected: 0 },
    { args: [[1, 2, 3], 0], expected: 1 },
    { args: [[0, 5, 10], 3], expected: 6 },
    { args: [[1000000000, 0], 1000000000], expected: 2000000000 },
  ],
};
